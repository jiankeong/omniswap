import React, { useEffect, useState} from 'react'
import styled  from 'styled-components'
import ImageCommon from '../../../public/images/ImageCommon';
import {  autoWidthVW} from "../../common/Common";
import {
    FlexView,
    FlexViewCenter,
    FlexViewColumn,
} from "../Common";
import { Text, TextBlack, TextRegular } from '../Text';
import {useModalContext} from '../../provider/modalProvider'
import { LocalLanguage } from "../../../public/locales/LocalesCommon";
import useTranslationLanguage from "../../hooks/useTranslationLanguage"
import { useDispatch } from "react-redux"
import { changeLangugae,useLanguage } from "../../state/setting"
import {languages,LanguagesType} from "../../common/constants";


export default function Language() {
  const [show,setShow] = useState(false)
  const modalContext = useModalContext()
  const {t} = useTranslationLanguage()
  const dispatch = useDispatch()
  const currentLan = useLanguage()
  function onSelect(lan:LocalLanguage){


    console.log('-=-=-=',lan)
    setShow(false)
    modalContext.hidden()
    dispatch(changeLangugae(lan))
  }
  function onChangeLan(){
    setShow(true)
    modalContext.show(<ChangeLan onSelect={onSelect}/>,{
      style:{
        justifyContent:'flex-start',
        alignItems:'flex-start'
      },
      onBgClick:()=>{
        modalContext.hidden()
        setShow(false)
      }
    })
  }
  return(
    <LanIconView onClick={onChangeLan}>
      <Text>{currentLan.toUpperCase()}</Text>
    </LanIconView>
  )
}

function ChangeLan({onSelect}:any){

  function onChangeLan(lan:LocalLanguage){
    onSelect(lan)
  }

  return <ChangeLanView className='animate__animated animate__pulse'>
    {
      Object.keys(languages).map((item:any,index:number)=>{
        return  <SubContentView key={index} onClick={()=>onChangeLan(item)}>
        <Text webSize={24} size={14}>{languages[item as LocalLanguage].title}</Text>
      </SubContentView>
      })
    }
  </ChangeLanView>
}
const ChangeLanView = styled(FlexViewColumn)`
  position:absolute;
  right:${autoWidthVW(100)};
  top:${autoWidthVW(100)};
  @media (max-width: 768px) {
    top:${autoWidthVW(60)};
    right:${autoWidthVW(20)};
    height:40%;
    background: rgba(1, 1, 1, 0.8);
    overflow:scroll
  };
  background: #444E68;
  align-items: flex-start;
  border-radius: ${autoWidthVW(6)};
`
const ContentView = styled(FlexView)`
  height:${autoWidthVW(50)};
  @media (max-width: 768px) {
    height:${autoWidthVW(34)};
    border-radius: ${autoWidthVW(10)};
    padding:0 ${autoWidthVW(10)};
    border: ${autoWidthVW(1)} solid #AA86FF
  };
  cursor:pointer;
  border-radius: ${autoWidthVW(16)};
  padding:0 ${autoWidthVW(20)};
  border: ${autoWidthVW(2)} solid #AA86FF
`
const SubContentView = styled(ContentView)`
  border:0;
  @media (max-width: 768px) {
    margin:${autoWidthVW(5)} ${autoWidthVW(10)};
  };
  width:100%;
`

const LanIcon = styled.img`
  width:${autoWidthVW(32)};
  height:${autoWidthVW(32)};
  margin-right:${autoWidthVW(10)};
  @media (max-width: 768px) {
    width:${autoWidthVW(20)};
    height:${autoWidthVW(20)};
    margin-right:${autoWidthVW(10)};
  }
`

const LanIconView = styled(FlexViewCenter)`
  width:${autoWidthVW(80)};
  height:${autoWidthVW(40)};
  @media (max-width: 768px) {
    width:${autoWidthVW(50)};
    height:${autoWidthVW(20)};
  };
  border:1px solid #fff;
  cursor:pointer;
`