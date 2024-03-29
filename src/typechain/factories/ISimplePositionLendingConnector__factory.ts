/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  ISimplePositionLendingConnector,
  ISimplePositionLendingConnectorInterface,
} from "../ISimplePositionLendingConnector";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "platform",
        type: "address",
      },
      {
        internalType: "address",
        name: "redeemToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "redeemAmount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "repayToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "repayAmount",
        type: "uint256",
      },
    ],
    name: "decreaseSimplePositionWithFunds",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "platform",
        type: "address",
      },
      {
        internalType: "address",
        name: "supplyToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "supplyAmount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "borrowToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "borrowAmount",
        type: "uint256",
      },
    ],
    name: "increaseSimplePositionWithFunds",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class ISimplePositionLendingConnector__factory {
  static readonly abi = _abi;
  static createInterface(): ISimplePositionLendingConnectorInterface {
    return new utils.Interface(
      _abi
    ) as ISimplePositionLendingConnectorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ISimplePositionLendingConnector {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ISimplePositionLendingConnector;
  }
}
