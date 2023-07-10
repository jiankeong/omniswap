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
  padding-top:${autoWidthVW(146)};
  padding-bottom:${autoWidthVW(50)};
  background:#000;
    @media (max-width: 768px) {
      padding-top:${autoWidthVW(50)};
        }
`
export const TopBg = styled(FlexView)`
  width:${autoWidthVW(1590)};
  height:${autoWidthVW(1507)};
  position:fixed;
  left:0;
  top:0;
  @media (max-width: 768px) {
    display:none
  }
`
export const TopRightBg = styled(FlexView)`
  width:${autoWidthVW(496)};
  height:${autoWidthVW(322)};
  position:fixed;
  right:${autoWidthVW(180)};
  top:${autoWidthVW(100)};
  @media (max-width: 768px) {
    display:none
  }
`
export const TitleView = styled(FlexViewColumn)`
  width:${autoWidthVW(1400)};
  margin-bottom:${autoWidthVW(24)};
  margin-top:${autoWidthVW(30)};
  @media (max-width: 768px) {
    width:90%;
    margin-bottom:${autoWidthVW(12)};
    margin-top:${autoWidthVW(30)};
  }
`
export const Content = styled(FlexViewCenterColumn)`
  width:${autoWidthVW(1400)};
  align-items:flex-start;
  background: linear-gradient(180deg, rgba(71, 71, 107, 0.8) 0%, rgba(50, 55, 75, 0.8) 33.81%, rgba(1, 1, 1, 0.8) 71.33%);
  border-radius: ${autoWidthVW(16)};
  padding:${autoWidthVW(50)} ${autoWidthVW(48)};
  border:1px solid #444E68;
  // margin-top:${autoWidthVW(40)};
  @media (max-width: 768px) {
    margin-top:${autoWidthVW(12)};
    width:90%;
    padding:${autoWidthVW(24)} ${autoWidthVW(22)};
  }
`
export const TitleIcon = styled(FlexView)`
  width:${autoWidthVW(36)};
  height:${autoWidthVW(36)};
  margin-right:${autoWidthVW(16)};
  @media (max-width: 768px) {
    width:${autoWidthVW(24)};
    height:${autoWidthVW(24)};
    margin-right:${autoWidthVW(8)};
  }
`
export const ReceiveButton = styled(FlexViewCenter)`
  width:fit-content;
  padding:0 ${autoWidthVW(48)};
  border-radius: ${autoWidthVW(8)};
  height:${autoWidthVW(60)};
  background:#FFA845;
  cursor:pointer;
  margin-top:${autoWidthVW(36)};
  margin-bottom:${autoWidthVW(48)};
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
export const InviteButton = styled(ReceiveButton)`
  width:fit-content;
  padding:0 ${autoWidthVW(48)};
  border-radius: ${autoWidthVW(8)};
  height:${autoWidthVW(60)};
  background:#FFA845;
  cursor:pointer;
  margin-top:${autoWidthVW(36)};
  margin-bottom:${autoWidthVW(48)};
  @media (max-width: 768px) {
    width:fit-content;
    padding:0 ${autoWidthVW(32)};
    height:${autoWidthVW(44)};
    margin-left:0
  };
  :hover {
    opacity:0.8
  }
`
export const Line = styled.div`
  height:${autoWidthVW(50)};
  background:#868AAE;
  width:1px;
  @media (max-width: 768px) {
    height:${autoWidthVW(30)};
  }
`
export const LineH = styled.div`
  height:1px;
  background:#868AAE;
  width:100%;
  margin:${autoWidthVW(36)} 0;
  @media (max-width: 768px) {
    margin:${autoWidthVW(18)} 0;
  }
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
export const BGView = styled(FlexViewBetween)`
  background: #14161E;
  border-radius: ${autoWidthVW(16)};
  border:1px solid #444E68;
  padding:0 ${autoWidthVW(24)};
  height:${autoWidthVW(78)};
  width:100%;
  @media (max-width: 768px) {
    height:${autoWidthVW(50)};
    padding:0 ${autoWidthVW(12)};
    border-radius: ${autoWidthVW(8)};
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
export const InfoView = styled(FlexViewColumn)`
  width:100%;
  background: linear-gradient(180deg, #494F88 0%, #1A1D31 100%);
  border: 1px solid #43497D;
  border-radius: ${autoWidthVW(16)};
  padding:${autoWidthVW(36)} 0;
  @media (max-width: 768px) {
    border-radius: ${autoWidthVW(8)};
    padding:${autoWidthVW(18)};
  }
`
export const ReardIcon = styled(FlexView)`
  width:${autoWidthVW(36)};
  height:${autoWidthVW(50)};
  margin-right:${autoWidthVW(16)};
  @media (max-width: 768px) {
    width:${autoWidthVW(36 * 0.6)};
    height:${autoWidthVW(50 * 0.6)};
    margin-right:${autoWidthVW(8)};
  }
`
export const ArrowDown = styled(FlexView)`
  width:${autoWidthVW(40)};
  height:${autoWidthVW(40)};
  cursor:pointer;
  @media (max-width: 768px) {
    width:${autoWidthVW(20)};
    height:${autoWidthVW(20)};
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
  @media (max-width: 768px) {
    border-radius:${autoWidthVW(6)};
    margin-top:${autoWidthVW(12)};
    padding-bottom:${autoWidthVW(6)};
  }
`
export const AddressTitle = styled(FlexViewBetween)`
  background: linear-gradient(180deg, #BDCFFF 0%, #859FE3 100%);
  padding:${autoWidthVW(18)} ${autoWidthVW(36)};
  margin-bottom:${autoWidthVW(24)};
  @media (max-width: 768px) {
    padding:${autoWidthVW(9)};
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
export const InfoItem = styled(FlexViewCenterColumn)`
  width:100%;
  @media (max-width: 768px) {
    width:35%;
  }
`
