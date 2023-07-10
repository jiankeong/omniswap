import { BaseInput } from './../components/Common/index';
import { TextBold,Text } from '../components/Text/index';
import { FlexViewColumn, FlexViewBetween, FlexViewCenter, FlexViewCenterColumn } from '../components/Common/index';
import styled from "styled-components";
import { autoWidthVW } from "../common/Common";
import { FlexView } from "../components/Common";
import ImageCommon from '../../public/images/ImageCommon';
import {animated } from "react-spring";
import {Switch,Input} from 'antd'

export const Main = styled(FlexViewCenterColumn)`
  width:100%;
  justify-content:flex-start;
  padding-top:${autoWidthVW(50)};
  padding-bottom:${autoWidthVW(50)};
  background:#000
`
export const Content = styled(FlexViewCenterColumn)`
  width:${autoWidthVW(1400)};
  align-items:flex-start;
  background: linear-gradient(180deg, rgba(71, 71, 107, 0.8) 0%, rgba(50, 55, 75, 0.8) 33.81%, rgba(1, 1, 1, 0.8) 71.33%);
  border-radius: ${autoWidthVW(16)};
  padding:${autoWidthVW(50)} ${autoWidthVW(48)};
  border:1px solid #444E68;
  margin-top:${autoWidthVW(120)};
  @media (max-width: 768px) {
    margin-top:${autoWidthVW(24)};
    width:90%;
    padding:${autoWidthVW(24)} ${autoWidthVW(22)};
  }
`
export const ReceiveButton = styled(FlexViewCenter)`
  width:fit-content;
  padding:0 ${autoWidthVW(40)};
  border-radius: ${autoWidthVW(8)};
  height:${autoWidthVW(60)};
  background:#FFA845;
  cursor:pointer;
  @media (max-width: 768px) {
    padding:0 ${autoWidthVW(20)};
    height:${autoWidthVW(44)};
    margin-left:0
  };
  :hover {
    opacity:0.8
  }
`
export const SwitchView = styled(Switch)`
  /* background:#FFA845; */
`
export const InputItem = styled(Input)`
  width:60%;
  @media (max-width: 768px) {
    height:${autoWidthVW(44)};
    margin-right:${autoWidthVW(10)};
    font-size:${autoWidthVW(14)};
  };
  background:#fff;
  height:${autoWidthVW(60)};
  margin-right:${autoWidthVW(20)};
  font-size:${autoWidthVW(24)};
`
export const ItemView = styled(FlexViewBetween)`
  @media (max-width: 768px) {
    flex-direction:column;
    align-items:flex-start
  }
`