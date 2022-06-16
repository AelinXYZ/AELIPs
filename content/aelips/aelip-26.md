---
aelip: 26
network: Optimism
title: Staking rewards program termination
status: Draft
author: cb0x (@cb0x)
Release: n/a
Implementor: n/a
created: 06-18-2002
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Simply describe the outcome the proposed changes intends to achieve. This should be non-technical and accessible to a casual community member.-->

This AELIP proposes stop the current staking rewards program on Optimism.

## Abstract

<!--A short (~200 word) description of the proposed change, the abstract should clearly describe the proposed change. This is what *will* be done if the AELIP is implemented, not *why* it should be done or *how* it will be done. If the AELIP proposes deploying a new contract, write, "we propose to deploy a new contract that will do x".-->

Aelin Protocol is currently incentivizing AELIN stakers by distributing 29 AELIN to Pool 1 and 44 AELIN to Pool 2 every month. This AELIP proposes to end this program.

## Motivation

<!--This is the problem statement. This is the *why* of the AELIP. It should clearly explain *why* the current state of the protocol is inadequate.  It is critical that you explain *why* the change is needed, if the AELIP proposes changing how something is calculated, you must address *why* the current calculation is inaccurate or wrong. This is not the place to describe how the AELIP will address the issue!-->

A protocol can decide to incentivize stakers through a staking rewards program for two main reasons:

- Increase the number of long term holders
- Increase the liquidity

With Aelin price and liquidity drastically decreasing over the last few months it is now clear that the current reward program is not only pointless but also increasing the sell pressure by enhancing a "farm and dump" behaviour, observed in a lot of onchain transactions lately.

## Specification

### Overview

<!--This is a high-level overview of *how* the AELIP will solve the problem. The overview should clearly describe how the new feature will be implemented.-->

If this AELIP gets approved, the treasury council will immediately stop the distribution of AELIN tokens to staking contracts.

### Rationale

<!--This is where you explain the reasoning behind how you propose to solve the problem. Why did you propose to implement the change in this way, what were the considerations and trade-offs. The rationale fleshes out what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->

Based on the current price of AELIN at the time of writing this AELIP, the distribution of 73 AELIN tokens per month roughly equals to $50,000. This amount is obviously too low to motivate people to continue staking their AELIN tokens during the current market conditions. The first solution to fix this issue would be to increase the amount distributed every month, but unfortunately this solution isn't sustainable for some obvious reasons. We don't know how much time the market will take to recover, and since Aelin Protocol doesn't have an inflationary supply, the rewards are distributed out of the treasury's pocket which doesn't hold an unlimited amount of tokens.

Stopping the staking rewards program seems to be the wisest solution for now. It will eventually flush out all the wallets which were only staking to farm and dump, and only people who strongly believe in the project in the long term will continue holding and buying.

Note: Aelin Protocol is also in touch with other AMMs which could potentially incentivize AELIN stakers instead of the treasury.

### Technical Specification

<!--The technical specification should outline the public API of the changes proposed. That is, changes to any of the interfaces Aelin currently exposes or the creations of new ones.-->

N/A

### Test Cases

<!--Test cases for an implementation are mandatory for AELIPs but can be included with the implementation..-->

TBD

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
