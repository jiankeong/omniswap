import { BaseInput } from './../components/Common/index';
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
  background:#000
`
export const TopBg = styled(FlexView)`
  width:${autoWidthVW(1476)};
  height:${autoWidthVW(135)};
  position:fixed;
  left:${autoWidthVW(90)};
  top:${autoWidthVW(150)};
  @media (max-width: 768px) {
    width:${autoWidthVW(287)};
    height:${autoWidthVW(93)};
    top:${autoWidthVW(100)};
    left:${autoWidthVW(20)};
  }
`
export const TopRightBg = styled(FlexView)`
  width:${autoWidthVW(630)};
  height:${autoWidthVW(622)};
  position:fixed;
  top:${autoWidthVW(120)};
  right:${autoWidthVW(20)};
  @media (max-width: 768px) {
    width:${autoWidthVW(349)};
    height:${autoWidthVW(351)};
    top:${autoWidthVW(0)};
    right:${autoWidthVW(-100)};
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
  @media (max-width: 768px) {
    width:90%;
    margin-top:${autoWidthVW(200)};
    padding:${autoWidthVW(24)} ${autoWidthVW(22)};
  }
`
export const TitleIcon = styled(FlexView)`
  width:${autoWidthVW(36)};
  height:${autoWidthVW(36)};
  margin-right:${autoWidthVW(15)};
  @media (max-width: 768px) {
    width:${autoWidthVW(25)};
    height:${autoWidthVW(25)};
    margin-right:${autoWidthVW(10)};
  }
`
export const Title2Icon = styled(TitleIcon)`
  height:${autoWidthVW(24)};
  width:${autoWidthVW(30)};
  @media (max-width: 768px) {
    height:${autoWidthVW(20)};
    width:${autoWidthVW(26)};
  }
`
export const Title3Icon = styled(TitleIcon)`
  width:${autoWidthVW(38)};
  height:${autoWidthVW(40)};
  @media (max-width: 768px) {
    width:${autoWidthVW(24)};
    height:${autoWidthVW(25)};
  }
`

export const Line = styled.div`
  height:1px;
  background:#464861;
  width:100%;
  margin:${autoWidthVW(20)} 0;
  @media (max-width: 768px) {
    margin:${autoWidthVW(12)} 0;
  }
`
export const ConfirButton = styled(FlexViewCenter)`
  height:${autoWidthVW(64)};
  width:${autoWidthVW(240)};
  border-radius: ${autoWidthVW(10)};
  background:#FFA845;
  margin-top:${autoWidthVW(30)};
  :hover {
    opacity:0.8
  };
  @media (max-width: 768px) {
    height:${autoWidthVW(40)};
    border-radius: ${autoWidthVW(8)};
    width:100%;
    margin-top:${autoWidthVW(24)};
  };
  cursor:pointer
`
export const BGView = styled(FlexViewBetween)`
  background: #14161E;
  border-radius: ${autoWidthVW(16)};
  border:1px solid #444E68;
  padding:0 ${autoWidthVW(24)};
  height:${autoWidthVW(78)};
  width:${autoWidthVW(640)};
  @media (max-width: 768px) {
    width:100%;
    height:${autoWidthVW(50)};
    padding:0 ${autoWidthVW(12)};
    border-radius: ${autoWidthVW(8)};
  }
`
export const Copy = styled(FlexView)`
  width:${autoWidthVW(30)};
  height:${autoWidthVW(30)};
  @media (max-width: 768px) {
    width:${autoWidthVW(20)};
    height:${autoWidthVW(20)};
  }
`
export const ArrowIcon = styled(FlexView)`
  width:${autoWidthVW(22)};
  height:${autoWidthVW(14)};
  @media (max-width: 768px) {
    width:${autoWidthVW(11)};
    height:${autoWidthVW(7)};
  }
`
export const AddressView = styled(FlexViewColumn)`
  background: #242837;
  border-radius:${autoWidthVW(12)};
  border:1px solid #444E68;
  width:100%;
  margin-top:${autoWidthVW(24)};
  overflow:hidden;
  padding-bottom:${autoWidthVW(12)};
`
export const AddressTitle = styled(FlexViewBetween)`
  background: linear-gradient(180deg, #BDCFFF 0%, #859FE3 100%);
  padding:${autoWidthVW(18)} ${autoWidthVW(36)};
  margin-bottom:${autoWidthVW(24)};
  @media (max-width: 768px) {
    padding:${autoWidthVW(9)} ${autoWidthVW(18)};
    margin-bottom:${autoWidthVW(12)};
  }
`
export const AddressViewItem = styled(FlexViewColumn)`
  width:100%;
  padding:0 ${autoWidthVW(40)};
  @media (max-width: 768px) {
    padding:0 ${autoWidthVW(10)};
  }
`
export const Notdata = styled(FlexViewCenter)`
  width:${autoWidthVW(122)};
  height:${autoWidthVW(160)};
  margin-bottom:${autoWidthVW(40)};
  @media (max-width: 768px) {
    width:${autoWidthVW(61)};
    height:${autoWidthVW(80)};
    margin-bottom:${autoWidthVW(20)};
  }
`
export const NotdataView = styled(FlexViewCenterColumn)`
  margin:${autoWidthVW(61)} 0;
  width:100%;
`
export const CoinListView = styled(FlexViewColumn)`
  width:100%;
  position:absolute;
  background: #000;
  padding:${autoWidthVW(24)} ${autoWidthVW(22)};
  top:${autoWidthVW(85)};
  z-index:5;
  border-radius:${autoWidthVW(8)};
  @media (max-width: 768px) {
    padding:${autoWidthVW(24)} ${autoWidthVW(22)};
    top:${autoWidthVW(65)};
  }
`
export const AddressInput = styled(BaseInput)`
  font-size:${autoWidthVW(24)};
  color:#868AAE;
  flex:1;
  @media (max-width: 768px) {
    font-size:${autoWidthVW(14)};
  }
`
export const InviteView = styled(FlexViewColumn)`
  width:100%;
  @media (max-width: 768px) {
  }
`
export const TopView = styled(FlexViewBetween)`
  width:100%;
  align-items:flex-start;
  flex-direction:row-reverse;
  @media (max-width: 768px) {
    flex-direction:column
  };
`