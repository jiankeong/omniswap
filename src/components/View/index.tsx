import styled from 'styled-components'
import {autoWidthVW, colors} from '../../common/Common'
import { FlexView } from '../Common'


export const View = styled(FlexView)<{
  width?:string
}>`
  background-color: ${colors.black_4};
  border-radius: ${autoWidthVW(16)};
  padding:${autoWidthVW(30)} ${autoWidthVW(20)};
  width:${({width})=>width??'100%'};
  @media (max-width: 768px) {
    border-radius: ${autoWidthVW(8)};
    padding:${autoWidthVW(15)} ${autoWidthVW(10)};
  };
`
export const LinearView = styled(FlexView)`
  width:fit-content;
  background:-webkit-linear-gradient(bottom,#220A53,#3B166D);
  border-radius:${autoWidthVW(60)};
  padding:${autoWidthVW(60)} ${autoWidthVW(30)};
  @media (max-width: 768px) {
    border-radius:${autoWidthVW(30)};
    padding:${autoWidthVW(30)} ${autoWidthVW(15)};
  }
`
export const LinearBorderView = styled(FlexView)`
  width:fit-content;
  border:1px solid transparent;
  border-image:linear-gradient(to bottom,#E900FF,#00FFE5,#332062) 1 10;
  background:-webkit-linear-gradient(bottom,rgba(0,0,0,0.53),rgba(0,0,0,0.78));
`
