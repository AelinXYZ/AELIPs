---
aelip: 41
network: All networks
title: Enable deal token transfer
status: Draft
author: cb0x (@0xcdb)
Release: n/a
Implementor: n/a
created: 10-20-2022
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Simply describe the outcome the proposed changes intends to achieve. This should be non-technical and accessible to a casual community member.-->

This AELIP proposes to enable deal token transfer, allowing initial purchasers to migrate their vesting schedules to other wallets.

## Abstract

<!--A short (~200 word) description of the proposed change, the abstract should clearly describe the proposed change. This is what *will* be done if the AELIP is implemented, not *why* it should be done or *how* it will be done. If the AELIP proposes deploying a new contract, write, "we propose to deploy a new contract that will do x".-->

Deal tokens are minted when purchasers accept a deal. They are then able to redeem underlying deal tokens at a 1:1 ratio with their deal tokens, following a vesting schedule. Deal tokens transfers are currently disabled meaning they are only able to vest their underlying deal tokens from their initial wallet, until they reach the end of their vesting schedule.

This AELIP proposes to enable transfers for the soon-to-be-launched Upfront deal feature.

## Motivation

<!--This is the problem statement. This is the *why* of the AELIP. It should clearly explain *why* the current state of the protocol is inadequate.  It is critical that you explain *why* the change is needed, if the AELIP proposes changing how something is calculated, you must address *why* the current calculation is inaccurate or wrong. This is not the place to describe how the AELIP will address the issue!-->

Deal token transfers have been disabled since Aelin Protocol launched. When deal tokens are transferred to another address, the vesting schedule also needs to be migrated over, which wasn't compatible with the initial deal contract architecture.

While in theory migrating a schedule from a wallet which hasn't vested yet to a blank wallet could be doable, it gets complicated when both of these wallets have vesting schedules and have already started to vest. A solution with the current mechanism could involve the addition of extra mappings, increase the complexity of the calculations and therefore increase the cost for each transaction.

However, not having the ability to transfer deal tokens could be a real friction for users and slow the growth of the protocol itself. Any investor holding deal tokens should be able to transfer, merge, sell or even buy more of these tokens whenever they want, with their escrow schedule being updated every time. Any person who missed the investment window of a pool should be able to buy deal tokens either from an OTC deal or on a secondary market.

## Specification

### Overview

<!--This is a high-level overview of *how* the AELIP will solve the problem. The overview should clearly describe how the new feature will be implemented.-->

As described above, there is no easy solution with the current deal contract architecture to enable deal token transfers. But since UpFront deals will be coming soon, and required a complete revamp of the logic it is probably the best moment to introduce some additional changes allowing these tokens to be transferable.

This AELIP will make the `UpFrontDeal` contract a `ERC721` token contract, instead of an `ERC20` one. This means whenever an investor accepts a deal, a NFT representing their escrow schedule will be minted. `ERC721` tokens can be identified with token IDs, meaning every escrow schedule for every minted `ERC721` will be stored in a mapping in the contract. When these NFTs are transferred, it will then be easy to update their corresponding escrow schedule in the contract.

It is important to note that one `ERC721` will represent one single escrow schedule. This means wallets could be holding multiple NFTs representing multiple schedules. To make this work, the `vest` function will require a `tokenID` parameter allowing users to chose from which schedule they are willing to vest their underlying deal tokens from.

### Rationale

<!--This is where you explain the reasoning behind how you propose to solve the problem. Why did you propose to implement the change in this way, what were the considerations and trade-offs. The rationale fleshes out what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->

Minting `ERC721` tokens instead of `ERC20` seems to be the easiest solution for multiple reasons.

Using a NFT to represent one single schedule simplifies the logic a lot as whenever a transfer occurs, the whole schedule also migrates with it. If the user only wants to transfer a part of it, then only this specific NFT's schedule will be modified, with the new amount. A new NFT will then be minted and sent to the destination address, "containing" a schedule with the amount specified by the sender. The calculation logic required to handle all the schedules is easier than before, even when the transfers were disabled.

### Technical Specification

<!--The technical specification should outline the public API of the changes proposed. That is, changes to any of the interfaces Synthetix currently exposes or the creations of new ones.-->

- `UpFrontDeal` contract will be modified to become a `ERC721` contract. Some of the calculation logic to handle escrow schedules will be changed, and so will the vest and transfer functions.
- `ERC721AelinToken` contract will be created, which will just be a `ERC721` wrapper as it was initially done with `AelinToken` wrapping the `ERC20` contract.

### Test Cases

<!--Test cases for an implementation are mandatory for AELIPs but can be included with the implementation..-->

Tests will be modified to make them compatible with the new architecture. New tests will also be created in order to make sure all the scenarios are covered.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
