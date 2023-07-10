import styled from "styled-components";
import ImageCommon from "../../../public/images/ImageCommon";
import { FlexViewCenter } from "../Common";

export default function Loading(){
    return(
      <LoadingContent>
        <ImageView/>
      </LoadingContent>
    )
}
const LoadingContent = styled(FlexViewCenter)`
  position:fixed;
  top:0px;
  left:0px;
  right:0px;
  bottom:0px
`
const ImageView = styled.div`
  width:93px;
  height:120px;
  animation:fadenum 2s infinite;
  @keyframes fadenum {
    100%{transform:rotate(360deg)}
  };
  background-position:center;
  background-image:url(${ImageCommon.logo});
  background-size:cover;
  background-repeat: no-repeat;
`