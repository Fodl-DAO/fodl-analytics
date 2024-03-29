/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface ConstantFaucetResumeInterface extends ethers.utils.Interface {
  functions: {
    "DURATION()": FunctionFragment;
    "TOTAL_FODL()": FunctionFragment;
    "changeTreasury(address)": FunctionFragment;
    "distributeFodl()": FunctionFragment;
    "finishTime()": FunctionFragment;
    "fodl()": FunctionFragment;
    "lastUpdateTime()": FunctionFragment;
    "target()": FunctionFragment;
    "treasury()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "DURATION", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "TOTAL_FODL",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "changeTreasury",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "distributeFodl",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "finishTime",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "fodl", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "lastUpdateTime",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "target", values?: undefined): string;
  encodeFunctionData(functionFragment: "treasury", values?: undefined): string;

  decodeFunctionResult(functionFragment: "DURATION", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "TOTAL_FODL", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "changeTreasury",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "distributeFodl",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "finishTime", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "fodl", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "lastUpdateTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "target", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "treasury", data: BytesLike): Result;

  events: {};
}

export class ConstantFaucetResume extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: ConstantFaucetResumeInterface;

  functions: {
    DURATION(overrides?: CallOverrides): Promise<[BigNumber]>;

    TOTAL_FODL(overrides?: CallOverrides): Promise<[BigNumber]>;

    changeTreasury(
      newTreasury: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    distributeFodl(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    finishTime(overrides?: CallOverrides): Promise<[BigNumber]>;

    fodl(overrides?: CallOverrides): Promise<[string]>;

    lastUpdateTime(overrides?: CallOverrides): Promise<[BigNumber]>;

    target(overrides?: CallOverrides): Promise<[string]>;

    treasury(overrides?: CallOverrides): Promise<[string]>;
  };

  DURATION(overrides?: CallOverrides): Promise<BigNumber>;

  TOTAL_FODL(overrides?: CallOverrides): Promise<BigNumber>;

  changeTreasury(
    newTreasury: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  distributeFodl(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  finishTime(overrides?: CallOverrides): Promise<BigNumber>;

  fodl(overrides?: CallOverrides): Promise<string>;

  lastUpdateTime(overrides?: CallOverrides): Promise<BigNumber>;

  target(overrides?: CallOverrides): Promise<string>;

  treasury(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    DURATION(overrides?: CallOverrides): Promise<BigNumber>;

    TOTAL_FODL(overrides?: CallOverrides): Promise<BigNumber>;

    changeTreasury(
      newTreasury: string,
      overrides?: CallOverrides
    ): Promise<void>;

    distributeFodl(overrides?: CallOverrides): Promise<BigNumber>;

    finishTime(overrides?: CallOverrides): Promise<BigNumber>;

    fodl(overrides?: CallOverrides): Promise<string>;

    lastUpdateTime(overrides?: CallOverrides): Promise<BigNumber>;

    target(overrides?: CallOverrides): Promise<string>;

    treasury(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    DURATION(overrides?: CallOverrides): Promise<BigNumber>;

    TOTAL_FODL(overrides?: CallOverrides): Promise<BigNumber>;

    changeTreasury(
      newTreasury: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    distributeFodl(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    finishTime(overrides?: CallOverrides): Promise<BigNumber>;

    fodl(overrides?: CallOverrides): Promise<BigNumber>;

    lastUpdateTime(overrides?: CallOverrides): Promise<BigNumber>;

    target(overrides?: CallOverrides): Promise<BigNumber>;

    treasury(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    DURATION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    TOTAL_FODL(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    changeTreasury(
      newTreasury: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    distributeFodl(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    finishTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    fodl(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lastUpdateTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    target(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    treasury(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
