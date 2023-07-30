import type {NextPage} from 'next'
import Image from 'next/image'
import ImageCommon from '../../public/images/ImageCommon'
import { FlexViewBetween, FlexView, FlexViewColumn, SpaceHeight, SpaceWidth, FlexViewCenter, FlexViewEnd, LoadingRow } from '../components/Common'
import { Text, TextBold, TextExtraBold, TextExtraLight, TextSemiBold } from '../components/Text'
import useTranslationLanguage from '../hooks/useTranslationLanguage'
import {
  Main,
  TopBg,
  Content,
  TitleIcon,
  Line,
  ConfirButton,
  BGView,
  Copy,
  ArrowIcon,
  Title2Icon,
  AddressView,
  AddressTitle,
  AddressViewItem,
  CoinListView,
  Title3Icon,
  AddressInput,
  TopRightBg,
  TitleView,
  InviteView,
  TopView
} from '../styles/Community'
import { useRouter } from 'next/router'
import { message, notification } from 'antd'
import { useAccount } from 'wagmi'
import copy from 'copy-to-clipboard';
import { autoWidthVW, formatAccount, ZERO_ADDRESS } from '../common/Common'
import { useEffect, useState } from 'react'
import { useInviteInfo, useInvList, useSendTransaction, useUserPower } from '../contract'
import { isBrowser } from 'react-device-detect'
import { useNFTContract, useOMNIRelationontract } from '../hooks/useContract'
import { Relation_ADDRESSSES } from '../constants/addresses'
import NotData from '../components/NotData'



const Community: NextPage = (props: any) => {
  const {t} = useTranslationLanguage()
  const router = useRouter()
  const {address} = useAccount()
  const inviteUrl = `${window.location.origin}/community?inviteCode=${address}`
  const [inviteCode,setInviteCode] = useState('')
  const inviteInfo = useInviteInfo()
  const sendTransaction = useSendTransaction()
  const [currency,setCurrency] = useState('OMNI')
  const OMNIRelationontract = useOMNIRelationontract(Relation_ADDRESSSES)

  useEffect(()=>{
    inviteInfo.refetch()
  },[address])

  useEffect(()=>{
    if (router.query.inviteCode){
      setInviteCode(String(router.query.inviteCode))
    }
  },[router.query])


  function onCopy(){
    if (!address){
      notification.warning({
        message:t('ConnectWallet')
      })
      return
    }
    if (inviteInfo.data?.inviter == ZERO_ADDRESS){
      notification.warning({
        message:t('go to bind')
      })
      return
    }
    copy(inviteUrl)
    message.success(t('copy success'))
  }
  function onInviteCode(e:any){
    setInviteCode(e.target.value)
  }

  // 0x3DeEF4EA4086EAFDa8a2c193A3693DC60DeC07D6
  async function onBind(){

    if (!OMNIRelationontract || !inviteCode || !address){
      return
    }

    // let gasInfo = {}
    // try {
    //   const estimateGas = await BAODAOContract.estimateGas.betUSDT(battle,String(ZERO_ADDRESS))
    //   console.log('estimateGas=====',estimateGas.toString())
    //   const estimateGasValue = Number(estimateGas.toString()) + 100000
    //   gasInfo = {
    //     gasLimit:estimateGasValue,
    //     // gasPrice:ethers.utils.parseUnits('100','gwei').toString(),
    //   }
    // }catch(e:any){
    //   console.log('e====',e)
    // }
    sendTransaction.mutate({
      title:'Bind',
      func:OMNIRelationontract.bind,
      args:[String(inviteCode)],
      onSuccess: () =>{
        inviteInfo.refetch()
      },
      onError:()=>{
      }
    })
  }

  const myinvitationpower =  <FlexViewColumn style={{width:'100%'}}>
    <FlexView>
      <TitleIcon>
        <Image src={ImageCommon.overview} layout='fill'/>
      </TitleIcon>
      <Text size={16} webSize={24}>{t('My current invitation total computing power')}</Text>
    </FlexView>
    <SpaceHeight height={20} webHeight={20}/>
    <BGView style={{justifyContent:'center'}}>
      {
        inviteInfo.isLoading ? <LoadingRow/> : <Text color='#868AAE' size={14} webSize={24}>{inviteInfo.data?.teamPower}</Text>
      }
    </BGView>
    <SpaceHeight height={20} webHeight={0}/>
  </FlexViewColumn>

  return <Main>
    <TopBg>
      <Image src={isBrowser?ImageCommon.MYCommunity:ImageCommon.MYCommunitymobile} layout='fill'/>
    </TopBg>
    <TopRightBg>
      <Image src={ImageCommon.MYCommunityicon} layout='fill'/>
    </TopRightBg>
    <TitleView>
      <TextBold size={0} webSize={64}>{t('My Community')}</TextBold>
      <Text size={0} webSize={24} color='#868AAE'>{t('My Community')}</Text>
    </TitleView>
    <Content>
      <TopView>
        <FlexViewColumn style={{width:'100%'}}>
          <FlexView>
            <TitleIcon>
              <Image src={ImageCommon.invter} layout='fill'/>
            </TitleIcon>
            <Text size={16} webSize={24}>{t('My Inviters Address')}</Text>
          </FlexView>
          <SpaceHeight height={20} webHeight={20}/>
          <BGView style={{justifyContent:'center'}}>
            {
              inviteInfo.isLoading ? <LoadingRow/> : (inviteInfo.data?.inviter != ZERO_ADDRESS ? <Text color='#868AAE' size={14} webSize={24}>{formatAccount(inviteInfo.data?.inviter || '')}</Text> :
              <AddressInput placeholder={t('your Inviters Address')} value={inviteCode} onChange={onInviteCode}/>)
            }
          </BGView>
          {(inviteInfo.data?.inviter == ZERO_ADDRESS || !inviteInfo.data?.inviter) && <FlexViewEnd>
            <ConfirButton onClick={onBind}>
              <Text color='#000' size={16} webSize={32}>{t('To Bind')}</Text>
            </ConfirButton>
          </FlexViewEnd>}
          <SpaceHeight height={20}/>
          {isBrowser && myinvitationpower}






        </FlexViewColumn>
        <InviteView>
          <FlexViewColumn style={{width:'100%'}}>
            <FlexView>
              <TitleIcon>
                <Image src={ImageCommon.invter} layout='fill'/>
              </TitleIcon>
              <Text size={16} webSize={24}>{t('My Invite Link')}</Text>
            </FlexView>
            <SpaceHeight height={20} webHeight={20}/>
            <BGView style={{cursor:'pointer'}} onClick={onCopy}>
              <Text style={{width:'80%',overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}} color='#868AAE' size={14} webSize={24}>{inviteUrl}</Text>
              <Copy>
                <Image src={ImageCommon.copy} layout='fill'/>
              </Copy>
            </BGView>
          </FlexViewColumn>
          <FlexViewColumn style={{width:'100%'}}>
            <SpaceHeight height={40} webHeight={40}/>
            <FlexView>
              <Title2Icon>
                <Image src={ImageCommon.menucion} layout='fill'/>
              </Title2Icon>
              <Text size={16} webSize={24}>{t('Invite Data Directly')}</Text>
            </FlexView>
            <SpaceHeight height={20} webHeight={20}/>
            <Choose currency={currency} onSelect={(token:string)=>setCurrency(token)}/>
          </FlexViewColumn>
        </InviteView>
      </TopView>
      <SpaceHeight height={20} webHeight={0}/>
      {!isBrowser && myinvitationpower}
      <AddressList currency={currency}/>
    </Content>
  </Main>
}
function Choose({currency,onSelect}:any){
  const [show,setShow] = useState(false)
  const {t} = useTranslationLanguage()
  function onChoose(){
    // setShow(!show)
  }
  return <FlexViewColumn style={{width:'100%'}}>
    <BGView style={{cursor:'pointer',zIndex:6}} onClick={onChoose}>
      <Text color='#868AAE' size={14} webSize={24}>{currency || t('Please Select Currency')}</Text>
      <ArrowIcon>
        <Image src={ImageCommon.arrowdown} layout='fill'/>
      </ArrowIcon>
    </BGView>
    {show && <CoinListView className='animate__animated animate__fadeInDown animate__faster'>
      <Text style={{width:'100%',cursor:'pointer'}} color='#868AAE' size={14} webSize={24} onClick={()=>{
        onSelect && onSelect('OMNI')
        setShow(false)
      }}>OMNI</Text>
    </CoinListView>}
  </FlexViewColumn>
}

function AddressList({currency}:any){
  const {t} = useTranslationLanguage()
  const inviteinfo = useInvList()
  return <AddressView>
    <AddressTitle>
      <TextSemiBold size={12} webSize={24} color='#010101'>{t('Address')}</TextSemiBold>
      <TextSemiBold style={{lineHeight:autoWidthVW(20),width:'60%',textAlign:'right'}} size={12} webSize={24} color='#010101'>{t('Invite Total Computing Power')}</TextSemiBold>
    </AddressTitle>
    {
      inviteinfo.isLoading?<LoadingRow width='100%'/> : (inviteinfo.data?.list?.length == 0 ? <NotData/> : inviteinfo.data?.list.map((item:any,index:number)=>{
        return <FlexViewColumn key={index+'Address'} style={{width:'100%'}}>
          <ListItem item={item}/>
          {index != (inviteinfo.data?.list.length || 1) - 1 && <Line/>}
        </FlexViewColumn>
      }))
    }
  </AddressView>
}

function ListItem({item}:any){
  const powerInfo = useUserPower(item)
  return <AddressViewItem>
    <FlexViewBetween>
      <Text size={12} webSize={24}>{formatAccount(item)}</Text>
      {powerInfo.isLoading ? <LoadingRow width='30%'/> : <Text size={12} webSize={24}>{powerInfo.data?.teamPower} USDT</Text>}
    </FlexViewBetween>
  </AddressViewItem>
}


export default Community
export async function getStaticProps() {
  return {
    props: {
    },
    // revalidate: 24*60*60,  //1天更新一次 (单位秒)
  }
}
// image:'/images/Mobilink_new.png',