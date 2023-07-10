import styled from "styled-components";
import { autoWidthVW,  colors} from "../../common/Common";
import {
  FlexView,
    FlexViewBetween,
    FlexViewCenter,
    FlexViewColumn
} from "../Common";
import React, { useState } from "react";
import {Text} from '../../components/Text'
import { message } from "antd";
import { useRouter } from "next/router";
import ImageCommon from "../../../public/images/ImageCommon";
import { footer_ZIndex } from "../../common/constants";
import Image from "next/image";
import { isBrowser } from "react-device-detect";
export default function Footer() {
  return(
    <ContactMain>
      <LogoView>
        <Logo src={ImageCommon.logo}/>
        <FlexView>
          <Title webSize={24} size={14}>Learn</Title>
          <LineV/>
          <Title webSize={24} size={14}>Function</Title>
          <LineV/>
          <Title webSize={24} size={14}>Brand</Title>
        </FlexView>
        <Text webSize={20} size={12}>© 2023 INTO. All Rights Reserved.</Text>
      </LogoView>
      <FlexView>
        <a href="https://medium.com/@intoverse" target={"_blank"} rel="noreferrer">
          <ConnectIcon image={ImageCommon.mediun} hoverImage={ImageCommon.mediun_sel}/>
        </a>
        {/* <ConnectIcon image={ImageCommon.discord} hoverImage={ImageCommon.discord_sel}/> */}
        <a href="https://twitter.com/INTOverse_" target={"_blank"} rel="noreferrer">
          <ConnectIcon image={ImageCommon.twitter} hoverImage={ImageCommon.twitter_sel}/>
        </a>
        <a href="https://t.me/INTOverseOfficial" target={"_blank"} rel="noreferrer">
          <ConnectIcon image={ImageCommon.telegram} hoverImage={ImageCommon.telegram_sel}/>
        </a>
        {/* <ConnectIcon image={ImageCommon.reddit} hoverImage={ImageCommon.reddit_sel}/>
        <ConnectIcon image={ImageCommon.Github} hoverImage={ImageCommon.Github_sel}/>
        <ConnectIcon image={ImageCommon.Youtub} hoverImage={ImageCommon.Youtub_sel}/> */}
      </FlexView>
    </ContactMain>
  )
}
const LineV = styled.div`
  width:1px;
  height:${autoWidthVW(30)};
  background:#fff;
  margin:${autoWidthVW(30)} ${autoWidthVW(40)};
  @media (max-width: 768px) {
    height:${autoWidthVW(20)};
    margin:${autoWidthVW(20)};
  }
`
const Title = styled(Text)`
  :hover {
    color:#AA86FF
  };
  cursor:pointer
`
const LogoView = styled(FlexViewColumn)`
  align-items: flex-start;
  @media (max-width: 768px) {
    align-items: center;
    margin-bottom: ${autoWidthVW(20)};
  }
`
const ContactMain = styled(FlexViewBetween)`
  width:100%;
  padding:${autoWidthVW(80)} ${autoWidthVW(200)};
  background-color:#000;
  margin-top: ${autoWidthVW(150)};
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding:0;
    padding:${autoWidthVW(30)} 0;
    margin-top: ${autoWidthVW(80)};
  }
`
const Logo = styled.img`
  height:${autoWidthVW(48)};
  width:${autoWidthVW(146)};
  margin-bottom: ${autoWidthVW(20)};
  @media (max-width: 768px) {
    height:${autoWidthVW(24)};
    width:${autoWidthVW(73)};
    margin-bottom: ${autoWidthVW(10)};
  }
`
const ConnectIcon = styled.div<{
  image:any,
  hoverImage:any
}>`
  height:${autoWidthVW(48)};
  width:${autoWidthVW(48)};
  cursor:pointer;
  background-position:center;
  background-image:${({image})=>`url(${image})`};
  background-size:100% 100%;
  background-repeat: no-repeat;
  :hover{
    background-image:${({hoverImage})=>`url(${hoverImage})`};
  };
  margin-left:${autoWidthVW(25)};
  @media (max-width: 768px) {
    margin:0 ${autoWidthVW(8)};
    height:${autoWidthVW(24)};
    width:${autoWidthVW(24)};
    margin-left:${autoWidthVW(12)};
  }
`
