import styled from "styled-components";
import { autoWidthVW,  colors} from "../../common/Common";
import {
  FlexView,
    FlexViewBetween,
    FlexViewCenter,
    FlexViewColumn,
    FlexViewCenterColumn
} from "../Common";
import React, { useState } from "react";
import {TextSemiBold} from '../Text'
import { message } from "antd";
import { useRouter } from "next/router";
import ImageCommon from "../../../public/images/ImageCommon";
import { footer_ZIndex } from "../../common/constants";
import Image from "next/image";
import { isBrowser } from "react-device-detect";
import { changeTabIndex, useTabIndex } from "../../state/tabbar"
import { useDispatch } from "react-redux"
import useTranslationLanguage from "../../hooks/useTranslationLanguage";

export default function Tabbar() {
  const router = useRouter()
  const selectIndex = useTabIndex()
  const dispatch = useDispatch()
  const {t} = useTranslationLanguage()
  return(
    <ContactMain>
      {
        [
          {name:t('Home'),path:'/home',icon:'tab_Home_n',selectIcon:'tab_Home_s',able:true},
          {name:t('Market'),path:'/marketHome',icon:'tab_Shop_n',selectIcon:'tab_Shop_s',able:true},
          {name:t('NFT'),path:'/nft',icon:'tab_Blockchain_n',selectIcon:'tab_Blockchain_s',able:false},
          {name:t('Box'),path:'/blindBox',icon:'tab_Present_n',selectIcon:'tab_Present_s',able:true},
          {name:t('My'),path:'/mine',icon:'tab_Users_n',selectIcon:'tab_Users_s',able:true}
        ].map((item:any,index:number)=>{
          return <ContentView key={index} onClick={()=>{
            if (item.able){
              router.push(item.path)
              dispatch(changeTabIndex({tabIndex:index}))
            }else {
              message.warn('coming soon')
            }
          }}>
          <Logo src={selectIndex == index ? ImageCommon[item.selectIcon] : ImageCommon[item.icon]}/>
          <TextSemiBold color={selectIndex == index?colors.main:colors.tabbar}>{item.name}</TextSemiBold>
        </ContentView>
        })
      }
    </ContactMain>
  )
}
const ContentView = styled(FlexViewCenterColumn)`
  flex:1;
  cursor:pointer
`
const ContactMain = styled(FlexViewBetween)`
  position:fixed;
  z-index:${footer_ZIndex};
  bottom:0;
  width:100%;
  background-color:#192030;
  height:${autoWidthVW(100)};
`
const Logo = styled.img`
  height:${autoWidthVW(20)};
  width:${autoWidthVW(20)};
  margin-bottom:${autoWidthVW(10)};
`