/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  ISetTokenURIConnector,
  ISetTokenURIConnectorInterface,
} from "../ISetTokenURIConnector";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "tokenURI",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "setTokenURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class ISetTokenURIConnector__factory {
  static readonly abi = _abi;
  static createInterface(): ISetTokenURIConnectorInterface {
    return new utils.Interface(_abi) as ISetTokenURIConnectorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ISetTokenURIConnector {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ISetTokenURIConnector;
  }
}
