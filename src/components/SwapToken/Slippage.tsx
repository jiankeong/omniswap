import Image from "next/image"
import { useState } from "react"
import { useDispatch } from "react-redux"
import styled from "styled-components"
import ImageCommon from "../../../public/images/ImageCommon"
import { autoWidthVW } from "../../common/Common"
import useTranslationLanguage from "../../hooks/useTranslationLanguage"
import { changeSlippage, changeDeadline, slippageDefault, deadlineDefault, useSlippage, useDeadline } from "../../state/setting"
import { BaseInput, FlexView, FlexViewBetween, FlexViewCenter, FlexViewColumn, SpaceHeight } from "../Common"
import { Text } from "../Text"

export default function Slippage({onClose}:any){
  const {t} = useTranslationLanguage()
  const [slippageValue,setSlippageValue] = useState(useSlippage())
  const [deadlineTime,setDeadlingTime] = useState(useDeadline())
  const dispatch = useDispatch()
  function onSlippageInputChange(e:any){
    setSlippageValue(e.target.value)
  }
  function onSlippageInputBlur(){
    if (Number(slippageValue) <= 0){
      setSlippageValue(slippageDefault)
      dispatch(changeSlippage(slippageDefault))
    }else {
      dispatch(changeSlippage(slippageValue))
    }
  }
  function onSlippagetTimeChange(e:any){
    setDeadlingTime(e.target.value)
  }
  function onSlippagetTimeBlur(){
    if (Number(deadlineTime) < Number(deadlineDefault)){
      setDeadlingTime(deadlineDefault)
      dispatch(changeDeadline(deadlineDefault))
    }else {
      dispatch(changeDeadline(deadlineTime))
    }
  }
  return <SlippageView>
    <FlexViewBetween>
      <Text size={16} webSize={32}>{t('Trad Settings')}</Text>
      <Close onClick={onClose}>
        <Image src={ImageCommon.close} layout='fill'/>
      </Close>
    </FlexViewBetween>
    <SpaceHeight height={24}/>
    <Text size={16} webSize={32}>{t('Slippage Tolerance')}</Text>
    <SpaceHeight height={12}/>
    <FlexView>
      <SlippageItem select={slippageValue == '0.1'} onClick={()=>{
        setSlippageValue('0.1')
        dispatch(changeSlippage('0.1'))
      }}>
        <Text size={12} webSize={24} color={slippageValue == '0.1' ? '#fff' : '#989DAA'}>0.1</Text>
      </SlippageItem>
      <SlippageItem select={slippageValue == '0.5'} onClick={()=>{
        setSlippageValue('0.5')
        dispatch(changeSlippage('0.5'))
      }}>
        <Text size={12} webSize={24} color={slippageValue == '0.5' ? '#fff' : '#989DAA'}>0.5</Text>
      </SlippageItem>
      <SlippageItem select={slippageValue == '1.0'} onClick={()=>{
        setSlippageValue('1.0')
        dispatch(changeSlippage('1.0'))
      }}>
        <Text size={12} webSize={24} color={slippageValue == '1.0' ? '#fff' : '#989DAA'}>1.0</Text>
      </SlippageItem>
      <SlippageItem select={
        slippageValue != '1.0' && slippageValue != '0.1' && slippageValue != '0.5'
      }>
        <SlippageInput value={slippageValue} onChange={onSlippageInputChange} onBlur={onSlippageInputBlur}/>
        <Text size={12} webSize={24} color='#989DAA'>%</Text>
      </SlippageItem>
    </FlexView>
    <SpaceHeight height={24}/>
    <FlexViewBetween>
      <Text size={16} webSize={32}>{t('Tx deadline (mins)')}</Text>
      <SlippageTimeView select={false}>
        <SlippageInput value={deadlineTime} onChange={onSlippagetTimeChange} onBlur={onSlippagetTimeBlur}/>
        <Text size={12} webSize={24} color='#989DAA'>MIN</Text>
      </SlippageTimeView>
    </FlexViewBetween>
  </SlippageView>
}
const SlippageInput = styled(BaseInput)`
  width:100%;
  color:#fff;
`
const SlippageItem = styled(FlexViewCenter)<{
  select:Boolean
}>`
  background: ${({select})=>select?'#FFA845':'#242837'};
  border-radius: ${autoWidthVW(16)};
  width:fit-content;
  padding:${autoWidthVW(10)} ${autoWidthVW(24)};
  cursor:pointer;
  margin-right:${autoWidthVW(24)};
  @media (max-width: 768px) {
    border-radius: ${autoWidthVW(8)};
    padding:${autoWidthVW(5)} ${autoWidthVW(12)};
    margin-right:${autoWidthVW(12)};
  }
`
const SlippageTimeView = styled(SlippageItem)`
  width:${autoWidthVW(400)};
  background:#242837;
  margin-right:0;
  @media (max-width: 768px) {
    width:${autoWidthVW(100)};
  }
`
const SlippageView = styled(FlexViewColumn)`
  width:${autoWidthVW(1440)};
  background: linear-gradient(0deg, #404866, #404866);
  border-radius: ${autoWidthVW(48)};
  padding:${autoWidthVW(28)} ${autoWidthVW(40)};
  @media (max-width: 768px) {
    width:90%;
    border-radius: ${autoWidthVW(24)};
    padding:${autoWidthVW(14)} ${autoWidthVW(20)};
  }
`
const Close = styled(FlexView)`
  width:${autoWidthVW(48)};
  height:${autoWidthVW(48)};
  cursor:pointer;
  @media (max-width: 768px) {
    width:${autoWidthVW(24)};
    height:${autoWidthVW(24)};
  }
`