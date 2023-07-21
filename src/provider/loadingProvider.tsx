import styled from "styled-components";
import { colors, formatAccount,autoWidthVW} from "../common/Common";
import React, {createContext, useContext, useState} from "react";
import {getScanLink, getScanName} from "../utils";
import ImageCommon from "../../public/images/ImageCommon";
import {animated, useSpring } from "react-spring";
import {FlexView, FlexViewBetween} from "../components/Common";
import { useNetwork } from "wagmi";
import Image from "next/image";
import { isBrowser } from "react-device-detect"

export enum LoadingType {
  confirm=0,
  pending=1,
  error=2,
  success=3
}

const LoadingConfig:any = {
  [LoadingType.confirm]:{
      icon:ImageCommon.loading_pending,
      color:"#9165F6",
      title:"Waiting for Confirmation",
      closeIcon:ImageCommon.close_black,
  },
  [LoadingType.pending]:{
      icon:ImageCommon.loading_pending,
      color:"#62DCF7",
      title:"Waiting for Transaction",
      closeIcon:ImageCommon.close_black,
  },
  [LoadingType.error]:{
      icon:ImageCommon.loading_fail,
      color:"#CF3E34",
      title:"Transaction Error",
      closeIcon:ImageCommon.close_black,
  },
  [LoadingType.success]:{
      icon:ImageCommon.loading_success,
      color:"#7FF89F",
      title:"Transaction Success",
      closeIcon:ImageCommon.close_black,
  }
}
export const LoadingContext = createContext({
  show: (type:LoadingType,message:string,hash?:string) => {

  },
  hide:()=>{}
})
export function useLoadingContext() {
  const loadingContext = useContext(LoadingContext)
  return loadingContext
}
export default function LoadingProvider({children}:any) {

  const [visible,setVisible] = useState(false)
  const [type,setType] = useState(LoadingType.confirm)
  const [message,setMessage] = useState("")
  const [hash,setHash] = useState("")
  return(
      <LoadingContext.Provider
          value={{
              show:(type, message,hash) => {
                  setType(type)
                  setMessage(message)
                  setHash(hash||"")
                  setVisible(true)
              },
              hide:()=>{
                  setVisible(false)
              }
          }}
      >
          {children}
          <Loading
              visible={visible}
              type={type}
              message={message}
              hash={hash}
              onClose={()=>setVisible(false)}
          ></Loading>
      </LoadingContext.Provider>
  )
}

function Loading({visible,type,message,hash,onClose}:any) {
  const {chain={id:1}} = useNetwork()
  if(!visible){
      return null;
  }
  return(
    <ModalView className="animate__animated animate__fadeIn animate__faster">
      <LoadingContent className="animate__animated animate__slideInUp animate__faster">
        <FlexViewBetween>
          <FlexView>
            {(type===LoadingType.confirm || type===LoadingType.pending) && <RotateImage icon={LoadingConfig[type].icon}></RotateImage>}
            {(type===LoadingType.success || type===LoadingType.error) && <StatusIcon src={LoadingConfig[type].icon}></StatusIcon>}
            <LoadingTitle
              style={{color:LoadingConfig[type].color}}
            >
              {LoadingConfig[type].title}
            </LoadingTitle>
          </FlexView>
          <Image style={{
            cursor:'pointer'
          }}
          onClick={onClose}
          src={LoadingConfig[type].closeIcon} width={isBrowser?30:20} height={isBrowser?30:20}/>
        </FlexViewBetween>
        <DescContainer>
          {(type===LoadingType.confirm || type===LoadingType.error) && <LoadingDesc>
            {message}
          </LoadingDesc>}
          {(type===LoadingType.pending || type===LoadingType.success) && <LoadingDesc>
            Transaction Hash: {formatAccount(hash || message)}
          </LoadingDesc>}
          {(type!==LoadingType.confirm) && <LoadingHashView
            onClick={()=>{
              window.open(getScanLink(chain.id,hash || message,"transaction"))
            }}
          >
            ViewOn {getScanName(chain.id)}
          </LoadingHashView>}
          {type===LoadingType.confirm && <LoadingTips>
            Confirm this transaction in your wallet
          </LoadingTips>}
        </DescContainer>
      </LoadingContent>
    </ModalView>
  )
}
function RotateImage({icon}:any) {
  const styles = useSpring({
    loop: true,
    from: { rotateZ: 0 },
    to: { rotateZ: 360 },
    config: {
        duration: 1500,
    },
  })

  return (
    <StatusIcon
      style={{...styles}}
      src={icon}
    ></StatusIcon>
  )
}

const LoadingContent = styled.div`
  width:${autoWidthVW(959)};
  padding:${autoWidthVW(40)} ${autoWidthVW(30)};
  position:relative;
  background-color: #fff;
  border-radius: ${autoWidthVW(20)};
  @media (max-width: 768px) {
    width:${autoWidthVW(350)};
    padding:${autoWidthVW(20)} ${autoWidthVW(15)};
    border-radius: ${autoWidthVW(10)};
  };
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2);
`
const LoadingTitle = styled.div`
  font-size: ${autoWidthVW(32)};
  font-family: Axiforma-Bold, Axiforma;
  font-weight: bold;
  color: #000;
  margin-left: ${autoWidthVW(30)};
  @media (max-width: 768px) {
    font-size: ${autoWidthVW(14)};
    margin-left: ${autoWidthVW(10)};
  }
`
const DescContainer = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items: flex-start;
  font-size: ${autoWidthVW(36)};
  padding-left:${autoWidthVW(150)};
  @media (max-width: 768px) {
    padding-left:${autoWidthVW(50)};
    font-size: ${autoWidthVW(18)};
  }
`
const LoadingDesc = styled.div`
  font-size: ${autoWidthVW(32)};
  font-family: Axiforma-Bold, Axiforma;
  font-weight: bold;
  color: #000;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  width:100%;
  @media (max-width: 768px) {
    font-size: ${autoWidthVW(16)};
  }
`
const LoadingTips = styled.div`
  font-size: ${autoWidthVW(20)};
  font-weight: 400;
  color: #000;
  margin-top:${autoWidthVW(15)};
  opacity:0.8;
  @media (max-width: 768px) {
    font-size: ${autoWidthVW(14)};
  }
`
const LoadingHashView = styled.div`
  font-size:${autoWidthVW(14)};
  color:#000;
  margin-top:${autoWidthVW(15)};
  cursor:pointer;
  text-decoration:underline;
  @media (max-width: 768px) {
    font-size:${autoWidthVW(12)};
  }
`
const StatusIcon = styled(animated.img)`
  width:${autoWidthVW(112)};
  height:auto;
  @media (max-width: 768px) {
    width:${autoWidthVW(40)};
  }
`

const ModalView = styled.div`
  position:fixed;
  top:0;
  left:0;
  right:0;
  bottom:0;
  background-color:${colors.black_7};
  z-index:99;
  display:flex;
  align-items:center;
  justify-content:center;
`
