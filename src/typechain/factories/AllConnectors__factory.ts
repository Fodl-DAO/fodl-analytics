/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { AllConnectors, AllConnectorsInterface } from "../AllConnectors";

const _abi = [
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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "priceTarget",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "fixedReward",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "percentageReward",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "unwindFactor",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isTakeProfit",
        type: "bool",
      },
    ],
    name: "configurePNL",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "unwindFactor",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "slippageIncentive",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "collateralUsageLimit",
        type: "uint256",
      },
    ],
    name: "configureStopLoss",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "withdrawAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxSupplyTokenRepayAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "borrowTokenRepayAmount",
            type: "uint256",
          },
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
            internalType: "address",
            name: "borrowToken",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "path",
            type: "bytes",
          },
        ],
        internalType: "struct DecreaseWithV3FlashswapMultihopConnectorParams",
        name: "params",
        type: "tuple",
      },
    ],
    name: "decreasePositionWithV3FlashswapMultihop",
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
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "withApproval",
        type: "bool",
      },
    ],
    name: "executePNL",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "executeStopLoss",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllPNLSettings",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "priceTarget",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "fixedReward",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "percentageReward",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "unwindFactor",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isTakeProfit",
            type: "bool",
          },
        ],
        internalType: "struct PNLSettings[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getBorrowBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getCollateralUsageFactor",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
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
    name: "getPNLSettingsAt",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "priceTarget",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "fixedReward",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "percentageReward",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "unwindFactor",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isTakeProfit",
            type: "bool",
          },
        ],
        internalType: "struct PNLSettings",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getPNLState",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "priceOfBorrowToken",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "priceOfSupplyToken",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "supplyBalance",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "borrowBalance",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "platform",
            type: "address",
          },
          {
            internalType: "address",
            name: "borrowToken",
            type: "address",
          },
          {
            internalType: "address",
            name: "supplyToken",
            type: "address",
          },
          {
            components: [
              {
                internalType: "bool",
                name: "canBeTriggered",
                type: "bool",
              },
              {
                internalType: "string",
                name: "reason",
                type: "string",
              },
              {
                components: [
                  {
                    internalType: "uint256",
                    name: "priceTarget",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "fixedReward",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "percentageReward",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "unwindFactor",
                    type: "uint256",
                  },
                  {
                    internalType: "bool",
                    name: "isTakeProfit",
                    type: "bool",
                  },
                ],
                internalType: "struct PNLSettings",
                name: "settings",
                type: "tuple",
              },
            ],
            internalType: "struct IPNLConnector.PNLSimulations[]",
            name: "simulations",
            type: "tuple[]",
          },
        ],
        internalType: "struct IPNLConnector.PNLState",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getPositionMetadata",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "supplyAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "borrowAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "collateralUsageFactor",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "principalValue",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "positionValue",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "positionAddress",
            type: "address",
          },
          {
            internalType: "address",
            name: "platformAddress",
            type: "address",
          },
          {
            internalType: "address",
            name: "supplyTokenAddress",
            type: "address",
          },
          {
            internalType: "address",
            name: "borrowTokenAddress",
            type: "address",
          },
        ],
        internalType: "struct SimplePositionMetadata",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getPositionValue",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getPrincipalValue",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getSimplePositionDetails",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
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
    inputs: [],
    name: "getStopLossConfiguration",
    outputs: [
      {
        internalType: "uint256",
        name: "slippageIncentive",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "collateralUsageLimit",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "unwindFactor",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getStopLossState",
    outputs: [
      {
        internalType: "bool",
        name: "canTriggerStopLoss",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "supplyBalance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "borrowBalance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "slippageIncentive",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "collateralUsageLimit",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "unwindFactor",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getSupplyBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "principalAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "supplyAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxBorrowAmount",
            type: "uint256",
          },
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
            internalType: "address",
            name: "borrowToken",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "path",
            type: "bytes",
          },
        ],
        internalType: "struct IncreaseWithV3FlashswapMultihopParams",
        name: "params",
        type: "tuple",
      },
    ],
    name: "increasePositionWithV3FlashswapMultihop",
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
  {
    inputs: [],
    name: "removeAllPNLSettings",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "removePNLSetting",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
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
        name: "accountId",
        type: "uint256",
      },
    ],
    name: "resetAccount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
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

export class AllConnectors__factory {
  static readonly abi = _abi;
  static createInterface(): AllConnectorsInterface {
    return new utils.Interface(_abi) as AllConnectorsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AllConnectors {
    return new Contract(address, _abi, signerOrProvider) as AllConnectors;
  }
}