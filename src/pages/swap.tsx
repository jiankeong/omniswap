import type {NextPage} from 'next'
import Image from 'next/image'
import ImageCommon from '../../public/images/ImageCommon'
import { FlexViewBetween, FlexView, FlexViewColumn, SpaceHeight, SpaceWidth, FlexViewCenter, FlexViewEnd, FlexViewCenterColumn, LoadingRow } from '../components/Common'
import { Text, TextBold, TextExtraBold, TextExtraLight, TextRegular, TextSemiBold } from '../components/Text'
import useTranslationLanguage from '../hooks/useTranslationLanguage'
import {
  Main,
  TopLeft,
  TopRight,
  Content,
  TitleIcon,
  Setting,
  Line,
  EchangeIcon,
  SwapButton,
  SwapInfo,
  Sqicon,
  DownBund,
  TitleView,
  SwapView,
  Segment,
  SegmentItem,
  SegmentView
} from '../styles/Swap'
import { useRouter } from 'next/router'
import { message } from 'antd'
import { useAccount, useNetwork } from 'wagmi'
import copy from 'copy-to-clipboard';
import { ApprovalState, autoWidthVW, balanceToBigNumber, formatAccount, formatBalance, getDeadLine, ZERO_ADDRESS } from '../common/Common'
import { useContext, useEffect, useState } from 'react'
import { useInviteInfo, getBetterPath, useApprove, useGetOMNI, useMayAddPower, useOMNIDestoryInfo, useSendTransaction, useSwapPrice, useSwapPriceShow } from '../contract'
import SwapToken from '../components/SwapToken'
import { swapTokens } from '../components/SwapToken/TokenList'
import { useModalContext } from '../provider/modalProvider'
import Slippage from '../components/SwapToken/Slippage'
import { useDeadline, useGasPrice, useSlippage } from '../state/setting'
import { useOmniStakePoolContract, useOmniSwapRouterContract } from '../hooks/useContract'
import { OmniStakePool_ADDRESSSES, OmniSwapRouter_ADDRESSSES } from '../constants/addresses'
import { NetworkId } from '../networkDetails'
import { LoadingContext, LoadingType } from '../provider/loadingProvider'
import { parseUnits } from 'ethers/lib/utils'
import {TransactionResponse} from "@ethersproject/providers";

const Swap: NextPage = (props: any) => {
  const {t} = useTranslationLanguage()
  const OMNIDestoryInfo = useOMNIDestoryInfo()
  const [swap,setSwap] = useState(true)
  return <Main>
    <TopLeft>
      <Image src={ImageCommon.SWAP} layout='fill'/>
    </TopLeft>
    <TopRight>
      <Image src={ImageCommon.swapicon} layout='fill'/>
    </TopRight>
    <TitleView>
      <TextBold size={0} webSize={64}>{t('Swap')}</TextBold>
    </TitleView>
    <SegmentView>
      <Segment>
        <SegmentItem select={swap} onClick={()=>setSwap(true)}>
          <Text size={16} webSize={24} color={swap ? '#fff' : '#868AAE'}>{t('Swap')}</Text>
        </SegmentItem>
        <SegmentItem select={!swap} onClick={()=>setSwap(false)}>
          <Text size={16} webSize={24} color={!swap ? '#fff' : '#868AAE'}>{t('Liquidity')}</Text>
        </SegmentItem>
      </Segment>
    </SegmentView>
    {swap ? <SwapComponent/> : <LiquidityComponent title={t('Liquidity')}/>}
  </Main>
}
function SwapComponent(){
  const {t} = useTranslationLanguage()
  const router = useRouter()
  const {address} = useAccount()
  const {chain = {id: 56}} = useNetwork()
  const modalContext = useModalContext()
  const [fromToken,setFromToken] = useState<any>(swapTokens[0])
  const [toToken,setToToken] = useState<any>(swapTokens[1])
  const [swapAmount,setSwapAmount] = useState('')
  const routerContract = useOmniStakePoolContract(OmniStakePool_ADDRESSSES);
  const [swapPath,setSwapPath] = useState([""])
  const [reverse,setReverse] = useState(false)
  const [buttonDisable,setButtonDisable] = useState(false)
  const [swapTokensName,setSwapTokensName] = useState([""])
  const swapPrice = useSwapPrice(swapAmount,swapTokensName,swapPath,reverse)
  // const swapPriceShow = useSwapPriceShow(swapTokens,swapPath)
  const [approval, approveCallback] = useApprove({[NetworkId.BSC]: fromToken.value[chain.id]}, OmniStakePool_ADDRESSSES)
  const gasPrice = useGasPrice()
  const outScale = useSlippage()
  const deadLine = useDeadline()
  const loading = useContext(LoadingContext)
  const sendTransaction = useSendTransaction()
  const OMNIDestoryInfo = useOMNIDestoryInfo()
  useEffect(()=>{
    async function getPath(){
      if (fromToken.name && toToken.name){
        const path = await getBetterPath(routerContract,chain?.id,[fromToken.value[chain.id],toToken.value[chain.id]])
        setSwapPath(path)
        setSwapTokensName([fromToken.name,toToken.name])

        if (fromToken.name == 'USDT'){
          setButtonDisable(true)
        }else {
          setButtonDisable(false)
        }
      }
    }
    getPath()
  },[fromToken,toToken])


  function onFromToken(info:any){
    setFromToken(info)
  }

  function onToToken(info:any){
    setToToken(info)
  }

  function onExchange(){
    const [from,to] = [toToken,fromToken]
    setFromToken(from)
    setToToken(to)
    // setReverse(!reverse)
  }

  function onFromValueChange(fromValue:string){
    setSwapAmount(fromValue)
  }

  function onSwap(){
    if (!routerContract || !swapAmount || buttonDisable){
      return
    }

    if (approval != ApprovalState.APPROVED){
      approveCallback()
      return
    }


    loading.show(LoadingType.confirm, "swap")
    routerContract.swapExactTokensForTokensSupportingFeeOnTransferTokens(
      balanceToBigNumber(formatBalance(swapPrice.data?.[fromToken.name],8)),
      balanceToBigNumber(formatBalance(swapPrice.data?.[fromToken.name]*(1-outScale),8)),
      swapPath,
      address??'',
      getDeadLine(deadLine),
      {
        gasPrice:parseUnits(String(gasPrice || 5),"gwei"),
        gasLimit:1500000
      })
    .then(async (response: TransactionResponse) => {
      loading.show(LoadingType.pending, response.hash)
      await response.wait();
      loading.show(LoadingType.success, response.hash)
      setSwapAmount('')
    })
    .catch((err: any) => {
      console.log('err',err);
      console.log('keys',Object.keys(err));
      console.log('values',Object.values(err));

      loading.show(LoadingType.error,err.transactionHash, err.reason || err.message)
    })
  }


  function onSlippage(){
    modalContext.show(<Slippage onClose={()=>{
      modalContext.hidden()
    }}/>,{
      style:{
        justifyContent:'center'
      }
    })
  }
  return <FlexViewCenterColumn style={{width:'100%'}}>
    <Content>
      <FlexViewBetween>
        <FlexView>
          <TitleIcon>
            <Image src={ImageCommon.menus} layout='fill'/>
          </TitleIcon>
          <TextSemiBold size={16} webSize={30}>{t('Swap')}</TextSemiBold>
        </FlexView>
        {/* <Setting onClick={onSlippage}>
          <Image src={ImageCommon.setting} layout='fill'/>
        </Setting> */}
      </FlexViewBetween>
      <Line/>
      <SwapView>
        <SwapToken value={swapPrice.data[fromToken.name]} showToken={false} coin={fromToken.name} onChoose={onFromToken} onValueChange={onFromValueChange}/>
        <FlexViewColumn>
          <SpaceHeight height={0} webHeight={50}/>
          <EchangeIcon onClick={onExchange}>
            <Image src={ImageCommon.exchange} layout='fill'/>
          </EchangeIcon>
        </FlexViewColumn>
        <SwapToken value={swapPrice.data[toToken.name]} showToken={false} coin={toToken.name} editable={false} max={false} onChoose={onToToken}/>
      </SwapView>
      <FlexViewEnd>
        <TextSemiBold size={14} webSize={24} color='#FFA845'>1 {fromToken.name} ≈ {(swapPrice.data[toToken.name] / swapPrice.data[fromToken.name]) || "-"} {toToken.name}</TextSemiBold>
      </FlexViewEnd>
      <SwapButton disable={buttonDisable} onClick={onSwap}>
        <TextExtraBold size={16} webSize={32} color={buttonDisable?'#fff':'#000'}>
          {approval != ApprovalState.APPROVED ? t('approve') : t('Swap')}
        </TextExtraBold>
      </SwapButton>
      <Line/>
      <SwapInfo>
        {/* <FlexViewBetween>
          <FlexView>
            <TextRegular size={12} webSize={24}>{t('Slippage Difference')}</TextRegular>
            <Sqicon>
              <Image src={ImageCommon.quest} layout='fill'/>
            </Sqicon>
          </FlexView>
          <TextRegular size={12} webSize={24}>0.5%</TextRegular>
        </FlexViewBetween>
        <SpaceHeight height={10}/> */}
        {/* <FlexViewBetween>
          <FlexView>
            <TextRegular size={12} webSize={24}>{t('Price Impact')}</TextRegular>
            <Sqicon>
              <Image src={ImageCommon.quest} layout='fill'/>
            </Sqicon>
          </FlexView>
          <TextRegular size={12} webSize={24}>0.09%</TextRegular>
        </FlexViewBetween>
        <SpaceHeight height={10}/> */}
        <FlexViewBetween>
          <FlexView>
            <TextRegular size={12} webSize={24}>{t('Minimum Received')}</TextRegular>
            <Sqicon>
              <Image src={ImageCommon.quest} layout='fill'/>
            </Sqicon>
          </FlexView>
          <TextRegular size={12} webSize={24}>{swapPrice.data[toToken.name] * 0.5}</TextRegular>
        </FlexViewBetween>
        <SpaceHeight height={10}/>
        <FlexViewBetween>
          <FlexView>
            <TextRegular size={12} webSize={24}>{t('Inject Into LP Pool')}</TextRegular>
            <Sqicon>
              <Image src={ImageCommon.quest} layout='fill'/>
            </Sqicon>
          </FlexView>
          <TextRegular size={12} webSize={24}>{swapPrice.data[toToken.name] * 0.45}</TextRegular>
        </FlexViewBetween>
        <SpaceHeight height={10}/>
        <FlexViewBetween>
          <FlexView>
            <TextRegular size={12} webSize={24}>{t('Transaction Routing')}</TextRegular>
            <Sqicon>
              <Image src={ImageCommon.quest} layout='fill'/>
            </Sqicon>
          </FlexView>
          <TextRegular size={12} webSize={24}>{fromToken.name} {`${'>'}`} {toToken.name}</TextRegular>
        </FlexViewBetween>
      </SwapInfo>
    </Content>
    <SpaceHeight height={15}/>
    <Content style={{margin:0}}>
      <FlexView style={{width:'100%'}}>
        <DownBund>
          <Image src={ImageCommon.bound} layout='fill'/>
        </DownBund>
        <Text size={16} webSize={30}>{t('Cumulative Total Burned Tokens')}</Text>
      </FlexView>
      <Line/>
      <SwapToken showToken={false} showBalance={false} coin={'OMNI'} editable={false} max={false} value={OMNIDestoryInfo.data?.destory}/>
    </Content>
  </FlexViewCenterColumn>
}

export function LiquidityComponent({title}:any){
  const {t} = useTranslationLanguage()
  const router = useRouter()
  const {address} = useAccount()
  const {chain = {id: 56}} = useNetwork()
  const modalContext = useModalContext()
  const [fromToken,setFromToken] = useState<any>(swapTokens[1])
  const [toToken,setToToken] = useState<any>(swapTokens[0])
  const [swapAmount,setSwapAmount] = useState('')
  const routerContract = useOmniStakePoolContract(OmniStakePool_ADDRESSSES);
  const [swapPath,setSwapPath] = useState([""])
  const [reverse,setReverse] = useState(false)
  const [swapTokensName,setSwapTokensName] = useState([""])
  const swapPrice = useGetOMNI(swapAmount)
  // const swapPriceShow = useSwapPriceShow(swapTokens,swapPath)
  const [approval, approveCallback] = useApprove({[NetworkId.BSC]: fromToken.value[chain.id]}, OmniStakePool_ADDRESSSES,swapAmount)
  const [approvalOMNI, approveOmniCallback] = useApprove({[NetworkId.BSC]: toToken.value[chain.id]}, OmniStakePool_ADDRESSSES,swapPrice.data[toToken.name])
  const gasPrice = useGasPrice()
  const outScale = useSlippage()
  const deadLine = useDeadline()
  const loading = useContext(LoadingContext)
  const sendTransaction = useSendTransaction()
  const OMNIDestoryInfo = useOMNIDestoryInfo()
  const mayPoweInfo = useMayAddPower(swapPrice.data[fromToken.name],swapPrice.data[toToken.name])
  const inviteInfo = useInviteInfo()

  useEffect(()=>{
    async function getPath(){
      if (fromToken.name && toToken.name){
        const path = await getBetterPath(routerContract,chain?.id,[fromToken.value[chain.id],toToken.value[chain.id]])
        setSwapPath(path)
        setSwapTokensName([fromToken.name,toToken.name])
      }
    }
    getPath()
  },[fromToken,toToken])


  function onFromToken(info:any){
    setFromToken(info)
  }

  function onToToken(info:any){
    setToToken(info)
  }

  function onExchange(){
    const [from,to] = [toToken,fromToken]
    setFromToken(from)
    setToToken(to)
    // setReverse(!reverse)
  }

  function onFromValueChange(fromValue:string){
    setSwapAmount(fromValue)
  }

  function onSwap(){
    if (inviteInfo.data?.inviter == ZERO_ADDRESS){
      router.push('community')
      return
    }

    if (approval != ApprovalState.APPROVED){
      approveCallback()
      return
    }
    if (approvalOMNI != ApprovalState.APPROVED){
      approveOmniCallback()
      return
    }
    if (!routerContract || !swapAmount || swapPrice.isLoading){
      return
    }


    if (Number(swapPrice.data[fromToken.name]) < 100){
      message.warning(t('At least 100U'))
      return
    }
    loading.show(LoadingType.confirm, t('add Liquidity'))
    routerContract.addLiquidity(
      fromToken.value[chain.id],
      toToken.value[chain.id],
      balanceToBigNumber(swapPrice.data[fromToken.name]),
      balanceToBigNumber(swapPrice.data[toToken.name]),
      0,
      0,
      address??'',
      getDeadLine(deadLine),
      {
        gasPrice:parseUnits(String(gasPrice || 5),"gwei"),
        gasLimit:1500000
      }
    ).then(async (response: TransactionResponse) => {
      loading.show(LoadingType.pending, response.hash)
      await response.wait();
      loading.show(LoadingType.success, response.hash)
    })
    .catch((err: any) => {
      console.log('err=  key====',Object.keys(err))
      console.log('err  value=====',Object.values(err))

      loading.show(LoadingType.error, err.data?.message || err.reason, err.transaction?.hash)
    })
  }
  return <FlexViewCenterColumn>
    <Content style={{marginTop:0}}>
      <FlexViewBetween>
        <FlexView>
          <TitleIcon>
            <Image src={ImageCommon.menus} layout='fill'/>
          </TitleIcon>
          <TextSemiBold size={16} webSize={30}>{title}</TextSemiBold>
        </FlexView>
      </FlexViewBetween>
      <Line/>
      <SwapView>
        <SwapToken value={swapPrice.data[fromToken.name]} showToken={false} coin={fromToken.name} onChoose={onFromToken} onValueChange={onFromValueChange}/>
        <FlexViewColumn>
          <SpaceHeight height={0} webHeight={50}/>
          <EchangeIcon>
            <Image src={ImageCommon.add} layout='fill'/>
          </EchangeIcon>
        </FlexViewColumn>
        <SwapToken value={swapPrice.data[toToken.name]} showToken={false} coin={toToken.name} editable={false} max={false} onChoose={onToToken}/>
      </SwapView>
      <FlexViewEnd>
        <TextSemiBold size={14} webSize={24} color='#FFA845'>1 {fromToken.name} ≈ {(swapPrice.data[toToken.name] / swapPrice.data[fromToken.name]) || "-"} {toToken.name}</TextSemiBold>
      </FlexViewEnd>
      <SwapButton disable={false} onClick={onSwap}>
        <TextExtraBold size={16} webSize={32}>
          {
            inviteInfo.data?.inviter == ZERO_ADDRESS ? t('To Bind') : (approval != ApprovalState.APPROVED ? t('approve') + '  USDT' : approvalOMNI != ApprovalState.APPROVED ? t('approve') + '  OMNI' : t('add Liquidity'))
          }
        </TextExtraBold>
      </SwapButton>
    </Content>
    <SpaceHeight height={15}/>
    <Content style={{margin:0}}>
      <FlexViewBetween>
        <FlexView>
          <DownBund>
            <Image src={ImageCommon.bound} layout='fill'/>
          </DownBund>
          <Text size={16} webSize={30}>{t('Estimated power')}</Text>
        </FlexView>
        {mayPoweInfo.isLoading ? <LoadingRow width={'30%'}/> : <TextSemiBold size={16} webSize={30}>{mayPoweInfo.data?.power}</TextSemiBold>}
      </FlexViewBetween>
    </Content>
  </FlexViewCenterColumn>
}
export default Swap
export async function getStaticProps() {
  return {
    props: {
    },
    // revalidate: 24*60*60,  //1天更新一次 (单位秒)
  }
}