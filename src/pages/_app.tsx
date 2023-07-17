import '../styles/globals.css'
import 'antd/dist/antd.css'
import 'animate.css'
import '@rainbow-me/rainbowkit/styles.css'
import type { AppProps } from 'next/app'
import styled, { ThemeProvider } from 'styled-components'
import { Suspense, useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import Loading from '../components/Loading'
import store from '../state'
import LoadingProvider from '../provider/loadingProvider'
import ModalProvider from '../provider/modalProvider'
import {
  RainbowKitProvider,
  connectorsForWallets,
  wallet,
  Wallet,
  getWalletConnectConnector,
} from '@rainbow-me/rainbowkit'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'
import { Chain, configureChains, createClient, WagmiConfig } from 'wagmi'
import { BSCChain, BSCTestnetChain } from '../networkDetails'
import { ReactQueryProvider } from '../lib/react-query'
import dynamic from 'next/dynamic'
import { FlexViewColumn } from '../components/Common'
import { useRouter } from "next/router";
import { isBrowser } from 'react-device-detect'
import { autoWidthVW } from '../common/Common'
import { TokenPocket } from '../lib/CustomWallet'
import okxWallet from "@src/lib/okxWallet";
// import HeaderDynamic from '../components/Header'

const HeaderDynamic = dynamic(() => import('../components/Header'), { ssr: false })
const FooterDynamic = dynamic(() => import('../components/Footer'), { ssr: false })


const { chains, provider } = configureChains(
  [BSCTestnetChain], // testnet 
  // [BSCChain], // production 
  [alchemyProvider({}), publicProvider()]
)

const needsInjectedWalletFallback =
typeof window !== 'undefined' &&
window.ethereum &&
// !window.ethereum.isMetaMask &&
!window.ethereum.isCoinbaseWallet

const isTokenPocketInjected =
typeof window !== 'undefined' &&
window.ethereum &&
window.ethereum?.isTokenPocket === true

const connectors = connectorsForWallets([
  {
    groupName: 'OMNISWAP',
    wallets: [
      wallet.metaMask({ chains, shimDisconnect: true }),
      wallet.brave({ chains, shimDisconnect: true }),
      TokenPocket({ chains, shimDisconnect: true }),
      okxWallet({ chains, shimDisconnect: true }),
      wallet.walletConnect({ chains }),
      wallet.coinbase({ appName: 'OMNISWAP', chains }),
      ...(needsInjectedWalletFallback
        ? [wallet.injected({ chains, shimDisconnect: true })]
        : []),
    ],
  },
])
const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
})


function MyApp({ Component, pageProps }: AppProps) {
  const [loadPage,setLoadPage] = useState(false)
  useEffect(()=>{
    setLoadPage(true)
  },[])

  return (
    !loadPage ? <Loading/> : <Suspense fallback={<Loading></Loading>}>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains}>
          <ReactQueryProvider>
            <Provider store={store}>
              <ThemeProvider theme={{}}>
                <LoadingProvider>
                  <ModalProvider>
                    <MainView>
                      <HeaderDynamic />
                      <Component {...pageProps} />
                      {/* <FooterDynamic/> */}
                    </MainView>
                  </ModalProvider>
                </LoadingProvider>
              </ThemeProvider>
            </Provider>
          </ReactQueryProvider>
        </RainbowKitProvider>
      </WagmiConfig>
    </Suspense>
  )
}

const MainView = styled(FlexViewColumn)`
  width: 100%;
  z-index: 1;
  background-color:#000;
  align-items:flex-start;
`
export default MyApp
