import { Contract } from '@ethersproject/contracts'
import { getAddress } from '@ethersproject/address'
import { AddressZero } from '@ethersproject/constants'
import { JsonRpcSigner, Web3Provider } from '@ethersproject/providers'
import { BigNumber } from '@ethersproject/bignumber'
import {ChainId} from "../common/Common";

// returns the checksummed address if the address is valid, otherwise returns false
export function isAddress(value: any): string | false {
  try {
    return getAddress(value)
  } catch {
    return false
  }
}

const ETHERSCAN_PREFIXES: { [chainId in ChainId]: string } = {
  [ChainId.heco]: 'hecoinfo.com',
  [ChainId.hecotest]: 'testnet.hecoinfo.com',
  [ChainId.elatest]: 'etherscan.io',
  [ChainId.esc]: 'etherscan.io',
  [ChainId.bsc]: 'bscscan.com',
  [ChainId.local]: 'etherscan.io',
  [ChainId.polygon]: 'polygonscan.com',
}

export function getScanLink(
    chainId: ChainId,
    data: string,
    type: 'transaction' | 'token' | 'block' | 'address'
): string {
  const prefix = `https://${ETHERSCAN_PREFIXES[chainId] || ETHERSCAN_PREFIXES[ChainId.esc]}`

  switch (type) {
    case 'transaction': {
      return `${prefix}/tx/${data}`
    }
    case 'token': {
      return `${prefix}/token/${data}`
    }
    case 'block': {
      return `${prefix}/block/${data}`
    }
    case 'address':
    default: {
      return `${prefix}/address/${data}`
    }
  }
}

const SCAN_NAMES: { [chainId in ChainId]: string } = {
  [ChainId.heco]: 'HecoScan',
  [ChainId.hecotest]: 'HecoScan',
  [ChainId.elatest]: 'Etherscan',
  [ChainId.esc]: 'Etherscan',
  [ChainId.bsc]: 'BscScan',
  [ChainId.local]: 'LocalScan',
  [ChainId.polygon]: 'PolygonScan',
}

export function getScanName(chainId: ChainId): string {
  return SCAN_NAMES[chainId]
}

// shorten the checksummed version of the input address to have 0x + 4 characters at start and end
export function shortenAddress(address: string, chars = 4): string {
  const parsed = isAddress(address)
  if (!parsed) {
    throw Error(`Invalid 'address' parameter '${address}'.`)
  }
  return `${parsed.substring(0, chars + 2)}...${parsed.substring(42 - chars)}`
}

// add 10%
export function calculateGasMargin(value: BigNumber): BigNumber {
  return value.mul(BigNumber.from(10000).add(BigNumber.from(1000))).div(BigNumber.from(10000))
}


// account is not optional
export function getSigner(library: Web3Provider, account: string): JsonRpcSigner {
  return library.getSigner(account).connectUnchecked()
}

// account is optional
export function getProviderOrSigner(library: Web3Provider, account?: string): Web3Provider | JsonRpcSigner {
  return account ? getSigner(library, account) : library
}

// account is optional
export function getContract(address: string, ABI: any, library: Web3Provider, account?: string): Contract {
  if (!isAddress(address) || address === AddressZero) {
    throw Error(`Invalid 'address' parameter '${address}'.`)
  }

  return new Contract(address, ABI, getProviderOrSigner(library, account) as any)
}

export function escapeRegExp(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') // $& means the whole matched string
}

export function isNumberString(value: string): boolean {
  return isNaN(Number(value)) === false
}
