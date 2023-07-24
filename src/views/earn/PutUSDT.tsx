import Image from "next/image"
import { useState } from "react"
import { useDispatch } from "react-redux"
import styled from "styled-components"
import { TextBold } from "@/src/components/Text"
import { BaseInput, FlexView, FlexViewBetween, FlexViewCenter, FlexViewColumn, SpaceHeight } from "@/src/components/Common"
import ImageCommon from "@/public/images/ImageCommon"
import { ApprovalState, autoWidthVW } from "@/src/common/Common"
import useTranslationLanguage from "@/src/hooks/useTranslationLanguage"
import { OmniStakePool_ADDRESSSES, USDT_ADDRESSSES } from "@/src/constants/addresses"
import { useApprove } from "@/src/contract"

export default function PutUSDT({onClose,onPutIn}:any){
  const {t} = useTranslationLanguage()
  const [putIn,setPutIn] = useState('')
  const [approve,approveCallBack] = useApprove(USDT_ADDRESSSES,OmniStakePool_ADDRESSSES)

  function onChange(e:any){
    setPutIn(e.target.value)
  }
  function onPut(){
    if (!putIn){
      return
    }
    if (approve != ApprovalState.APPROVED){
      approveCallBack()
      return
    }
    onPutIn && onPutIn(putIn)
  }
  return <SlippageView>
    <FlexViewBetween>
      <TextBold size={16} webSize={32}>{t("Put in USDT")}</TextBold>
      <Close onClick={onClose}>
        <Image src={ImageCommon.close} layout='fill'/>
      </Close>
    </FlexViewBetween>
    <SpaceHeight height={24}/>
    <FlexViewCenter>
      <SlippageTimeView select={false}>
        <SlippageInput value={putIn} onChange={onChange}/>
      </SlippageTimeView>
    </FlexViewCenter>
    <SpaceHeight height={24}/>
    <FlexViewCenter>
      <SlippageItem select={true} onClick={onPut}>
        <TextBold size={16} webSize={32}>{approve == ApprovalState.APPROVED ? t("Put in USDT") : t('approve')}</TextBold>
      </SlippageItem>
    </FlexViewCenter>
  </SlippageView>
}
const SlippageInput = styled(BaseInput)`
  width:100%;
  color:#fff;
  text-align: center;
  font-size: ${autoWidthVW(30)};
`
const SlippageItem = styled(FlexViewCenter)<{
  select:Boolean
}>`
  background: ${({select})=>select?'#FFA845':'#242837'};
  border-radius: ${autoWidthVW(16)};
  width:100%;
  padding:${autoWidthVW(12)} ${autoWidthVW(24)};
  cursor:pointer;
  @media (max-width: 768px) {
    border-radius: ${autoWidthVW(8)};
    padding:${autoWidthVW(5)} ${autoWidthVW(12)};
    margin-right:${autoWidthVW(12)};
  }
`
const SlippageTimeView = styled(SlippageItem)`
  /* width:${autoWidthVW(400)}; */
  background:#242837;
  margin-right:0;
  @media (max-width: 768px) {
  }
`
const SlippageView = styled(FlexViewColumn)`
  width:${autoWidthVW(800)};
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