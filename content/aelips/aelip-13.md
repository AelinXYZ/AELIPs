---
aelip: 13
network: Ethereum & Optimism
title: Incentivized Pools
status: Vote_Pending
author: Alex the Bored Ape and Calavera (@AlexTheBoredApe) (@Calavera)
Release: Bernard
Implementor: n/a
created: 03-10-2022
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Simply describe the outcome the proposed changes intends to achieve. This should be non-technical and accessible to a casual community member.-->

This AELIP proposes to incentivize the creation of pools to bootstrap activity on the Aelin Protocol. 30 $AELIN will be set aside to provide incentives for both sponsors who provide deals and investors who accept those deals.

## Abstract

<!--A short (~200 word) description of the proposed change, the abstract should clearly describe the proposed change. This is what *will* be done if the AELIP is implemented, not *why* it should be done or *how* it will be done. If the AELIP proposes deploying a new contract, write, "we propose to deploy a new contract that will do x".-->

After a recent set of UI updates the Aelin Protocol is ready to start increasing the amount of deal flow on the platform. 30 $AELIN tokens have been set aside to incentivize pool creation through additional rewards for protocol participants.

For every $1 USD of value of a deal accepted by investors, the program will award sponsors 2% of that value in $AELIN tokens with a cap of 2 $AELIN per pool. Additionally, investors will be awarded 3% of their accepted deal value in $AELIN tokens with a cap of 0.2 $AELIN per investor. To qualify, a deal must raise at least $200K worth of capital.

## Motivation

<!--This is the problem statement. This is the *why* of the AELIP. It should clearly explain *why* the current state of the protocol is inadequate.  It is critical that you explain *why* the change is needed, if the AELIP proposes changing how something is calculated, you must address *why* the current calculation is inaccurate or wrong. This is not the place to describe how the AELIP will address the issue!-->

Aelin protocol contracts have been completed and the UI has been the backlog for putting deal flow on the platform. However, the initial UI updates are ready, which means it is time to start onboarding participants. In order to kickstart the process, the protocol will reward sponsors and investors in addition to their regular incentives for finding and accepting deals.

## Specification

N/A

### Overview

<!--This is a high-level overview of *how* the AELIP will solve the problem. The overview should clearly describe how the new feature will be implemented.-->

Incentivised Aelin Pools

- Amount: 30 $AELIN
- Deadline: End of April, UTC time
- Minimum deal accepted to qualify: $200K USD equivalent in Investment tokens. Investment tokens without a market value do not qualify
- Sponsor award is 2% of total value of accepted deal tokens in $AELIN (capped at 2 $AELIN per pool)
- Investor award is 3% of their accepted deal token value in $AELIN (capped at 0.2 $AELIN per investor)
- All deals will be reviewed by the Aelin Council and any sponsor or investor trying to game the rewards program may be omitted from rewards on a case by case basis (e.g. sponsor does not provider a legitimate deal or by a larger investor splitting funds across many small wallets in a single deal)
- Once the incentives for all 30 $AELIN tokens have been finalized or the deadline is reached (whichever is first), a merkle drop contract will be deployed for participants to claim their AELIN rewards.
- the price of the Investment tokens and AELIN tokens used in the calculations will be taken from market rates on coingecko at the time of the award distribution after the program concludes.

### Rationale

<!--This is where you explain the reasoning behind how you propose to solve the problem. Why did you propose to implement the change in this way, what were the considerations and trade-offs. The rationale fleshes out what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->

Aelin is a permissionless protocol. While we will also engage in sponsor, protocol, and investor outreach programs outside of these incentives, this program is a nice way to allow anyone on the Internet interested in being a sponsor or investor an extra incentive for participating without needing to be directly contacted by an outreach program.

### Technical Specification

<!--The technical specification should outline the public API of the changes proposed. That is, changes to any of the interfaces Synthetix currently exposes or the creations of new ones.-->

N/A

### Test Cases

<!--Test cases for an implementation are mandatory for AELIPs but can be included with the implementation..-->

N/A

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
