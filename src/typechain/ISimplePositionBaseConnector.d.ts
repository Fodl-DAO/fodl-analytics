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

interface ISimplePositionBaseConnectorInterface extends ethers.utils.Interface {
  functions: {
    "getBorrowBalance()": FunctionFragment;
    "getCollateralUsageFactor()": FunctionFragment;
    "getPositionMetadata()": FunctionFragment;
    "getPositionValue()": FunctionFragment;
    "getPrincipalValue()": FunctionFragment;
    "getSimplePositionDetails()": FunctionFragment;
    "getSupplyBalance()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getBorrowBalance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getCollateralUsageFactor",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getPositionMetadata",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getPositionValue",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getPrincipalValue",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getSimplePositionDetails",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getSupplyBalance",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "getBorrowBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCollateralUsageFactor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPositionMetadata",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPositionValue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPrincipalValue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSimplePositionDetails",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSupplyBalance",
    data: BytesLike
  ): Result;

  events: {};
}

export class ISimplePositionBaseConnector extends BaseContract {
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

  interface: ISimplePositionBaseConnectorInterface;

  functions: {
    getBorrowBalance(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getCollateralUsageFactor(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getPositionMetadata(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getPositionValue(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getPrincipalValue(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getSimplePositionDetails(
      overrides?: CallOverrides
    ): Promise<[string, string, string]>;

    getSupplyBalance(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  getBorrowBalance(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getCollateralUsageFactor(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getPositionMetadata(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getPositionValue(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getPrincipalValue(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getSimplePositionDetails(
    overrides?: CallOverrides
  ): Promise<[string, string, string]>;

  getSupplyBalance(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getBorrowBalance(overrides?: CallOverrides): Promise<BigNumber>;

    getCollateralUsageFactor(overrides?: CallOverrides): Promise<BigNumber>;

    getPositionMetadata(
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        string,
        string,
        string,
        string
      ] & {
        supplyAmount: BigNumber;
        borrowAmount: BigNumber;
        collateralUsageFactor: BigNumber;
        principalValue: BigNumber;
        positionValue: BigNumber;
        positionAddress: string;
        platformAddress: string;
        supplyTokenAddress: string;
        borrowTokenAddress: string;
      }
    >;

    getPositionValue(overrides?: CallOverrides): Promise<BigNumber>;

    getPrincipalValue(overrides?: CallOverrides): Promise<BigNumber>;

    getSimplePositionDetails(
      overrides?: CallOverrides
    ): Promise<[string, string, string]>;

    getSupplyBalance(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    getBorrowBalance(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getCollateralUsageFactor(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getPositionMetadata(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getPositionValue(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getPrincipalValue(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getSimplePositionDetails(overrides?: CallOverrides): Promise<BigNumber>;

    getSupplyBalance(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getBorrowBalance(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getCollateralUsageFactor(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getPositionMetadata(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getPositionValue(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getPrincipalValue(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getSimplePositionDetails(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSupplyBalance(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
