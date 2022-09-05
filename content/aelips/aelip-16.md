---
aelip: 16
network: Ethereum & Optimism
title: Vesting schedule starts when deal is funded
status: Implemented
author: Alex the Bored Ape and cb0x (@AlexTheBoredApe) (@cb0x)
Release: n/a
Implementor: Alex the Bored Ape (@AlexTheBoredApe)
created: 04-14-2022
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Simply describe the outcome the proposed changes intends to achieve. This should be non-technical and accessible to a casual community member.-->

This AELIP proposes to update the vesting schedule creation timing to when a deal has been funded by the counter party (holder).

## Abstract

<!--A short (~200 word) description of the proposed change, the abstract should clearly describe the proposed change. This is what *will* be done if the AELIP is implemented, not *why* it should be done or *how* it will be done. If the AELIP proposes deploying a new contract, write, "we propose to deploy a new contract that will do x".-->

In the current state of the protocol, the vesting cliff and vesting expiry are set when the deal is created. This AELIP will update this logic by setting these timestamps only after a deal is funded.

## Motivation

<!--This is the problem statement. This is the *why* of the AELIP. It should clearly explain *why* the current state of the protocol is inadequate.  It is critical that you explain *why* the change is needed, if the AELIP proposes changing how something is calculated, you must address *why* the current calculation is inaccurate or wrong. This is not the place to describe how the AELIP will address the issue!-->

Starting the vesting schedule just after the deal is created might be problematic if counter parties take too much time to fund the deal. It could lead to investors vesting tokens earlier than they should.

Example: a deal with a 2 weeks vesting cliff and 3 week holder funding period is created. After 2 weeks the deal is not funded and investors can't accept the deal because the holder hasn't funded it yet. However, at this point the 2 week vesting cliff has passed, but the investors can not even redeem their deal tokens yet.

After another few days the holder finally funds the deal, investors accept it and are able to directly vest tokens without the intended vesting cliff of 2 weeks. The main issue here is an investor may be able to vest tokens sooner than expected since the vesting timing should start when the deal is funded, not when the deal is created. This is good for investors who vest earlier than expected, but bad for counterparty's that are setting the terms of the deal.

Given that most deals will be funded quickly after the deal is created, and that most vesting periods are either set to 0 or long periods of time this is generally not a significant issue for the protocol, but for deals with shorter vesting periods with delayed funding times this is a problem.

To fix this, this AELIP will introduce a change which will start the vesting schedule only after a deal is funded.

## Specification

### Overview

<!--This is a high-level overview of *how* the AELIP will solve the problem. The overview should clearly describe how the new feature will be implemented.-->

The changes required in this AELIP are quite straight forward. The logic setting up the vesting cliff and the vesting expiry will be removed from `initialize` function called when a deal is created and will be moved to the `depositUnderlying` one, used by the holder to fund the deal.

### Rationale

<!--This is where you explain the reasoning behind how you propose to solve the problem. Why did you propose to implement the change in this way, what were the considerations and trade-offs. The rationale fleshes out what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->

Moving the logic to when a deal is funded was a very easy and obvious solution to fix the current problem, so no other possibilities were discussed.

### Technical Specification

<!--The technical specification should outline the public API of the changes proposed. That is, changes to any of the interfaces Aelin currently exposes or the creations of new ones.-->

N/A

### Test Cases

<!--Test cases for an implementation are mandatory for AELIPs but can be included with the implementation..-->

TBD

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
