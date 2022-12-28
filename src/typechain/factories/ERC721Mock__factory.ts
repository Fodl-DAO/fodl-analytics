/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC721Mock, ERC721MockInterface } from "../ERC721Mock";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
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
  {
    inputs: [],
    name: "baseURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenByIndex",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenOfOwnerByIndex",
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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162002e2138038062002e21833981810160405260408110156200003757600080fd5b81019080805160405193929190846401000000008211156200005857600080fd5b838201915060208201858111156200006f57600080fd5b82518660018202830111640100000000821117156200008d57600080fd5b8083526020830192505050908051906020019080838360005b83811015620000c3578082015181840152602081019050620000a6565b50505050905090810190601f168015620000f15780820380516001836020036101000a031916815260200191505b50604052602001805160405193929190846401000000008211156200011557600080fd5b838201915060208201858111156200012c57600080fd5b82518660018202830111640100000000821117156200014a57600080fd5b8083526020830192505050908051906020019080838360005b838110156200018057808201518184015260208101905062000163565b50505050905090810190601f168015620001ae5780820380516001836020036101000a031916815260200191505b506040525050508181620001cf6301ffc9a760e01b6200025360201b60201c565b8160069080519060200190620001e79291906200035c565b508060079080519060200190620002009291906200035c565b50620002196380ac58cd60e01b6200025360201b60201c565b62000231635b5e139f60e01b6200025360201b60201c565b6200024963780e9d6360e01b6200025360201b60201c565b5050505062000402565b63ffffffff60e01b817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161415620002f0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f4552433136353a20696e76616c696420696e746572666163652069640000000081525060200191505060405180910390fd5b6001600080837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200039f57805160ff1916838001178555620003d0565b82800160010185558215620003d0579182015b82811115620003cf578251825591602001919060010190620003b2565b5b509050620003df9190620003e3565b5090565b5b80821115620003fe576000816000905550600101620003e4565b5090565b612a0f80620004126000396000f3fe608060405234801561001057600080fd5b50600436106101165760003560e01c80634f6ccce7116100a257806395d89b411161007157806395d89b41146105c6578063a22cb46514610649578063b88d4fde14610699578063c87b56dd1461079e578063e985e9c51461084557610116565b80634f6ccce7146104515780636352211e146104935780636c0360eb146104eb57806370a082311461056e57610116565b806318160ddd116100e957806318160ddd146102a757806323b872dd146102c55780632f745c591461033357806340c10f191461039557806342842e0e146103e357610116565b806301ffc9a71461011b57806306fdde031461017e578063081812fc14610201578063095ea7b314610259575b600080fd5b6101666004803603602081101561013157600080fd5b8101908080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690602001909291905050506108bf565b60405180821515815260200191505060405180910390f35b610186610926565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101c65780820151818401526020810190506101ab565b50505050905090810190601f1680156101f35780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61022d6004803603602081101561021757600080fd5b81019080803590602001909291905050506109c8565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6102a56004803603604081101561026f57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610a63565b005b6102af610ba7565b6040518082815260200191505060405180910390f35b610331600480360360608110156102db57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610bb8565b005b61037f6004803603604081101561034957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610c2e565b6040518082815260200191505060405180910390f35b6103e1600480360360408110156103ab57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610c89565b005b61044f600480360360608110156103f957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610c97565b005b61047d6004803603602081101561046757600080fd5b8101908080359060200190929190505050610cb7565b6040518082815260200191505060405180910390f35b6104bf600480360360208110156104a957600080fd5b8101908080359060200190929190505050610cda565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6104f3610d11565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610533578082015181840152602081019050610518565b50505050905090810190601f1680156105605780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6105b06004803603602081101561058457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610db3565b6040518082815260200191505060405180910390f35b6105ce610e88565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561060e5780820151818401526020810190506105f3565b50505050905090810190601f16801561063b5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6106976004803603604081101561065f57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803515159060200190929190505050610f2a565b005b61079c600480360360808110156106af57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019064010000000081111561071657600080fd5b82018360208201111561072857600080fd5b8035906020019184600183028401116401000000008311171561074a57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192905050506110e0565b005b6107ca600480360360208110156107b457600080fd5b8101908080359060200190929190505050611158565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561080a5780820151818401526020810190506107ef565b50505050905090810190601f1680156108375780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6108a76004803603604081101561085b57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611429565b60405180821515815260200191505060405180910390f35b6000806000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060009054906101000a900460ff169050919050565b606060068054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156109be5780601f10610993576101008083540402835291602001916109be565b820191906000526020600020905b8154815290600101906020018083116109a157829003601f168201915b5050505050905090565b60006109d3826114bd565b610a28576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180612904602c913960400191505060405180910390fd5b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000610a6e82610cda565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610af5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806129886021913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610b146114da565b73ffffffffffffffffffffffffffffffffffffffff161480610b435750610b4281610b3d6114da565b611429565b5b610b98576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260388152602001806128576038913960400191505060405180910390fd5b610ba283836114e2565b505050565b6000610bb3600261159b565b905090565b610bc9610bc36114da565b826115b0565b610c1e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260318152602001806129a96031913960400191505060405180910390fd5b610c298383836116a4565b505050565b6000610c8182600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206118e790919063ffffffff16565b905092915050565b610c938282611901565b5050565b610cb2838383604051806020016040528060008152506110e0565b505050565b600080610cce83600261191f90919063ffffffff16565b50905080915050919050565b6000610d0a826040518060600160405280602981526020016128b960299139600261194b9092919063ffffffff16565b9050919050565b606060098054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610da95780601f10610d7e57610100808354040283529160200191610da9565b820191906000526020600020905b815481529060010190602001808311610d8c57829003601f168201915b5050505050905090565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610e3a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a81526020018061288f602a913960400191505060405180910390fd5b610e81600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002061196a565b9050919050565b606060078054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610f205780601f10610ef557610100808354040283529160200191610f20565b820191906000526020600020905b815481529060010190602001808311610f0357829003601f168201915b5050505050905090565b610f326114da565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610fd3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f4552433732313a20617070726f766520746f2063616c6c65720000000000000081525060200191505060405180910390fd5b8060056000610fe06114da565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff1661108d6114da565b73ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c318360405180821515815260200191505060405180910390a35050565b6110f16110eb6114da565b836115b0565b611146576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260318152602001806129a96031913960400191505060405180910390fd5b6111528484848461197f565b50505050565b6060611163826114bd565b6111b8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602f815260200180612959602f913960400191505060405180910390fd5b6060600860008481526020019081526020016000208054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156112615780601f1061123657610100808354040283529160200191611261565b820191906000526020600020905b81548152906001019060200180831161124457829003601f168201915b505050505090506060611272610d11565b9050600081511415611288578192505050611424565b6000825111156113595780826040516020018083805190602001908083835b602083106112ca57805182526020820191506020810190506020830392506112a7565b6001836020036101000a03801982511681845116808217855250505050505090500182805190602001908083835b6020831061131b57805182526020820191506020810190506020830392506112f8565b6001836020036101000a0380198251168184511680821785525050505050509050019250505060405160208183030381529060405292505050611424565b80611363856119f1565b6040516020018083805190602001908083835b602083106113995780518252602082019150602081019050602083039250611376565b6001836020036101000a03801982511681845116808217855250505050505090500182805190602001908083835b602083106113ea57805182526020820191506020810190506020830392506113c7565b6001836020036101000a03801982511681845116808217855250505050505090500192505050604051602081830303815290604052925050505b919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60006114d3826002611b3890919063ffffffff16565b9050919050565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff1661155583610cda565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b60006115a982600001611b52565b9050919050565b60006115bb826114bd565b611610576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c81526020018061282b602c913960400191505060405180910390fd5b600061161b83610cda565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148061168a57508373ffffffffffffffffffffffffffffffffffffffff16611672846109c8565b73ffffffffffffffffffffffffffffffffffffffff16145b8061169b575061169a8185611429565b5b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff166116c482610cda565b73ffffffffffffffffffffffffffffffffffffffff1614611730576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260298152602001806129306029913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156117b6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806127e16024913960400191505060405180910390fd5b6117c1838383611b63565b6117cc6000826114e2565b61181d81600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020611b6890919063ffffffff16565b5061186f81600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020611b8290919063ffffffff16565b5061188681836002611b9c9092919063ffffffff16565b50808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b60006118f68360000183611bd1565b60001c905092915050565b61191b828260405180602001604052806000815250611c54565b5050565b6000806000806119328660000186611cc5565b915091508160001c8160001c9350935050509250929050565b600061195e846000018460001b84611d5e565b60001c90509392505050565b600061197882600001611e54565b9050919050565b61198a8484846116a4565b61199684848484611e65565b6119eb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260328152602001806127af6032913960400191505060405180910390fd5b50505050565b60606000821415611a39576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050611b33565b600082905060005b60008214611a63578080600101915050600a8281611a5b57fe5b049150611a41565b60608167ffffffffffffffff81118015611a7c57600080fd5b506040519080825280601f01601f191660200182016040528015611aaf5781602001600182028036833780820191505090505b50905060006001830390508593505b60008414611b2b57600a8481611ad057fe5b0660300160f81b82828060019003935081518110611aea57fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a8481611b2357fe5b049350611abe565b819450505050505b919050565b6000611b4a836000018360001b61207e565b905092915050565b600081600001805490509050919050565b505050565b6000611b7a836000018360001b6120a1565b905092915050565b6000611b94836000018360001b612189565b905092915050565b6000611bc8846000018460001b8473ffffffffffffffffffffffffffffffffffffffff1660001b6121f9565b90509392505050565b600081836000018054905011611c32576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602281526020018061278d6022913960400191505060405180910390fd5b826000018281548110611c4157fe5b9060005260206000200154905092915050565b611c5e83836122d5565b611c6b6000848484611e65565b611cc0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260328152602001806127af6032913960400191505060405180910390fd5b505050565b60008082846000018054905011611d27576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806128e26022913960400191505060405180910390fd5b6000846000018481548110611d3857fe5b906000526020600020906002020190508060000154816001015492509250509250929050565b60008084600101600085815260200190815260200160002054905060008114158390611e25576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611dea578082015181840152602081019050611dcf565b50505050905090810190601f168015611e175780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50846000016001820381548110611e3857fe5b9060005260206000209060020201600101549150509392505050565b600081600001805490509050919050565b6000611e868473ffffffffffffffffffffffffffffffffffffffff166124c9565b611e935760019050612076565b6060611ffd63150b7a0260e01b611ea86114da565b888787604051602401808573ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015611f2c578082015181840152602081019050611f11565b50505050905090810190601f168015611f595780820380516001836020036101000a031916815260200191505b5095505050505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040518060600160405280603281526020016127af603291398773ffffffffffffffffffffffffffffffffffffffff166124dc9092919063ffffffff16565b9050600081806020019051602081101561201657600080fd5b8101908080519060200190929190505050905063150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614925050505b949350505050565b600080836001016000848152602001908152602001600020541415905092915050565b6000808360010160008481526020019081526020016000205490506000811461217d57600060018203905060006001866000018054905003905060008660000182815481106120ec57fe5b906000526020600020015490508087600001848154811061210957fe5b906000526020600020018190555060018301876001016000838152602001908152602001600020819055508660000180548061214157fe5b60019003818190600052602060002001600090559055866001016000878152602001908152602001600020600090556001945050505050612183565b60009150505b92915050565b600061219583836124f4565b6121ee5782600001829080600181540180825580915050600190039060005260206000200160009091909190915055826000018054905083600101600084815260200190815260200160002081905550600190506121f3565b600090505b92915050565b60008084600101600085815260200190815260200160002054905060008114156122a0578460000160405180604001604052808681526020018581525090806001815401808255809150506001900390600052602060002090600202016000909190919091506000820151816000015560208201518160010155505084600001805490508560010160008681526020019081526020016000208190555060019150506122ce565b828560000160018303815481106122b357fe5b90600052602060002090600202016001018190555060009150505b9392505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415612378576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4552433732313a206d696e7420746f20746865207a65726f206164647265737381525060200191505060405180910390fd5b612381816114bd565b156123f4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000081525060200191505060405180910390fd5b61240060008383611b63565b61245181600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020611b8290919063ffffffff16565b5061246881836002611b9c9092919063ffffffff16565b50808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b600080823b905060008111915050919050565b60606124eb8484600085612517565b90509392505050565b600080836001016000848152602001908152602001600020541415905092915050565b606082471015612572576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806128056026913960400191505060405180910390fd5b61257b856124c9565b6125ed576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000081525060200191505060405180910390fd5b600060608673ffffffffffffffffffffffffffffffffffffffff1685876040518082805190602001908083835b6020831061263d578051825260208201915060208101905060208303925061261a565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d806000811461269f576040519150601f19603f3d011682016040523d82523d6000602084013e6126a4565b606091505b50915091506126b48282866126c0565b92505050949350505050565b606083156126d057829050612785565b6000835111156126e35782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561274a57808201518184015260208101905061272f565b50505050905090810190601f1680156127775780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b939250505056fe456e756d657261626c655365743a20696e646578206f7574206f6620626f756e64734552433732313a207472616e7366657220746f206e6f6e20455243373231526563656976657220696d706c656d656e7465724552433732313a207472616e7366657220746f20746865207a65726f2061646472657373416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c4552433732313a206f70657261746f7220717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76652063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f76656420666f7220616c6c4552433732313a2062616c616e636520717565727920666f7220746865207a65726f20616464726573734552433732313a206f776e657220717565727920666f72206e6f6e6578697374656e7420746f6b656e456e756d657261626c654d61703a20696e646578206f7574206f6620626f756e64734552433732313a20617070726f76656420717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a207472616e73666572206f6620746f6b656e2074686174206973206e6f74206f776e4552433732314d657461646174613a2055524920717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76616c20746f2063757272656e74206f776e65724552433732313a207472616e736665722063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f766564a2646970667358221220b88f0bcf027797bf09a064e6e4d1ac8e56ff8153212dc6bf9d806d64c62aacd064736f6c634300060c0033";

export class ERC721Mock__factory extends ContractFactory {
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
    name: string,
    symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC721Mock> {
    return super.deploy(name, symbol, overrides || {}) as Promise<ERC721Mock>;
  }
  getDeployTransaction(
    name: string,
    symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name, symbol, overrides || {});
  }
  attach(address: string): ERC721Mock {
    return super.attach(address) as ERC721Mock;
  }
  connect(signer: Signer): ERC721Mock__factory {
    return super.connect(signer) as ERC721Mock__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721MockInterface {
    return new utils.Interface(_abi) as ERC721MockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC721Mock {
    return new Contract(address, _abi, signerOrProvider) as ERC721Mock;
  }
}