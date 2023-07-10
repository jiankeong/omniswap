import styled from "styled-components"
import { autoWidthVW } from "../common/Common"
import { FlexViewBetween, FlexViewCenter, FlexViewCenterColumn, FlexViewColumn } from "../components/Common"
import { TextBold,Text } from "../components/Text"
import useTranslationLanguage from "../hooks/useTranslationLanguage"

export default function GotoInviteModal({onClose,onSure}:any){
  const {t} = useTranslationLanguage()
  return <ModalView>
    <FlexViewCenterColumn style={{width:'100%'}}>
      <TextBold size={20} webSize={38}>{t('Not yet bound')}</TextBold>
      <Text size={14} webSize={28}>{t('Is it forward bound')}</Text>
    </FlexViewCenterColumn>
    <FlexViewBetween>
      <CancelButton onClick={onClose}>
        <Text size={14} webSize={28}>{t('Cancel')}</Text>
      </CancelButton>
      <SureButton onClick={onSure}>
        <Text size={14} webSize={28}>{t('Sure')}</Text>
      </SureButton>
    </FlexViewBetween>
  </ModalView>
}
const CancelButton = styled(FlexViewCenter)`
  background: #242837;
  border-radius: ${autoWidthVW(16)};
  width:fit-content;
  padding:${autoWidthVW(10)} ${autoWidthVW(24)};
  cursor:pointer;
  margin-top:${autoWidthVW(50)};
  @media (max-width: 768px) {
    border-radius: ${autoWidthVW(8)};
    padding:${autoWidthVW(5)} ${autoWidthVW(30)};
    margin-top:${autoWidthVW(30)};
  }
`
const SureButton = styled(CancelButton)`
  background:#FFA845
`

const ModalView = styled(FlexViewColumn)`
  width:${autoWidthVW(1440)};
  background: linear-gradient(0deg, #404866, #404866);
  border-radius: ${autoWidthVW(16)};
  padding:${autoWidthVW(28)} ${autoWidthVW(40)};
  @media (max-width: 768px) {
    width:90%;
    border-radius: ${autoWidthVW(8)};
    padding:${autoWidthVW(14)} ${autoWidthVW(20)};
  }
`
