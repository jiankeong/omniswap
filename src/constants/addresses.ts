import { NetworkId } from "../common/constants";

export type AddressMap = Partial<Record<NetworkId, string>>;



export const BTC_ADDRESSSES = {
  [NetworkId.BSC]: "0xa",
};
export const BNB_ADDRESSSES = {
  [NetworkId.BSC]: "0xb",
};
export const ETH_ADDRESSSES = {
  [NetworkId.BSC]: "OXC",
};
export const USDT_ADDRESSSES = {
  // [NetworkId.BSC]: "0x55d398326f99059fF775485246999027B3197955", // production use USDT
  [NetworkId.BSC_TESTNET]: "0x3Ae62ECAA5739eF2cBFb3d5032dBf444567499cB", // testnet token
};
export const USDC_ADDRESSSES = {
  [NetworkId.BSC]: "0xe",
};
export const OMNI_ADDRESSSES = {
  [NetworkId.BSC_TESTNET]: "0x6E5Cc3C7235F27603ec14013f03c08C341203957",
};


export const OMINT_ADDRESSSES = {
  [NetworkId.BSC_TESTNET]: "0x7a910B7EeaF717dDBFaf9f206B42cB4fFf6AD499",
};
export const Relation_ADDRESSSES = {
  [NetworkId.BSC_TESTNET]: "0x707fff82465958601d6d2Eeb033B4CD23291831e",
};
export const ONFT_ADDRESSSES = {
  [NetworkId.BSC_TESTNET]: "0xD8A8635D16999C4B05A0b4D8E646db652C5Fa4C4",
};

// 测试ONFT 0x5aAbd029717E25Aa0DC6377B4B2934Ce7577f971
// 测试OMINT 0x130Ce213798a763C894Eba0a839dfC48E5FA7E44

// ONFT 0x37a28c00C7A4c3E10cD3e05E3de2985Fe696E73f
// OMINT 0xC80a9E622D0df2368eAAE527734873B784716bBd