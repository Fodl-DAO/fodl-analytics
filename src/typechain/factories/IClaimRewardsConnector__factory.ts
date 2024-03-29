/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IClaimRewardsConnector,
  IClaimRewardsConnectorInterface,
} from "../IClaimRewardsConnector";

const _abi = [
  {
    inputs: [],
    name: "claimRewards",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IClaimRewardsConnector__factory {
  static readonly abi = _abi;
  static createInterface(): IClaimRewardsConnectorInterface {
    return new utils.Interface(_abi) as IClaimRewardsConnectorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IClaimRewardsConnector {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IClaimRewardsConnector;
  }
}
