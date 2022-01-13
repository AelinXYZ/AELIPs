---
aelip: 7
network: Ethereum & Optimism
title: Transfer Updates
status: Draft
author: Alex the Bored Ape (@AlexTheBoredApe)
Release: Thranduil
Implementor: Alex the Bored Ape (@AlexTheBoredApe)
created: 2021-01-12
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Simply describe the outcome the proposed changes intends to achieve. This should be non-technical and accessible to a casual community member.-->

This AELIP proposes to block transfers for pool and deal tokens as allowing transfers either presents an issue with external AMMs or with internal calculations needed for Aelin pools to function properly.

A special transfer method for deal tokens will remain that only the Aelin Council can access for sending custodied deal fees to Aelin stakers.

## Abstract

<!--A short (~200 word) description of the proposed change, the abstract should clearly describe the proposed change. This is what *will* be done if the AELIP is implemented, not *why* it should be done or *how* it will be done. If the AELIP proposes deploying a new contract, write, "we propose to deploy a new contract that will do x".-->

Pool token transfers will be blocked due to issues with the pro rata calculations and deallocations. Having transfers open makes the pro rata calculations difficult, while restricting transfers to make the pro rata calculations work opens up issues with funds getting stuck in AMMs.

Deal token transfers will be blocked due to issues with claiming math and the incompatibility with the current logic if they are put into contracts and AMMs. This may be researched and udpated in future factory contracts if trading is desired.

Only a helper transfer method for the treasury to send deal fees to stakers will be allowed.

## Motivation

<!--This is the problem statement. This is the *why* of the AELIP. It should clearly explain *why* the current state of the protocol is inadequate.  It is critical that you explain *why* the change is needed, if the AELIP proposes changing how something is calculated, you must address *why* the current calculation is inaccurate or wrong. This is not the place to describe how the AELIP will address the issue!-->

Holders of pool and deal tokens may wish to trade them. The re-enabling of either pool or deal token transfers will be a community decision, but will require some R&D on the contract side.

Due to the fact that pool and deal tokens are not typical ERC20s, careful thought needs to be put into the transfer process so the system works as intended for purchasers and deal token holders.

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

For pool tokens, currently you are unable to transfer them after a deal has been created. The intent is to make sure the pro rata calculations are correct; however, any pool tokens sitting in a contract, such as an AMM, will not be transferrable, locking them once a deal is created. Therefore this AELIP proposes pool tokens will not be transferrable to prevent loss of funds in contracts or AMMs.

For deal tokens, at the moment you are allowed to transfer them freely until you have vested all your tokens. Due to the deal tokens being wrapped vesting schedules, when you transfer a deal token it triggers a claim of the underlying to that point in time for both the sender and recipient; this maintains the vesting math on both sides up to and after that point in time, however it causes issues with AMMs that will claim the underlying when transfer is called. Therefore, this AELIP proposes deal tokens will not be transferrable.

However, the treasury still needs to send custodied deal fees to stakers so they will have access to a special transfer method that will be unrestricted.

### Rationale

<!--This is where you explain the reasoning behind how you propose to solve the problem. Why did you propose to implement the change in this way, what were the considerations and trade-offs. The rationale fleshes out what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->

For the pool tokens due to issues around pro rata calculations and AMMs transfers will be blocked.

On the deal token side due to the complexity around vesting schedules and claiming transfers will be blocked.

### Technical Specification

<!--The technical specification should outline the public API of the changes proposed. That is, changes to any of the interfaces Synthetix currently exposes or the creations of new ones.-->

The changes on the pool and deals contracts are modifiers that blocks all transfers except for those made by the treasury which will send both the deal fees as well as the underlying to stakers.

### Test Cases

<!--Test cases for an implementation are mandatory for AELIPs but can be included with the implementation..-->

Tests will be implemented in the Aelin contracts repo

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
