---
aelip: 27
network: Optimism
title: SNX staker aidrop claim termination
status: Draft
author: AlexTheBoredApe (@AlexTheBoredApe)
Release: n/a
Implementor: n/a
created: 07-08-2022
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Simply describe the outcome the proposed changes intends to achieve. This should be non-technical and accessible to a casual community member.-->

This AELIP proposes to cut off SNX stakers ability to claim Aelin from the initial distribution upon passage of this AELIP. It has been over 6 months, providing plenty of time for stakers to claim. The program will be ended and all unclaimed AELIN will go back to the treasury.

## Abstract

<!--A short (~200 word) description of the proposed change, the abstract should clearly describe the proposed change. This is what *will* be done if the AELIP is implemented, not *why* it should be done or *how* it will be done. If the AELIP proposes deploying a new contract, write, "we propose to deploy a new contract that will do x".-->

Upon passage of this AELIP, the treasury will destruct the merkle tree contract distributing vAELIN back to the treasury and use the vAELIN to claim all the remaining AELIN tokens.

## Motivation

<!--This is the problem statement. This is the *why* of the AELIP. It should clearly explain *why* the current state of the protocol is inadequate.  It is critical that you explain *why* the change is needed, if the AELIP proposes changing how something is calculated, you must address *why* the current calculation is inaccurate or wrong. This is not the place to describe how the AELIP will address the issue!-->

AELIN distribution was an award for SNX stakers. The claim period has been open for over 6 months. Anyone who has failed to claim in this period is not paying attention and will no longer be able to claim the AELIN moving forward.

## Specification

### Overview

<!--This is a high-level overview of *how* the AELIP will solve the problem. The overview should clearly describe how the new feature will be implemented.-->

If this AELIP gets approved, the treasury council will immediately destruct the vAELIN merkle contract and use the remaining vAELIN to claim the remaining AELIN distribution.

### Rationale

<!--This is where you explain the reasoning behind how you propose to solve the problem. Why did you propose to implement the change in this way, what were the considerations and trade-offs. The rationale fleshes out what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->

Active participants in the Synthetix ecosystem have already claimed their AELIN and been rewarded. Those who have not paid attention to Aelin Protocol over the past 6 months will no longer be able to claim their distribution.

### Technical Specification

<!--The technical specification should outline the public API of the changes proposed. That is, changes to any of the interfaces Aelin currently exposes or the creations of new ones.-->

N/A

### Test Cases

<!--Test cases for an implementation are mandatory for AELIPs but can be included with the implementation..-->

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
