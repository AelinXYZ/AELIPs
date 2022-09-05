---
aelip: 32
network: Optimism
title: Increased OP Token Incentive for Deals
status: Implemented
author: Ser Link (@S3rLink)
Release: n/a
Implementor: n/a
created: 08-09-2022
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Simply describe the outcome the proposed changes intends to achieve. This should be non-technical and accessible to a casual community member.-->

This AELIP proposes to amend AELIP-22: OP Distribution which outlines the planned use of the 900,000 OP tokens received through Phase 0 of the Optimism Governance Fund. Specifically, this proposal suggests increasing the allocation of OP tokens used to incentivize deals and to increase the incentive provided to sponsors and users who participate in deals.

## Abstract

<!--A short (~200 word) description of the proposed change, the abstract should clearly describe the proposed change. This is what *will* be done if the AELIP is implemented, not *why* it should be done or *how* it will be done. If the AELIP proposes deploying a new contract, write, "we propose to deploy a new contract that will do x".-->

After observing the use of OP token incentives so far it appears that we can be more aggressive with our OP incentives used to attract users to deals on Aelin since Velodrome has proven to be a highly capital efficient method of securing deep liquidity.

If implemented, this proposal will increase the allocation of OP tokens allocated to the pool incentive program from 60% to 75% and decrease the allocation to LP stakers from 40% to 25%. Further, the pool incentive program terms will be increased from providing a 3% rebate to investors to now provide a 5% rebate to investors and a 1% bonus to the sponsor for finding the deal.

## Motivation

<!--This is the problem statement. This is the *why* of the AELIP. It should clearly explain *why* the current state of the protocol is inadequate.  It is critical that you explain *why* the change is needed, if the AELIP proposes changing how something is calculated, you must address *why* the current calculation is inaccurate or wrong. This is not the place to describe how the AELIP will address the issue!-->

Based on the number of remaining tokens currently allocated to incentivize liquidity, current value of the OP token ($1.65 when calculated), and efficient usage on Velodrome we have approximately 140 weeks worth of Velodrome bribes. While many factors could have impacted this, the 3% rebate of OP tokens did not appear to be a significant motivator for users to participate in the most recent raise on Aelin. Incentivizing sponsors to bring deals to Aelin and users to participate in those deals is our highest priority as it brings more attention to Aelin, generates revenue, and provides more examples of successful raises to point to when pitching the protocol to groups considering using the protocol for their capital raise.

## Specification

### Overview

<!--This is a high-level overview of *how* the AELIP will solve the problem. The overview should clearly describe how the new feature will be implemented.-->

Currently the council is bound by AELIP-22 regarding the allocation of OP tokens. This proposal will increase the amount allocated to the pool incentive program from 60% to 75% and decrease the allocation to LP stakers from 40% to 25%.

The terms of the pool incentive program will be amended from previously providing a 3% rebate to investors to now provide a 5% rebate to investors as well as a 1% bonus to the sponsor for finding the deal.

The allocation between liquidity incentives and pool incentives as well as the terms of the pool incentive program will be configurable by ACCP going forward so a new AELIP is not required if we find that we need to be even more aggressive to incentivize deals.

### Rationale

<!--This is where you explain the reasoning behind how you propose to solve the problem. Why did you propose to implement the change in this way, what were the considerations and trade-offs. The rationale fleshes out what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->

Deal flow is the most important metric to Aelin so increasing our incentivization of this is critical. At the current price of the OP token, this incentive will result in approximately $18.5m of deal flow on Aelin and protocol revenue of $370k.

### Technical Specification

<!--The technical specification should outline the public API of the changes proposed. That is, changes to any of the interfaces Synthetix currently exposes or the creations of new ones.-->

N/A

### Test Cases

<!--Test cases for an implementation are mandatory for AELIPs but can be included with the implementation..-->

N/A

TBD

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
