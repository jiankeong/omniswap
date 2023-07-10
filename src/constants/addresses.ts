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
  [NetworkId.BSC]: "0x55d398326f99059fF775485246999027B3197955",
};
export const USDC_ADDRESSSES = {
  [NetworkId.BSC]: "0xe",
};
export const OMNI_ADDRESSSES = {
  [NetworkId.BSC]: "0xf",
};


export const OMINT_ADDRESSSES = {
  [NetworkId.BSC]: "0xC80a9E622D0df2368eAAE527734873B784716bBd",
};
export const Relation_ADDRESSSES = {
  [NetworkId.BSC]: "0x4cA03CaECEeB65Ae6b83fC6b3a02ab4823B407C6",
};
export const ONFT_ADDRESSSES = {
  [NetworkId.BSC]: "0x37a28c00C7A4c3E10cD3e05E3de2985Fe696E73f",
};

// 测试ONFT 0x5aAbd029717E25Aa0DC6377B4B2934Ce7577f971
// 测试OMINT 0x130Ce213798a763C894Eba0a839dfC48E5FA7E44

// ONFT 0x37a28c00C7A4c3E10cD3e05E3de2985Fe696E73f
// OMINT 0xC80a9E622D0df2368eAAE527734873B784716bBd