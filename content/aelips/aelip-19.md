---
aelip: 19
network: Ethereum & Optimism
title: Direct deal pools
status: Draft
author: Alex the Bored Ape and cb0x (@AlexTheBoredApe) (@cb0x)
Release: n/a
Implementor: n/a
created: 05-10-2022
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Simply describe the outcome the proposed changes intends to achieve. This should be non-technical and accessible to a casual community member.-->

This AELIP proposes to add a new upfront deal mechanism for when a deal is already known during the creation of a pool.

## Abstract

<!--A short (~200 word) description of the proposed change, the abstract should clearly describe the proposed change. This is what *will* be done if the AELIP is implemented, not *why* it should be done or *how* it will be done. If the AELIP proposes deploying a new contract, write, "we propose to deploy a new contract that will do x".-->

As observed multiple times since the launch of Aelin Protocol, when a sponsor or a project creates a pool it is possible that a deal has already been discussed and agreed on. This AELIP proposes to add new factory contracts so the workflow for when a deal is known in advance can be simplified for both sponsors and investors. Pool and deal terms will both be created at the same time, and then when the deal is funded by the counter party, the pool will be open for investors. By sending their funds to the pool, investors will automatically accept the deal.

At then end of the time window in which investors can enter the pool, deal tokens will be deallocated based on how much the target raise was vs how much money is in the pool. If a deallocation occurs, investors will be able to withdraw their funds from the deal.

No change will be made to the vesting schedule logic. Investors will be able to claim and vest their tokens according to what was decided in the deal.

## Motivation

<!--This is the problem statement. This is the *why* of the AELIP. It should clearly explain *why* the current state of the protocol is inadequate.  It is critical that you explain *why* the change is needed, if the AELIP proposes changing how something is calculated, you must address *why* the current calculation is inaccurate or wrong. This is not the place to describe how the AELIP will address the issue!-->

The current state of the protocol only allows sponsors to create a pool as a first step, inviting investors to send funds without knowing what the deal will be. When the pool closes, a deal may be presented and funded, and investors can decide if they want to accept the deal or withdraw their funds from the pool.

This model works perfectly well for when a sponsor needs to know how much funds they can raise through a pool before making a deal with a counter party. Then they both can discuss the terms (amount of tokens, price, vesting...etc) based on how much there is in the pool. Going to the counter party and discussing deal terms before knowing how much interest the community has for the project itself could be a waste of time if at the end, not enough money has been raised.

As mentioned earlier, there are some cases in which these steps could be unnecessary. For example, if the sponsor is the counter party, then the deal will usually be decided before the pool is created. It could be a new project willing to do an initial raise through Aelin, or a well known DAO with a big community knowing in advance how much tokens they are willing to sell for their treasury diversification operation. When a deal is known in advance, the process should be simplified for both counter party and investors, by reducing the number of transactions and therefore saving time and money on gas.

## Specification

### Overview

<!--This is a high-level overview of *how* the AELIP will solve the problem. The overview should clearly describe how the new feature will be implemented.-->

This AELIP will require the addition of two new contracts:

- AelinUpfrontDealFactory: Same function as the original AelinPoolFactory contract except it will instantiate a new type of pool.
- AelinUpfrontDeal: Contract for the new pool with the upfront deal.

To create a pool with an upfront deal, `createPool` will require new parameters, used to set the deal terms. Since the structure of a deal will remain the same, we can expect these parameters to be the same as the ones we find in the `createDeal` function.

When instantiating a pool with an upfront deal, both pool and deal will be created at the same time. If the sponsor is the counter party, they will be able to fund the deal directly too, at the creation of the pool. If not, the counter party will be required to fund the deal afterwards, so the pool can be open to the investors.

Some changes are required in the way investors will be interacting with a pool. Since the deal is known at the time of pool creation, there is no need for them to accept or reject a deal after entering the pool. Therefore, open redemption period won't be applicable in this pool scenario. A `claim` function will be added in order for them to automatically convert their pool tokens to deal tokens after the investment period is closed. Deal tokens will be allocated according to how much money there is in the pool. If a deallocation is needed, investors will also get a refund of their unused funds when claiming their deal tokens. The vesting schedule mechanism will stay identical as in the current state of the protocol.

After the end of the investment period, the counter party will be able to claim the investment tokens along with any unredeemed deal tokens, using a `holderRedeemTokens` function.

### Rationale

<!--This is where you explain the reasoning behind how you propose to solve the problem. Why did you propose to implement the change in this way, what were the considerations and trade-offs. The rationale fleshes out what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->

Having an upfront deal factory for when a deal is known ahead of time is the cleanest way to solve the problem of removing additional steps for investors. Trying to embed it in the current set of factories would add a ton of complexity and confusion to the codebase. We are opting for maximum functionality first and then looking at the simplest implementation, which in this case is a new set of factory contracts.

### Technical Specification

<!--The technical specification should outline the public API of the changes proposed. That is, changes to any of the interfaces Aelin currently exposes or the creations of new ones.-->

N/A

### Test Cases

<!--Test cases for an implementation are mandatory for AELIPs but can be included with the implementation..-->

N/A

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
