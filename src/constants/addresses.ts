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
export const USDC_ADDRESSSES = {
  [NetworkId.BSC]: "0xe",
};


export const USDT_ADDRESSSES = {
  [NetworkId.BSC]: "0x55d398326f99059fF775485246999027B3197955", // production use USDT
  // [NetworkId.BSC_TESTNET]: "0x3Ae62ECAA5739eF2cBFb3d5032dBf444567499cB", // testnet token
};

export const OMNI_ADDRESSSES = {
  [NetworkId.BSC]: "0xa68C1c2fAEdD8E2701A0326C07a9019aB7BCb944",
  // [NetworkId.BSC_TESTNET]: "0x6E5Cc3C7235F27603ec14013f03c08C341203957",
};
// 0xa68C1c2fAEdD8E2701A0326C07a9019aB7BCb944  test
// 0x8ce12f697088746a260ec8990dbde7a40a0a9b7c  omni


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



export const OmniStakePool_ADDRESSSES = {
  [NetworkId.BSC]: "0x1f2d503eD9C8510359b513dA58Dda1C70a3Ce4dc",
};

export const OmniSwapFactory_ADDRESSSES = {
  [NetworkId.BSC]: "0x47974cC9c8c328472c615E6EdADEdE907FB57067",
};

export const OmniSwapPair_ADDRESSSES = {
  [NetworkId.BSC]: "0x4E72b5c20466a151B6f01CF7A669BbFa9A93ee3A",
};

export const OmniSwapRouter_ADDRESSSES = {
  [NetworkId.BSC]: "0x732855770Ed0ec0B7072dC88e6a319110c8B88Ad",
};

export const OMNINFTPOOL_ADDRESSSES = {
  [NetworkId.BSC]: "0xbC8570bE7339706cA743cd0cf2281CD9b4409B2B",
};