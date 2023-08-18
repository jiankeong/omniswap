import type {NextPage} from 'next'
import Image from 'next/image'
import ImageCommon from '../../public/images/ImageCommon'
import { FlexViewBetween, FlexView, FlexViewColumn, SpaceHeight, LoadingRow } from '../components/Common'
import { Text, TextBold, TextExtraBold, TextExtraLight } from '../components/Text'
import useTranslationLanguage from '../hooks/useTranslationLanguage'
import {
  Main,
  TopBg,
  Content,
  TitleIcon,
  NFTItemView,
  NFTIcon,
  ItemRight,
  ConfirButton,
  NFTLevelIcon,
  Line,
  TipIcon,
  TopRightBg,
  TitleView,
  NFTButton,
  Arrow,
  ButtonView
} from '../styles/NFT'
import { useRouter } from 'next/router'
import { message } from 'antd'
import { useSpring } from '@react-spring/web'
import { isBrowser } from 'react-device-detect'
import { useApprove, useInviteInfo, useNfInfo, useNFTOpenStatus, useSendTransaction } from '../contract'
import { useOMINT3Contract } from '../hooks/useContract'
import { OMINT3_ADDRESSSES, USDT_ADDRESSSES } from '../constants/addresses'
import { ApprovalState, ZERO_ADDRESS } from '../common/Common'
import { useModalContext } from '../provider/modalProvider'
import GotoInviteModal from '../pagesComponents/GotoInviteModal'


const nfts = [
  {
    id:1,
    limit:'Limit one purchase per address',
    shadow:'#8187F5',
    space:100,
    icon:ImageCommon.NFT_1,
    levelIcon:ImageCommon.NFT_lev_1
  },
  {
    id:1,
    limit:'Limit one purchase per address',
    shadow:'#8187F5',
    space:100,
    icon:ImageCommon.NFT_1,
    levelIcon:ImageCommon.NFT_lev_1,
    isOmni:true
  },
  {
    id:2,
    limit:'Limit one purchase per address',
    shadow:'#80FB73',
    space:-100,
    icon:ImageCommon.NFT_2,
    levelIcon:ImageCommon.NFT_lev_2
  },
  {
    id:2,
    limit:'Limit one purchase per address',
    shadow:'#80FB73',
    space:-100,
    icon:ImageCommon.NFT_2,
    levelIcon:ImageCommon.NFT_lev_2,
    isOmni:true
  },
  {
    id:3,
    limit:'Limit one purchase per address',
    shadow:'#FFA845',
    space:100,
    icon:ImageCommon.NFT_3,
    levelIcon:ImageCommon.NFT_lev_3
  },
  {
    id:3,
    limit:'Limit one purchase per address',
    shadow:'#FFA845',
    space:100,
    icon:ImageCommon.NFT_3,
    levelIcon:ImageCommon.NFT_lev_3,
    isOmni:true
  },
  {
    id:4,
    limit:'Limit one purchase per address',
    shadow:"#00FF3880",
    space:-100,
    icon:ImageCommon.NFT_4,
    levelIcon:ImageCommon.NFT_lev_4
  },
  {
    id:4,
    limit:'Limit one purchase per address',
    shadow:"#00FF3880",
    space:-100,
    icon:ImageCommon.NFT_4,
    levelIcon:ImageCommon.NFT_lev_4,
    isOmni:true
  },
  {
    id:5,
    limit:'Limit one purchase per address',
    shadow:"#B9CCFF",
    space:100,
    icon:ImageCommon.NFT_5,
    levelIcon:ImageCommon.NFT_lev_5
  },
  {
    id:5,
    limit:'Limit one purchase per address',
    shadow:"#B9CCFF",
    space:100,
    icon:ImageCommon.NFT_5,
    levelIcon:ImageCommon.NFT_lev_5,
    isOmni:true
  },
  {
    id:6,
    limit:'Limit one purchase per address',
    shadow:"#DF5EFF80",
    space:-100,
    icon:ImageCommon.NFT_6,
    levelIcon:ImageCommon.NFT_lev_6
  },
  {
    id:6,
    limit:'Limit one purchase per address',
    shadow:"#DF5EFF80",
    space:-100,
    icon:ImageCommon.NFT_6,
    levelIcon:ImageCommon.NFT_lev_6,
    isOmni:true
  },
  {
    id:7,
    limit:'Limit one purchase per address',
    shadow:"#37FFDB",
    space:100,
    icon:ImageCommon.NFT_7,
    levelIcon:ImageCommon.NFT_lev_7
  },
  {
    id:7,
    limit:'Limit one purchase per address',
    shadow:"#37FFDB",
    space:100,
    icon:ImageCommon.NFT_7,
    levelIcon:ImageCommon.NFT_lev_7,
    isOmni:true
  }
]

const NFT: NextPage = (props: any) => {
  const {t} = useTranslationLanguage()
  const router = useRouter()
  return <Main>
    <TopBg>
      <Image src={isBrowser?ImageCommon.NFTPresale:ImageCommon.NFTPresalepmobile} layout='fill'/>
    </TopBg>
    <TopRightBg>
      <Image src={ImageCommon.NFTPresaleiocn} layout='fill'/>
    </TopRightBg>
    <TitleView>
      <TextBold size={0} webSize={64}>{t('NFT Presale')}</TextBold>
      <Text size={0} webSize={24} color='#868AAE'>{t('NFT Presale')}</Text>
    </TitleView>
    <ButtonView>
      <NFTButton onClick={()=>{
        router.push('/myNft')
      }}>
        <Text size={16} webSize={24} color='#010101'>{t('My NFTs')}</Text>
        <Arrow>
          <Image src={ImageCommon.arrowright} layout='fill'/>
        </Arrow>
      </NFTButton>
    </ButtonView>
    <Content>
      <FlexView>
        <TitleIcon>
          <Image src={ImageCommon.Open} layout='fill'/>
        </TitleIcon>
        <TextExtraBold size={16} webSize={24}>{t('NFT Presale')}</TextExtraBold>
      </FlexView>
      <SpaceHeight height={20}/>
      {
        nfts.map((item:any,index:number)=>{
          return <NFTItem item={item} key={index+'NFT'} index={index+1} space={item.space}/>
        })
      }
    </Content>
  </Main>
}
function NFTItem({item,index,space}:any){
  const NFTOpenStatus = useNFTOpenStatus(item.id,index)
  const nftInfo = useNfInfo(item.id,index)
  const springs = useSpring({
    from: { marginLeft: space },
    to: { marginLeft: 0 }
  })
  const {t} = useTranslationLanguage()
  const OMINT3Contract = useOMINT3Contract(OMINT3_ADDRESSSES)

  const sendTransaction = useSendTransaction()
  const [approveStatus,approved] = useApprove(USDT_ADDRESSSES,OMINT3_ADDRESSSES,item.price)

  const inviteInfo = useInviteInfo()
  const modalContext = useModalContext()
  const router = useRouter()
  function onMint(){
    if (!NFTOpenStatus.data?.open){
      if (nftInfo.data?.amount == 0){
        message.warning(t('sold out'))
      }else {
        message.warning('coming soon~')
      }
      return
    }
    if (inviteInfo.data?.inviter == ZERO_ADDRESS){
      modalContext.show(<GotoInviteModal onClose={()=>{
        modalContext.hidden()
      }} onSure={()=>{
        modalContext.hidden()
        router.push('/community')
      }}/>,{
        style:{
          justifyContent:'center'
        }
      })
      return
    }
    if (!OMINT3Contract){
      return
    }
    if (approveStatus != ApprovalState.APPROVED){
      approved()
      return
    }
    if (nftInfo.data?.has){
      message.warning('has mint')
      return
    }

    sendTransaction.mutate({
      title:'Mint',
      func:OMINT3Contract.OMNIMint,
      args:[item.id],
      onSuccess: () =>{
        nftInfo.refetch()
      },
      onError:()=>{
      }
    })
  }

  const Icon = <NFTIcon>
    <Image src={item.icon} layout='fill'/>
  </NFTIcon>
  const Info = <FlexViewColumn>
    {nftInfo.isLoading ? <LoadingRow width='100px'/> : <Text size={16} webSize={36}>Price:{item.isOmni ? nftInfo.data?.omniPrice : nftInfo.data?.price} {item.isOmni ? 'OMNI' : 'USDT'}</Text>}
    <SpaceHeight height={5}/>
    {nftInfo.isLoading ? <LoadingRow width='100px'/> : <TextExtraLight color='#989DAA' size={14} webSize={24}>Amount:{nftInfo.data?.amount}</TextExtraLight>}
  </FlexViewColumn>
  const Level = <NFTLevelIcon>
    <Image src={item.levelIcon} layout='fill'/>
  </NFTLevelIcon>

  const Confirm = <ConfirButton able={NFTOpenStatus.data?.open} bgColor={item.shadow} onClick={onMint}>
    <Text size={16} webSize={32} color={NFTOpenStatus.data?.open?'#000':"#fff"}>
      {nftInfo.data?.amount == 0 ? t('sold out') :
      (approveStatus != ApprovalState.APPROVED ? t('buy') : (NFTOpenStatus.data?.open ? (nftInfo.data?.has ? t('has mint') : t('Confirm')) : t('not open')))
      }
      </Text>
  </ConfirButton>
  const Tip = <FlexViewColumn style={{width:'100%'}}>
    <Line/>
    <FlexView>
      <TipIcon>
        <Image src={ImageCommon.tips} layout='fill'/>
      </TipIcon>
      <TextExtraLight color='#868AAE' size={12} webSize={24}>{t(item.limit)}</TextExtraLight>
    </FlexView>
  </FlexViewColumn>
  if (isBrowser){
    return <NFTItemView style={{...springs}} able={NFTOpenStatus.data?.open} shadowColor={item.shadow}>
      <FlexView style={{flex:1}}>
        {Level}
        {Icon}
        <FlexViewColumn style={{flex:1}}>
          {Info}
          {Tip}
        </FlexViewColumn>
      </FlexView>
      {Confirm}
    </NFTItemView>
  }
  return <NFTItemView style={{...springs}} able={NFTOpenStatus.data?.open} shadowColor={item.shadow}>
    <FlexViewBetween>
      {Icon}
      <ItemRight>
        <FlexViewBetween>
          {Info}
          {Level}
        </FlexViewBetween>
        {Confirm}
      </ItemRight>
    </FlexViewBetween>
    {Tip}
  </NFTItemView>
}
export default NFT
export async function getStaticProps() {
  return {
    props: {
    },
    // revalidate: 24*60*60,  //1天更新一次 (单位秒)
  }
}
// image:'/images/Mobilink_new.png',