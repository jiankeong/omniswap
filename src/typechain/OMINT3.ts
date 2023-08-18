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

export interface OMINT3Interface extends utils.Interface {
  functions: {
    "OMNI()": FunctionFragment;
    "OMNIMint(uint256)": FunctionFragment;
    "OMNIPrice()": FunctionFragment;
    "USDT()": FunctionFragment;
    "addAdmin(address)": FunctionFragment;
    "allAdmins()": FunctionFragment;
    "fundAddress()": FunctionFragment;
    "isAdmin(address)": FunctionFragment;
    "mintPause(uint256)": FunctionFragment;
    "omint()": FunctionFragment;
    "onft()": FunctionFragment;
    "price(uint256)": FunctionFragment;
    "relation()": FunctionFragment;
    "removeAdmin(address)": FunctionFragment;
    "renounceAdmin()": FunctionFragment;
    "setFundAddress(address)": FunctionFragment;
    "setOMNIPrice(uint256)": FunctionFragment;
    "setPause(uint256,bool)": FunctionFragment;
    "setRelation(address)": FunctionFragment;
    "stakePool()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "OMNI"
      | "OMNIMint"
      | "OMNIPrice"
      | "USDT"
      | "addAdmin"
      | "allAdmins"
      | "fundAddress"
      | "isAdmin"
      | "mintPause"
      | "omint"
      | "onft"
      | "price"
      | "relation"
      | "removeAdmin"
      | "renounceAdmin"
      | "setFundAddress"
      | "setOMNIPrice"
      | "setPause"
      | "setRelation"
      | "stakePool"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "OMNI", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "OMNIMint",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "OMNIPrice", values?: undefined): string;
  encodeFunctionData(functionFragment: "USDT", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "addAdmin",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "allAdmins", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "fundAddress",
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
  encodeFunctionData(functionFragment: "omint", values?: undefined): string;
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
    functionFragment: "setOMNIPrice",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setPause",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(
    functionFragment: "setRelation",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "stakePool", values?: undefined): string;

  decodeFunctionResult(functionFragment: "OMNI", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "OMNIMint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "OMNIPrice", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "USDT", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "addAdmin", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "allAdmins", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "fundAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isAdmin", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mintPause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "omint", data: BytesLike): Result;
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
  decodeFunctionResult(
    functionFragment: "setOMNIPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setPause", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setRelation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "stakePool", data: BytesLike): Result;

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

export interface OMINT3 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: OMINT3Interface;

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
    OMNI(overrides?: CallOverrides): Promise<[string]>;

    OMNIMint(
      typeID: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    OMNIPrice(overrides?: CallOverrides): Promise<[BigNumber]>;

    USDT(overrides?: CallOverrides): Promise<[string]>;

    addAdmin(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    allAdmins(
      overrides?: CallOverrides
    ): Promise<[string[]] & { admins: string[] }>;

    fundAddress(overrides?: CallOverrides): Promise<[string]>;

    isAdmin(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    mintPause(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    omint(overrides?: CallOverrides): Promise<[string]>;

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

    setOMNIPrice(
      value: PromiseOrValue<BigNumberish>,
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

    stakePool(overrides?: CallOverrides): Promise<[string]>;
  };

  OMNI(overrides?: CallOverrides): Promise<string>;

  OMNIMint(
    typeID: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  OMNIPrice(overrides?: CallOverrides): Promise<BigNumber>;

  USDT(overrides?: CallOverrides): Promise<string>;

  addAdmin(
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  allAdmins(overrides?: CallOverrides): Promise<string[]>;

  fundAddress(overrides?: CallOverrides): Promise<string>;

  isAdmin(
    account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  mintPause(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  omint(overrides?: CallOverrides): Promise<string>;

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

  setOMNIPrice(
    value: PromiseOrValue<BigNumberish>,
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

  stakePool(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    OMNI(overrides?: CallOverrides): Promise<string>;

    OMNIMint(
      typeID: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    OMNIPrice(overrides?: CallOverrides): Promise<BigNumber>;

    USDT(overrides?: CallOverrides): Promise<string>;

    addAdmin(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    allAdmins(overrides?: CallOverrides): Promise<string[]>;

    fundAddress(overrides?: CallOverrides): Promise<string>;

    isAdmin(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    mintPause(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    omint(overrides?: CallOverrides): Promise<string>;

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

    setOMNIPrice(
      value: PromiseOrValue<BigNumberish>,
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

    stakePool(overrides?: CallOverrides): Promise<string>;
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
    OMNI(overrides?: CallOverrides): Promise<BigNumber>;

    OMNIMint(
      typeID: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    OMNIPrice(overrides?: CallOverrides): Promise<BigNumber>;

    USDT(overrides?: CallOverrides): Promise<BigNumber>;

    addAdmin(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    allAdmins(overrides?: CallOverrides): Promise<BigNumber>;

    fundAddress(overrides?: CallOverrides): Promise<BigNumber>;

    isAdmin(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    mintPause(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    omint(overrides?: CallOverrides): Promise<BigNumber>;

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

    setOMNIPrice(
      value: PromiseOrValue<BigNumberish>,
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

    stakePool(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    OMNI(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    OMNIMint(
      typeID: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    OMNIPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    USDT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    addAdmin(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    allAdmins(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    fundAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isAdmin(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    mintPause(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    omint(overrides?: CallOverrides): Promise<PopulatedTransaction>;

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

    setOMNIPrice(
      value: PromiseOrValue<BigNumberish>,
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

    stakePool(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
