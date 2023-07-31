import type {NextPage} from 'next'
import Image from 'next/image'
import ImageCommon from '../../public/images/ImageCommon'
import { FlexViewBetween, FlexView, FlexViewColumn, SpaceHeight, LoadingRow, FlexViewEnd, FlexViewCenterColumn, FlexViewCenter } from '../components/Common'
import { Text, TextBold, TextExtraBold, TextExtraLight, TextSemiBold } from '../components/Text'
import useTranslationLanguage from '../hooks/useTranslationLanguage'
import {
  Main,
  TopBg,
  Content,
  TopRightBg,
  TitleView,
  NFTSmallIcon,
  ReceiveButton
} from '../styles/NFT'
import {
  AddressView,
  AddressViewItem,
  NotdataView,
  Notdata,
  AddressTitle,
  Line
} from '../styles/Community'
import { useRouter } from 'next/router'
import { message } from 'antd'
import { useSpring, animated } from '@react-spring/web'
import { isBrowser } from 'react-device-detect'
import { useApprove, useMyNftInfo, useMyNftListInfo, useNfInfo, useSendTransaction } from '../contract'
import { useNFTContract, useOmniNFTPoolContract } from '../hooks/useContract'
import { OMNINFTPOOL_ADDRESSSES, USDT_ADDRESSSES } from '../constants/addresses'
import { ApprovalState, autoWidthVW, formatAccount } from '../common/Common'
import NotData from '../components/NotData'

const MyNFT: NextPage = (props: any) => {
  const {t} = useTranslationLanguage()
  return <Main>
    <TopBg>
      <Image src={isBrowser?ImageCommon.NFTPresale:ImageCommon.NFTPresalepmobile} layout='fill'/>
    </TopBg>
    <TopRightBg>
      <Image src={ImageCommon.NFTPresaleiocn} layout='fill'/>
    </TopRightBg>
    <TitleView>
      <TextBold size={0} webSize={64}>{t('The NFT I purchased')}</TextBold>
      <Text size={0} webSize={24} color='#868AAE'>{t('Receive nft dividend earnings')}</Text>
    </TitleView>
    <SpaceHeight height={200} webHeight={0}/>
    <Content>
      {isBrowser? <NFTList/> : <NFTListMobile/>}
    </Content>
  </Main>
}
function NFTListMobile(){
  const {t} = useTranslationLanguage()
  const nfts = useMyNftListInfo()

  function onReceive(item:any){

  }
  return <FlexViewCenterColumn style={{width:'100%'}}>
    {
      nfts.isLoading ? <LoadingRow/> : (nfts.data?.list.length == 0 ? <NotData/> : nfts.data?.list.map((item:any,index:number)=>{
        return <AddressViewItem key={index+'mobnft'}>
          <MobileNftItem index={index}/>
          {index != (nfts.data?.list.length || 0) - 1 && <Line/>}
        </AddressViewItem>
      }))
    }
  </FlexViewCenterColumn>
}

function MobileNftItem({index}:any){
  const {t} = useTranslationLanguage()
  const nftInfo = useMyNftInfo(index)
  const sendTransaction = useSendTransaction()
  const OmniNFTPoolContract = useOmniNFTPoolContract(OMNINFTPOOL_ADDRESSSES)
  function onReceive(){

    if (!OmniNFTPoolContract || nftInfo.data?.viewReward == 0 || !nftInfo.data?.activeStats){
      return
    }
    sendTransaction.mutate({
      title:'Claim',
      func:OmniNFTPoolContract.getReward,
      args:[nftInfo.data?.tokenOfOwnerByIndex]
    })
  }
  function onActive(){
    if (!OmniNFTPoolContract){
      return
    }
    sendTransaction.mutate({
      title:'Active',
      func:OmniNFTPoolContract.active,
      args:[nftInfo.data?.tokenOfOwnerByIndex]
    })
  }
  return <FlexViewColumn style={{width:'100%'}}>
    <FlexViewBetween>
      <FlexView style={{alignItems:'flex-start'}}>
        {nftInfo.isLoading ? <LoadingRow width='20%'/> : <FlexView style={{flex:1}}>
          <NFTSmallIcon>
            {nftInfo.data && <Image src={ImageCommon[nftInfo.data.nftImg]} layout='fill'/>}
          </NFTSmallIcon>
        </FlexView>}


        <FlexViewColumn>
          <Text size={14} webSize={32} color='#989DAA'>{t('The weight of nft')}:</Text>
          <SpaceHeight height={5}/>
          <Text size={14} webSize={32} color='#989DAA'>{t('Earnings to be collected')}:</Text>
          <SpaceHeight height={5}/>
          <Text size={14} webSize={32} color='#989DAA'>{t('Earnings issued')}:</Text>
          <SpaceHeight height={5}/>
          <Text size={14} webSize={24} color='#989DAA'>{t('status')}</Text>
        </FlexViewColumn>
      </FlexView>
      <FlexViewColumn>
        <TextSemiBold size={14} webSize={32}>{nftInfo.data?.nftPrice} USDT</TextSemiBold>
        <SpaceHeight height={5}/>
        <TextSemiBold size={14} webSize={32}>{nftInfo.data?.activeStats ? nftInfo.data?.viewReward : 0} OMNI</TextSemiBold>
        <SpaceHeight height={5}/>
        <TextSemiBold size={14} webSize={32}>{nftInfo.data?.claimedReward} OMNI</TextSemiBold>
        <SpaceHeight height={5}/>
        {nftInfo.data?.activeStats ? <Text style={{flex:1,textAlign:'center'}} size={12} webSize={24}>{t('activated')}</Text> : <FlexViewCenter style={{flex:1}}>
          <ReceiveButton disable={true} onClick={onActive}>
            <Text size={14} webSize={32} color='#000'>{t('active')}</Text>
          </ReceiveButton>
        </FlexViewCenter>}
      </FlexViewColumn>
    </FlexViewBetween>
    <SpaceHeight height={20}/>
    <ReceiveButton disable={nftInfo.data?.viewReward != 0 && nftInfo.data?.activeStats} onClick={onReceive}>
      <Text size={14} webSize={32} color='#fff'>{t('Receive earnings')}</Text>
    </ReceiveButton>
    <SpaceHeight height={40}/>

  </FlexViewColumn>
}

function NFTList(){
  const {t} = useTranslationLanguage()
  const nfts = useMyNftListInfo()

  return <AddressView>
    <AddressTitle>
      <TextSemiBold style={{flex:1,textAlign:'center'}} size={12} webSize={24} color='#010101'>{t('NFT')}</TextSemiBold>
      <TextSemiBold style={{flex:1,textAlign:'center'}} size={12} webSize={24} color='#010101'>{t('The weight of nft')}</TextSemiBold>
      <TextSemiBold style={{flex:1,textAlign:'center'}} size={12} webSize={24} color='#010101'>{t('Earnings to be collected')}</TextSemiBold>
      <TextSemiBold style={{flex:1,textAlign:'center'}} size={12} webSize={24} color='#010101'>{t('Earnings issued')}</TextSemiBold>
      <TextSemiBold style={{flex:1,textAlign:'center'}} size={12} webSize={24} color='#010101'></TextSemiBold>
      <TextSemiBold style={{flex:1,textAlign:'center'}} size={12} webSize={24} color='#010101'>{t('status')}</TextSemiBold>

    </AddressTitle>
    {
      nfts.isLoading ? <LoadingRow width='100%'/> : (nfts.data?.list.length == 0 ? <NotData/> : nfts.data?.list.map((item:any,index:number)=>{
        return <AddressViewItem key={index+'webnft'}>
          <NFTItem index={index}/>
          {index != (nfts.data?.list.length || 0) - 1 && <Line/>}
        </AddressViewItem>
      }))
    }
  </AddressView>
}
function NFTItem({index}:any){
  const {t} = useTranslationLanguage()
  const nftInfo = useMyNftInfo(index)
  const sendTransaction = useSendTransaction()
  const OmniNFTPoolContract = useOmniNFTPoolContract(OMNINFTPOOL_ADDRESSSES)
  function onReceive(){

    if (!OmniNFTPoolContract || nftInfo.data?.viewReward == 0 || !nftInfo.data?.activeStats){
      return
    }
    sendTransaction.mutate({
      title:'Claim',
      func:OmniNFTPoolContract.getReward,
      args:[nftInfo.data?.tokenOfOwnerByIndex]
    })
  }
  function onActive(){
    if (!OmniNFTPoolContract){
      return
    }
    sendTransaction.mutate({
      title:'Active',
      func:OmniNFTPoolContract.active,
      args:[nftInfo.data?.tokenOfOwnerByIndex]
    })
  }
  return <FlexViewBetween>
    {nftInfo.isLoading ? <LoadingRow width='20%'/> : <FlexView style={{flex:1}}>
      <NFTSmallIcon>
        {nftInfo.data && <Image src={ImageCommon[nftInfo.data.nftImg]} layout='fill'/>}
      </NFTSmallIcon>
    </FlexView>}
    <Text style={{flex:1,textAlign:'center'}} size={12} webSize={24}>{nftInfo.data?.nftPrice} USDT</Text>
    <Text style={{flex:1,textAlign:'center'}} size={12} webSize={24}>{nftInfo.data?.activeStats ? nftInfo.data?.viewReward : 0} OMNI</Text>
    <Text style={{flex:1,textAlign:'center'}} size={12} webSize={24}>{nftInfo.data?.claimedReward} OMNI</Text>
    <FlexViewCenter style={{flex:1}}>
      <ReceiveButton disable={nftInfo.data?.viewReward != 0 && nftInfo.data?.activeStats} onClick={onReceive}>
        <Text size={14} webSize={32} color='#000'>{t('Receive earnings')}</Text>
      </ReceiveButton>
    </FlexViewCenter>
    {nftInfo.data?.activeStats ? <Text style={{flex:1,textAlign:'center'}} size={12} webSize={24}>{t('activated')}</Text> : <FlexViewCenter style={{flex:1}}>
      <ReceiveButton disable={true} onClick={onActive}>
        <Text size={14} webSize={32} color='#000'>{t('active')}</Text>
      </ReceiveButton>
    </FlexViewCenter>}
  </FlexViewBetween>
}
export default MyNFT
export async function getStaticProps() {
  return {
    props: {
    },
    // revalidate: 24*60*60,  //1天更新一次 (单位秒)
  }
}
// image:'/images/Mobilink_new.png',