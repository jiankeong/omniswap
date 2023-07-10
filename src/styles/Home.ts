import { TextBold,Text } from './../components/Text/index';
import { FlexViewColumn, FlexViewBetween, FlexViewCenter, FlexViewCenterColumn } from './../components/Common/index';
import styled from "styled-components";
import { autoWidthVW } from "../common/Common";
import { FlexView } from "../components/Common";
import ImageCommon from '../../public/images/ImageCommon';

export const Main = styled(FlexViewCenterColumn)`
  width:100%;
  justify-content:center;
  padding-top:${autoWidthVW(50)};
  /* justify-content:space-between; */
  flex-direction:row;
  padding-bottom:${autoWidthVW(34)};
  @media (max-width: 768px) {
    flex-direction:column;
    justify-content:space-between
  }
`
export const TopBg = styled(FlexView)`
  width:100%;
  height:100%;
  position:absolute;
  left:0;
  top:0
`
export const TopIcon = styled(FlexView)`
  width: ${autoWidthVW(334 *2.5)};
  height: ${autoWidthVW(308 * 2.5)};
  margin-right:${autoWidthVW(165)};
  @media (max-width: 768px) {
    width: ${autoWidthVW(334)};
    height: ${autoWidthVW(308)};
    margin-right:0;
  }
`
export const Content = styled(FlexViewCenterColumn)`
  width:fit-content;
  align-items:flex-start;
  @media (max-width: 768px) {
    align-items:center;
    width:90%;
  }
`
export const NFTButton = styled(FlexViewCenter)`
  width:${autoWidthVW(220)};
  height:${autoWidthVW(80)};
  margin:0 ${autoWidthVW(12)};
  margin-top:${autoWidthVW(40)};
  opacity:1;
  background: linear-gradient(180deg, #BDCFFF 0%, #859FE3 100%);
  border-radius: ${autoWidthVW(16)};
  :hover {
    opacity:0.8
  };
  cursor:pointer;
  @media (max-width: 768px) {
    width:100%;
    margin:0;
    height:${autoWidthVW(44)};
    margin-top:${autoWidthVW(24)};
    border-radius: ${autoWidthVW(8)};
  }
`
export const AppButton = styled(NFTButton)`
  background: #FFA845;
`

export const Title = styled(TextBold)`
  text-align:left;
  @media (max-width: 768px) {
    text-align:center;
    line-height: ${autoWidthVW(34)};
  };
`
export const TitleDes = styled(TextBold)`
  text-align:left;
  width:${autoWidthVW(900)};
  @media (max-width: 768px) {
    line-height: ${autoWidthVW(20)};
    width:80%;
    text-align:center;
  }
`
export const ButtonView = styled(FlexViewCenterColumn)`
  flex-direction:row;
  @media (max-width: 768px) {
    flex-direction:column;
    width:100%;
  }
`
