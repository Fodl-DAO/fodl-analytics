/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  FoldingAccount,
  FoldingAccountInterface,
} from "../FoldingAccount";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "foldingRegistry",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516103f63803806103f683398101604081905261002f91610083565b8061003861005f565b60020180546001600160a01b0319166001600160a01b0392909216919091179055506100b1565b7fadbb89e904f74d44d0d104c851da4f2fa24de8f1dee64f038923bb940f37d53a90565b600060208284031215610094578081fd5b81516001600160a01b03811681146100aa578182fd5b9392505050565b610336806100c06000396000f3fe60806040526000357fffffffff00000000000000000000000000000000000000000000000000000000161561003657610036610038565b005b60008061004361023d565b805490915073ffffffffffffffffffffffffffffffffffffffff1661008f5780547fffffffffffffffffffffffff00000000000000000000000000000000000000001633178155600191505b600181015473ffffffffffffffffffffffffffffffffffffffff16801561013e5760018201546000357fffffffff000000000000000000000000000000000000000000000000000000009081167401000000000000000000000000000000000000000090920460e01b1614610139576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610130906102c9565b60405180910390fd5b61020d565b60028201546040517fdc9cc64500000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9091169063dc9cc645906101ba907fffffffff00000000000000000000000000000000000000000000000000000000600035169060040161029c565b60206040518083038186803b1580156101d257600080fd5b505afa1580156101e6573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061020a9190610261565b90505b3660008037600080366000845af43d806000803e81801561023857851561023357600085555b816000f35b816000fd5b7fadbb89e904f74d44d0d104c851da4f2fa24de8f1dee64f038923bb940f37d53a90565b600060208284031215610272578081fd5b815173ffffffffffffffffffffffffffffffffffffffff81168114610295578182fd5b9392505050565b7fffffffff0000000000000000000000000000000000000000000000000000000091909116815260200190565b60208082526003908201527f464131000000000000000000000000000000000000000000000000000000000060408201526060019056fea264697066735822122024923cd795b5543a38f56fe39c7b6ead92248d6b1e0a30cc07b17c8087c8a18264736f6c634300060c0033";

export class FoldingAccount__factory extends ContractFactory {
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
    foldingRegistry: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<FoldingAccount> {
    return super.deploy(
      foldingRegistry,
      overrides || {}
    ) as Promise<FoldingAccount>;
  }
  getDeployTransaction(
    foldingRegistry: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(foldingRegistry, overrides || {});
  }
  attach(address: string): FoldingAccount {
    return super.attach(address) as FoldingAccount;
  }
  connect(signer: Signer): FoldingAccount__factory {
    return super.connect(signer) as FoldingAccount__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FoldingAccountInterface {
    return new utils.Interface(_abi) as FoldingAccountInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FoldingAccount {
    return new Contract(address, _abi, signerOrProvider) as FoldingAccount;
  }
}
