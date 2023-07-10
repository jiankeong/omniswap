import { isBrowser, isMobile } from "react-device-detect"
import styled from "styled-components"
import ImageCommon from "../../../public/images/ImageCommon"
import { autoWidthVW, colors } from "../../common/Common"
import { FlexViewBetween, FlexView, FlexViewColumn, FlexViewCenter, FlexViewCenterColumn, SpaceWidth } from "../Common"
import { useRouter } from "next/router";
import { header_ZIndex } from "../../common/constants"
import Image from "next/image"
import { useDispatch } from "react-redux"
import useTranslationLanguage from "../../hooks/useTranslationLanguage"
import Language from "../Language"
import { Text, TextBold, TextSemiBold } from "../Text"
import { useState } from "react"
import ConnectWallet, { ConnectWalletMobile } from "../ConnectWallter"
import { scrollToAnchor } from '../../common/Common'
// import MobileHeader from "./mobile"
import dynamic from "next/dynamic"
import PhoneMenuIcon from "../PhoneMenuIcon"
import { Menus } from "../LeftMenu"

export default function Header() {
  const router = useRouter()
  return <HeaderView style={{
    background:router.pathname == '/' ? 'transparent' : 'rgba(20, 22, 30, 0.8)'
  }}>
    <Content>
      <Logo onClick={() => {
        router.push('/')
      }}>
        <Image src={ImageCommon.logoicon} alt='' layout='fill' priority={false}/>
      </Logo>
      <FlexView>
        <MenuView>
          <Menus/>
          <ConnectWallet/>
          <SpaceWidth width={25}/>
        </MenuView>
        <MenuViewMobile>
          <ConnectWalletMobile/>
        </MenuViewMobile>
        <Language/>
        <SpaceWidth width={24} webWidth={0}/>
        <PhoneMenuIcon/>
      </FlexView>
    </Content>
  </HeaderView>
}
const MenuViewMobile = styled(FlexView)`
  display:none;
  @media (max-width: 768px) {
    display:flex;
    margin-right:${autoWidthVW(30)};
  };
`
const MenuView = styled(FlexView)`
  @media (max-width: 768px) {
    display:none
  };
`
const Logo = styled(FlexView)`
  width:${autoWidthVW(320)};
  height:${autoWidthVW(60)};
  @media (max-width: 768px) {
    width:${autoWidthVW(160)};
    height:${autoWidthVW(30)};
  };
  cursor:pointer;
`
const HeaderView = styled(FlexViewCenter)`
  width:100%;
  height:${autoWidthVW(100)};
  z-index:${header_ZIndex};
  position:fixed;
  left:0;
  top:0;
  @media (max-width: 768px) {
    height:${autoWidthVW(50)};
    padding:0 ${autoWidthVW(20)};
  };
`
const Content = styled(FlexViewBetween)`
  width:100%;
  padding:0 ${autoWidthVW(100)};
  @media (max-width: 768px) {
    max-width:100%;
    padding:0
  }
`