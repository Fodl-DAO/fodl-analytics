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

interface IIncreaseWithV3FlashswapMultihopConnectorInterface
  extends ethers.utils.Interface {
  functions: {
    "increasePositionWithV3FlashswapMultihop((uint256,uint256,uint256,address,address,address,bytes))": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "increasePositionWithV3FlashswapMultihop",
    values: [
      {
        principalAmount: BigNumberish;
        supplyAmount: BigNumberish;
        maxBorrowAmount: BigNumberish;
        platform: string;
        supplyToken: string;
        borrowToken: string;
        path: BytesLike;
      }
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "increasePositionWithV3FlashswapMultihop",
    data: BytesLike
  ): Result;

  events: {};
}

export class IIncreaseWithV3FlashswapMultihopConnector extends BaseContract {
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

  interface: IIncreaseWithV3FlashswapMultihopConnectorInterface;

  functions: {
    increasePositionWithV3FlashswapMultihop(
      params: {
        principalAmount: BigNumberish;
        supplyAmount: BigNumberish;
        maxBorrowAmount: BigNumberish;
        platform: string;
        supplyToken: string;
        borrowToken: string;
        path: BytesLike;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  increasePositionWithV3FlashswapMultihop(
    params: {
      principalAmount: BigNumberish;
      supplyAmount: BigNumberish;
      maxBorrowAmount: BigNumberish;
      platform: string;
      supplyToken: string;
      borrowToken: string;
      path: BytesLike;
    },
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    increasePositionWithV3FlashswapMultihop(
      params: {
        principalAmount: BigNumberish;
        supplyAmount: BigNumberish;
        maxBorrowAmount: BigNumberish;
        platform: string;
        supplyToken: string;
        borrowToken: string;
        path: BytesLike;
      },
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    increasePositionWithV3FlashswapMultihop(
      params: {
        principalAmount: BigNumberish;
        supplyAmount: BigNumberish;
        maxBorrowAmount: BigNumberish;
        platform: string;
        supplyToken: string;
        borrowToken: string;
        path: BytesLike;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    increasePositionWithV3FlashswapMultihop(
      params: {
        principalAmount: BigNumberish;
        supplyAmount: BigNumberish;
        maxBorrowAmount: BigNumberish;
        platform: string;
        supplyToken: string;
        borrowToken: string;
        path: BytesLike;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
