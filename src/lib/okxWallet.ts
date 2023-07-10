"use client";

// src/wallets/walletConnectors/okxWallet/okxWallet.ts
import { InjectedConnector } from "wagmi/connectors/injected";
import {getWalletConnectConnector} from "@rainbow-me/rainbowkit";
import {isAndroid} from "@src/lib/index";
const okxWallet:({
                     chains,
                     projectId,
                     ...options
                 }:any)=>any = ({
                     chains,
                     projectId,
                     ...options
                 }:any) => {
    //@ts-ignore
    const isOKXInjected = typeof window !== "undefined" && typeof window.okxwallet !== "undefined";
    const shouldUseWalletConnect = !isOKXInjected;
    return {
        id: "okx",
        name: "OKX Wallet",
        iconUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyOCAyOCI+PHBhdGggZmlsbD0iIzAwMCIgZD0iTTAgMGgyOHYyOEgweiIvPjxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjgxOSA1LjU1Nkg1LjkzYS4zNzYuMzc2IDAgMCAwLS4zNzUuMzc1djQuODg4YzAgLjIwNy4xNjguMzc1LjM3NS4zNzVoNC44ODhhLjM3Ni4zNzYgMCAwIDAgLjM3NS0uMzc2VjUuOTMyYS4zNzYuMzc2IDAgMCAwLS4zNzYtLjM3NVptNS42NCA1LjYzOGgtNC44ODZhLjM3Ni4zNzYgMCAwIDAtLjM3Ni4zNzZ2NC44ODdjMCAuMjA4LjE2OC4zNzYuMzc2LjM3Nmg0Ljg4N2EuMzc2LjM3NiAwIDAgMCAuMzc2LS4zNzVWMTEuNTdhLjM3Ni4zNzYgMCAwIDAtLjM3Ni0uMzc3Wm0uNzUtNS42MzhoNC44ODdjLjIwOCAwIC4zNzYuMTY4LjM3Ni4zNzV2NC44ODhhLjM3Ni4zNzYgMCAwIDEtLjM3Ni4zNzVIMTcuMjFhLjM3Ni4zNzYgMCAwIDEtLjM3Ni0uMzc2VjUuOTMzYzAtLjIwOC4xNjktLjM3Ni4zNzYtLjM3NlptLTYuMzkgMTEuMjc3SDUuOTNhLjM3Ni4zNzYgMCAwIDAtLjM3NS4zNzZ2NC44ODdjMCAuMjA4LjE2OC4zNzYuMzc1LjM3Nmg0Ljg4OGEuMzc2LjM3NiAwIDAgMCAuMzc1LS4zNzZWMTcuMjFhLjM3Ni4zNzYgMCAwIDAtLjM3Ni0uMzc2Wm02LjM5IDBoNC44ODdjLjIwOCAwIC4zNzYuMTY5LjM3Ni4zNzZ2NC44ODdhLjM3Ni4zNzYgMCAwIDEtLjM3Ni4zNzZIMTcuMjFhLjM3Ni4zNzYgMCAwIDEtLjM3Ni0uMzc2VjE3LjIxYzAtLjIwNy4xNjktLjM3Ni4zNzYtLjM3NloiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==",
        iconAccent: "#000",
        iconBackground: "#000",
        downloadUrls: {
            android: "https://play.google.com/store/apps/details?id=com.okinc.okex.gp",
            ios: "https://itunes.apple.com/app/id1327268470?mt=8",
            mobile: "https://okx.com/download",
            qrCode: "https://okx.com/download",
            chrome: "https://chrome.google.com/webstore/detail/okx-wallet/mcohilncbfahbmgdjkbpemcciiolgcge",
            edge: "https://microsoftedge.microsoft.com/addons/detail/okx-wallet/pbpjkcldjiffchgbbndmhojiacbgflha",
            firefox: "https://addons.mozilla.org/firefox/addon/okexwallet/",
            browserExtension: "https://okx.com/download"
        },
        createConnector: () => {
            const connector = shouldUseWalletConnect ? getWalletConnectConnector({chains }) : new InjectedConnector({
                chains,

                options: {

                    getProvider: () => {
                        //@ts-ignore
                        return window.okxwallet
                    },
                    ...options
                }
            });
            return {
                connector,
                mobile: {
                    getUri: shouldUseWalletConnect ? async () => {
                        //@ts-ignore
                        const { uri } = (await connector.getProvider()).connector;
                        return isAndroid() ? uri : `okex://main/wc?uri=${encodeURIComponent(uri)}`;
                    } : void 0
                },
                qrCode: shouldUseWalletConnect ? {
                    //@ts-ignore
                    getUri: async () => (await connector.getProvider()).connector.uri,
                    instructions: {
                        learnMoreUrl: "https://okx.com/web3/",
                        steps: [
                            {
                                description: "We recommend putting OKX Wallet on your home screen for quicker access.",
                                step: "install",
                                title: "Open the OKX Wallet app"
                            },
                            {
                                description: "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
                                step: "create",
                                title: "Create or Import a Wallet"
                            },
                            {
                                description: "After you scan, a connection prompt will appear for you to connect your wallet.",
                                step: "scan",
                                title: "Tap the scan button"
                            }
                        ]
                    }
                } : void 0,
                extension: {
                    instructions: {
                        learnMoreUrl: "https://okx.com/web3/",
                        steps: [
                            {
                                description: "We recommend pinning OKX Wallet to your taskbar for quicker access to your wallet.",
                                step: "install",
                                title: "Install the OKX Wallet extension"
                            },
                            {
                                description: "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
                                step: "create",
                                title: "Create or Import a Wallet"
                            },
                            {
                                description: "Once you set up your wallet, click below to refresh the browser and load up the extension.",
                                step: "refresh",
                                title: "Refresh your browser"
                            }
                        ]
                    }
                }
            };
        }
    };
};

export default okxWallet
