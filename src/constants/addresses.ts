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
  [NetworkId.BSC]: "0x0aA839B262AbC6399Fea5FB1478cdcb7e398c384",
};
// 0xa68C1c2fAEdD8E2701A0326C07a9019aB7BCb944  omni test
// 0x8ce12f697088746a260ec8990dbde7a40a0a9b7c  omni pro

export const Relation_ADDRESSSES = {
  [NetworkId.BSC]: "0x4cA03CaECEeB65Ae6b83fC6b3a02ab4823B407C6",
};
export const OMINT_ADDRESSSES = {
  [NetworkId.BSC]: "0xC80a9E622D0df2368eAAE527734873B784716bBd",
};
export const ONFT_ADDRESSSES = {
  [NetworkId.BSC]: "0x37a28c00C7A4c3E10cD3e05E3de2985Fe696E73f",
};

// 测试ONFT 0x5aAbd029717E25Aa0DC6377B4B2934Ce7577f971
// 测试OMINT 0x130Ce213798a763C894Eba0a839dfC48E5FA7E44

// ONFT 0x37a28c00C7A4c3E10cD3e05E3de2985Fe696E73f
// OMINT 0xC80a9E622D0df2368eAAE527734873B784716bBd



export const OmniStakePool_ADDRESSSES = {
  [NetworkId.BSC]: "0x049eC792FB3e71107dC95C375e13eE17487121f2",
};
// 0xdB2Bc192E86BeDF189B22bA43820dF89D5472d79  pro
// 0x040B9531052cAaA88eDC5dEc790B099402F8eac5  dev




export const OmniSwapFactory_ADDRESSSES = {
  [NetworkId.BSC]: "0x6F9311125595C33B416a48B10BD7392B96bABa4D",
};

export const OmniSwapPair_ADDRESSSES = {
  [NetworkId.BSC]: "0x4E72b5c20466a151B6f01CF7A669BbFa9A93ee3A",
};

export const OmniSwapRouter_ADDRESSSES = {
  [NetworkId.BSC]: "0xefC725EDA326B42C8A9B7C79C6A44DD78f58a259",
};

export const OMNINFTPOOL_ADDRESSSES = {
  [NetworkId.BSC]: "0xC5BbB9315e2E9ba8EB88fd3c442559aE6942B9A2",
};

export const OmniPool_ADDRESSSES = {
  [NetworkId.BSC]: "0xf49E5F85285e5a5edEC3a991d6a8FcB401b44DBc",
};