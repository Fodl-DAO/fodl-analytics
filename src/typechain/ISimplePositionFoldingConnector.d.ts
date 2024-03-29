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

interface ISimplePositionFoldingConnectorInterface
  extends ethers.utils.Interface {
  functions: {
    "decreaseSimplePositionWithLoop(address,address,uint256,uint256,address,uint256,bytes)": FunctionFragment;
    "increaseSimplePositionWithLoop(address,address,uint256,uint256,address,uint256,bytes)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "decreaseSimplePositionWithLoop",
    values: [
      string,
      string,
      BigNumberish,
      BigNumberish,
      string,
      BigNumberish,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "increaseSimplePositionWithLoop",
    values: [
      string,
      string,
      BigNumberish,
      BigNumberish,
      string,
      BigNumberish,
      BytesLike
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "decreaseSimplePositionWithLoop",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "increaseSimplePositionWithLoop",
    data: BytesLike
  ): Result;

  events: {};
}

export class ISimplePositionFoldingConnector extends BaseContract {
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

  interface: ISimplePositionFoldingConnectorInterface;

  functions: {
    decreaseSimplePositionWithLoop(
      platform: string,
      supplyToken: string,
      withdrawAmount: BigNumberish,
      maxRedeemAmount: BigNumberish,
      borrowToken: string,
      minRepayAmount: BigNumberish,
      exchangeData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    increaseSimplePositionWithLoop(
      platform: string,
      supplyToken: string,
      principalAmount: BigNumberish,
      minSupplyAmount: BigNumberish,
      borrowToken: string,
      totalBorrowAmount: BigNumberish,
      exchangeData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  decreaseSimplePositionWithLoop(
    platform: string,
    supplyToken: string,
    withdrawAmount: BigNumberish,
    maxRedeemAmount: BigNumberish,
    borrowToken: string,
    minRepayAmount: BigNumberish,
    exchangeData: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  increaseSimplePositionWithLoop(
    platform: string,
    supplyToken: string,
    principalAmount: BigNumberish,
    minSupplyAmount: BigNumberish,
    borrowToken: string,
    totalBorrowAmount: BigNumberish,
    exchangeData: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    decreaseSimplePositionWithLoop(
      platform: string,
      supplyToken: string,
      withdrawAmount: BigNumberish,
      maxRedeemAmount: BigNumberish,
      borrowToken: string,
      minRepayAmount: BigNumberish,
      exchangeData: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    increaseSimplePositionWithLoop(
      platform: string,
      supplyToken: string,
      principalAmount: BigNumberish,
      minSupplyAmount: BigNumberish,
      borrowToken: string,
      totalBorrowAmount: BigNumberish,
      exchangeData: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    decreaseSimplePositionWithLoop(
      platform: string,
      supplyToken: string,
      withdrawAmount: BigNumberish,
      maxRedeemAmount: BigNumberish,
      borrowToken: string,
      minRepayAmount: BigNumberish,
      exchangeData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    increaseSimplePositionWithLoop(
      platform: string,
      supplyToken: string,
      principalAmount: BigNumberish,
      minSupplyAmount: BigNumberish,
      borrowToken: string,
      totalBorrowAmount: BigNumberish,
      exchangeData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    decreaseSimplePositionWithLoop(
      platform: string,
      supplyToken: string,
      withdrawAmount: BigNumberish,
      maxRedeemAmount: BigNumberish,
      borrowToken: string,
      minRepayAmount: BigNumberish,
      exchangeData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    increaseSimplePositionWithLoop(
      platform: string,
      supplyToken: string,
      principalAmount: BigNumberish,
      minSupplyAmount: BigNumberish,
      borrowToken: string,
      totalBorrowAmount: BigNumberish,
      exchangeData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
