
import React, { useState } from 'react'
import styled from 'styled-components'
import ImageCommon from '../../../public/images/ImageCommon';
import { autoWidthVW, colors} from "../../common/Common";
import { TextSemiBold,TextRegular, TextBold } from '../Text';
import { FlexView, FlexViewBetween, FlexViewCenter, FlexViewCenterColumn, FlexViewColumn, SpaceHeight, SpaceWidth } from '../Common';
import { useRouter } from "next/router";
import { changeTabIndex, useTabIndex } from "../../state/tabbar"
import { useDispatch } from "react-redux"
import { leftMenu_ZIndex,leftMenu_width } from "../../common/constants"
import {useSpring,animated} from 'react-spring'
import Contact from '../Contact'
import {message,notification} from 'antd'
import useTranslationLanguage from '../../hooks/useTranslationLanguage';
import ConnectWallet from '../ConnectWallter';
import Image from 'next/image';


export default React.memo(LeftMenu)

const menus = [
  {
    width:29,
    height:20,
    icon:ImageCommon.menus,
    name:'Swap',
    able:true,
    link:'/swap'
  },
  {
    width:30,
    height:22,
    icon:ImageCommon.earnic,
    name:'Earn',
    able:true,
    link:'earn'
  },
  {
    width:25,
    height:20,
    icon:ImageCommon.inv,
    name:'Node Ranking',
    able:true,
    link:'nodeRanking'
  },
  {
    width:25,
    height:20,
    icon:ImageCommon.Open,
    name:'NFT Presale',
    able:true,
    link:'/nft'
  },
  {
    width:25,
    height:20,
    icon:ImageCommon.menucion,
    name:'My Community',
    able:true,
    link:'/community'
  }
]


function LeftMenu({onClose}:any) {
  const router = useRouter()
  return <Menu>
    <Content>
      <FlexViewColumn style={{width:'100%'}}>
        <FlexViewBetween>
          <TopLogo onClick={()=>{
              router.push('/')
              onClose && onClose()
            }} src={ImageCommon.logoicon}/>
          <CloseIcon src={ImageCommon.close} onClick={onClose}/>
        </FlexViewBetween>
        <Line/>
        {/* <ConnectWallet/> */}
        <SpaceHeight height={40}/>
        <Menus onClose={onClose}/>
      </FlexViewColumn>
      <Contact/>
    </Content>
  </Menu>
}
export function Menus({onClose}:any){
  const router = useRouter()
  const {t} = useTranslationLanguage()
  const selectIndex = useTabIndex()
  const dispatch = useDispatch()

  return <MenuView className='animate__animated animate__bounceInRight'>
    {
      menus.map((item:any,index:number)=>{
        return <MenuItem key={index+'leftMenu'}>
          <ItemView key={index+'menuicon'} onClick={()=>{
            if (item.able){
              router.push(item.link)
              onClose && onClose()
              dispatch(changeTabIndex({tabIndex:index}))
            }else {
              notification.warning({
                message:'coming soon~'
              })
            }
          }}>
            <MenuIcon src={item.icon} width={item.width} height={item.height}/>
            <TextBold color={selectIndex == index ? '#FFAD4F' : '#fff'} size={20} webSize={24}>{t(item.name)}</TextBold>
          </ItemView>
          <SpaceHeight height={20} webHeight={0}/>
          <SpaceWidth width={0} webWidth={48}/>
        </MenuItem>
      })
    }
  </MenuView>
}
const MenuItem = styled(FlexViewColumn)`
  width:fit-content;
  flex-direction:row;
  @media (max-width: 768px) {
    width:100%;
    flex-direction:column;
  }
`
const MenuView = styled(FlexViewColumn)`
  width:fit-content;
  flex-direction:row;
  z-index:2;
  @media (max-width: 768px) {
    width:100%;
    flex-direction:column;
  }
`
const ItemView = styled(FlexView)`
  width:fit-content;
  cursor:pointer;
  padding:${autoWidthVW(20)} 0;
  background:transparent;
  :hover {
    @media (max-width: 768px) {
      background: linear-gradient(225.31deg, #444E68 25.13%, #373F55 78.64%);
      border-radius: 8px;
    }
  };
  @media (max-width: 768px) {
    width:100%;
    padding:${autoWidthVW(10)} 0;
  };
`
const MenuIcon = styled.img`
  margin-right:${autoWidthVW(10)};
  margin-left:${autoWidthVW(30)};
  display:none;
  @media (max-width: 768px) {
    display:flex
  }
`
const Line = styled.div`
  width:100%;
  height:1px;
  background:#868AAE;
  margin:${autoWidthVW(24)} 0;
`
const CloseIcon = styled.img`
  cursor:pointer;
  width:${autoWidthVW(24)};
  height:${autoWidthVW(24)};
`
const BgView = styled(animated.div)`
  width:${autoWidthVW(leftMenu_width)};
  height:${autoWidthVW(60)};
  background:${colors.main};
  border-top-right-radius:${autoWidthVW(30)};
  border-bottom-right-radius:${autoWidthVW(30)};
  position:absolute;
  top:${autoWidthVW(240)};
  z-index:1
`
const Item = styled(FlexViewCenter)`
  height:${autoWidthVW(60)};
  margin:${autoWidthVW(20)} 0;
  cursor:pointer
`
const TopLogo = styled.img`
  cursor:pointer;
  width:${autoWidthVW(160)};
  height:${autoWidthVW(30)};
`
const Content = styled(FlexViewCenterColumn)`
  width:100%;
  height:100%;
  padding:0 ${autoWidthVW(10)};
  justify-content:space-between
`
const Menu = styled(FlexViewColumn)`
  width:100%;
  height:${window.innerHeight}px;
  z-index:${leftMenu_ZIndex};
  align-items:flex-start;
  overflow-y:scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
    width: 0;
    height: 0;
  };
  padding:${autoWidthVW(30)} ${autoWidthVW(15)};
  background: linear-gradient(198.17deg, rgba(40, 40, 68, 0.9) 0%, #14161E 71.33%);
`