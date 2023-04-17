---
aelip: 51
network: Optimism
title: Fee distribution for historical stakers
status: Draft
author: cb0x (@0xcdb), Alex the Bored Ape (@AlexTheBoredApe), Ser Link (@S3rLink)
Release: n/a
Implementor: n/a
created: 04-18-2023
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Simply describe the outcome the proposed changes intends to achieve. This should be non-technical and accessible to a casual community member.-->

This AELIP amends [AELIP-46](https://aelips.aelin.xyz/aelips/aelip-46) with the intent of distributing the entire sum of fees collected by Aelin Protocol until now to historical stakers.

## Abstract

<!--A short (~200 word) description of the proposed change, the abstract should clearly describe the proposed change. This is what *will* be done if the AELIP is implemented, not *why* it should be done or *how* it will be done. If the AELIP proposes deploying a new contract, write, "we propose to deploy a new contract that will do x".-->

Displayed in the table below are all of the fees collected by the protocol since last year that are available for distribution:

![Fees collected](/fees_collected.png 'Fees collected')

This AELIP proposes the following distribution:
100% of all the fees listed above will be claimable in a merkle tree contract by historical stakers, including AELIN stakers and LP stakers (prior to transition to Velodrome). AELIN stakers will be able to claim two-thirds of the deal fees, while LP stakers will receive one-third of the deal fees. Distribution to both groups will be based on amount staked and time in the contract.

It's crucial to mention that AELIP-14 stipulates that 30% of the protocol fees should be reserved for the treasury. However, this AELIP suggests making an exception to celebrate this first round of distribution. This exception only pertains to this particular distribution round, and the protocol will resume collecting its share of the fees for the next round.

AELIP-14 also originally specified that deal fees should be traded for AELIN tokens at the current market price and subsequently given to stakers. However, this section of AELIP will be revised, enabling deal tokens to be distributed directly without being sold. Please see the Rationale section for additional information.

Once the distribution takes place, staking AELIN in the old contracts (Pool 1 and 2) will not qualify for any additional reward programs.

## Motivation

<!--This is the problem statement. This is the *why* of the AELIP. It should clearly explain *why* the current state of the protocol is inadequate.  It is critical that you explain *why* the change is needed, if the AELIP proposes changing how something is calculated, you must address *why* the current calculation is inaccurate or wrong. This is not the place to describe how the AELIP will address the issue!-->

This AELIP aims to address two crucial challenges. The first challenge was to establish a fair way to reward the early AELIN stakers who had demonstrated their faith in the project since its launch last year. Aelin recognized the importance of acknowledging the contributions of these early supporters and proposed the fair distribution of half of the fees to achieve this goal.

The second challenge concerned the buy-back mechanism established in AELIP 14, which had the potential to adversely affect protocols with low liquidity by selling their tokens for AELIN. The protocol recognized the need to modify this mechanism to ensure that it did not harm smaller projects. Moreover, the buy-back mechanism, if not adjusted appropriately, could potentially lead to an appreciation in AELIN's price, followed by a decrease in the willingness of stakers to take profits.

## Specification

### Overview

<!--This is a high-level overview of *how* the AELIP will solve the problem. The overview should clearly describe how the new feature will be implemented.-->

A script will be developed to calculate the distribution share of each wallet belonging to the historical stakers based on the duration of their staking period and the amount they have staked. The results will be incorporated into a merkle tree, allowing every user to claim their portion of the deal tokens.

### Rationale

<!--This is where you explain the reasoning behind how you propose to solve the problem. Why did you propose to implement the change in this way, what were the considerations and trade-offs. The rationale fleshes out what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->

The main difference between AELIP-14 and AELIP-31 is that the deal tokens will not be exchanged for AELIN tokens, before they are given to stakers. Although this approach may seem beneficial because it could increase the demand of AELIN through the buyback mechanism, there are some downsides to consider. For instance, low liquidity protocols could be adversely impacted if Aelin Protocol sells their tokens at the current market price, making other projects hesitant to raise funds through Aelin for fear of the protocol "dumping" their tokens. Furthermore, after engaging with the community, it appears that some people who previously invested in Aelin's pools would rather keep the extra deal tokens, as it allows them to accumulate more and diversify their portfolio. As a result, this AELIP aims to amend the part of AELIP-14 that requires the protocol fees to be sold before being distributed to the community.

It's crucial to remember that this AELIP only addresses this distribution round, and another AELIP will soon be introduced to update Aelin's tokenomics officially.

### Technical Specification

<!--The technical specification should outline the public API of the changes proposed. That is, changes to any of the interfaces Synthetix currently exposes or the creations of new ones.-->

The protocol plans to deploy one new smart contract containing the merkle data that will enable historical stakers to claim their portion of the protocol fees.

### Test Cases

<!--Test cases for an implementation are mandatory for AELIPs but can be included with the implementation..-->

N/A

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
