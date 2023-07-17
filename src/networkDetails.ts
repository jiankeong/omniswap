
import {
  Chain
} from 'wagmi';

export enum NetworkId {
  MAINNET = 1,
  TESTNET_RINKEBY = 4,

  ARBITRUM = 42161,
  ARBITRUM_TESTNET = 421611,

  AVALANCHE = 43114,
  AVALANCHE_TESTNET = 43113,

  POLYGON = 137,
  POLYGON_TESTNET = 80001,

  FANTOM = 250,
  FANTOM_TESTNET = 4002,

  OPTIMISM = 10,
  OPTIMISM_TESTNET = 69,

  BOBA = 288,
  BOBA_TESTNET = 28,

  ESC = 20,

  HECO = 128,

  BSC = 56,
  BSC_TESTNET = 97,
}

export const BSCChain: Chain = {
  id: 56,
  name: 'BSC',
  network: 'BSC',
  nativeCurrency: {
    decimals: 18,
    name: 'BSC',
    symbol: 'BNB',
  },
  rpcUrls: {
    default: 'https://bsc-dataseed1.defibit.io',
  },
  blockExplorers: {
    default: { name: 'bscscan', url: 'https://bscscan.com/' },
  },
  testnet: false,
}

export const BSCTestnetChain: Chain = {
  id: 97,
  name: 'BSC Testnet',
  network: 'BSC Testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'BSC',
    symbol: 'BNB',
  },
  rpcUrls: {
    default: 'https://data-seed-prebsc-1-s1.binance.org:8545',
  },
  blockExplorers: {
    default: { name: 'bscscan', url: 'https://testnet.bscscan.com/' },
  },
  testnet: false,
}