import { Chain, configureChains, createClient, WagmiConfig } from 'wagmi'
import {
  Wallet,
  getWalletConnectConnector,
} from '@rainbow-me/rainbowkit'
import { isBrowser } from 'react-device-detect'
import { InjectedConnector } from 'wagmi/connectors/injected'


const TokenpocketSVG ='/svg/tokenpocket.svg';


interface MyWalletOptions {
  chains: Chain[]
  shimDisconnect?: boolean
}

export const TokenPocket = ({ chains, shimDisconnect }: MyWalletOptions): Wallet => {
  let tpEtheruem = typeof window !== 'undefined' ? window.ethereum : undefined
  const isTokenPocketInjected =
    typeof tpEtheruem !== 'undefined' && tpEtheruem?.isTokenPocket === true
  const shouldUseWalletConnect = !isBrowser && !isTokenPocketInjected
  return {
    id: 'Token Pocket',
    name: 'Token Pocket',
    iconUrl: TokenpocketSVG,
    iconBackground: 'transparent',
    installed: !shouldUseWalletConnect ? isTokenPocketInjected : undefined,
    downloadUrls: {
      android:
        'https://play.google.com/store/apps/details?id=vip.mytokenpocket',
      ios: 'https://apps.apple.com/cn/app/tokenpocket-trusted-wallet/id1436028697',
      browserExtension:
        'https://chrome.google.com/webstore/detail/tokenpocket/mfgccjchihfkkindfppnaooecgfneiii',
      qrCode:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARgAAAEYAQMAAAC9QHvPAAAABlBMVEX///8AAABVwtN+AAACj0lEQVRo3uWawbHDIAxEN+ODj5RAKe4s5nfmUlyCjz4w1tcukNSAwkwSC54OCAkkHERti7FdeCNZcXmDP/x5x77cWWMlLnMDWK/NKrK5woHVBO9254NKszLZnvXCy7yxi7/PcmUX8uFW+QHmzW6zE3Zj+6vuBDUEg8XOXc59p+Nl3oEfYJrPF8ayC5scoALoPj8rY2wXl9rn7t3P+hU0FpfpbSvLMIsZ1z1/hjAtw+7dLj6cLqbjDeRiPncKcZlv+LZ4loJ6nfMRYE6GT4plH985/gB9wyLMCI/NIMkkhbHc8yjapttnSsZnOdIH7HX1BxlCCoDmHpbBeoI+j8H07mx1PbdntUmZ7zGb+H3Cg9o/UpBzb8EZ//QSBzIWlYq58CDZtAy0utybsRrHDwA8c6UNxGXslBUeANqSP8kHXFO58aRMa1p3ePhChrioQCEyw662uulE5aZmKvwwomFipq9wLhVy7uO9WFegdliGEq1gLHHY9XI3f0YOqQCYkmEFrunCmSpBhsDOcU8sAjPdPvBxgDnkS8XPuKCxqRmXH4hTbkwhlzESl+Exa3f6bsmj6Bu3UNuczKJriHZ/WOjcqs3F9DwqNvMwasnQPgxsAN3nncOcjH9rdUdKqPCVIQQHZzyrSFzuUz5PjsttdreHMiUDjC3ZzlHQqqgrIz8Mzui1RrtWU8lOoVBBlpuSGXsU575j7QcQk0XzpnUPy/TWwld3p+NsUv3uI3Myi7H1PcpGUtXuJfROKjLT3lvxbBIjn6dg3T7ApEzLliRxumLk096UYUVn8KpQDetwOobPbyz85mb2mrybwviPR237s0VmAOg/A94NZGO3LoipDUzLGBsZMx2z4/LlmyiHZX64/QPNL9thE1XE0AAAAABJRU5ErkJggg==',
    },
    createConnector: () => {
      const connector = shouldUseWalletConnect
        ? getWalletConnectConnector({ chains })
        : new InjectedConnector({ chains, options: { shimDisconnect } })

      return {
        connector,
        mobile: {
          getUri: shouldUseWalletConnect
            ? async () => {
              const connectorInfo: any = await connector.getProvider()
              return `tpoutside://wc?uri=${encodeURIComponent(
                connectorInfo?.connector?.uri
              )}`
            }
            : undefined,
        },
      }
    },
  }
}
