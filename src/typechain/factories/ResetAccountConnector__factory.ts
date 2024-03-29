/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ResetAccountConnector,
  ResetAccountConnectorInterface,
} from "../ResetAccountConnector";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_nft",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "oldOwner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnerChanged",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "oldOwner",
        type: "address",
      },
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "resetAccount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b506040516103823803806103828339818101604052602081101561003357600080fd5b5051606081901b6001600160601b0319166080526001600160a01b031661031c61006660003980608d525061031c6000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063c9aa10ca14610030575b600080fd5b6100736004803603606081101561004657600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813581169160208101359091169060400135610075565b005b3373ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000161461011957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600360248201527f4641330000000000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b7fb532073b38c83145e3e5135377a08bf9aab55bc0fd7c1179cd4fb995d2a5159c6101426101ff565b600401546040805173ffffffffffffffffffffffffffffffffffffffff928316815291851660208301528051918290030190a18161017e6101ff565b60040180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff9283161790558316156101fa5760006101d1610223565b60006002820181905560018201819055815590506101ed610247565b6101f890600061026b565b505b505050565b7fadbb89e904f74d44d0d104c851da4f2fa24de8f1dee64f038923bb940f37d53a90565b7f71e33351f6c2f31004e68ac32dd5a4884e99e8c3aa8dcf1997909021899a861490565b7fb51bdc7cd98f38ba50227dc2098602aa9272e97c313e50af0f3c4f4f271a50c290565b508054600082556005029060005260206000209081019061028c919061028f565b50565b5b808211156102e2576000808255600182018190556002820181905560038201556004810180547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169055600501610290565b509056fea2646970667358221220eb93984da1333a7695f6c83bce0bffe858b0fd0685a2e89c35169eefd3deed4164736f6c634300060c0033";

export class ResetAccountConnector__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    _nft: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ResetAccountConnector> {
    return super.deploy(
      _nft,
      overrides || {}
    ) as Promise<ResetAccountConnector>;
  }
  getDeployTransaction(
    _nft: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_nft, overrides || {});
  }
  attach(address: string): ResetAccountConnector {
    return super.attach(address) as ResetAccountConnector;
  }
  connect(signer: Signer): ResetAccountConnector__factory {
    return super.connect(signer) as ResetAccountConnector__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ResetAccountConnectorInterface {
    return new utils.Interface(_abi) as ResetAccountConnectorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ResetAccountConnector {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ResetAccountConnector;
  }
}
