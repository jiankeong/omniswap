import styled from 'styled-components'
import { FlexView } from '../Common'
import ImageCommon from '../../../public/images/ImageCommon'
function Background() {
  return <BackGroundView />
}
const BackGroundView = styled(FlexView)`
  position: fixed;
  background-position: center;
  background-image: url(${ImageCommon.background});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height:100%;
  @media (max-width: 768px) {
    background-image: url(${ImageCommon.background});
  }
`
export default Background
