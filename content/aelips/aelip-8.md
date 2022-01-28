---
aelip: 8
network: Ethereum & Optimism
title: Aelin Bridge to Layer 1
status: Draft
author: cb0x (@0xcdb)
Release: TBD
Implementor: cb0x (@0xcdb)
created: 2021-01-27
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Simply describe the outcome the proposed changes intends to achieve. This should be non-technical and accessible to a casual community member.-->

This AELIP proposes the deployment of the AELIN token on Ethereum Layer 1 via the creation of a bridge using Celer Network Canonical Bridge.

This will allow token holders to easily bridge AELIN between Layer 1 and 2, in both directions, almost instantly without the need for a challenge period of 7 days.

## Abstract

<!--A short (~200 word) description of the proposed change, the abstract should clearly describe the proposed change. This is what *will* be done if the AELIP is implemented, not *why* it should be done or *how* it will be done. If the AELIP proposes deploying a new contract, write, "we propose to deploy a new contract that will do x".-->

A token contract will be deployed on L1, allowing the Celer Bridge to mint/burn Aelin tokens when needed.

This contract will be a wrapped version of ERC20, adding extra functionalities such as the ability for the owner (the AELIN DAO) to whitelist addresses, giving them the rights to call functions to mint and burn the supply.

The token contract can be found [here](https://github.com/celer-network/sgn-v2-contracts/blob/main/contracts/pegged/tokens/MintSwapCanonicalToken.sol)

## Motivation

<!--This is the problem statement. This is the *why* of the AELIP. It should clearly explain *why* the current state of the protocol is inadequate.  It is critical that you explain *why* the change is needed, if the AELIP proposes changing how something is calculated, you must address *why* the current calculation is inaccurate or wrong. This is not the place to describe how the AELIP will address the issue!-->

AELIN is a native Optimism token, which means it is only available on Optimism Layer 2. Even though more and more capital and protocols are deployed on OP every day, there are still some good reasons why AELIN should also be deployed on Layer 1:

Firstly, to improve the liquidity. Most of the capital is still on Layer 1 and a part of it could still be reluctant to go to Layer 2 for various reasons. Pools could be created on Uniswap and/or Sushiswap and allow the L1 users to provide liquidity. As indicated in [Aelip 3](https://aelips.aelin.xyz/aelips/aelip-3/), 250 AELIN will be distributed to a Balancer pool as staking rewards. Unfortunately Balancer isn't available on OP yet, which makes the L1 deployment a necessity so the distribution plan listed in this AELIP can be respected.

Secondly, the deployment of Aelin Protocol on other chains. The team is currently considering an expansion on Avalanche and/or Polygon. For this to happen, it is essential that the AELIN token is deployed on L1 first, in order to facilitate all the bridging mechanisms between the chains.

## Specification

<!--The specification should describe the syntax and semantics of any new feature, there are five sections
1. Overview
2. Rationale
3. Technical Specification
4. Test Cases
5. Configurable Values
-->

### Overview

<!--This is a high-level overview of *how* the AELIP will solve the problem. The overview should clearly describe how the new feature will be implemented.-->

The L1 token will be deployed as a first step using Celer Network's [MintSwapCanonicalToken contract](https://github.com/celer-network/sgn-v2-contracts/blob/main/contracts/pegged/tokens/MintSwapCanonicalToken.sol).

This contract wraps the ERC20 token standard contract and adds the following functionalities:

    - `swapBridgeForCanonical(address _bridgeToken, uint256 _amount)`: the deposit function. Allows a swap of L2 tokens (bridge tokens) for L1 tokens (canonical tokens). The function will mint the required amount of canonical tokens from the L1 supply. The bridge tokens will then be deposited into the contract and the exact same amount of canonical tokens will be sent to msg.sender.
    - `swapCanonicalForBridge(address _bridgeToken, uint256 _amount)`: the withdraw function. Allows a swap of L1 tokens (canonical tokens) for L2 tokens (bridge tokens). The function will burn the requited amount of canonical tokens from the L1 supply. The bridge tokens will then be unlocked and sent to msg.sender.
    - `setBridgeTokenSwapCap(address _bridgeToken, uint256 _swapCap)`: the whitelisting function. Allows the owner (Aelin DAO) to add/remove one or multiple addresses (swap supplies), specifying a cap. Once added, these addresses will then be able to mint/burn canonical tokens when needed as long as the minting cap is respected. It will revert otherwise.

Once deployed, the Aelin DAO will nominate Celer Bridge as a swap supply, which will give minting/burning and distribution power to the protocol.

### Rationale

<!--This is where you explain the reasoning behind how you propose to solve the problem. Why did you propose to implement the change in this way, what were the considerations and trade-offs. The rationale fleshes out what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->

Most of the tokens on Optimism were originally on L1 and then deployed to L2 using Optimism Standard Token Bridge. The L2 tokens deployed are `L2StandardERC20` which is just a simple ERC20 wrapper contract with an extra set of bridging functionalities (minting, burning, L1 address...etc).

The AELIN token is a native Optimism token, which means it is impossible to use the Optimism Standard Token Bridge. Indeed, even though this bridge allows L1 => L2 and L2 => L1 transactions, the deployment has to be made from L1 in the first place. There are currently no solutions from Optimism allowing native OP tokens to be deployed to L1 using a "mirrored" version of their Standard Bridge.

The Optimism team is currently working on it, but it won't be ready until March which might be a bit too far away for Aelin. A lot of what's in Aelin's pipeline requires the token to be on L1 first.

To make it happen as soon as possible, there are two possibilities:

- The Aelin CCs doing their own custom implementation of a Standard Bridge for native Optimism tokens.

  #### Pros:

  The protocol will have a total control of the logic to implement, without the need to rely on third party services or protocols.

#### Cons:

This solution could take some time to implement, could lead to other future unknown issues/bugs and will also need to be audited.

- Using another Bridge protocol, in our case Celer Network.

  #### Pros:

  As explained above, Celer has already implemented all the required contracts to allow canonical swaps between L1 and L2. According to them it will only take 24 hours to deploy AELIN on L1. They will also handle all the changes in their UI to add AELIN and are also able to provide a web widget for Aelin to use on its app.

  All swaps are almost instant. Celer Network uses another mechanism to be fraud proof, called the State Guardian Network meaning there is no 7 days delay for L2 to L1 transactions.

  Using Celer Network doesn't mean the L1 token can only be used within Celer Protocol. There is no vendor lock-in which means the token contract is open to other bridges. The Aelin DAO will be able to manage these bridges whenever it is needed.

  #### Cons:

  Celer Bridge charges a liquidity fee of 0.04% per transaction.

### Technical Specification

<!--The technical specification should outline the public API of the changes proposed. That is, changes to any of the interfaces Aelin currently exposes or the creations of new ones.-->

N/A

### Test Cases

<!--Test cases for an implementation are mandatory for AELIPs but can be included with the implementation..-->

TBD

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
