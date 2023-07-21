import {
  Main,
  TitleView,
  ReceiveButton,
  Content,
  Line,
  TitleIcon,
  LineH,
  BGView,
  ArrowIcon,
  CoinListView,
  InfoView,
  ReardIcon,
  ArrowDown,
  AddressView,
  AddressTitle,
  AddressViewItem,
  InviteButton,
  InfoItem,
  TopRightBg,
  TopBg
} from '../../styles/Earn'
import Image from 'next/image'
import ImageCommon from '../../../public/images/ImageCommon'
import { FlexViewBetween, FlexView, FlexViewColumn,FlexViewCenterColumn, SpaceHeight, SpaceWidth, FlexViewCenter, FlexViewEnd, LoadingRow } from '../../components/Common'
import { Text, TextBold, TextExtraBold, TextExtraLight, TextRegular, TextSemiBold } from '../../components/Text'
import useTranslationLanguage from '../../hooks/useTranslationLanguage'
import { useEffect, useState } from 'react'
import NotData from '../../components/NotData'
import {useTab} from "@src/hooks";
import {Tab} from "@src/views/earn/index";
import { useRouter } from 'next/router'
import { useCommunityEarnInfo, useSendTransaction } from '@/src/contract'
import { OmniStakePool_ADDRESSSES } from '@/src/constants/addresses'
import { useOmniStakePoolContract } from '@/src/hooks/useContract'
import { balanceToBigNumber } from '@/src/common/Common'

export default function Community(){
  const {t} = useTranslationLanguage()
  const [currency,setCurrency] = useState('OMNI')
  const tab = useTab()
  const router = useRouter()
  const communityEarnInfo = useCommunityEarnInfo()
  const sendTransaction = useSendTransaction()
  const omniStakePoolContract = useOmniStakePoolContract(OmniStakePool_ADDRESSSES)

  function onReceive(){
    if (!omniStakePoolContract){
      return
    }
    sendTransaction.mutate({
      title: 'Receive',
      func: omniStakePoolContract?.claim,
      args: [balanceToBigNumber(10000),1,1,''],
      onSuccess:()=>{
        communityEarnInfo.refetch()
      }
    })
  }

  return <Main>
    <TopBg>
      <Image src={ImageCommon.earnbg} layout='fill'/>
    </TopBg>
    <TopRightBg>
      <Image src={ImageCommon.pic_earn} layout='fill'/>
    </TopRightBg>
    <Tab tabs={[
      {
        title: t("LP Mining Income"),
        path: "/earn"
      },
      {
        title: t("Community Mining Income"),
        path: "/earn_community"
      }]} onChange={(index:number)=>tab.setTabIndex(index)} initialIndex={1}></Tab>
    <TitleView>
      <TextBold size={28} webSize={64}>{t('Community Mining Incomee')}</TextBold>
      <Text size={14} webSize={24} color='#868AAE'>{t('Community Mining Incomee')}</Text>
      <InviteButton onClick={()=>{
        router.push('/community')
      }}>
        <Text size={16} webSize={32} color='#000'>{t('To Invite')}</Text>
      </InviteButton>
      <Text size={14} webSize={24} color='#D3DFFC'>{t('Community Mining Benifits Include')}</Text>
    </TitleView>
    <Content>
      <FlexViewBetween>
        <FlexViewCenterColumn style={{width:'fit-content'}}>
          <Text size={12} webSize={24} color='#D3DEFC'>{t('Promotion')}</Text>
          <Text size={12} webSize={24} color='#D3DEFC'>{t('Benefits')}</Text>
        </FlexViewCenterColumn>
        <Line/>
        <FlexViewCenterColumn style={{width:'fit-content'}}>
          <Text size={12} webSize={24} color='#D3DEFC'>{t('Super Node')}</Text>
          <Text size={12} webSize={24} color='#D3DEFC'>{t('Benefits')}</Text>
        </FlexViewCenterColumn>
        <Line/>
        <FlexViewCenterColumn style={{width:'fit-content',alignItems:'flex-end'}}>
          <Text size={12} webSize={24} color='#D3DEFC'>{t('Common Node')}</Text>
          <Text size={12} webSize={24} color='#D3DEFC'>{t('Benefits')}</Text>
        </FlexViewCenterColumn>
      </FlexViewBetween>
    </Content>
    <SpaceHeight height={24}/>
    <Content>
      <FlexView>
        <TitleIcon>
          <Image src={ImageCommon.overview} layout='fill'/>
        </TitleIcon>
        <Text size={12} webSize={24} color='#D3DEFC'>{t('Overview fo community mining income collection')}</Text>
      </FlexView>
      <LineH/>
      <Choose currency={currency} onSelect={(token:string)=>setCurrency(token)}/>
      <SpaceHeight height={24}/>
      <FlexViewBetween>
        <FlexViewCenterColumn style={{width:'100%'}}>
          {communityEarnInfo.isLoading ? <LoadingRow width='30%'/> : <TextExtraBold size={18} webSize={36}>{communityEarnInfo.data?.waitReceive}</TextExtraBold>}
          <Text size={12} webSize={24} color='#D3DEFC'>{t('Pending Receipt')}</Text>
        </FlexViewCenterColumn>
        <Line/>
        <FlexViewCenterColumn style={{width:'100%'}}>
          {communityEarnInfo.isLoading ? <LoadingRow width='30%'/> : <TextExtraBold size={18} webSize={36}>{communityEarnInfo.data?.received}</TextExtraBold>}
          <Text size={12} webSize={24} color='#D3DEFC'>{t('Benefits Receipt')}</Text>
        </FlexViewCenterColumn>
      </FlexViewBetween>
      <ReceiveButton style={{width:'100%'}} onClick={onReceive}>
        <Text size={16} webSize={32} color='#000'>{t('Recevive Benefits')}</Text>
      </ReceiveButton>
      <InfoView>
        <FlexViewBetween>
          <InfoItem>
            <Text style={{textAlign:'center'}} size={12} webSize={24} color={'#D3DEFC'}>{t('the previous community mining income')}</Text>
            {communityEarnInfo.isLoading ? <LoadingRow width='30%'/> : <TextExtraBold size={18} webSize={36}>{communityEarnInfo.data?.lastMint}</TextExtraBold>}
          </InfoItem>
          <Line/>
          <InfoItem>
            <Text style={{textAlign:'center'}} size={12} webSize={24} color={'#D3DEFC'}>{t('my total income for the previous period')}</Text>
            {communityEarnInfo.isLoading ? <LoadingRow width='30%'/> : <TextExtraBold size={18} webSize={36}>{communityEarnInfo.data?.myLastMint}</TextExtraBold>}
          </InfoItem>
        </FlexViewBetween>
        <SpaceHeight height={24}/>
        <FlexViewBetween>
          <InfoItem>
            <Text style={{textAlign:'center'}} size={12} webSize={24} color={'#D3DEFC'}>{t('the Sum of community mining revenue')}</Text>
            {communityEarnInfo.isLoading ? <LoadingRow width='30%'/> : <TextExtraBold size={18} webSize={36}>{communityEarnInfo.data?.communityTotal}</TextExtraBold>}
          </InfoItem>
          <Line/>
          <InfoItem>
            <Text style={{textAlign:'center'}} size={12} webSize={24} color={'#D3DEFC'}>{t('the direct inviter’s income in the previous period')}</Text>
            {communityEarnInfo.isLoading ? <LoadingRow width='30%'/> : <TextExtraBold size={18} webSize={36}>{communityEarnInfo.data?.lastDirect}</TextExtraBold>}
          </InfoItem>
        </FlexViewBetween>
        <SpaceHeight height={24}/>
        <FlexViewBetween>
          <InfoItem>
            <Text style={{textAlign:'center'}} size={12} webSize={24} color={'#D3DEFC'}>{t('own current promotion computing power')}</Text>
            {communityEarnInfo.isLoading ? <LoadingRow width='30%'/> : <TextExtraBold size={18} webSize={36}>{communityEarnInfo.data?.myPower}</TextExtraBold>}
          </InfoItem>
          <Line/>
          <InfoItem>
            <Text style={{textAlign:'center'}} size={12} webSize={24} color={'#D3DEFC'}>{t('own current node computing power')}</Text>
            {communityEarnInfo.isLoading ? <LoadingRow width='30%'/> : <TextExtraBold size={18} webSize={36}>{communityEarnInfo.data?.myNodePower}</TextExtraBold>}
          </InfoItem>
        </FlexViewBetween>
      </InfoView>
    </Content>
    <SpaceHeight height={30}/>
    <FlexViewCenter>
      <ReardIcon>
        <Image src={ImageCommon.p1} layout='fill'/>
      </ReardIcon>
      <Text size={14} webSize={28} color={'#FFA845'}>{t('View todays ranking')}</Text>
    </FlexViewCenter>
    <SpaceHeight height={24}/>
    <TodayRanking/>
  </Main>
}
function TodayRanking(){
  const {t} = useTranslationLanguage()

  const [currency,setCurrency] = useState('OMNI')
  const [show,setShow] = useState(false)
  function onShow(){
    setShow(!show)
  }
  return <Content>
    <FlexViewBetween>
      <Text size={16} webSize={32} color={'#FFA845'}>{t('Details of community mining income')}</Text>
      <ArrowDown onClick={onShow}>
        <Image src={ImageCommon.arrowdownblack} layout='fill'/>
      </ArrowDown>
    </FlexViewBetween>
    <SpaceHeight height={10}/>
    {show && <FlexViewColumn style={{width:'100%'}}>
      <Text size={16} webSize={32}>{t('Extract Records')}</Text>
      <SpaceHeight height={10}/>
      <Text size={16} webSize={32}>{t('Node Ranking Records')}</Text>
      <SpaceHeight height={10}/>
      <Text size={16} webSize={32}>{t('Periodic Settlement Parameters')}</Text>
    </FlexViewColumn>}
    <SpaceHeight height={10}/>
    <Choose currency={currency} onSelect={(token:string)=>setCurrency(token)}/>
    <SpaceHeight height={20}/>
    <RankingList/>
  </Content>
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
function RankingList({currency}:any){
  const {t} = useTranslationLanguage()
  const list:any = [1]
  return <AddressView>
    <AddressTitle>
      <TextSemiBold size={10} webSize={24} color='#010101'>{t('Release Time')}</TextSemiBold>
      <TextSemiBold style={{textAlign:'center'}} size={10} webSize={24} color='#010101'>{t('Income Type')}</TextSemiBold>
      <TextSemiBold style={{textAlign:'right'}} size={10} webSize={24} color='#010101'>{t('Hashrate Weight')}</TextSemiBold>
    </AddressTitle>
    {
      list.length == 0 ? <NotData/> : list.map((item:any,index:number)=>{
        return <AddressViewItem key={index+'Address'}>
          <FlexViewBetween>
            <Text size={12} webSize={24}>0</Text>
            <Text size={12} webSize={24}>0</Text>
            <Text size={12} webSize={24}>0</Text>
          </FlexViewBetween>
          {index != list.length - 1 && <LineH/>}
        </AddressViewItem>
      })
    }
  </AddressView>
}
