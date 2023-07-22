import { Relation_ADDRESSSES, OMINT_ADDRESSSES, ONFT_ADDRESSSES, OmniSwapRouter_ADDRESSSES, OmniStakePool_ADDRESSSES, OMNI_ADDRESSSES, USDT_ADDRESSSES, OMNINFTPOOL_ADDRESSSES } from './../constants/addresses';
import {
    useDynamic721Contract,
    useONFTContract,
    useOMINTContract,
    useOMNIRelationontract,
    useOmniSwapRouterContract,
    useOmniStakePoolContract,
    useTokenContract,
    useOmniNFTPoolContract,
} from './../hooks/useContract';
import {useMutation, useQuery} from 'react-query';
import {useCallback, useContext, useEffect, useState} from 'react'
import {
    ApprovalState,
    bigNumberToBalance,
    config,
    formatBalance,
    GasInfo,
    ERC20_ABI,
    formatPercent,
    balanceToBigNumber
} from '../common/Common'
import {BigNumber, ethers} from 'ethers'
import {MaxUint256} from '@ethersproject/constants'
import {TransactionResponse} from '@ethersproject/providers'
import {
    useDynamicTokenContract,
} from "../hooks/useContract";
import {LoadingContext, LoadingType, useLoadingContext} from "../provider/loadingProvider";
import {
    AddressMap
} from "../constants/addresses";
import {useContractAllowance} from "../hooks/useContractAllowance";
import {useNetwork, useAccount, useProvider, chainId} from 'wagmi'
import {} from '../hooks/useContract'
import WalletTokens from "../constants/walletTokens";
import dayjs from 'dayjs';
import { NetworkId } from '../networkDetails';

// 授权方法
export function useApprove(tokenAddressMap: AddressMap, spenderAddressMap: AddressMap,cost?:string): [ApprovalState, () => Promise<void>] {
    const loading = useContext(LoadingContext)
    const {address} = useAccount()
    const {chain = {id: 1}} = useNetwork()
    const token = useDynamicTokenContract(tokenAddressMap, true);
    const {data: allowance} = useContractAllowance(tokenAddressMap, spenderAddressMap);
    const costBigNumber = balanceToBigNumber(cost || '1')

    const [approvalState, setApproveState] = useState(ApprovalState.UNKNOWN);
    useEffect(() => {
        if (!allowance) {
            setApproveState(ApprovalState.UNKNOWN);
        } else if (allowance.eq(BigNumber.from(0)) || allowance?.lt(costBigNumber)) {
            // console.log(currentAllowance,MaxUint256,"授权额度小了")
            setApproveState(ApprovalState.NOT_APPROVED);
        } else {
            // console.log(currentAllowance,"currentAllowance")
            setApproveState(ApprovalState.APPROVED);
        }
    }, [allowance])
    const approve = useCallback(async (): Promise<void> => {
        const contractAddress = spenderAddressMap[chain.id as keyof typeof spenderAddressMap];
        if (approvalState !== ApprovalState.NOT_APPROVED) {
            console.error('approve was called unnecessarily');
            return;
        }
        if (!token) {
            console.error("Token doesn't exist on current network. Please switch networks.")
            return
        }
        if (!contractAddress) {
            console.error("Contract doesn't exist on current network. Please switch networks.")
            return
        }
        setApproveState(ApprovalState.PENDING);
        loading.show(LoadingType.confirm, "Approve")
        token.approve(contractAddress, MaxUint256)
            .then(async (response: TransactionResponse) => {
                loading.show(LoadingType.pending, response.hash)
                await response.wait();
                loading.show(LoadingType.success, response.hash)
                setApproveState(ApprovalState.APPROVED);
            })
            .catch((err: any) => {
                setApproveState(ApprovalState.NOT_APPROVED);
                loading.show(LoadingType.error, err.data?.message || err.reason || err.message)
            })
    }, [approvalState, tokenAddressMap, spenderAddressMap, cost]);
    // console.log(approvalState,tokenAddress,spender,currentAllowance.toString(),MaxUint256.toString())
    return [approvalState, approve];
}

// 授权方法  授权所有的NFT
export function useApprovalForAll(tokenAddress: AddressMap, spender: string): [ApprovalState, () => Promise<void>] {
    const loading = useContext(LoadingContext)
    const tokenContract = useDynamic721Contract(tokenAddress);
    const currentAllowance = useNFTAllowance(tokenAddress, spender)

    const [approvalState, setApproveState] = useState(ApprovalState.UNKNOWN);

    useEffect(() => {
        if (!currentAllowance) {
            setApproveState(ApprovalState.NOT_APPROVED);
        } else {
            setApproveState(ApprovalState.APPROVED);
        }
    }, [currentAllowance])
    const approve = useCallback(async (): Promise<void> => {

        if (approvalState !== ApprovalState.NOT_APPROVED) {
            console.error('approve was called unnecessarily');
            return;
        }
        setApproveState(ApprovalState.PENDING);
        loading.show(LoadingType.confirm, "Approve")
        tokenContract?.setApprovalForAll(spender, true)
            .then(async (response: TransactionResponse) => {

                loading.show(LoadingType.pending, response.hash)
                await response.wait();
                loading.show(LoadingType.success, response.hash)
                setApproveState(ApprovalState.APPROVED);
            })
            .catch((err: any) => {
                setApproveState(ApprovalState.NOT_APPROVED);

                loading.show(LoadingType.error, err.data?.message || err.reason || err.message)
            })
    }, [approvalState, tokenContract, spender]);

    return [approvalState, approve];
}

// 查询授权额度
const useNFTAllowance = (tokenAddress: AddressMap, spender: string) => {
    const [allowance, setAllowance] = useState(false);
    const token = useDynamic721Contract(tokenAddress);
    const {address: account} = useAccount()
    const {chain = {id: 1}} = useNetwork()

    const getResult = () => {
        if (!account || !token || !spender) {
            return;
        }
        token?.isApprovedForAll(account, spender)
            .then((res: boolean) => {
                setAllowance(res);
            })
    }

    useEffect(() => {
        getResult();
    }, [account, spender, token]);

    return allowance;
};

// 授权方法
export function useNftApprove(nftId: number | string, nftContractAddress: AddressMap): [ApprovalState, () => Promise<void>] {
    const loading = useContext(LoadingContext)
    const {address} = useAccount()
    const {chain = {id: 1}} = useNetwork()

    const {data: isApprove} = useNftIsApprove(nftId, address || "", nftContractAddress);
    console.log(isApprove, "isApprove");

    const [approvalState, setApproveState] = useState(ApprovalState.UNKNOWN);
    const nftContract = useONFTContract(nftContractAddress)
    useEffect(() => {
        if (!isApprove) {
            setApproveState(ApprovalState.NOT_APPROVED);
        } else {
            // console.log(currentAllowance,"currentAllowance")
            setApproveState(ApprovalState.APPROVED);
        }
    }, [isApprove])
    const approve = useCallback(async (): Promise<void> => {

        if (approvalState !== ApprovalState.NOT_APPROVED) {
            console.error('approve was called unnecessarily');
            return;
        }
        if (!nftContract) {
            console.error("Contract doesn't exist on current network. Please switch networks.")
            return
        }
        setApproveState(ApprovalState.PENDING);
        loading.show(LoadingType.confirm, "Approve")
        //@ts-ignore
        nftContract.approve(address, BigNumber.from(nftId))
            .then(async (response: TransactionResponse) => {
                loading.show(LoadingType.pending, response.hash)
                await response.wait();
                loading.show(LoadingType.success, response.hash)
                setApproveState(ApprovalState.APPROVED);
            })
            .catch((err: any) => {
                setApproveState(ApprovalState.NOT_APPROVED);
                loading.show(LoadingType.error, err.data?.message || err.message)
            })
    }, [approvalState, nftId, address]);
    // console.log(approvalState,tokenAddress,spender,currentAllowance.toString(),MaxUint256.toString())
    return [approvalState, approve];
}

export function useNftIsApprove(nftId: string | number, spenderAddress: string, nftContractAddress: AddressMap) {
    const contract = useONFTContract(nftContractAddress);
    const {address = "", isConnected} = useAccount();
    const {chain = {id: 1}} = useNetwork();

    async function fetchData() {
        if (!address || !spenderAddress || !chainId) {
            return
        }
        const approveAddr = await contract?.getApproved(BigNumber.from(nftId))
        return approveAddr?.toUpperCase() === spenderAddress.toUpperCase()
    }

    return useQuery(["useNftIsApprove" + nftId + spenderAddress], fetchData, {
        // enabled:!!networkId && !!address && !!MRelationContract && !!MRelationContract.signer ,
        refetchInterval: config.refreshInterval,
    })

};

interface Transaction {
    title: string,
    func: Function,
    args: any[],
    gasLimit?: boolean,
    onSuccess?: Function,
    onError?: Function,
}

export function useSendTransaction() {
    const loading = useLoadingContext()

    function sendTransaction(params: Transaction) {
        return new Promise(() => {
            loading.show(LoadingType.confirm, params.title)
            params.func(...params.args, params.gasLimit == true ? GasInfo : {})
                .then(async (response: TransactionResponse) => {
                    loading.show(LoadingType.pending, response.hash)
                    await response.wait();
                    loading.show(LoadingType.success, response.hash)
                    params.onSuccess && params.onSuccess()
                })
                .catch((err: any) => {
                    console.log(err)
                    loading.show(LoadingType.error, err.reason || err.message, err.transactionHash)
                    params.onError && params.onError()
                })
        })
    }

    return useMutation((params: Transaction) => sendTransaction(params))
}


export function useInviteInfo() {

    const {address} = useAccount()
    const {chain} = useNetwork()
    const networkId = chain?.id

    const intoRelationContract = useOMNIRelationontract(Relation_ADDRESSSES)

    async function fetchData() {

        if (!address || !intoRelationContract) {
            return
        }

        // 我的推荐人ID
        const inviter = await intoRelationContract.Inviter(address)
        console.log('inviter===',inviter)
        return {
            inviter,
        }
    }

    return useQuery(["useInviteInfo"], fetchData, {
        // enabled:!!networkId && !!address && !!MRelationContract && !!MRelationContract.signer ,
        refetchInterval: config.longRefreshInterval,
    })
}

export function useNfInfo(id:number,index:number) {

  const {address} = useAccount()
  const {chain} = useNetwork()
  const networkId = chain?.id

  const OMINTContract = useOMINTContract(OMINT_ADDRESSSES)
  const ONFTContract = useONFTContract(ONFT_ADDRESSSES)

  async function fetchData() {

      if (!address || !OMINTContract || !ONFTContract) {
          return
      }
      const price = await OMINTContract.price(id)
      const amountForType = await OMINTContract.amountForType(id)
      const totalSupplyType = await ONFTContract.totalSupplyOfType(id)
      const leftAmount = Number(amountForType.toString()) - Number(totalSupplyType.toString())
      const has1 = await ONFTContract.balanceOf(address)
      const has1Number = Number(has1.toString())
      let has = true
      if (has1Number == 0){
        has = false
      }


      return {
        price:bigNumberToBalance(price),
        amount:leftAmount,
        has
      }
  }

  return useQuery(["useNfInfo"+id+index], fetchData, {
      // enabled:!!networkId && !!address && !!MRelationContract && !!MRelationContract.signer ,
      refetchInterval: config.refreshInterval,
  })
}


export function useMyNftListInfo() {

    const {address} = useAccount()
    // const address = '0x1fabba9dffb82673f70db78359c04fd655d31c1e'
    const {chain} = useNetwork()
    const networkId = chain?.id

    const ONFTContract = useONFTContract(ONFT_ADDRESSSES)

    async function fetchData() {

        if (!address || !ONFTContract) {
            return
        }

        console.log('useMyNftListInfo')
        const account = await ONFTContract.balanceOf(address)
        console.log('account',Number(account.toString()))
        const total = Number(account.toString())

        let list:any[] = []
        for (let index = 0; index < total; index++) {
          list.push(index)
        }

        return {
          list
        }
    }

    return useQuery(["useMyNftListInfo"], fetchData, {
        // enabled:!!networkId && !!address && !!MRelationContract && !!MRelationContract.signer ,
        refetchInterval: config.refreshInterval,
    })
}


export function useMyNftInfo(index:number) {

  const {address} = useAccount()
  // const address = '0x1fabba9dffb82673f70db78359c04fd655d31c1e'
  const {chain} = useNetwork()
  const networkId = chain?.id

  const ONFTContract = useONFTContract(ONFT_ADDRESSSES)
  const OmniNFTPoolContract = useOmniNFTPoolContract(OMNINFTPOOL_ADDRESSSES)

  async function fetchData() {

      if (!address || !ONFTContract || !OmniNFTPoolContract) {
          return
      }


      // 0-647
      const tokenOfOwnerByIndex = await ONFTContract.tokenOfOwnerByIndex(address,index)

      const getType = await ONFTContract.getType(tokenOfOwnerByIndex)


      const viewReward = await OmniNFTPoolContract.viewReward(tokenOfOwnerByIndex)
      const claimedReward = await OmniNFTPoolContract.claimedReward(tokenOfOwnerByIndex)

      const activeStats = await OmniNFTPoolContract.activeStats(tokenOfOwnerByIndex)

      

      let showID = Number(getType.toString())
      let nftPrice = 100
      let nftImg = 'NFT_1'

      if (showID == 1){
        nftPrice = 100
        nftImg = 'NFT_1'
      }
      if (showID == 2){
        nftPrice = 500
        nftImg = 'NFT_2'
      }
      if (showID == 3){
        nftPrice = 1000
        nftImg = 'NFT_3'
      }
      if (showID == 4){
        nftPrice = 5000
        nftImg = 'NFT_4'
      }
      if (showID == 5){
        nftPrice = 10000
        nftImg = 'NFT_5'
      }
      if (showID == 6){
        nftPrice = 50000
        nftImg = 'NFT_6'
      }
      if (showID == 7){
        nftPrice = 100000
        nftImg = 'NFT_7'
      }

      return {
        nftPrice,
        nftImg,
        tokenOfOwnerByIndex:tokenOfOwnerByIndex.toString(),
        viewReward:Number(formatBalance(bigNumberToBalance(viewReward))),
        claimedReward:Number(formatBalance(bigNumberToBalance(claimedReward))),
        activeStats
      }
  }

  return useQuery(["useMyNftInfo" + index + address], fetchData, {
      // enabled:!!networkId && !!address && !!MRelationContract && !!MRelationContract.signer ,
      refetchInterval: config.longRefreshInterval,
  })
}


export function usePauseStats() {

  const {address} = useAccount()
  const {chain} = useNetwork()
  const networkId = chain?.id

  const nftContract = useOMINTContract(OMINT_ADDRESSSES)

  async function fetchData() {

      if (!address || !nftContract) {
          return
      }

      const pause1Stats = await nftContract.mintPause(1)
      const pause2Stats = await nftContract.mintPause(2)
      const pause3Stats = await nftContract.mintPause(3)
      const pause4Stats = await nftContract.mintPause(4)
      const pause5Stats = await nftContract.mintPause(5)
      const pause6Stats = await nftContract.mintPause(6)
      const pause7Stats = await nftContract.mintPause(7)

      return {
        pause1Stats,
        pause2Stats,
        pause3Stats,
        pause4Stats,
        pause5Stats,
        pause6Stats,
        pause7Stats
      }
  }

  return useQuery(["usePauseStats"], fetchData, {
      // enabled:!!networkId && !!address && !!MRelationContract && !!MRelationContract.signer ,
      refetchInterval: config.refreshInterval,
  })
}




export function useNFTOpenStatus(typeID:string,index:number) {

  const {address} = useAccount()
  const {chain} = useNetwork()
  const networkId = chain?.id

  const OMINTContract = useOMINTContract(OMINT_ADDRESSSES)
  const ONFTContract = useONFTContract(ONFT_ADDRESSSES)

  async function fetchData() {

      if (!address || !OMINTContract || !ONFTContract) {
          return
      }
      let open = false
      const pauseStats = await OMINTContract.mintPause(typeID)
      if (!pauseStats){
        const amountForType = await OMINTContract.amountForType(typeID)
        const totalSupplyOfType = await ONFTContract.totalSupplyOfType(typeID)
        if (Number(amountForType.toString()) > Number(totalSupplyOfType.toString())){
          open = true
        }
      }
      return {
        open
      }
  }

  return useQuery(["useNFTOpenStatus"+typeID+index], fetchData, {
      // enabled:!!networkId && !!address && !!MRelationContract && !!MRelationContract.signer ,
      refetchInterval: config.refreshInterval,
  })
}


export function useStudioList() {

  const {address} = useAccount()
  const {chain} = useNetwork()
  const networkId = chain?.id

  const OMINTContract = useOMINTContract(OMINT_ADDRESSSES)

  async function fetchData() {

      if (!address || !OMINTContract) {
          return
      }
      const getStudioList = await OMINTContract.getStudioList()
      console.log('getStudioList=',getStudioList)
      let isNode = false
      if (getStudioList.indexOf(address) > -1){
        isNode = true
      }
      return {
        list:getStudioList,
        isNode
      }
  }

  return useQuery(["useStudioList"], fetchData, {
      // enabled:!!networkId && !!address && !!MRelationContract && !!MRelationContract.signer ,
      refetchInterval: config.refreshInterval,
  })
}


export function useStudioReward(studioAddress:string) {

  const {address} = useAccount()
  const {chain} = useNetwork()
  const networkId = chain?.id

  const OMINTContract = useOMINTContract(OMINT_ADDRESSSES)

  async function fetchData() {

      if (!address || !OMINTContract || !studioAddress) {
          return
      }
      const studioAmount = await OMINTContract.studioAmount(studioAddress)
      return {
        reward:bigNumberToBalance(studioAmount),
      }
  }

  return useQuery(["useStudioReward"+studioAddress], fetchData, {
      // enabled:!!networkId && !!address && !!MRelationContract && !!MRelationContract.signer ,
      refetchInterval: config.refreshInterval,
  })
}



export function useInvList() {

  const {address} = useAccount()
  const {chain} = useNetwork()
  const networkId = chain?.id

  const relationContract = useOMNIRelationontract(Relation_ADDRESSSES)

  async function fetchData() {

      if (!address || !relationContract) {
          return {
            list:[]
          }
      }
      const getInvList = await relationContract.getInvList(address)
      return {
        list:getInvList,
      }
  }

  return useQuery(["useInvList"], fetchData, {
      // enabled:!!networkId && !!address && !!MRelationContract && !!MRelationContract.signer ,
      refetchInterval: config.refreshInterval,
  })
}


/**
 * 获取币种列表信息
 */
export function useCoinsBalanceInfo(coins: any) {
  const {address} = useAccount()
  const {chain} = useNetwork()
  const networkId = chain?.id
  const provider = useProvider()


  const fetchData = async () => {
    if (!address || !networkId || !coins.length) {
        return;
    }
    if (!provider) {
        return
    }
    coins = coins.filter((item: any, index: number) => {
      return item.symbol !== "BNB"
    })
    let callContextArr:any = []
    coins.forEach((item: any, index: number) => {
      const coinContract = new ethers.Contract(item.value[networkId], ERC20_ABI, provider);
      callContextArr.push(coinContract.balanceOf(address))
    })
    const multicallResult = await Promise.all(callContextArr)
    let data: any = {}
    multicallResult.map((item:BigNumber,index:number)=>{
      data[coins[index].name] = Number(bigNumberToBalance(item))
      data[coins[index].name+'_decimals'] = 18
    })
    data["BNB"] = Number(bigNumberToBalance(await provider.getBalance(address)))
    data["BNB_decimals"] = 18
    return data
  }
  return useQuery(["useCoinsBalanceInfo"],fetchData,{
    enabled:!!networkId && !!address  ,
    refetchInterval: config.refreshInterval,
})
}

// 获取swap价格
export function useSwapPrice(amount:number|string,tokenNames:string[],path:string[],reverse:boolean) {
  const {address} = useAccount()
  const {chain = {id: 56}} = useNetwork()
  const provider = useProvider()

  const routerContract = useOmniSwapRouterContract(OmniSwapRouter_ADDRESSSES);
  const [info, setInfo] = useState<any>({
      loading: true,
      data: {}
  });
  // console.log(amount,tokens,path)
  useEffect(() => {
      // console.log(tokens,path)
      const getResult = async () => {
          if (!amount || tokenNames.includes("") || path.includes("")) {
              setInfo({
                  loading: false,
                  data: {
                      [tokenNames[0]]: '',
                      [tokenNames[tokenNames.length-1]]: ''
                  }
              })
              return
          }
          if (!address || !routerContract) {
              return;
          }
          try {
            const res:any = await routerContract["getAmountsOut"](balanceToBigNumber(amount),path)
            // 左边输入调用out  右边输入调用in
            // const res:any = await routerContract[!reverse?"getAmountsOut":"getAmountsIn"](balanceToBigNumber(amount),path)
            const amountA = bigNumberToBalance(res[0])
            const amountB = bigNumberToBalance(res[res.length-1])
            setInfo({
                loading:false,
                data:{
                  [tokenNames[0]]:Number(amountA),
                  [tokenNames[tokenNames.length-1]]:amountB
                }
            })
          } catch (e:any) {
            console.log('===',e)
          }
      };
      getResult()
      const interval = setInterval(getResult, config.refreshInterval);
      return () => clearInterval(interval);
  }, [address, routerContract, amount, tokenNames.join(","), path.join(",")])
  return info;
}

// 获取展示swap价格
export function useSwapPriceShow(tokens:string[],path:string[]) {
  const {address} = useAccount()
  const {chain} = useNetwork()
  const provider = useProvider()

  const routerContract = useOmniSwapRouterContract(OmniSwapRouter_ADDRESSSES);
  const [info, setInfo] = useState<any>({
      loading: true,
      data: {}
  });
  const amount = 1
  // console.log(amount,tokens,path)
  useEffect(() => {
      // console.log(tokens,path)
      const getResult = async () => {
          if (tokens.includes("") || path.includes("")) {
              setInfo({
                  loading: false,
                  data: {
                      [tokens[0]]: 0,
                      [tokens[tokens.length-1]]: 0
                  }
              })
              return
          }
          if (!address || !routerContract) {
              return;
          }
          // console.log(amount)
          const outRes:any = await routerContract.getAmountsOut(balanceToBigNumber(amount),path)
          const inRes:any = await routerContract.getAmountsIn(balanceToBigNumber(amount),path)
          // console.log(res)
          const amountOut = bigNumberToBalance(outRes[outRes.length-1])
          const amountIn = bigNumberToBalance(outRes[0])
          setInfo({
              loading:false,
              data:{
                  out:amountOut,
                  in:amountIn
              }
          })
      };
      getResult()
      const interval = setInterval(getResult, config.refreshInterval);
      return () => clearInterval(interval);
  }, [address, routerContract, amount, tokens.join(","), path.join(",")])
  return info;
}

export async function getBetterPath(contract:any,chainId:number|undefined,path:string[]){
  return path
  // if(!contract || !chainId ||path.length<2) {
  //     console.log("参数非法","getBetterPath")
  //     return path
  // }
  // let betterpath = path
  // let betterAmount = BigNumber.from(0)
  // let tokenList = TOKEN_LIST.filter((item:any,index)=>{
  //     return item.chainId === chainId
  // })
  // const centerCoin = tokenList.filter((item,index)=>{
  //     return !path.includes(item.address)
  // })
  // const allPath = [path]
  // for(let i=0,len=centerCoin.length;i<len;i++){
  //     const currentPath = JSON.parse(JSON.stringify(path))
  //     currentPath.splice(1,0,centerCoin[i].address)
  //     allPath.push(currentPath)
  // }

  //     for(let i=0,len=allPath.length;i<len;i++){
  //         try {
  //             // console.log(allPath[i])
  //             const res:any = await contract.getAmountsOut(balanceToBigNumber(1),allPath[i])
  //             // console.log(res[res.length-1].gt(betterAmount),res[res.length-1],betterAmount)
  //             if(res[res.length-1].gt(betterAmount)){
  //                 betterpath = allPath[i]
  //                 betterAmount = res[res.length-1]
  //             }
  //         }catch (e) {
  //             logError("getBetterPath",e)
  //         }
  //     }

  // return betterpath
}

export function useEarnInfo() {
  const {address} = useAccount()
  const {chain} = useNetwork()
  const networkId = chain?.id

  const stakePoolContract = useOmniStakePoolContract(OmniStakePool_ADDRESSSES)

  async function fetchData() {

      if (!address || !stakePoolContract) {
          return
      }
      let lpPower = '1'
      let myLpPower = '2'
      let lpMint = '3'
      let waitReceive = '4'
      let received = '5'
      // const pauseStats = await stakePoolContract.mintPause(typeID)
      return {
        lpPower,
        myLpPower,
        lpMint,
        waitReceive,
        received
      }
  }

  return useQuery(["useEarnInfo"], fetchData, {
      // enabled:!!networkId && !!address && !!MRelationContract && !!MRelationContract.signer ,
      refetchInterval: config.refreshInterval,
  })
}



export function useCommunityEarnInfo() {
  const {address} = useAccount()
  const {chain} = useNetwork()
  const networkId = chain?.id

  const stakePoolContract = useOmniStakePoolContract(OmniStakePool_ADDRESSSES)

  async function fetchData() {

      if (!address || !stakePoolContract) {
          return
      }

      let waitReceive = '1'
      let received = '2'
      let lastMint = '3'
      let myLastMint = '4'
      let communityTotal = '5'
      let lastDirect = '6'
      let myPower = '7'
      let myNodePower = '8'

      // const pauseStats = await stakePoolContract.mintPause(typeID)
      return {
        waitReceive,
        received,
        lastMint,
        myLastMint,
        communityTotal,
        lastDirect,
        myPower,
        myNodePower
      }
  }

  return useQuery(["useCommunityEarnInfo"], fetchData, {
      // enabled:!!networkId && !!address && !!MRelationContract && !!MRelationContract.signer ,
      refetchInterval: config.refreshInterval,
  })
}



export function useOMNIDestoryInfo() {
  const {address} = useAccount()
  const {chain} = useNetwork()
  const networkId = chain?.id

  const tokenContract = useDynamicTokenContract(OMNI_ADDRESSSES);
  async function fetchData() {

      if (!address || !tokenContract) {
          return
      }

      const balacne = await tokenContract.balanceOf('0x000000000000000000000000000000000000dEaD')
      return {
        destory: formatBalance(bigNumberToBalance(balacne))
      }
  }

  return useQuery(["useOMNIDestoryInfo"], fetchData, {
      // enabled:!!networkId && !!address && !!MRelationContract && !!MRelationContract.signer ,
      refetchInterval: config.refreshInterval,
  })
}
