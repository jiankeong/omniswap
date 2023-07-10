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
  TitleView,
  TitleIcon,
  Line,
  Picon
} from '../styles/Ranking'
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
import NotData from '../components/NotData'



const NodeRanking: NextPage = (props: any) => {
  const {t} = useTranslationLanguage()
  const router = useRouter()
  const {address} = useAccount()

  return <Main>
    <TopLeft>
      <Image src={ImageCommon.Rankbg} layout='fill'/>
    </TopLeft>
    <TopRight>
      <Image src={ImageCommon.Rank} layout='fill'/>
    </TopRight>
    <TitleView>
      <TextBold size={40} webSize={64}>{t('Today’s Node ranking')}</TextBold>
      <Text size={18} webSize={36} color='#FFAD4F'>{t('Your Current Rank--Keep Going!')}</Text>
      <SpaceHeight height={12}/>
      <Text size={12} webSize={18} color='#868AAE'>{t('Node ranking Content')}</Text>
    </TitleView>
    <SuperNode/>
    <SpaceHeight height={24}/>
    <OrdinaryNode/>
  </Main>
}
function SuperNode(){
  const {t} = useTranslationLanguage()
  let list:any = []
  return <Content>
    <FlexViewBetween>
      <FlexView>
        <TitleIcon>
          <Image src={ImageCommon.inv} layout='fill'/>
        </TitleIcon>
        <Text  size={14} webSize={24}>{t('Super Node Ranking')}</Text>
      </FlexView>
      <TitleIcon style={{cursor:'pointer'}}>
        <Image src={ImageCommon.Refresh} layout='fill'/>
      </TitleIcon>
    </FlexViewBetween>
    <Line/>
    <FlexViewBetween>
      <TextRegular color='#D3DEFC' style={{flex:1,textAlign:'left'}} size={14} webSize={24}>{t('Ranking')}</TextRegular>
      <TextRegular color='#D3DEFC' style={{flex:1,textAlign:'center'}} size={14} webSize={24}>{t('Address')}</TextRegular>
      <TextRegular color='#D3DEFC' style={{flex:1,textAlign:'right'}} size={14} webSize={24}>{t('Total Node Hash Rate N ')}</TextRegular>
    </FlexViewBetween>
    {
      list.length == 0 ? <NotData/> : list.map((item:any,index:number)=>{
        return <FlexViewColumn style={{width:'100%'}} key={index+'supernode'}>
          <SpaceHeight height={18}/>
          <FlexViewBetween>
            <FlexView style={{flex:1}}>
              {index < 3 ? <Picon>
                <Image src={ImageCommon['p'+(index+1)]} layout='fill'/>
              </Picon> : <TextRegular size={14} webSize={24}>{index+1}</TextRegular>}
            </FlexView>
            <TextRegular style={{flex:1,textAlign:'center'}} size={14} webSize={24}>{formatAccount('123123')}</TextRegular>
            <TextRegular style={{flex:1,textAlign:'right'}} size={14} webSize={24}>1234 N</TextRegular>
          </FlexViewBetween>
        </FlexViewColumn>
      })
    }
  </Content>
}
function OrdinaryNode(){
  const {t} = useTranslationLanguage()
  let list:any = []
  return <Content>
    <FlexViewBetween>
      <FlexView>
        <TitleIcon>
          <Image src={ImageCommon.OrdinaryNode} layout='fill'/>
        </TitleIcon>
        <Text  size={14} webSize={24}>{t('Ordinary Node Ranking')}</Text>
      </FlexView>
      <TitleIcon style={{cursor:'pointer'}}>
        <Image src={ImageCommon.Refresh} layout='fill'/>
      </TitleIcon>
    </FlexViewBetween>
    <Line/>
    <FlexViewBetween>
      <TextRegular color='#D3DEFC' style={{flex:1,textAlign:'left'}} size={14} webSize={24}>{t('Ranking')}</TextRegular>
      <TextRegular color='#D3DEFC' style={{flex:1,textAlign:'center'}} size={14} webSize={24}>{t('Address')}</TextRegular>
      <TextRegular color='#D3DEFC' style={{flex:1,textAlign:'right'}} size={14} webSize={24}>{t('Total Node Hash Rate N ')}</TextRegular>
    </FlexViewBetween>
    {
      list.length == 0 ? <NotData/> : list.map((item:any,index:number)=>{
        return <FlexViewColumn style={{width:'100%'}} key={index+'Ordinarynode'}>
          <SpaceHeight height={18}/>
          <FlexViewBetween>
            <TextRegular style={{flex:1}} size={14} webSize={24}>{index+1}</TextRegular>
            <TextRegular style={{flex:1,textAlign:'center'}} size={14} webSize={24}>{formatAccount('123123')}</TextRegular>
            <TextRegular style={{flex:1,textAlign:'right'}} size={14} webSize={24}>1234 N</TextRegular>
          </FlexViewBetween>
        </FlexViewColumn>
      })
    }
  </Content>
}
export default NodeRanking
export async function getStaticProps() {
  return {
    props: {
    },
    // revalidate: 24*60*60,  //1天更新一次 (单位秒)
  }
}
// image:'/images/Mobilink_new.png',