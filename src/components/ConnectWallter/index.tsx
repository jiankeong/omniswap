import React, {useContext, useEffect, useState} from 'react'
import styled, {css} from 'styled-components'
import ImageCommon from "../../../public/images/ImageCommon"
import { autoWidthVW, colors, formatAccount, ZERO_ADDRESS} from "../../common/Common";
import {
    FlexView,
    FlexViewCenter,
} from "../Common";
import { Text } from '../Text';
import { useAccount } from 'wagmi'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import useTranslationLanguage from '../../hooks/useTranslationLanguage';
import { isBrowser } from 'react-device-detect';


export function ConnectWalletButton(){
  const {t} = useTranslationLanguage()
  return <ConnectButton.Custom>
    {({
      openConnectModal,
    }) => {
      return (
        <ContentView >
          <FlexView style={{cursor:'pointer',height:'100%'}} onClick={openConnectModal}>
            <WalletIcon src={ImageCommon.walleticon}/>
            <TitleText size={16} webSize={26}>{t('ConnectWallet')}</TitleText>
          </FlexView>
        </ContentView>
      );
    }}
  </ConnectButton.Custom>
}


export function ConnectWalletMobile() {
  return <ConnectButton.Custom>
    {({
      account,
      chain,
      openAccountModal,
      openChainModal,
      openConnectModal,
      mounted,
    }) => {
      return (
        <ContentViewMobile >
          {(() => {
            if (!mounted || !account || !chain) {
              // 判断是否链接
              return (
                <FlexView style={{cursor:'pointer',height:'100%'}} onClick={openConnectModal}>
                  <WalletIconMobile src={ImageCommon.wallmobil}/>
                </FlexView>
              );
            }

            if (chain.unsupported) {
              // 判断网络
              return (
                <FlexView style={{cursor:'pointer',height:'100%'}} onClick={openChainModal}>
                  <WalletIconMobile src={ImageCommon.wallmobil}/>
                </FlexView>
              );
            }

            return (
              <AddressView onClick={openAccountModal}>
                <Text size={12} webSize={26}>{formatAccount(account.address,isBrowser?4:2)}</Text>
              </AddressView>
            );
          })()}
        </ContentViewMobile>
      );
    }}
  </ConnectButton.Custom>
}

export default function ConnectWallet() {
  const {t} = useTranslationLanguage()
  return <ConnectButton.Custom>
    {({
      account,
      chain,
      openAccountModal,
      openChainModal,
      openConnectModal,
      mounted,
    }) => {
      return (
        <ContentView >
          {(() => {
            if (!mounted || !account || !chain) {
              // 判断是否链接
              return (
                <FlexView style={{cursor:'pointer',height:'100%'}} onClick={openConnectModal}>
                  <WalletIcon src={ImageCommon.walleticon}/>
                  <TitleText size={16} webSize={26}>{t('ConnectWallet')}</TitleText>
                </FlexView>
              );
            }

            if (chain.unsupported) {
              // 判断网络
              return (
                <FlexView style={{cursor:'pointer',height:'100%'}} onClick={openChainModal}>
                  <WalletIcon src={ImageCommon.walleticon}/>
                  <TitleText color={'red'} size={16} webSize={26}>{t('Wrongnetwork')}</TitleText>
                </FlexView>
              );
            }

            return (
              <AddressView onClick={openAccountModal}>
                <Text size={12} webSize={26}>{formatAccount(account.address,isBrowser?4:2)}</Text>
              </AddressView>
            );
          })()}
        </ContentView>
      );
    }}
  </ConnectButton.Custom>
}

const TitleText = styled(Text)`
  @media (max-width: 768px) {
    display:none
  }
`
const AddressView = styled(FlexViewCenter)`
  padding:0 ${autoWidthVW(10)};
  @media (max-width: 768px) {
    padding:0;
  }
`
const ContentViewMobile = styled(FlexViewCenter)`
`
const ContentView = styled(FlexViewCenter)`
  width:fit-content;
  height:${autoWidthVW(64)};
  padding:0 ${autoWidthVW(20)};
  @media (max-width: 768px) {
    /* width:100%; */
    padding:${autoWidthVW(10)};
    height:fit-content;
    margin-right:${autoWidthVW(10)};
  };
  cursor:pointer;
  background: linear-gradient(225.31deg, #444E68 25.13%, #373F55 78.64%);
  border-radius: 8px;
`
const WalletIcon = styled.img`
  width:${autoWidthVW(32)};
  height:${autoWidthVW(32)};
  margin-right:${autoWidthVW(20)};
  @media (max-width: 768px) {
    width:${autoWidthVW(24)};
    height:${autoWidthVW(24)};
    margin-right:${autoWidthVW(0)};
  }
`

const WalletIconMobile = styled.img`
  width:${autoWidthVW(48)};
  height:${autoWidthVW(64)};
  @media (max-width: 768px) {
    width:${autoWidthVW(24)};
    height:${autoWidthVW(32)};
  };
  cursor:pointer;
`
