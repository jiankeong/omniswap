/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface OMINTInterface extends utils.Interface {
  functions: {
    "BatchDevMint(address[],uint256[])": FunctionFragment;
    "DevMint(address,uint256)": FunctionFragment;
    "Mint(uint256)": FunctionFragment;
    "USDT()": FunctionFragment;
    "addAdmin(address)": FunctionFragment;
    "allAdmins()": FunctionFragment;
    "amountForType(uint256)": FunctionFragment;
    "fundAddress()": FunctionFragment;
    "getStudioList()": FunctionFragment;
    "isAdmin(address)": FunctionFragment;
    "mintPause(uint256)": FunctionFragment;
    "mintStats(address)": FunctionFragment;
    "onft()": FunctionFragment;
    "price(uint256)": FunctionFragment;
    "relation()": FunctionFragment;
    "removeAdmin(address)": FunctionFragment;
    "renounceAdmin()": FunctionFragment;
    "setFundAddress(address)": FunctionFragment;
    "setPause(uint256,bool)": FunctionFragment;
    "setRelation(address)": FunctionFragment;
    "setStudioAdmin(address,bool)": FunctionFragment;
    "studioAmount(address)": FunctionFragment;
    "studioList(uint256)": FunctionFragment;
    "studioListLength()": FunctionFragment;
    "studioStats(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "BatchDevMint"
      | "DevMint"
      | "Mint"
      | "USDT"
      | "addAdmin"
      | "allAdmins"
      | "amountForType"
      | "fundAddress"
      | "getStudioList"
      | "isAdmin"
      | "mintPause"
      | "mintStats"
      | "onft"
      | "price"
      | "relation"
      | "removeAdmin"
      | "renounceAdmin"
      | "setFundAddress"
      | "setPause"
      | "setRelation"
      | "setStudioAdmin"
      | "studioAmount"
      | "studioList"
      | "studioListLength"
      | "studioStats"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "BatchDevMint",
    values: [PromiseOrValue<string>[], PromiseOrValue<BigNumberish>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "DevMint",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "Mint",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "USDT", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "addAdmin",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "allAdmins", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "amountForType",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "fundAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getStudioList",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isAdmin",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "mintPause",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "mintStats",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "onft", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "price",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "relation", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "removeAdmin",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceAdmin",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setFundAddress",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setPause",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(
    functionFragment: "setRelation",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setStudioAdmin",
    values: [PromiseOrValue<string>, PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(
    functionFragment: "studioAmount",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "studioList",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "studioListLength",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "studioStats",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "BatchDevMint",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "DevMint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "Mint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "USDT", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "addAdmin", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "allAdmins", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "amountForType",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "fundAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getStudioList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isAdmin", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mintPause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mintStats", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "onft", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "price", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "relation", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setFundAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setPause", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setRelation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setStudioAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "studioAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "studioList", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "studioListLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "studioStats",
    data: BytesLike
  ): Result;

  events: {
    "AdminAdded(address)": EventFragment;
    "AdminRemoved(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AdminAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AdminRemoved"): EventFragment;
}

export interface AdminAddedEventObject {
  account: string;
}
export type AdminAddedEvent = TypedEvent<[string], AdminAddedEventObject>;

export type AdminAddedEventFilter = TypedEventFilter<AdminAddedEvent>;

export interface AdminRemovedEventObject {
  account: string;
}
export type AdminRemovedEvent = TypedEvent<[string], AdminRemovedEventObject>;

export type AdminRemovedEventFilter = TypedEventFilter<AdminRemovedEvent>;

export interface OMINT extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: OMINTInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    BatchDevMint(
      addrs: PromiseOrValue<string>[],
      typeIDs: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    DevMint(
      addr: PromiseOrValue<string>,
      typeID: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    Mint(
      typeID: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    USDT(overrides?: CallOverrides): Promise<[string]>;

    addAdmin(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    allAdmins(
      overrides?: CallOverrides
    ): Promise<[string[]] & { admins: string[] }>;

    amountForType(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    fundAddress(overrides?: CallOverrides): Promise<[string]>;

    getStudioList(
      overrides?: CallOverrides
    ): Promise<[string[]] & { _addrsList: string[] }>;

    isAdmin(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    mintPause(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    mintStats(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    onft(overrides?: CallOverrides): Promise<[string]>;

    price(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    relation(overrides?: CallOverrides): Promise<[string]>;

    removeAdmin(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    renounceAdmin(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setFundAddress(
      addr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setPause(
      typeId: PromiseOrValue<BigNumberish>,
      value: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setRelation(
      relation_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setStudioAdmin(
      addr: PromiseOrValue<string>,
      value: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    studioAmount(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    studioList(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    studioListLength(overrides?: CallOverrides): Promise<[BigNumber]>;

    studioStats(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  BatchDevMint(
    addrs: PromiseOrValue<string>[],
    typeIDs: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  DevMint(
    addr: PromiseOrValue<string>,
    typeID: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  Mint(
    typeID: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  USDT(overrides?: CallOverrides): Promise<string>;

  addAdmin(
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  allAdmins(overrides?: CallOverrides): Promise<string[]>;

  amountForType(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  fundAddress(overrides?: CallOverrides): Promise<string>;

  getStudioList(overrides?: CallOverrides): Promise<string[]>;

  isAdmin(
    account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  mintPause(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  mintStats(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  onft(overrides?: CallOverrides): Promise<string>;

  price(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  relation(overrides?: CallOverrides): Promise<string>;

  removeAdmin(
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  renounceAdmin(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setFundAddress(
    addr: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setPause(
    typeId: PromiseOrValue<BigNumberish>,
    value: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setRelation(
    relation_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setStudioAdmin(
    addr: PromiseOrValue<string>,
    value: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  studioAmount(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  studioList(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  studioListLength(overrides?: CallOverrides): Promise<BigNumber>;

  studioStats(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    BatchDevMint(
      addrs: PromiseOrValue<string>[],
      typeIDs: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>;

    DevMint(
      addr: PromiseOrValue<string>,
      typeID: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    Mint(
      typeID: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    USDT(overrides?: CallOverrides): Promise<string>;

    addAdmin(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    allAdmins(overrides?: CallOverrides): Promise<string[]>;

    amountForType(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    fundAddress(overrides?: CallOverrides): Promise<string>;

    getStudioList(overrides?: CallOverrides): Promise<string[]>;

    isAdmin(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    mintPause(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    mintStats(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    onft(overrides?: CallOverrides): Promise<string>;

    price(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    relation(overrides?: CallOverrides): Promise<string>;

    removeAdmin(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceAdmin(overrides?: CallOverrides): Promise<void>;

    setFundAddress(
      addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setPause(
      typeId: PromiseOrValue<BigNumberish>,
      value: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    setRelation(
      relation_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setStudioAdmin(
      addr: PromiseOrValue<string>,
      value: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    studioAmount(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    studioList(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    studioListLength(overrides?: CallOverrides): Promise<BigNumber>;

    studioStats(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    "AdminAdded(address)"(
      account?: PromiseOrValue<string> | null
    ): AdminAddedEventFilter;
    AdminAdded(account?: PromiseOrValue<string> | null): AdminAddedEventFilter;

    "AdminRemoved(address)"(
      account?: PromiseOrValue<string> | null
    ): AdminRemovedEventFilter;
    AdminRemoved(
      account?: PromiseOrValue<string> | null
    ): AdminRemovedEventFilter;
  };

  estimateGas: {
    BatchDevMint(
      addrs: PromiseOrValue<string>[],
      typeIDs: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    DevMint(
      addr: PromiseOrValue<string>,
      typeID: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    Mint(
      typeID: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    USDT(overrides?: CallOverrides): Promise<BigNumber>;

    addAdmin(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    allAdmins(overrides?: CallOverrides): Promise<BigNumber>;

    amountForType(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    fundAddress(overrides?: CallOverrides): Promise<BigNumber>;

    getStudioList(overrides?: CallOverrides): Promise<BigNumber>;

    isAdmin(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    mintPause(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    mintStats(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    onft(overrides?: CallOverrides): Promise<BigNumber>;

    price(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    relation(overrides?: CallOverrides): Promise<BigNumber>;

    removeAdmin(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    renounceAdmin(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setFundAddress(
      addr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setPause(
      typeId: PromiseOrValue<BigNumberish>,
      value: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setRelation(
      relation_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setStudioAdmin(
      addr: PromiseOrValue<string>,
      value: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    studioAmount(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    studioList(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    studioListLength(overrides?: CallOverrides): Promise<BigNumber>;

    studioStats(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    BatchDevMint(
      addrs: PromiseOrValue<string>[],
      typeIDs: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    DevMint(
      addr: PromiseOrValue<string>,
      typeID: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    Mint(
      typeID: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    USDT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    addAdmin(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    allAdmins(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    amountForType(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    fundAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getStudioList(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isAdmin(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    mintPause(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    mintStats(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    onft(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    price(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    relation(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    removeAdmin(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    renounceAdmin(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setFundAddress(
      addr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setPause(
      typeId: PromiseOrValue<BigNumberish>,
      value: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setRelation(
      relation_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setStudioAdmin(
      addr: PromiseOrValue<string>,
      value: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    studioAmount(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    studioList(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    studioListLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    studioStats(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
