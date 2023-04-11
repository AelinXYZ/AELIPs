---
aelip: 49
network: All networks
title: AELIN Tokenomics
status: Draft
author: cb0x (@cb0x), Ser Link (@S3rLink), Alex the Bored Ape (@AlexTheBoredApe)
Release: n/a
Implementor: cb0x (@cb0x)
created: 04/11/2023
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Simply describe the outcome the proposed changes intends to achieve. This should be non-technical and accessible to a casual community member.-->

This AELIP proposes to improve the current AELIN tokenomics and also to integrate fees from VestAMM. Protocol fees from Aelin’s product lines (VestAMM, Direct Deals, and Sponsored Pools) on each network will be distributed 50% to AELIN stakers (pool 1), and 50% to the Aelin DAO. LPs will not receive protocol fees but will instead be incentivized by VestAMM liquidity mining, which will be discussed in a future AELIP.

## Abstract

<!--A short (~200 word) description of the proposed change, the abstract should clearly describe the proposed change. This is what *will* be done if the AELIP is implemented, not *why* it should be done or *how* it will be done. If the AELIP proposes deploying a new contract, write, "we propose to deploy a new contract that will do x".-->

A new Aelin contract called “the Fee Module” will be deployed to manage the distribution of protocol fees or inflationary rewards to AELIN stakers and the Aelin DAO. The fee module will collect fees from Sponsored Pools and Direct Deals as well as fees from VestAMM instances. For Sponsored Pool and Direct Deal fees, stakers will receive their share locked on the same vesting schedule as the original offerings. A single NFT representing the protocol fees will be owned by the Fee Module, which will account for each stakers sub-balance. Each time a claim is made it will trigger a partial transfer of the vesting NFT amount to a staker who will receive their fees on the same vesting schedules as investors. For vAMM instance fees, which will generally have liquidity, the Fee Module contract will allow them to be swapped to wETH which can be distributed to stakers. However, in the event that the slippage during the swap exceeds 1%, the Fee Module contract will distribute the tokens directly to stakers without converting them to wETH.

The Fee Module will have a startDistribution method which will start emitting rewards over the following 90 days. When this method is called it will create a new ERC20 with a total supply of 100K tokens which will be distributed to stakers as a single reward token; this token represents a claim on all the protocol fees sitting in an escrow contract earned over the previous period.

The Fee Module contract or a closely related escrow contract to hold the fees will need to receive fees through a special method rather than a plain transfer so it can track the period when tokens were received and how many are claimable by the various ERC20s emitted over 90 days by the staking rewards contract.

After claiming their share of the ERC20 tokens for a given period, AELIN stakers will then be able to claim the underlying tokens held by the Fee Module/ Escrow contract. The ERC20s awarded are non-transferable outside of the staking rewards contract emissions, so the staker can only use them to claim the underlying but cannot transfer them. The Fee Module/ Escrow contract must track which tokens are claimed from a given period to make sure there are no double claims by ERC20 holders and that they can claim different underlying tokens across multiple function calls without burning their ERC20 tokens when they claim.

## Motivation

<!--This is the problem statement. This is the *why* of the AELIP. It should clearly explain *why* the current state of the protocol is inadequate.  It is critical that you explain *why* the change is needed, if the AELIP proposes changing how something is calculated, you must address *why* the current calculation is inaccurate or wrong. This is not the place to describe how the AELIP will address the issue!-->

With the introduction of VestAMM, the AELIN tokenomics require an update. Additionally, the current Aelin tokenomics are not working as intended. The majority of deals on Aelin have no vesting schedules and are IOUs for the real protocol tokens which are released at a later date. Therefore, the 6 month escrow window we have to hold tokens before distributing them does not make sense.

In addition, while the buy pressure from AELIN buybacks is good, it could also lead to a sell pressure from stakers willing to take profits. Also, the underlying protocols using Aelin will not return if their tokens are sold for AELIN. Finally, by having AELIN liquidity on every network our liquidity would be too fragmented. By distributing wETH and the underlying Aelin fee assets on vesting schedules directly to AELIN stakers there will be no sell pressure, but fee income will generate buy pressure or high yield if the protocol does well.

## Specification

### Overview

<!--This is a high-level overview of *how* the AELIP will solve the problem. The overview should clearly describe how the new feature will be implemented.-->

A modified staking multi staking rewards contract will be updated to have extra features in order to satisfy the conditions of this governance proposal. The goal of the AELIP is to distribute an unbounded amount of tokens to stakers. In order to accommodate an unknown amount of tokens to be distributed each period, a single, non-transferrable ERC20 token will be emitted to stakers which represents a claim on the unknown number of underlying protocol fees. A method to claim the fees for the ERC20 holders will be added which will accept an array of tokens to claim. A more detailed description of the changes is in the technical specification.

### Rationale

With the introduction of VestAMM, Aelin is continuing to evolve as a platform. The protocol is in the early stages of development and is changing accordingly. The updates proposed in this tokenomics are beneficial for the continued development of the project while also keeping the AELIN token as a centerpiece of the vision.

### Technical Specification

<!--The technical specification should outline the public API of the changes proposed. That is, changes to any of the interfaces Aelin currently exposes or the creations of new ones.-->

A modified staking multi staking rewards contract (https://github.com/curvefi/multi-rewards/blob/master/contracts/MultiRewards.sol) will be updated to have extra features in order to satisfy the conditions of this governance proposal.
A `startDistribution()` method which emits an ERC20 token created the last time this method was called which will be distributed over the following 90 days and represents a claim on all assets received by the contract since the last period started. The startDistribution method will also create a new ERC20 token using the new keyword in solidity, which will serve as a reward token for all the tokens received in a contract until the next period is called.
A global period variable starting at 0 and going up 1 each time `startDistribution()` is called. Also the period will need to be tied to the ERC20 that is emitted so users can claim their underlying tokens using the ERC20.
A `receiveFees(address _token, uint256 _amount)` method which is how Aelin protocols will send fees to this contract which will track the period in which the fees are received so stakers can claim their pro rata share. NOTE we might want to use a different method as well for Aelin Pool and Aelin Deals where we will be sending a NFT instead of ERC20 tokens. This NFT will be owned by the staking rewards contract and when people claim them they will trigger a partial transfer which will issue them a new NFT on the same schedule as investors in the Aelin Pool. Then the staker will have to call claim in the Aelin UI when the vesting schedule is done. We should track this via the subgraph to update the people who have deal tokens to claim as well.
A `claimUnderlying(address[] _tokens)` function which will let the users pass in an array of tokens from that period they want to claim the underlying from the ERC20 they hold. NOTE that the ERC20 needs to be non-transferrable since it is not a one time claim. The reason is we might have 1000 underlying tokens for them to claim. They need to do this across several transactions. If the ERC20 is transferable and they are sent to a new address after claiming half the tokens it is not possible to track that afaik. We can keep thinking about this but having them non-transferable works for now. It is just an intermediate token anyways.
A `swapFees(address _token, uint256 _amount, uint256 _period)` method which will be able to exchange liquid swap fees from VestAMM into wETH as long as it is called before the ERC20 token is emitted for a given period. We should have some restrictions based on the slippage amounts. If the slippage is too high we have to sell in increments or else just send the token directly to stakers instead of wETH.

### Test Cases

<!--Test cases for an implementation are mandatory for AELIPs but can be included with the implementation..-->

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/)
