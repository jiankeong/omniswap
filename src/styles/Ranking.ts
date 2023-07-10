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
  display:none;
  position:fixed;
  @media (max-width: 768px) {
    left:0;
    display:flex;
    top:${autoWidthVW(0)};
    width:${autoWidthVW(375)};
    height:${autoWidthVW(410)};
  };
`
export const TopRight = styled(FlexView)`
  width:${autoWidthVW(970)};
  height:${autoWidthVW(740)};
  position:fixed;
  left:auto;
  right:${autoWidthVW(150)};
  top:${autoWidthVW(150)};
  @media (max-width: 768px) {
    right:0;
    top:${autoWidthVW(30)};;
    left:auto;
    width:${autoWidthVW(310)};
    height:${autoWidthVW(227)};
  }
`
export const TitleView = styled(FlexViewColumn)`
  width:${autoWidthVW(1400)};
  margin-top:${autoWidthVW(100)};
  padding-right:30%;
  margin-bottom:${autoWidthVW(36)};
  @media (max-width: 768px) {
    padding-right:0;
    width:90%
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
    margin-top:${autoWidthVW(40)};
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
export const Line = styled.div`
  width:100%;
  height:1px;
  background:#868AAE;
  margin:${autoWidthVW(36)} 0;
  @media (max-width: 768px) {
    margin:${autoWidthVW(18)} 0;
  }
`
export const Picon = styled(FlexView)`
  width:${autoWidthVW(29)};
  height:${autoWidthVW(40)};
  @media (max-width: 768px) {
    width:${autoWidthVW(29 * 0.6)};
    height:${autoWidthVW(40 * 0.6)};
  }
`
