---
aelip: 5
network: Optimism
title: Pool 2 Liquidity Provision Mechanics
status: Draft
author: Alex the Bored Ape (@AlexTheBoredApe)
Release: n/a
Implementor: n/a
created: 2021-12-29
---

<!--You can leave these HTML comments in your merged AELIP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new SIPs. Note that an AELIP number will be assigned by an editor. When opening a pull request to submit your AELIP, please use an abbreviated title in the filename, `sip-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Simply describe the outcome the proposed changes intends to achieve. This should be non-technical and accessible to a casual community member.-->

This AELIP proposes a change to the mechanism for the Pool 2 staking and rewards distribution outlined in AELIP-3.

## Abstract

<!--A short (~200 word) description of the proposed change, the abstract should clearly describe the proposed change. This is what *will* be done if the AELIP is implemented, not *why* it should be done or *how* it will be done. If the AELIP proposes deploying a new contract, write, "we propose to deploy a new contract that will do x".-->

AELIP-3 proposed that Synthetix StakingRewards.sol contracts would be used for staking both $AELIN (pool 1) and $AELIN/$ETH (pool 2) on the Optimism network. However, the Uniswap v3 AMM used for pool 2 on the Optimism network distributes a NFT instead of an ERC20 token, thus making it incompatible with the StakingRewards.sol contract.

The proposal is to utilize an off-chain script reading data from the Graph or an archive node to determine the amount of time and quantity of assets being LP'd on Uniswap v3 and then distribute 44 $AELIN to LPs via a merkle tree distribution contract after the month is over. At the end of the month, Aelin governance will re-evaluate this mechanism and move to an automated design if possible.

## Motivation

<!--This is the problem statement. This is the *why* of the AELIP. It should clearly explain *why* the current state of the protocol is inadequate.  It is critical that you explain *why* the change is needed, if the AELIP proposes changing how something is calculated, you must address *why* the current calculation is inaccurate or wrong. This is not the place to describe how the AELIP will address the issue!-->

The release of the $AELIN token is an exciting moment for the Aelin Protocol. Upon launching, there needs to be both token fee capture from deals as well as liquidity available for the token. Using the StakingRewards.sol contract is incompatible with these goals.

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

While Uniswap v3 gives liquidity providers more flexibility than v2, it makes on-chain staking mechanisms hard to implement. Using a staking contract can allow one tick liquidity positions to accrue an outsized share of rewards. Ribbon was targetted through this attack in their liquidity mining program.

Aelin Protocol would like to luanch on Optimism without taking on unnecessary risks. Therefore, we are going to reward only those LPs utilizing full range positions, similar to v2. This will reduce the risk that Aelin Protocol is exploited in a mechanism similar to Ribbon. The goal is to run this offchain mechanism for a month; the Optimism network is rapidly growing and there will likely be other options to implement in the near future.

Rewards will be computed off-chain and sent out after the end of the month through a distribution contract similar to the $vAELIN claim process. Each block processed in the month will have equal weights in the distribution calculation and capital will receive their pro-rata share of the rewards for the duration they are in the pool.

```
Pool: $AELIN/$ETH
Fee Tier: 1%
Amount: 44 $AELIN
Start: January 4th, 2022
End: February 4th, 2022
minPrice: 0
maxPrice: Infinity
```

### Rationale

<!--This is where you explain the reasoning behind how you propose to solve the problem. Why did you propose to implement the change in this way, what were the considerations and trade-offs. The rationale fleshes out what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->

### Technical Specification

<!--The technical specification should outline the public API of the changes proposed. That is, changes to any of the interfaces Aelin currently exposes or the creations of new ones.-->

### Test Cases

<!--Test cases for an implementation are mandatory for AELIPs but can be included with the implementation..-->

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
