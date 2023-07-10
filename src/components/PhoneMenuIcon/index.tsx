import React, { useRef } from 'react'
import styled from 'styled-components'
import ImageCommon from '../../../public/images/ImageCommon';
import { Drawer} from 'antd';
import { useState } from 'react';
import LeftMenu from '../LeftMenu'
import {  autoWidthVW } from '../../common/Common';
import { useRouter } from "next/router";
import { isBrowser } from 'react-device-detect';
import { changeTabIndex } from "../../state/tabbar"
import { useDispatch } from "react-redux"
import { FlexView } from '../Common';
import Image from 'next/image';
import { leftMenu_width } from '../../common/constants';
const Menu = styled(FlexView)`
  width:${autoWidthVW(48)};
  height:${autoWidthVW(64)};
  @media (max-width: 768px) {
    width:${autoWidthVW(24)};
    height:${autoWidthVW(32)};
  };
  cursor:pointer;
`
const Main = styled.div`
  backgrond:transparent;
  display:none;
  @media (max-width: 768px) {
    display:flex
  }
`
export default function PhoneMenuIcon() {
  const [visible,setVisible] = useState(false)
  const router = useRouter()
  const dispatch = useDispatch()

  function onClose(){
    setVisible(false)
  }
  return (
    <Main>
      <Menu onClick={()=>{
        setVisible(!visible)
      }}>
        <Image src={ImageCommon.menu} alt='' layout='fill' priority={false}/>
      </Menu>
      <Drawer
        bodyStyle={{padding:0,backgroundColor:'#09182E'}}
        // drawerStyle={{padding:0,backgroundColor:'rgba(0,0,0,0.3)'}}
        // contentWrapperStyle={{padding:0,backgroundColor:'rgba(0,0,0,0.3)'}}
        z-index={10}
        placement={'right'}
        closable={false}
        onClose={onClose}
        open={visible}
        width={autoWidthVW(leftMenu_width)}
        maskClosable={true}
        key={'left'} >
        <LeftMenu onClose={onClose}/>
      </Drawer>
    </Main>
  )
}

