import { BaseInput } from '../components/Common/index';
import { TextBold,Text } from '../components/Text/index';
import { FlexViewColumn, FlexViewBetween, FlexViewCenter, FlexViewCenterColumn } from '../components/Common/index';
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
  background:#000;
`
export const TopLeft = styled(FlexView)`
  width:${autoWidthVW(710)};
  height:${autoWidthVW(180)};
  position:fixed;
  left:${autoWidthVW(90)};
  top:${autoWidthVW(120)};
  right:0;
  @media (max-width: 768px) {
    left:0;
    top:${autoWidthVW(100)};
    width:${autoWidthVW(200)};
    height:${autoWidthVW(50)};
  };
`
export const TopRight = styled(FlexView)`
  width:${autoWidthVW(1041 * 0.5)};
  height:${autoWidthVW(1616 * 0.5)};
  position:fixed;
  left:auto;
  right:${autoWidthVW(150)};
  top:${autoWidthVW(150)};
  @media (max-width: 768px) {
    right:0;
    top:0;
    left:auto;
    width:${autoWidthVW(1041 * 0.2)};
    height:${autoWidthVW(1616 * 0.2)};
  }
`
export const TitleView = styled(FlexViewColumn)`
  width:${autoWidthVW(1400)};
  margin-top:${autoWidthVW(100)};
  margin-bottom:${autoWidthVW(36)};
  @media (max-width: 768px) {
    display:none;
  }
`
export const Content = styled(FlexViewCenterColumn)`
  width:${autoWidthVW(1440)};
  /* align-items:flex-start; */
  background: linear-gradient(180deg, rgba(71, 71, 107, 0.8) 0%, rgba(50, 55, 75, 0.8) 33.81%, rgba(1, 1, 1, 0.8) 71.33%);
  border-radius: ${autoWidthVW(16)};
  padding:${autoWidthVW(50)} ${autoWidthVW(48)};
  border:1px solid #444E68;
  @media (max-width: 768px) {
    width:90%;
    /* margin-top:${autoWidthVW(200)}; */
    padding:${autoWidthVW(24)} ${autoWidthVW(22)};
  }
`
export const TitleIcon = styled(FlexView)`
  width:${autoWidthVW(42)};
  height:${autoWidthVW(30)};
  margin-right:${autoWidthVW(20)};
  @media (max-width: 768px) {
    width:${autoWidthVW(28)};
    height:${autoWidthVW(20)};
    margin-right:${autoWidthVW(10)};
  }
`
export const Setting = styled(FlexView)`
  width:${autoWidthVW(30)};
  height:${autoWidthVW(30)};
  @media (max-width: 768px) {
    width:${autoWidthVW(20)};
    height:${autoWidthVW(20)};
  }
`
export const Line = styled.div`
  width:100%;
  height:1px;
  background:#868AAE;
  margin:${autoWidthVW(30)} 0;
  @media (max-width: 768px) {
    margin:${autoWidthVW(17)} 0;
  }
`
export const EchangeIcon = styled(FlexView)`
  width:${autoWidthVW(50)};
  height:${autoWidthVW(50)};
  transform: rotate(90deg);
  margin:0 ${autoWidthVW(80)};
  @media (max-width: 768px) {
    width:${autoWidthVW(25)};
    height:${autoWidthVW(25)};
    margin:${autoWidthVW(24)} 0;
    transform: rotate(180deg);
  };
  :hover {
    opacity:0.8
  };
  cursor: pointer;
`
export const SwapButton = styled(FlexViewCenter)<{
  disable:Boolean
}>`
  width:100%;
  padding:0 ${autoWidthVW(20)};
  border-radius: ${autoWidthVW(8)};
  height:${autoWidthVW(60)};
  background:${({disable})=>disable?'#303030':"#FFA845"};
  cursor:${({disable})=>disable?'no-drop':"pointer"};
  margin-top:${autoWidthVW(35)};
  @media (max-width: 768px) {
    padding:0;
    height:${autoWidthVW(44)};
    margin-top:${autoWidthVW(35)};
  };
  :hover {
    opacity:0.8
  }
`
export const SwapInfo = styled(FlexViewColumn)`
  background: #14161E;
  border: 0.5px solid rgba(211, 222, 252, 0.5);
  border-radius: ${autoWidthVW(24)};
  width:100%;
  padding:${autoWidthVW(24)};
  @media (max-width: 768px) {
    border-radius: ${autoWidthVW(12)};
    padding:${autoWidthVW(16)};
  }
`
export const Sqicon = styled(FlexView)`
  width:${autoWidthVW(24)};
  height:${autoWidthVW(24)};
  margin-left:${autoWidthVW(15)};
  @media (max-width: 768px) {
    width:${autoWidthVW(12)};
    height:${autoWidthVW(12)};
    margin-left:${autoWidthVW(8)};
  }
`
export const DownBund = styled(FlexView)`
  width:${autoWidthVW(50)};
  height:${autoWidthVW(50)};
  margin-right:${autoWidthVW(15)};
  @media (max-width: 768px) {
    width:${autoWidthVW(30)};
    height:${autoWidthVW(30)};
    margin-right:${autoWidthVW(8)};
  }
`
export const SwapView = styled(FlexViewBetween)`
  @media (max-width: 768px) {
    flex-direction:column;
  };
`
export const SegmentView = styled(FlexView)`
  width:${autoWidthVW(1400)};
  @media (max-width: 768px) {
    width:90%;
    margin-top: ${autoWidthVW(200)};
  };
`
export const Segment = styled(FlexView)`
  height:${autoWidthVW(50)};
  border: 1px solid #FFA845;
  margin-bottom: ${autoWidthVW(40)};
  border-radius: ${autoWidthVW(10)};
  @media (max-width: 768px) {
    height:${autoWidthVW(44)};
    margin-bottom: ${autoWidthVW(20)};
    border-radius: ${autoWidthVW(6)};
  }
`
export const SegmentItem = styled(FlexViewCenter)<{
  select:boolean
}>`
  width:fit-content;
  height:100%;
  padding: 0 ${autoWidthVW(50)};
  background-color: ${({select})=>select ? '#FFA845' : 'transparent'};
  cursor: pointer;
  @media (max-width: 768px) {
    padding: 0 ${autoWidthVW(20)};
  }
`