---
aelip: 23
network: Optimism & Mainnet
title: Token factory
status: Draft
author: cb0x (@cb0x)
Release: n/a
Implementor: cb0x (@cb0x)
created: 05-23-2022
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Simply describe the outcome the proposed changes intends to achieve. This should be non-technical and accessible to a casual community member.-->

This AELIP proposes to add a new token contract for the sponsor/holder to be able to create their ERC20 token directly through Aelin Protocol when creating a deal.

## Abstract

<!--A short (~200 word) description of the proposed change, the abstract should clearly describe the proposed change. This is what *will* be done if the AELIP is implemented, not *why* it should be done or *how* it will be done. If the AELIP proposes deploying a new contract, write, "we propose to deploy a new contract that will do x".-->

When creating a deal, the sponsor (who is more likely to be the holder in this specific case) will be able, if they want, to mint a new token directly through Aelin Protocol, which will then be used as the underlying deal token. If selected, this option will allow the sponsor to name their token and also decide what the total supply will be. They will also be able to specify an owner wallet, to which the remaining tokens can be sent in case they decide not to allocate all the supply to the pool investors.

After the deal is created, the workflow will remain the same and investors will get their share of the new token based on the size of their investment.

## Motivation

<!--This is the problem statement. This is the *why* of the AELIP. It should clearly explain *why* the current state of the protocol is inadequate.  It is critical that you explain *why* the change is needed, if the AELIP proposes changing how something is calculated, you must address *why* the current calculation is inaccurate or wrong. This is not the place to describe how the AELIP will address the issue!-->

It is possible that sometimes, as recently seen with Kwenta, a project which hasn't launched their token yet is willing to raise funds on Aelin. The problem is that, in the current state of the protocol, the holder needs to send the underlying deal tokens so a deal can be created and brought to investors. If they haven't deployed one yet, the easy yet not very practical solution is to deploy a pre-token (eg: vKWENTA) which is only used for the Aelin raise, to then be redeemed for the real token once it is deployed on Mainnet.

Giving projects the ability to mint their own token at the same time they create a pool/deal will definitely be a time saver. Projects won't have to worry about deploying a contract just for their Aelin pool. Every step will be taken care of by the protocol itself. It is also important to mention that the token created for a deal doesn't have to be a pre-token. Nothing is stopping projects to create their final token through Aelin, allocate a percentage to the sale, and send the remaining amount to their DAO address.

## Specification

### Overview

<!--This is a high-level overview of *how* the AELIP will solve the problem. The overview should clearly describe how the new feature will be implemented.-->

In order to achieve the functionality outlined in this AELIP, an UnderlyingDealToken contract will be added. This contract can then be called from the deal contract to mint tokens, with a specified name and supply.

The tokens will be distributed to investors the same way those deposited by the holder in a traditional deal are distributed. A part of the tokens could also be deposited to a specified address in case the sponsor isn't willing to sell all the tokens in the pool.

### Rationale

<!--This is where you explain the reasoning behind how you propose to solve the problem. Why did you propose to implement the change in this way, what were the considerations and trade-offs. The rationale fleshes out what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->

A lot of new projects willing to get a seed investment using Aelin protocol don't have a token yet. As described previously, the simplest way to resolve this issue was for them to create a pre-token to be distributed to investors. The most effective and obvious solution to remove that friction was for Aelin to step in and offer these projects the option to do it for them in a decentralised and automatised way. It is believed that there isn't any easier or more relevant way to do it.

### Technical Specification

<!--The technical specification should outline the public API of the changes proposed. That is, changes to any of the interfaces Synthetix currently exposes or the creations of new ones.-->

A new contract will be added:

- `UnderlyingDealToken`: A ERC20 token contract with an `initialize` function, to which all the necessary parameters will be passed, such as the token name, supply and decimal number. The tokens can only be minted once, and cannot go over the supply specified in the function. `ERC20Capped.sol` from OpenZeppelin could be a good candidate for this contract implementation.

This contract will then be instantiated in the AelinDeal contract. A new function `initializeWithToken` could be added, in order to keep the logic separated from the traditional deal flow. This function will basically do the same as the `initialize` one, except it will also create a new instance of the `UnderlyingDealToken` contract, allowing the signer to fund the deal directly with the newly created tokens.

Note: This feature will also need to support [AELIP-19](https://aelips.aelin.xyz/aelips/aelip-19/) so the sponsor can create a pool, deal and underlyingDeal token at the same time.

### Test Cases

<!--Test cases for an implementation are mandatory for AELIPs but can be included with the implementation..-->

TBD

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
