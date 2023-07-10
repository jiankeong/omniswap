import type {NextPage} from 'next'
import Image from 'next/image'
import ImageCommon from '../../public/images/ImageCommon'
import { FlexViewBetween, FlexView, FlexViewCenter, FlexViewColumn, SpaceHeight, LoadingRow } from '../components/Common'
import { Text, TextBold, TextExtraBold, TextExtraLight } from '../components/Text'
import useTranslationLanguage from '../hooks/useTranslationLanguage'
import {
  Main,
  Content,
  ReceiveButton,
  SwitchView,
  InputItem,
  ItemView
} from '../styles/Ctrl'
import { useRouter } from 'next/router'
import { message,notification,Switch } from 'antd'
import { useSpring, animated } from '@react-spring/web'
import { isBrowser } from 'react-device-detect'
import { usePauseStats, useSendTransaction,useStudioList, useStudioReward } from '../contract'
import { useOMINTContract } from '../hooks/useContract'
import { OMINT_ADDRESSSES } from '../constants/addresses'
import { ApprovalState, balanceToBigNumber, formatBalance } from '../common/Common'
import { useEffect, useState,useRef } from 'react'
import { useAccount } from 'wagmi'
import NotData from '../components/NotData'


const Ctrl: NextPage = (props: any) => {

  const sendTransaction = useSendTransaction()
  const nftContract = useOMINTContract(OMINT_ADDRESSSES)

  const pauseInfo = usePauseStats()
  const [loading,setLoading] = useState(false)
  const {address} = useAccount()
  const {t} = useTranslationLanguage()
  function onPause(typeID:number,status:boolean){
    if (!address){
      notification.warning({
        message:t('ConnectWallet')
      })
      return
    }
    if (!nftContract){
      return
    }

    console.log('typeID',typeID,status)
    setLoading(true)
    sendTransaction.mutate({
      title:'setPause',
      func:nftContract.setPause,
      args:[typeID,status],
      onSuccess: () =>{
        pauseInfo.refetch()
        setLoading(false)
      },
      onError:()=>{
        setLoading(false)
      }
    })
  }


  return <Main>
    <Content>
      <Text size={20} webSize={36}>Pause</Text>
      <FlexViewBetween>
        <FlexViewColumn>
          <Text size={12} webSize={20}>100U</Text>
        </FlexViewColumn>
        <SwitchView onClick={()=>onPause(1,!pauseInfo.data?.pause1Stats)} loading={loading} checked={pauseInfo.data?.pause1Stats}/>
      </FlexViewBetween>
      <SpaceHeight height={20}/>
      <FlexViewBetween>
        <FlexViewColumn>
          <Text size={12} webSize={20}>500U</Text>
        </FlexViewColumn>
        <SwitchView onClick={()=>onPause(2,!pauseInfo.data?.pause2Stats)} loading={loading} checked={pauseInfo.data?.pause2Stats}/>
      </FlexViewBetween>
      <SpaceHeight height={20}/>
      <FlexViewBetween>
        <FlexViewColumn>
          <Text size={12} webSize={20}>1000U</Text>
        </FlexViewColumn>
        <SwitchView onClick={()=>onPause(3,!pauseInfo.data?.pause3Stats)} loading={loading} checked={pauseInfo.data?.pause3Stats}/>
      </FlexViewBetween>
      <SpaceHeight height={20}/>
      <FlexViewBetween>
        <FlexViewColumn>
          <Text size={12} webSize={20}>5000U</Text>
        </FlexViewColumn>
        <SwitchView onClick={()=>onPause(4,!pauseInfo.data?.pause4Stats)} loading={loading} checked={pauseInfo.data?.pause4Stats}/>
      </FlexViewBetween>
      <SpaceHeight height={20}/>
      <FlexViewBetween>
        <FlexViewColumn>
          <Text size={12} webSize={20}>10000U</Text>
        </FlexViewColumn>
        <SwitchView onClick={()=>onPause(5,!pauseInfo.data?.pause5Stats)} loading={loading} checked={pauseInfo.data?.pause5Stats}/>
      </FlexViewBetween>
      <SpaceHeight height={20}/>
      <FlexViewBetween>
        <FlexViewColumn>
          <Text size={12} webSize={20}>50000U</Text>
        </FlexViewColumn>
        <SwitchView onClick={()=>onPause(6,!pauseInfo.data?.pause6Stats)} loading={loading} checked={pauseInfo.data?.pause6Stats}/>
      </FlexViewBetween>
      <SpaceHeight height={20}/>
      <FlexViewBetween>
        <FlexViewColumn>
          <Text size={12} webSize={20}>100000U</Text>
        </FlexViewColumn>
        <SwitchView onClick={()=>onPause(7,!pauseInfo.data?.pause7Stats)} loading={loading} checked={pauseInfo.data?.pause7Stats}/>
      </FlexViewBetween>
    </Content>
    <StudioList/>
  </Main>
}
function StudioList(){
  const {t} = useTranslationLanguage()

  const studioList = useStudioList()
  const sendTransaction = useSendTransaction()
  const nftContract = useOMINTContract(OMINT_ADDRESSSES)
  const [loading,setLoading] = useState(false)
  const addressRef = useRef('')
  const {address} = useAccount()
  function onAdd(){
    if (!address){
      notification.warning({
        message:t('ConnectWallet')
      })
      return
    }
    if (!nftContract || loading || !addressRef.current){
      return
    }

    setLoading(true)
    sendTransaction.mutate({
      title:'setStudioAdmin',
      func:nftContract.setStudioAdmin,
      args:[addressRef.current,true],
      onSuccess: () =>{
        studioList.refetch()
        setLoading(false)
      },
      onError:()=>{
        setLoading(false)
      }
    })
  }
  function onChange(e:any){
    console.log(e.target.value)
    addressRef.current = e.target.value
  }
  return <Content>
    <FlexViewBetween>
      <InputItem onChange={onChange}/>
      <ReceiveButton onClick={onAdd}>
        <Text size={12} webSize={20}>添加工作室</Text>
      </ReceiveButton>
    </FlexViewBetween>
    <SpaceHeight height={40}/>
    {
      studioList.isLoading ? <LoadingRow/> : (studioList.data?.list.length == 0 ? <NotData/> : studioList.data?.list.map((item:any,index:number)=>{
        return <StudioReard studioaddress={item} key={'sudio'+item} onDeleteSuccess={()=>{
          studioList.refetch()
        }}/>
      }))
    }
  </Content>
}
function StudioReard({studioaddress,onDeleteSuccess}:any){
  const {t} = useTranslationLanguage()

  const studioReward = useStudioReward(studioaddress)
  const sendTransaction = useSendTransaction()
  const nftContract = useOMINTContract(OMINT_ADDRESSSES)
  const [loading,setLoading] = useState(false)
  const {address} = useAccount()
  function onDelete(){
    if (!address){
      notification.warning({
        message:t('ConnectWallet')
      })
      return
    }
    if (!nftContract || loading){
      return
    }

    setLoading(true)
    sendTransaction.mutate({
      title:'Delete StudioAdmin',
      func:nftContract.setStudioAdmin,
      args:[studioaddress,false],
      onSuccess: () =>{
        setLoading(false)
        onDeleteSuccess && onDeleteSuccess()
      },
      onError:()=>{
        setLoading(false)
      }
    })
  }
  return <FlexViewColumn style={{width:'100%'}}>
    <FlexViewCenter>
      <Text size={12} webSize={20}>工作室</Text>
    </FlexViewCenter>
    <Text size={12} webSize={20}>{studioaddress}</Text>
    <SpaceHeight height={10}/>
    <FlexViewBetween>
      {studioReward.isLoading ? <LoadingRow/> : <Text size={12} webSize={20}>业绩：{formatBalance(studioReward.data?.reward)}</Text>}
      <ReceiveButton onClick={onDelete}>
        <Text size={12} webSize={20}>删除工作室</Text>
      </ReceiveButton>
    </FlexViewBetween>
    <SpaceHeight height={40}/>
  </FlexViewColumn>
} 
export default Ctrl
export async function getStaticProps() {
  return {
    props: {
    },
    // revalidate: 24*60*60,  //1天更新一次 (单位秒)
  }
}
// image:'/images/Mobilink_new.png',