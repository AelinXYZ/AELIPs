---
aelip: 47
network: All networks
title: Remove decimal restrictions
status: Implemented
author: Alex the Bored Ape (@AlexTheBoredApe)
Release: n/a
Implementor: Alex the Bored Ape (@AlexTheBoredApe)
created: 04-05-2023
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Simply describe the outcome the proposed changes intends to achieve. This should be non-technical and accessible to a casual community member.-->

This AELIP proposes to remove a single require statement in AelinUpFrontDeal.sol which required the deal token to be at least the same amount of decimals as the investment token. this was put in to avoid some precision loss but it is unnecessary for the deals to work properly. As we have a deal coming with 2 decimals in the deal token it is time to remove this restriction.

## Abstract

<!--A short (~200 word) description of the proposed change, the abstract should clearly describe the proposed change. This is what *will* be done if the AELIP is implemented, not *why* it should be done or *how* it will be done. If the AELIP proposes deploying a new contract, write, "we propose to deploy a new contract that will do x".-->

converting 1 token to another can lead to precision loss depending on how the decimals are working. Precision loss may leave a small amount of dust in the contracts but does not break the logic. the proposal is to remove a restriction forcing deal tokens to have at least as many decimals as the investment tokens.

## Motivation

<!--This is the problem statement. This is the *why* of the AELIP. It should clearly explain *why* the current state of the protocol is inadequate.  It is critical that you explain *why* the change is needed, if the AELIP proposes changing how something is calculated, you must address *why* the current calculation is inaccurate or wrong. This is not the place to describe how the AELIP will address the issue!-->

This AELIP aims to support an upcoming Aelin UpFrontDeal

## Specification

### Overview

<!--This is a high-level overview of *how* the AELIP will solve the problem. The overview should clearly describe how the new feature will be implemented.-->

A single require statement will be removed

### Rationale

<!--This is where you explain the reasoning behind how you propose to solve the problem. Why did you propose to implement the change in this way, what were the considerations and trade-offs. The rationale fleshes out what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->

To support more projects looking to raise on Aelin.

### Technical Specification

<!--The technical specification should outline the public API of the changes proposed. That is, changes to any of the interfaces Synthetix currently exposes or the creations of new ones.-->

Removing a single require line and anothe line which created a variable that is used only in the require statement.

### Test Cases

<!--Test cases for an implementation are mandatory for AELIPs but can be included with the implementation..-->

N/A

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
