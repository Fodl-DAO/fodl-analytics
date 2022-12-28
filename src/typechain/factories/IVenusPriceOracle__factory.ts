/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IVenusPriceOracle,
  IVenusPriceOracleInterface,
} from "../IVenusPriceOracle";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "vToken",
        type: "address",
      },
    ],
    name: "getUnderlyingPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IVenusPriceOracle__factory {
  static readonly abi = _abi;
  static createInterface(): IVenusPriceOracleInterface {
    return new utils.Interface(_abi) as IVenusPriceOracleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IVenusPriceOracle {
    return new Contract(address, _abi, signerOrProvider) as IVenusPriceOracle;
  }
}