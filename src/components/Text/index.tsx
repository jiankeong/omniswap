import styled from 'styled-components'
import { autoWidthVW } from '../../common/Common'

export const Text = styled.span<{
  color?: string,
  size?: number,
  webSize?: number,
  weight?: string
}>`
  color:${({ color }) => color ?? 'white'};
  font-size:${({ webSize }) => autoWidthVW(webSize ?? 16)};
  font-weight:${({ weight }) => weight ?? '400'};
  @media (max-width: 768px) {
    font-size:${({ size }) => autoWidthVW(size ?? 12)};
  };
  white-Space:break-spaces;
  font-family:OutfitMedium
`

export const TextBold = styled(Text)`
  font-family:OutfitBold
`
export const TextSemiBold = styled(Text)`
  font-family:PoppinsSemiBold
`
export const TextLight = styled(Text)`
  font-family:OutfitLight
`
export const TextBlack = styled(Text)`
  font-family:OutfitBlack
`
export const TextExtraBold = styled(Text)`
  font-family:OutfitExtraBold
`
export const TextExtraLight = styled(Text)`
  font-family:OutfitExtraLight
`
export const TextThin = styled(Text)`
  font-family:OutfitThin
`
export const TextRegular = styled(Text)`
  font-family:OutfitRegular
`







