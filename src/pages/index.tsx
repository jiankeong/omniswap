import type {NextPage} from 'next'
import Image from 'next/image'
import { isBrowser } from 'react-device-detect'
import ImageCommon from '../../public/images/ImageCommon'
import { blurDataURL } from '../common/constants'
import { FlexViewBetween, FlexViewCenterColumn, FlexViewColumn, SpaceHeight } from '../components/Common'
import { TextBold,Text, TextThin, TextExtraLight } from '../components/Text'
import useTranslationLanguage from '../hooks/useTranslationLanguage'
import {
  Main,
  TopBg,
  TopIcon,
  Content,
  NFTButton,
  AppButton,
  Title,
  TitleDes,
  ButtonView
} from '../styles/Home'
import { useEffect, useState } from 'react'
import Contact from '../components/Contact'
import { useRouter } from 'next/router'
import { message } from 'antd'
import { useDispatch } from 'react-redux'
import { changeTabIndex } from '../state/tabbar'
import { useSigner } from 'wagmi'

const Home: NextPage = (props: any) => {
  const {t} = useTranslationLanguage()
  const router = useRouter()
  const [pageHeight,setPageHeight] = useState('fit-content')
  const dispatch = useDispatch()
  useEffect(()=>{
    setPageHeight(window.innerHeight+'px')
  },[])
  return <Main style={{height:pageHeight}}>
    <TopBg>
      <Image src={ImageCommon.homebg} layout='fill'/>
    </TopBg>
    <TopIcon>
      <Image src={ImageCommon.homeic} layout='fill'/>
    </TopIcon>
    <Content>
      <Title size={32} webSize={128}>{t('OMNISWAP PROTOCOL')}</Title>
      <SpaceHeight height={10}/>
      <TitleDes size={14} webSize={36}>{t('home dees')}</TitleDes>
      <ButtonView>
        <NFTButton onClick={()=>{
          router.push('/nft')
          dispatch(changeTabIndex({tabIndex:4}))
        }}>
          <Text color='#010101' size={16} webSize={24}>{t('NFT Presale')}</Text>
        </NFTButton>
        <AppButton onClick={()=>{
          message.warning('coming soon~')
        }}>
          <Text color='#010101' size={16} webSize={24}>{t('Launch App')}</Text>
        </AppButton>
      </ButtonView>
      <SpaceHeight height={20}/>
      <Contact/>
    </Content>
  </Main>
}
export default Home
export async function getStaticProps() {
  return {
    props: {
    },
    // revalidate: 24*60*60,  //1天更新一次 (单位秒)
  }
}
// image:'/images/Mobilink_new.png',