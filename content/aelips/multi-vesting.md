---
aelip: TBD
network: Ethereum & Optimism
title: Multiple Vesting Schedules
status: Draft
author: 0xIsuRuss (@0xIsuRuss)
Release: n/a
Implementor: 0xIsuRuss
created: 07-25-2022
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Simply describe the outcome the proposed changes intends to achieve. This should be non-technical and accessible to a casual community member.-->

This AELIP proposes adding the ability for deal creators to configure multiple vesting schedules within the same deal to be sold at different prices. The purchaser will be able to choose the vesting schedule they prefer for the corresponding token price. 

## Abstract

<!--A short (~200 word) description of the proposed change, the abstract should clearly describe the proposed change. This is what *will* be done if the AELIP is implemented, not *why* it should be done or *how* it will be done. If the AELIP proposes deploying a new contract, write, "we propose to deploy a new contract that will do x".-->

This AELIP also proposes modifications to the Up Front Deal contracts; including `AelinUpFrontDeal.sol`, `AelinUpFrontDealFactory.sol`, and the `IAelinUpFrontDeal.sol` interface. Up Front Deals already work on a price per token input model, these changes will allow multiple prices to be set to correspond with different `vestingCliffPeriod` and `vestingPeriod` inputs, enabling different vesting schedules to be purchased at different prices.

For the traditional pool-deal contracts, this AELIP proposes a refactor to use a price per deal token purchassing model like the direct deals instead of pricing the underlying deal tokens by the `_purchaseTokenTotalForDeal` and `_underlyingDealTokenTotal` inputs when creating the deal.

When a deallocation occurs, all users will be deallocated at the same rate regardless of the vesting schedule.

Purchasers will be able to purchase in any combination of the available vesting schedules in different transactions.

Nothing will change to in the process of minting deal tokens once the purchasing period is over. If a user has purchased in multiple vesting schedules, all deal tokens will be minted at once and the vesting logic to manage the different schedules' unlocks is handled in the contracts. 

A purchaser will be able to individually manage their tokens for multiple vesting schedules or all at once. Meaning that a purchaser can claim the available unlocked underlying tokens from one vesting schedule, or all at once.

## Motivation

<!--This is the problem statement. This is the *why* of the AELIP. It should clearly explain *why* the current state of the protocol is inadequate.  It is critical that you explain *why* the change is needed, if the AELIP proposes changing how something is calculated, you must address *why* the current calculation is inaccurate or wrong. This is not the place to describe how the AELIP will address the issue!-->

The current state of the protocol only allows for one vesting schedule and one static price. If a deal creator wants to offer different prices and/or schedules, they would have to create multiple deal contracts; all requiring the creator to determine the token amount they want to sell at that price point up front, fragmenting the token quantities available for each price point.

By offering the ability for a deal creator to set multiple price points and vesting schedules, it fixes this token quantity fragmentation issue allowing the creator to have one contract to manage the deal and deposit the underlying. The main motivation being to increase the flexibility/configurability of deals so that deal creators have more tools to create the deal that works best for them, and allow them to offer more options for purchasers.

## Specification

### Overview

<!--This is a high-level overview of *how* the AELIP will solve the problem. The overview should clearly describe how the new feature will be implemented.-->

Up Front Deals:

This AELIP will require modifications to the Up Front Deal contracts; including `AelinUpFrontDeal.sol`, `AelinUpFrontDealFactory.sol`, and the `IAelinUpFrontDeal.sol` interface. Many function interfaces and events will require modifications to their parameters.

`IAelinUpFrontDeal.sol`: Included in these changes will be making a `VestingSchedule` struct which will include `purchaseTokenPerDealToken` price, `vestingCliffPeriod`, and `vestingPeriod` to make up the schedule parameters. The `UpFrontDealConfig` struct which is used to create the deal will feature an array of `VestingSchedule`s. Also requiring a change to the `CreateUpFrontDealConfig` event. More events will require updates to account for this change to the `UpFrontDealConfig`.

`AelinUpFrontDealFactory.sol`: `createUpFrontDeal` input parameters will be effected by the update to the `UpFrontDealConfig` struct.

`AelinUpFrontDeal.sol`: User specific contract data moved to a nested mapping to keep track of data per vesting schedule. Expiry times changed to arrays to keep track of these times per vesting schedule. Multiple functions will get an added `_vestingIndex` input to specify which vesting schedule the function is meant to use; including `acceptDeal` and `claimUnderlyingPerSchedule`. There will be two underlying claim functions, `claimUnderlyingPerSchedule` and `claimUnderlyingAllSchedules`, claim from one schedule or all schedules at once. In the event of a deallocation from over purchase, all purchasers will deallocated at the same percentage; the minimumRaise configuration can be used by the deal creator to ensure that the amount raised after the deallocation still meets a minimum requirement for the deal to go through. Lastly, because for loops will be used for vesting schedules, to ensure the function call does not run out of gas, the total amount of vesting schedules will be limited by a hardcoded number that is TBD.

Traditional Pool-Deal:

Pricing will no longer be calculated by the `_purchaseTokenTotalForDeal` and `_underlyingDealTokenTotal` inputs, and instead be set directly in the `vestingSchedule` struct. All downstream effects to create the price per deal token input will have to be considered and implemented like in the Up Front Deal contracts. These changes will effect the `AelinPoolFactory.sol`, `AelinPool.sol`, and `AelinDeal.sol` contracts. Part of the refactor being to implement the libraries developed for the allow list and nft gating features that are implemented in the Up Front Deal contracts.

### Rationale

<!--This is where you explain the reasoning behind how you propose to solve the problem. Why did you propose to implement the change in this way, what were the considerations and trade-offs. The rationale fleshes out what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->

For the traditional pool-deal contracts, going through the refactor to use the price per deal token model will make the architecture more like the direct deals for consistency and allow future upgrades to be implemented more easily.

The Up Front Deals contracts were designed with variable prices in mind; because they already works on a price per deal token purchasing model, it is simple to expand this to use arrays/nested mappings for different vesting schedules at different price rates. It allows for greater configurability when creating deals without the need for a large refactor. 

Some small tradeoffs being added function inputs, slight increase in contract size for `AelinUpFrontDeal.sol`, slightly more gas for some of the function calls.

### Technical Specification

<!--The technical specification should outline the public API of the changes proposed. That is, changes to any of the interfaces Aelin currently exposes or the creations of new ones.-->

TBD

### Test Cases

<!--Test cases for an implementation are mandatory for AELIPs but can be included with the implementation..-->

Up Front Deals:

Tests will be done in `AelinUpFrontDealFactory.t.sol` and `AelinUpFrontDeal.t.sol`

Tradition Pool-Deal:

Tests will be done in `AelinPoolFactory.t.sol`, `AelinPool.t.sol`, `AelinPoolPurchase.t.sol`, and `AelinDeal.t.sol`

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
