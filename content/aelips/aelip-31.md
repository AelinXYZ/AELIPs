---
aelip: 31
network: Optimism
title: Deal Fee Rewards
status: Approved
author: AlexTheLizard (@AlexTheLizard)
Release: n/a
Implementor: n/a
created: 08-10-2022
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Simply describe the outcome the proposed changes intends to achieve. This should be non-technical and accessible to a casual community member.-->

This AELIP proposes to provide deal fee rewards to stakers prior to the AELIP-14 buyback and distribution mechanism going into effect. The proposal is to use a proportion of the initial buyback for AELIP-14 and distribute it to historical stakers in pool 1 and pool 2.

## Abstract

<!--A short (~200 word) description of the proposed change, the abstract should clearly describe the proposed change. This is what *will* be done if the AELIP is implemented, not *why* it should be done or *how* it will be done. If the AELIP proposes deploying a new contract, write, "we propose to deploy a new contract that will do x".-->

Looking back, pool 1 and pool 2 stakers received inflationary rewards but no deal fees. Pool 1 is supposed to receive 2/3 of the deal fees and 1/3 of the deal fees. With AELIP-14 however, instead of distributing fees, AELIN from buybacks will be awarded. The proposal is to take 50% of the AELIN rewards from the initial buyback happening in the future and to create a merkle tree distribution to historical stakers for them to claim.

From the launch of pool 1 until the initial buyback, 2/3 of the AELIN in the merkle tree distribution will be awarded across the period proportionally, and from the launch of pool 2 until the start of VELO rewards the other 1/3 will be distributed across pool 2 stakers.

## Motivation

<!--This is the problem statement. This is the *why* of the AELIP. It should clearly explain *why* the current state of the protocol is inadequate.  It is critical that you explain *why* the change is needed, if the AELIP proposes changing how something is calculated, you must address *why* the current calculation is inaccurate or wrong. This is not the place to describe how the AELIP will address the issue!-->

The goal is to reward those who are staking in pool 1 and continue to stake in anticipation of future buyback rewards as well as this historical distribution, while also rewarding prior stakers in pool 2 who were told they would get deal fee rewards, but have not as of yet.

## Specification

### Overview

<!--This is a high-level overview of *how* the AELIP will solve the problem. The overview should clearly describe how the new feature will be implemented.-->

During the initial buyback 50% of all AELIN will go to a merkle tree distributed to historical stakers. Out of this 50% amount, 2/3 will be given to pool 1 and 1/3 will be given to pool 2.

From the launch of pool 1 until the initial buyback, awards will be given proportionate to ownership percentage of the pool over time. Same goes for pool 2, but pool 2 calculations will stop at the point of the initial VELO rewards, since pool 2 rewards ended at that point in time.

### Rationale

<!--This is where you explain the reasoning behind how you propose to solve the problem. Why did you propose to implement the change in this way, what were the considerations and trade-offs. The rationale fleshes out what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->

Since the distribution rewards historical activity and not future staking activities it makes sense to use a merkle distribution instead of a StakingRewards contract. Future stakers will continue to be rewarded under AELIP-14.

### Technical Specification

<!--The technical specification should outline the public API of the changes proposed. That is, changes to any of the interfaces Aelin currently exposes or the creations of new ones.-->

The same merkle distribution contracts for the initial AELIN pool will be used again for this distribution and will be put in a claim page in the UI.

### Test Cases

<!--Test cases for an implementation are mandatory for AELIPs but can be included with the implementation..-->

n/a

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
