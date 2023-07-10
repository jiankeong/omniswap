import styled from "styled-components";
import { FlexView,FlexViewCenter } from "../Common";
import {autoWidthVW} from "../../common/Common";

export const LinearButton = styled(FlexView)`
  padding:${autoWidthVW(10)} ${autoWidthVW(28)};
  cursor:pointer;
  width:fit-content;
  background:-webkit-linear-gradient(right,#EAC44C,#E8CD7B);
  :hover{
    background-position:-webkit-linear-gradient(right,#E8CD7B,#EAC44C);
  };
  border-radius:${autoWidthVW(8)};
  @media (max-width: 768px) {
    padding:${autoWidthVW(5)} ${autoWidthVW(14)};
    border-radius:${autoWidthVW(4)};
  }
`
export const BorderRadiusButton = styled(LinearButton)<{
  height?:number
}>`
  height:${({height})=>`${autoWidthVW(height??60)}`};
  border-radius:${({height})=>`${autoWidthVW((height??60)/2)}`};
  @media (max-width: 768px) {
    height:${({height})=>`${autoWidthVW(height??30)}`};
    border-radius:${({height})=>`${autoWidthVW((height??30)/2)}`};
  };
`