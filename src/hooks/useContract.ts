import { ERC721 } from './../typechain/ERC721';
import { useAccount, useProvider, useSigner, useNetwork } from 'wagmi';
import { Contract, ContractInterface, ethers } from "ethers"
import { useMemo } from "react";
import { ERC20_ABI, ERC721_ABI } from "../common/Common";
import { NetworkId } from "../common/constants";
import { Providers } from "../helpers/providers/Providers/Providers";
import { AddressMap } from "../constants/addresses";
import {
  ERC20,
  OMINT,
  ONFT,
  OMNIRelation
} from "../typechain";
import ONFT_ABI from "../abiJson/ONFT.json";
import OMINT_ABI from "../abiJson/OMINT.json";

import OMNIRelation_ABI from "../abiJson/OMNIRelation.json";


export function getContract(address: string, abi: any, other?: any) {
  if (!address || !abi) {
    return null;
  }
  // 使用Provider 连接合约，将只有对合约的可读权限
  return new ethers.Contract(address, abi, other);
}

export function getTokenContract(address: string, provider: any) {
  return getContract(address, ERC20_ABI, provider);
}

export function getNFTContract(address: string, provider: any) {
  return getContract(address, ERC721_ABI, provider);
}

// returns null on errors
export function useContract(address: string, ABI: any, withSignerIfPossible = true): Contract | null {
  const { address: account } = useAccount()
  const provider = useProvider()
  const { data: signer } = useSigner()
  return useMemo(() => {
    if (!address || !ABI) return null
    try {
      return getContract(address, ABI, withSignerIfPossible ? signer : provider)
    } catch (error) {
      console.error('Failed to useContract', error)
      return null
    }
  }, [address, ABI, withSignerIfPossible, account])
}

export function useTokenContract(tokenAddress: string, withSignerIfPossible?: boolean): Contract | null {
  const provider = useProvider()
  const { data: signer } = useSigner()
  return getTokenContract(tokenAddress, withSignerIfPossible ? signer : provider)
  // return useContract(tokenAddress, ERC20_ABI, withSignerIfPossible)
}
export function useNFTContract(tokenAddress: string, withSignerIfPossible?: boolean): Contract | null {
  const provider = useProvider()
  const { data: signer } = useSigner()
  return getNFTContract(tokenAddress, withSignerIfPossible ? signer : provider)
  // return useContract(tokenAddress, ERC721_ABI, withSignerIfPossible)
}
export const createStaticContract = <TContract extends Contract = Contract>(ABI: ContractInterface) => {
  return (address: string, networkId: NetworkId) => {
    const provider = Providers.getStaticProvider(networkId);

    return useMemo(() => new Contract(address, ABI, provider) as TContract, [address, provider]);
  };
};


/**
 * Please see note at the top of this file
 *
 * Helper function to create a dynamic contract hook.
 * Dynamic contracts use the provider/signer injected by the users wallet.
 * Since a wallet can be connected to any network, a dynamic contract hook
 * can possibly return null if there is no contract address specified for
 * the currently active network.
 */
const createDynamicContract = <TContract extends Contract = Contract>(ABI: ContractInterface) => {
  return (addressMap: AddressMap, asSigner = true) => {
    const provider = useProvider();
    const { data: signer,status } = useSigner();
    const { chain = { id: 1 } } = useNetwork();
    const {isConnected} = useAccount()
    return useMemo(() => {
      const address = addressMap[chain.id as keyof typeof addressMap];

      if (!address) return null;

      const providerOrSigner = asSigner && signer ? signer : provider;

      return new Contract(address, ABI, providerOrSigner) as TContract;
    }, [addressMap, chain.id, asSigner, signer, provider]);
  };
};
// Dynamic contracts
export const useDynamicTokenContract = createDynamicContract<ERC20>(ERC20_ABI);
export const useDynamic721Contract = createDynamicContract<ERC721>(ERC721_ABI);

export const useOMNIRelationontract = createDynamicContract<OMNIRelation>(OMNIRelation_ABI);
export const useONFTContract = createDynamicContract<ONFT>(ONFT_ABI);
export const useOMINTContract = createDynamicContract<OMINT>(OMINT_ABI);


 