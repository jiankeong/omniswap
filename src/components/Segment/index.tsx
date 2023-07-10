import styled from "styled-components";
import { FlexViewBetween, FlexViewCenter } from "../Common";
import {autoWidthVW} from "../../common/Common";
import { TextSemiBold } from "../Text";
import { useState } from "react";

export function Segment({title,onSelect}:any){
  const [select,setSelect] = useState(0)
  return <SegmentView>
    {
      title.map((title:string,index:number)=>{
        return <SegmentItem select={select == index} key={index} onClick={()=>{
          setSelect(index)
          onSelect&&onSelect(index)
        }}>
          <TextSemiBold size={20} webSize={40}>{title}</TextSemiBold>
        </SegmentItem>
      })
    }
  </SegmentView>
}

export function SegmentSub({title,onSelect}:any){
  const [select,setSelect] = useState(0)
  return <SegmentSubView>
    {
      title.map((title:string,index:number)=>{
        return <SegmentSubItem select={select == index} key={index} onClick={()=>{
          setSelect(index)
          onSelect&&onSelect(index)
        }}>
          <TextSemiBold size={14} webSize={28}>{title}</TextSemiBold>
        </SegmentSubItem>
      })
    }
  </SegmentSubView>
}

const SegmentSubView = styled(FlexViewBetween)`
  width: ${autoWidthVW(700)};
  height: ${autoWidthVW(80)};
  overflow:hidden;
  @media (max-width: 768px) {
    width:100%;
    height: ${autoWidthVW(40)};
  };
  border:1px solid #865CCE
`
const SegmentSubItem = styled(FlexViewCenter)<{
  select:boolean
}>`
  cursor:pointer;
  width:50%;
  height: 100%;
  padding: ${autoWidthVW(10)};
  background:${({select})=>select?'#9869E8':'transparent'};
  @media (max-width: 768px) {
    padding: ${autoWidthVW(5)};
  };
`

const SegmentItem = styled(FlexViewCenter)<{
  select:boolean
}>`
  cursor:pointer;
  width:50%;
  height: 100%;
  padding: ${autoWidthVW(10)};
  background:${({select})=>select?'-webkit-linear-gradient(right,#9A5DFF,#C3C5FF)':'-webkit-linear-gradient(right,#7622D9,#5316CF)'};
  @media (max-width: 768px) {
    padding: ${autoWidthVW(5)};
  };
`
const SegmentView = styled(FlexViewBetween)`
  width: ${autoWidthVW(700)};
  height: ${autoWidthVW(80)};
  border-radius:${autoWidthVW(40)};
  overflow:hidden;
  @media (max-width: 768px) {
    width:100%;
    height: ${autoWidthVW(50)};
    border-radius:${autoWidthVW(25)};
  };
`