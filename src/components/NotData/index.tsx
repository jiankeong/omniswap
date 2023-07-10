import Image from "next/image"
import styled from "styled-components"
import ImageCommon from "../../../public/images/ImageCommon"
import { autoWidthVW } from "../../common/Common"
import useTranslationLanguage from "../../hooks/useTranslationLanguage"
import { FlexViewCenter, FlexViewCenterColumn } from "../Common"
import { Text } from "../Text"

export default function NotData(){
  const {t} = useTranslationLanguage()
  return <NotdataView>
    <Notdata>
      <Image src={ImageCommon.nodata} layout='fill'/>
    </Notdata>
    <Text size={14} color='#989DAA' webSize={24}>{t('No Data')}</Text>
  </NotdataView>
}
const NotdataView = styled(FlexViewCenterColumn)`
  margin:${autoWidthVW(61)} 0;
  width:100%;
`
const Notdata = styled(FlexViewCenter)`
  width:${autoWidthVW(122)};
  height:${autoWidthVW(160)};
  margin:${autoWidthVW(40)};
  @media (max-width: 768px) {
    width:${autoWidthVW(61)};
    height:${autoWidthVW(80)};
    margin:${autoWidthVW(20)};
  }
`