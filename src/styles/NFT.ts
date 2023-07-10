import { TextBold,Text } from './../components/Text/index';
import { FlexViewColumn, FlexViewBetween, FlexViewCenter, FlexViewCenterColumn } from './../components/Common/index';
import styled from "styled-components";
import { autoWidthVW } from "../common/Common";
import { FlexView } from "../components/Common";
import ImageCommon from '../../public/images/ImageCommon';
import {animated } from "react-spring";

export const Main = styled(FlexViewCenterColumn)`
  width:100%;
  justify-content:flex-start;
  padding-top:${autoWidthVW(50)};
  padding-bottom:${autoWidthVW(50)};
  background:#000
`
export const TopBg = styled(FlexView)`
  width:${autoWidthVW(1177)};
  height:${autoWidthVW(225)};
  position:fixed;
  left:${autoWidthVW(90)};
  top:${autoWidthVW(120)};
  @media (max-width: 768px) {
    top:${autoWidthVW(80)};
    left:${autoWidthVW(20)};
    width:${autoWidthVW(212)};
    height:${autoWidthVW(123)};
  }
`
export const TopRightBg = styled(FlexView)`
  width:${autoWidthVW(520)};
  height:${autoWidthVW(630)};
  position:fixed;
  right:${autoWidthVW(0)};
  top:${autoWidthVW(50)};
  @media (max-width: 768px) {
    width:${autoWidthVW(520 * 0.45)};
    height:${autoWidthVW(630 * 0.45)};
    right:${autoWidthVW(0)};
    top:${autoWidthVW(20)};
  }
`
export const TitleView = styled(FlexViewColumn)`
  width:${autoWidthVW(1400)};
  margin-top:${autoWidthVW(100)};
  margin-bottom:${autoWidthVW(36)};
  @media (max-width: 768px) {
    display:none
  }
`
export const Content = styled(FlexViewCenterColumn)`
  width:${autoWidthVW(1400)};
  align-items:flex-start;
  background: linear-gradient(180deg, rgba(71, 71, 107, 0.8) 0%, rgba(50, 55, 75, 0.8) 33.81%, rgba(1, 1, 1, 0.8) 71.33%);
  border-radius: ${autoWidthVW(16)};
  padding:${autoWidthVW(50)} ${autoWidthVW(48)};
  border:1px solid #444E68;
  margin-top:${autoWidthVW(40)};
  @media (max-width: 768px) {
    margin-top:${autoWidthVW(24)};
    width:90%;
    padding:${autoWidthVW(24)} ${autoWidthVW(22)};
  }
`
export const TitleIcon = styled(FlexView)`
  width:${autoWidthVW(25 * 1.5)};
  height:${autoWidthVW(24 * 1.5)};
  margin-right:${autoWidthVW(20)};
  @media (max-width: 768px) {
    width:${autoWidthVW(25)};
    height:${autoWidthVW(24)};
    margin-right:${autoWidthVW(10)};
  }
`
export const NFTItemView = styled(animated.div)<{
  able?:boolean,
  shadowColor:string
}>`
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
  display:flex;
  width:100%;
  padding:${autoWidthVW(60)} ${autoWidthVW(48)};
  background: #14161E;
  border-radius: ${autoWidthVW(16)};
  border:1px solid #444E68;
  margin:${autoWidthVW(20)} 0;
  box-shadow: 0px 0px 20px 5px ${({able,shadowColor})=>able?shadowColor:'transparent'};
  @media (max-width: 768px) {
    padding:${autoWidthVW(18)} ${autoWidthVW(12)};
    border-radius: ${autoWidthVW(8)};
    margin:${autoWidthVW(10)} 0;
    flex-direction:column;
    justify-content:flex-start;
    align-items:flex-start;
    padding-bottom:${autoWidthVW(8)};
  }
`
export const NFTIcon = styled(FlexView)`
  width:${autoWidthVW(66 * 2.5)};
  height:${autoWidthVW(72 * 2.5)};
  margin:0 ${autoWidthVW(50)};
  @media (max-width: 768px) {
    width:${autoWidthVW(66)};
    height:${autoWidthVW(72)};
    margin:0;
  }
`
export const NFTSmallIcon = styled(NFTIcon)`
  width:${autoWidthVW(66 * 1.5)};
  height:${autoWidthVW(72 * 1.5)};
  @media (max-width: 768px) {
    width:${autoWidthVW(66 * 0.6)};
    height:${autoWidthVW(72 * 0.6)};
    margin-right:${autoWidthVW(17)};
  }
`

export const NFTLevelIcon = styled(FlexView)`
  width:${autoWidthVW(40)};
  height:${autoWidthVW(60)};
  @media (max-width: 768px) {
    width:${autoWidthVW(20)};
    height:${autoWidthVW(30)};
  }
`
export const ItemRight = styled(FlexViewColumn)`
  width:${autoWidthVW(180)};
`
export const ConfirButton = styled(FlexViewCenter)<{
  able?:boolean,
  bgColor:string
}>`
  width:fit-content;
  padding:${autoWidthVW(16)} ${autoWidthVW(60)};
  border-radius: ${autoWidthVW(8)};
  height:${autoWidthVW(80)};
  background:${({able,bgColor})=>able?bgColor:'#989DAA'};
  margin-top:${autoWidthVW(10)};
  margin-left:${autoWidthVW(48)};
  cursor:pointer;
  @media (max-width: 768px) {
    width:100%;
    padding:0;
    height:${autoWidthVW(32)};
    margin-left:0
  };
  :hover {
    opacity:0.8
  }
`
export const ReceiveButton = styled(FlexViewCenter)`
  width:fit-content;
  padding:0 ${autoWidthVW(20)};
  border-radius: ${autoWidthVW(8)};
  height:${autoWidthVW(60)};
  background:#FFA845;
  background:#989DAA;
  cursor:pointer;
  @media (max-width: 768px) {
    width:100%;
    padding:0;
    height:${autoWidthVW(32)};
    margin-left:0
  };
  :hover {
    opacity:0.8
  }
`
export const Line = styled.div`
  height:1px;
  background:#464861;
  width:100%;
  margin:${autoWidthVW(8)} 0;
`
export const TipIcon = styled(FlexView)`
  width:${autoWidthVW(24)};
  height:${autoWidthVW(24)};
  margin-right:${autoWidthVW(12)};
  margin-top:${autoWidthVW(0)};
  @media (max-width: 768px) {
    width:${autoWidthVW(12)};
    height:${autoWidthVW(12)};
    margin-right:${autoWidthVW(6)};
    margin-top:${autoWidthVW(-4)};
  }
`
export const NFTButton = styled(FlexViewCenter)`
  background: linear-gradient(180deg, #BDCFFF 0%, #859FE3 100%);
  border-radius: ${autoWidthVW(16)};
  width:fit-content;
  padding:0 ${autoWidthVW(48)};
  height:${autoWidthVW(80)};
  cursor:pointer;
  :hover {
    opacity:0.8
  };
  margin-top:${autoWidthVW(52)};
  @media (max-width: 768px) {
    border-radius: ${autoWidthVW(8)};
    padding:0 ${autoWidthVW(24)};
    height:${autoWidthVW(44)};
    margin-top:${autoWidthVW(200)};
    margin-left:${autoWidthVW(20)};
  }
`
export const Arrow = styled(FlexView)`
  width:${autoWidthVW(37)};
  height:${autoWidthVW(23)};
  margin-left:${autoWidthVW(15)};
  @media (max-width: 768px) {
    width:${autoWidthVW(37 * 0.5)};
    height:${autoWidthVW(23 * 0.5)};
    margin-left:${autoWidthVW(8)};
  }
`
export const ButtonView = styled(FlexView)`
  width:${autoWidthVW(1400)};
  @media (max-width: 768px) {
    width:100%
  };
`