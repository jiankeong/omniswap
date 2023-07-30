import styled from "styled-components";
import { autoWidthVW,  colors} from "../../common/Common";
import {
    FlexViewCenter,
    FlexViewColumn,
    FlexView,
    FlexViewBetween
} from "../Common";
import ImageCommon from "../../../public/images/ImageCommon";
import React from "react";
import Image from "next/image";


// 📌Official Website: https://omniswap.io
// 📌OMNI SWAP Gitbook: https://organization-52.gitbook.io/omni-swap-portfolio/
export default function Contact() {
  return(
    <ContentView className='animate__animated animate__backInUp'>
      <ContactIcon onClick={()=>{
        window.open('https://t.me/OmniswapOfficial')
      }}>
        <Image src={ImageCommon.telegram} layout='fill'/>
      </ContactIcon>
      <ContactIcon onClick={()=>{
        window.open('https://discord.gg/omniswap')
      }}>
        <Image src={ImageCommon.Discord} layout='fill'/>
      </ContactIcon>
      <ContactIcon onClick={()=>{
        window.open('https://twitter.com/OMNISWAP_')
      }}>
        <Image src={ImageCommon.twitter} layout='fill'/>
      </ContactIcon>
      <ContactIcon onClick={()=>{
        window.open('https://medium.com/@OMNISWAP')
      }}>
        <Image src={ImageCommon.medium} layout='fill'/>
      </ContactIcon>
      <ContactIcon onClick={()=>{
        window.open('https://omniswapofficial@gmail.com')
      }}>
        <Image src={ImageCommon.Email} layout='fill'/>
      </ContactIcon>
    </ContentView>
  )
}
const ContentView = styled(FlexViewBetween)`
  width:${autoWidthVW(400)};
  @media (max-width: 768px) {
    width:100%
  }
`
const ContactIcon = styled(FlexView)`
  cursor:pointer;
  width:${autoWidthVW(60)};
  height:${autoWidthVW(60)};
  :hover {
    opacity:0.8
  };
  @media (max-width: 768px) {
    width:${autoWidthVW(48)};
    height:${autoWidthVW(48)};
  }
`