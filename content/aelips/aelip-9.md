---
aelip: 9
network: Ethereum
title: Balancer + AELIN/ETH Pool 2 on Ethereum L1
status: Implemented
author: Alex the Bored Ape (@AlexTheBoredApe)
Release: Nuada
Implementor: n/a
created: 2021-01-31
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Simply describe the outcome the proposed changes intends to achieve. This should be non-technical and accessible to a casual community member.-->

This AELIP proposes to create an AELIN/ETH pool 2 on Ethereum L1 that will emit 50 AELIN tokens over the first 30 days, followed by 25 AELIN tokens over the next 30 days and another 25 AELIN tokens over the final 30 days for a total incenvtive period of 90 days.

It also proposes to update the plans outlined in AELIP-3 for the Balancer pool on Ethereum L1 to emit 150 AELIN tokens over 90 days to a pool consisting of SNX-AAVE-CRV-BAL-GRT-YFI-LINK-UNI.

## Abstract

<!--A short (~200 word) description of the proposed change, the abstract should clearly describe the proposed change. This is what *will* be done if the AELIP is implemented, not *why* it should be done or *how* it will be done. If the AELIP proposes deploying a new contract, write, "we propose to deploy a new contract that will do x".-->

This AELIP proposes to create a new pool 2 on Ethereum L1 and to update the plans outlined in AELIP-3 for the Balancer pool on Ethereum L1 as well.

There will be 150 AELIN emitted to the Balancer pool over 90 days instead of the 250 AELIN tokens emitted over 2 weeks in AELIP-3. The tokens in the Balancer pool will be SNX-AAVE-CRV-BAL-GRT-YFI-LINK-UNI.

The 100 AELIN tokens withheld from the Balancer pool will be applied to an AELIN/ETH pool 2 on Ethereum L1. The 100 AELIN tokens will be emitted over 90 days. The first 30 days will emit 50 AELIN tokens and the final 60 days will emit the other 50 AELIN.

## Motivation

<!--This is the problem statement. This is the *why* of the AELIP. It should clearly explain *why* the current state of the protocol is inadequate.  It is critical that you explain *why* the change is needed, if the AELIP proposes changing how something is calculated, you must address *why* the current calculation is inaccurate or wrong. This is not the place to describe how the AELIP will address the issue!-->

On February 3rd a vAELIN to AELIN conversion contract will be coming online, unlocking a significant amount of AELIN tokens distributed to SNX stakers. The goal of the AELIN/ETH pool 2 on Ethereum L1 is to entice SNX stakers to provide liquidity with their released AELIN tokens. 100 AELIN tokens will be allocated to this pool 2.

Additionally, the aim of the Balancer pool is to distribute AELIN tokens to a wider community. By including token holders from the following 8 communities: SNX-AAVE-CRV-BAL-GRT-YFI-LINK-UNI the community of AELIN holders will increase.

Since the AELIN token is already trading at a higher price than when AELIP-3 was passed, it makes sense to reduce the Balancer pool amount by 100 AELIN tokens which will be applied to the pool 2 on Ethereum L1 instead to improve AELIN liquidity.

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

###### AELIN/ETH Pool 2:

On the Optimism network at Feb 3rd → 8am ANZ, 1pm PT, 10pm CET a vAELIN to AELIN conversion contract will be deployed. This contract will allow vAELIN holders to claim their AELIN with no vesting period and will dramatically increase the number of AELIN in circulation.

Approximately one hour after this contract is deployed (at Feb 3rd → 9am ANZ, 2pm PT, 11pm CET) a pool 2 of AELIN/ETH on Ethereum L1 will start emitting 50 AELIN over a 30 day period to those who stake their LP tokens. After this initial 30 day period the pool 2 will continue to emit 25 AELIN per 30 days for another 60 days for a total incentivized period of 90 days.

###### Balancer:

On Ethereum L1 Balancer, a pool consisting of SNX-AAVE-CRV-BAL-GRT-YFI-LINK-UNI will be created followed by a 48 hour period for anyone who wants to enter the pool and stake their Balancer Pool Token (BPT). After the 48 hour period is over, AELIN rewards will start emitting at a rate of 50 AELIN per 30 days over a 90 day period for a total of 150 AELIN.

### Rationale

<!--This is where you explain the reasoning behind how you propose to solve the problem. Why did you propose to implement the change in this way, what were the considerations and trade-offs. The rationale fleshes out what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->

The thought behind is this AELIP is to remain true to the intent of the original AELIP-3 but also take into account AELIN is more valuable when the Balancer pool was originally planned. Balancer not being live on the Optimism network made sticking to AELIP-3 difficult.

By moving 100 AELIN over to a pool 2 we can maintain the original intent of AELIP-3 and also use a portion of the extra funds to increase liquidity for the AELIN token.

### Technical Specification

<!--The technical specification should outline the public API of the changes proposed. That is, changes to any of the interfaces Aelin currently exposes or the creations of new ones.-->

n/a

### Test Cases

<!--Test cases for an implementation are mandatory for AELIPs but can be included with the implementation..-->

n/a

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
