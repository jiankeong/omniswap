import styled from "styled-components";
import { FlexView, FlexViewCenter } from "../Common";
import {autoWidthVW, colors} from "../../common/Common";
import { TextSemiBold } from "../Text";

export function Progress({progress,height=30,heiMobile=20,showTitle=false}:{progress:number,height?:number,heiMobile?:number,showTitle?:boolean}){
  return <ProgressBgView hei={height} heiMobile={heiMobile}>
    <ProgressShowView progress={progress} hei={height} heiMobile={heiMobile}>
      {showTitle && <TextSemiBold  size={12} webSize={20}>{progress}%</TextSemiBold>}
    </ProgressShowView>
  </ProgressBgView>
}


const ProgressBgView = styled(FlexView)<{
  hei:number,
  heiMobile?:number
}>`
  width: 100%;
  height:${({hei})=>`${autoWidthVW(hei)}`};
  border-radius: ${({hei})=>`${autoWidthVW(hei/2)}`};
  border:1px solid #75749E;
  overflow:hidden;
  @media (max-width: 768px) {
    height:${({heiMobile})=>heiMobile?`${autoWidthVW(heiMobile)}`:autoWidthVW(20)};
    border-radius: ${({heiMobile})=>heiMobile?`${autoWidthVW(heiMobile/2)}`:autoWidthVW(10)};
  }
`
const ProgressShowView = styled(FlexViewCenter)<{
  hei:number,
  progress:number,
  heiMobile?:number
}>`
  width:${({progress})=>`${progress}%`};
  border-radius: ${({hei})=>`${autoWidthVW(hei/2)}`};
  height:${({hei})=>`${autoWidthVW(hei)}`};
  @media (max-width: 768px) {
    height:${({heiMobile})=>heiMobile?`${autoWidthVW(heiMobile)}`:autoWidthVW(10)};
  };
  background-color:${colors.main};
`
