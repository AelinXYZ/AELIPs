---
aelip: 3
network: Ethereum & Optimism
title: Tokenomics
status: Draft
author: Alex the Bored Ape (@AlexTheBoredApe)
Release: n/a
Implementor: n/a
created: 2021-12-14
---

<!--You can leave these HTML comments in your merged AELIP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new SIPs. Note that an AELIP number will be assigned by an editor. When opening a pull request to submit your AELIP, please use an abbreviated title in the filename, `sip-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Simply describe the outcome the proposed changes intends to achieve. This should be non-technical and accessible to a casual community member.-->

This AELIP proposes to detail the token distribution and tokenomics for the Aelin Protocol.

## Abstract

<!--A short (~200 word) description of the proposed change, the abstract should clearly describe the proposed change. This is what *will* be done if the AELIP is implemented, not *why* it should be done or *how* it will be done. If the AELIP proposes deploying a new contract, write, "we propose to deploy a new contract that will do x".-->

The $AELIN token will be an ERC20 token on the Optimism network with a max supply of 5000 tokens with 18 decimals. At launch, 750 (15%) $AELIN tokens will be distributed to SNX stakers across Optimism and Ethereum networks. 250 (5%) tokens will be distributed through a balancer pool, 250 (5%) will be sold through an Aelin pool, 250 (5%) will be held by the Aelin DAO for protocol development, and the remaining 3500 (70%) of Aelin tokens will be withheld by the Aelin Council for inflation and ecosystem incentives. The Aelin token, when staked, will receive 2% of all deals using the protocol.

## Motivation

<!--This is the problem statement. This is the *why* of the AELIP. It should clearly explain *why* the current state of the protocol is inadequate.  It is critical that you explain *why* the change is needed, if the AELIP proposes changing how something is calculated, you must address *why* the current calculation is inaccurate or wrong. This is not the place to describe how the AELIP will address the issue!-->

The $AELIN token is a key component of Aelin Protocol. The aim is to develop a protocol where all parties in the system are in alignment. The purpose of this AELIP is to build consensus around both the token distribution and the system tokenomics, which are crucial parts of the system.

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

There are two major components of this AELIP:

1. Token Distribution
2. Tokenomics

3. **Token Distribution**

The token supply will be 5000 and distribution will be as follows:

750 to SNX stakers (15%)
250 to a Balancer pool (5%)
250 to an initial Aelin pool (5%)
250 to the Aelin Council treasury for core contributors, external developer rewards, Council payments, and AELIP incentives (5%)
3750 to the Aelin Council treasury for incentives and ecosystem incentives (70%)

**SNX Staker Methodology**

Close to the launch of the Aelin token a snapshot of each SNX stakers debt amount on L1 and L2 will be taken. 750 Aelin tokens will then be split amongst all stakers based on their debt balance. If a staker has a c-ratio below the target c-ratio on their respective network, their debt balance will only count up to the amount needed to hit the target c-ratio. The extra debt they are holding will not provide them with a higher debt balance score.

The 750 tokens will be claimable by SNX stakers in the form of $vAELIN tokens. Stakers have 1 year to claim their $vAELIN tokens. Initially, $vAELIN will be redeemable for $AELIN 1:1 through an Aelin Pool which will have a 4-day cliff and a 26-day linear vesting period on the underlying $AELIN deal tokens. After the end of the month when all $AELIN tokens from the pool have been vested a new contract will be deployed so anyone with $vAELIN who did not participate in the Aelin Pool can redeem $vAELIN 1:1 for $AELIN for up to one year after which $vAELIN are no longer redeemable.

**Balancer Pool Methodology**

A Discord poll will be used to select a wide range of Ethereum ERC20 tokens, which will be listed on snapshot and voted on by SNX stakers to determine which of 8 tokens will be put in a Balancer pool. The LP token from this balancer pool will be stakable in a Synthetix StakingRewards.sol contract that will continuously emit 250 $AELIN tokens over a 2 week period to all balancer pool LP stakers.

**Initial Aelin Pool Sale**

On the Optimism network, an uncapped Aelin pool will be launched with a 0% sponsor fee utilizing the $sUSD token as the purchase token. There will be a 2 day purchase window and 2 day redemption window for the tokens in the pool (1 day pro-rata period and 1-day open period for any funds remaining in the pool). $AELIN will be sold to the pool at a rate of 6000 $sUSD per token up to a maximum of 250 $AELIN.

**Aelin Council**

The Aelin Council will hold 250 $AELIN tokens in its treasury for core contributors, external developer rewards, Council payments, and AELIP incentives.

The Aelin Council will also hold 3,500 $AELIN tokens in its treasury for future ecosystem incentives such as inflation, and for future Aelin pools sales to fund the treasury.

**Early Incentives**

There will be 2 ways to earn early incentives with $AELIN tokens, commonly referred to as pool 1 and pool 2. $AELIN holders may stake their AELIN directly in a staking rewards contract (pool 1) or they may stake an Optimism Uniswap $AELIN-ETH LP token in a staking rewards contract (pool 2).

Pool 1: Stake your AELIN, gain a share of 1x inflationary rewards (29 AELIN/month) + 2/3 of protocol deal fees
Pool 2 Stake your AELIN/ETH LP and gain a share of 1.5x inflationary rewards (44 AELIN/month) + 1/3 of deal fees

Deal rewards will not be emitted to pool 1 and 2 stakers initially; the Aelin Council will custody all protocol deal fees and retroactively airdrop them to stakers before the staking rewards contract that automatically lets stakers claim deal fees is deployed.

**Changing Incentives**

Changes to the incentive structures will not go into effect for 30 days after the AELIP outlining the respective updates is passed in a vote by the Aelin Council.

2. **Tokenomics**

For every deal that happens using the Aelin Protocol contracts, a fixed fee of 2% in the underlying deal tokens will be sent to the Aelin Council to hold on behalf of AELIN token holders. In the near future a mechanism for staking $AELIN tokens will be launched. At that point, stakers will be able to claim their pro rata share of all deals using Aelin protocol.

### Rationale

<!--This is where you explain the reasoning behind how you propose to solve the problem. Why did you propose to implement the change in this way, what were the considerations and trade-offs. The rationale fleshes out what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->

### Technical Specification

<!--The technical specification should outline the public API of the changes proposed. That is, changes to any of the interfaces Aelin currently exposes or the creations of new ones.-->

### Test Cases

<!--Test cases for an implementation are mandatory for AELIPs but can be included with the implementation..-->

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
