import type {NextPage} from 'next'
import Image from 'next/image'
import ImageCommon from '../../public/images/ImageCommon'
import { FlexViewBetween, FlexView, FlexViewColumn, SpaceHeight, SpaceWidth, FlexViewCenter, FlexViewEnd } from '../components/Common'
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
  SwapView
} from '../styles/Swap'
import { useRouter } from 'next/router'
import { message } from 'antd'
import { useAccount, useNetwork } from 'wagmi'
import copy from 'copy-to-clipboard';
import { autoWidthVW, formatAccount } from '../common/Common'
import { useEffect, useState } from 'react'
import { useSendTransaction } from '../contract'
import SwapToken from '../components/SwapToken'
import { swapTokens } from '../components/SwapToken/TokenList'
import { useModalContext } from '../provider/modalProvider'
import Slippage from '../components/SwapToken/Slippage'



const Swap: NextPage = (props: any) => {
  const {t} = useTranslationLanguage()
  const router = useRouter()
  const {address} = useAccount()
  const {chain = {id: 56}} = useNetwork()
  const modalContext = useModalContext()
  const [fromToken,setFromToken] = useState<any>(swapTokens[0])
  const [toToken,setToToken] = useState<any>({})

  function onFromToken(info:any){
    console.log('from===',info.name,info.value[chain.id])
    console.log('to===',toToken)

    setFromToken(info)
  }

  function onToToken(info:any){
    console.log('from===',fromToken)
    console.log('to===',info.name,info.value[chain.id])
    setToToken(info)
  }

  function onExchange(){
    const [from,to] = [toToken,fromToken]
    console.log('from==========',from)
    console.log('to==========',to)
    setFromToken(from)
    setToToken(to)
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

  return <Main>
    <TopLeft>
      <Image src={ImageCommon.SWAP} layout='fill'/>
    </TopLeft>
    <TopRight>
      <Image src={ImageCommon.swapicon} layout='fill'/>
    </TopRight>
    <TitleView>
      <TextBold size={0} webSize={64}>{t('Swap')}</TextBold>
      <Text size={0} webSize={24} color='#868AAE'>{t('Swap')}</Text>
    </TitleView>
    <Content>
      <FlexViewBetween>
        <FlexView>
          <TitleIcon>
            <Image src={ImageCommon.menus} layout='fill'/>
          </TitleIcon>
          <TextSemiBold size={16} webSize={30}>{t('Swap')}</TextSemiBold>
        </FlexView>
        <Setting onClick={onSlippage}>
          <Image src={ImageCommon.setting} layout='fill'/>
        </Setting>
      </FlexViewBetween>
      <Line/>
      <SwapView>
        <SwapToken coin={fromToken.name} onChoose={onFromToken}/>
        <FlexViewColumn>
          <SpaceHeight height={0} webHeight={50}/>
          <EchangeIcon onClick={onExchange}>
            <Image src={ImageCommon.exchange} layout='fill'/>
          </EchangeIcon>
        </FlexViewColumn>
        <SwapToken coin={toToken.name} editable={false} max={false} onChoose={onToToken}/>
      </SwapView>
      <FlexViewEnd>
        <TextSemiBold size={14} webSize={24} color='#FFA845'>1 {fromToken.name} ≈ 1 {toToken.name}</TextSemiBold>
      </FlexViewEnd>
      <SwapButton>
        <TextExtraBold size={16} webSize={32} color='#000'>{t('approve')}</TextExtraBold>
      </SwapButton>
      <Line/>
      <SwapInfo>
        <FlexViewBetween>
          <FlexView>
            <TextRegular size={12} webSize={24}>{t('Slippage Difference')}</TextRegular>
            <Sqicon>
              <Image src={ImageCommon.quest} layout='fill'/>
            </Sqicon>
          </FlexView>
          <TextRegular size={12} webSize={24}>0.5%</TextRegular>
        </FlexViewBetween>
        <SpaceHeight height={10}/>
        <FlexViewBetween>
          <FlexView>
            <TextRegular size={12} webSize={24}>{t('Price Impact')}</TextRegular>
            <Sqicon>
              <Image src={ImageCommon.quest} layout='fill'/>
            </Sqicon>
          </FlexView>
          <TextRegular size={12} webSize={24}>0.09%</TextRegular>
        </FlexViewBetween>
        <SpaceHeight height={10}/>
        <FlexViewBetween>
          <FlexView>
            <TextRegular size={12} webSize={24}>{t('Minimum Received')}</TextRegular>
            <Sqicon>
              <Image src={ImageCommon.quest} layout='fill'/>
            </Sqicon>
          </FlexView>
          <TextRegular size={12} webSize={24}>100USDT</TextRegular>
        </FlexViewBetween>
        <SpaceHeight height={10}/>
        <FlexViewBetween>
          <FlexView>
            <TextRegular size={12} webSize={24}>{t('Inject Into LP Pool')}</TextRegular>
            <Sqicon>
              <Image src={ImageCommon.quest} layout='fill'/>
            </Sqicon>
          </FlexView>
          <TextRegular size={12} webSize={24}>100.23</TextRegular>
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
      <SwapToken showBalance={false} coin={'OMNI'} editable={false} max={false} value={'100.123'}/>
    </Content>
  </Main>
}
export default Swap
export async function getStaticProps() {
  return {
    props: {
    },
    // revalidate: 24*60*60,  //1天更新一次 (单位秒)
  }
}
// image:'/images/Mobilink_new.png',