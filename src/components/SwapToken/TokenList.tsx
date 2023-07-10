import Image from "next/image"
import { useState } from "react"
import styled from "styled-components"
import ImageCommon from "../../../public/images/ImageCommon"
import ImageToken from "../../../public/tokens/ImageToken"
import { autoWidthVW } from "../../common/Common"
import { BNB_ADDRESSSES, BTC_ADDRESSSES, ETH_ADDRESSSES, OMNI_ADDRESSSES, USDC_ADDRESSSES, USDT_ADDRESSSES } from "../../constants/addresses"
import useTranslationLanguage from "../../hooks/useTranslationLanguage"
import { BaseInput, FlexView, FlexViewBetween, FlexViewCenter, FlexViewColumn, SpaceWidth } from "../Common"
import { TextSemiBold, Text } from "../Text"
import * as _ from 'lodash';
import { useNetwork } from "wagmi"

export const swapTokens:any = [
  {name:'OMNI',value:OMNI_ADDRESSSES},
  {name:'BTC',value:BTC_ADDRESSSES},
  {name:'BNB',value:BNB_ADDRESSSES},
  {name:'ETH',value:ETH_ADDRESSSES},
  {name:'USDT',value:USDT_ADDRESSSES},
  {name:'USDC',value:USDC_ADDRESSSES}
]

export default function TokenList({onClose,onChoose}:any){
  const {t} = useTranslationLanguage()
  const [tokenList,setTokenList] = useState(swapTokens)
  const {chain = {id: 56}} = useNetwork()
  const onChange = _.debounce((e:any)=>{
    if (e.target.value.startsWith('0x') || e.target.value.startsWith('0X')){
      const filterArr = swapTokens.filter((item:any)=>{
        return item.value[chain.id].toUpperCase() == e.target.value.toUpperCase()
      })
      setTokenList(filterArr)
    }else {
      const filterArr = swapTokens.filter((item:any)=>{
        return item.name.indexOf(e.target.value.toUpperCase()) > -1
      })
      setTokenList(filterArr)
    }
  },500)

  function onChooseToken(index:number){
    onChoose && onChoose(tokenList[index])
    onClose && onClose()
  }

  return <TokenView className="animate__animated animate__fadeInUp animate__faster">
    <FlexViewBetween>
      <TextSemiBold size={16} webSize={32}>{t('Select a Token')}</TextSemiBold>
      <Close onClick={onClose}>
        <Image src={ImageCommon.close} layout='fill'/>
      </Close>
    </FlexViewBetween>
    <SearchView>
      <Close>
        <Image src={ImageCommon.search} layout='fill'/>
      </Close>
      <Input placeholder={t('Search Name or paste address')} onChange={onChange}/>
    </SearchView>
    {
      tokenList.length == 0 ? <FlexViewCenter>
        <Text size={14} webSize={28}>{t('no result')}</Text>
      </FlexViewCenter> : tokenList.map((item:any,index:number)=>{
        return <Item key={index+'tokenlist'} onClick={()=>onChooseToken(index)}>
          <FlexView>
            <Close>
              <Image src={ImageToken[item.name]} layout='fill'/>
            </Close>
            <SpaceWidth width={10}/>
            <Text size={14} webSize={28}>{item.name}</Text>
          </FlexView>
          {index != tokenList.length - 1 && <Line/>}
        </Item>
      })
    }
  </TokenView>
}
const Item = styled(FlexViewColumn)`
  width:100%;
  cursor:pointer;
  :hover {
    opacity:0.8
  }
`
const Line = styled.div`
  background:#868AAE;
  width:100%;
  height:1px;
  margin:${autoWidthVW(24)} 0;
  @media (max-width: 768px) {
    margin:${autoWidthVW(12)} 0;
  }
`
const Input = styled(BaseInput)`
  width:100%;
  margin-left:${autoWidthVW(24)};
  color:#fff;
  font-size:${autoWidthVW(28)};
  @media (max-width: 768px) {
    margin-left:${autoWidthVW(12)};
    font-size:${autoWidthVW(14)};
  }
`
const SearchView = styled(FlexView)`
  width:100%;
  background: #242837;
  border-radius: ${autoWidthVW(16)};
  padding:${autoWidthVW(20)};
  margin:${autoWidthVW(30)} 0;
  @media (max-width: 768px) {
    border-radius: ${autoWidthVW(8)};
    padding:${autoWidthVW(14)};
    margin:${autoWidthVW(25)} 0;
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
const TokenView = styled(FlexViewColumn)`
  background: linear-gradient(0deg, #404866, #404866);
  border-radius: ${autoWidthVW(48)} ${autoWidthVW(48)} 0px 0px;
  padding:${autoWidthVW(36)} ${autoWidthVW(40)};
  width:${autoWidthVW(1440)};
  height:${autoWidthVW(900)};
  @media (max-width: 768px) {
    border-radius: ${autoWidthVW(24)} ${autoWidthVW(24)} 0px 0px;
    padding:${autoWidthVW(18)} ${autoWidthVW(20)};
    width:100%;
    height:${autoWidthVW(500)};
  }
`