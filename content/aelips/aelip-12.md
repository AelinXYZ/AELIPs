---
aelip: 12
network: Ethereum & Optimism
title: Treasury Management
status: Implemented
author: calavera
Release: n/a
Implementor: n/a
created: 03-09-2022
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Simply describe the outcome the proposed changes intends to achieve. This should be non-technical and accessible to a casual community member.-->

This AELIP proposes to formalise rules for usage and changes to AELIN’s Treasury. This AELIP is an improvement over currently approved AELIP-2, section “Treasury Management”

## Abstract

<!--A short (~200 word) description of the proposed change, the abstract should clearly describe the proposed change. This is what *will* be done if the AELIP is implemented, not *why* it should be done or *how* it will be done. If the AELIP proposes deploying a new contract, write, "we propose to deploy a new contract that will do x".-->

The Aelin Treasury Policy will allow the Aelin Council to have predefined rules to execute various types of transactions needed for the operations of the protocol without having to submit a AELIP.
As well, it will allow the Aelin Council to diversify and invest the Treasury in diverse asset classes to ensure the long term benefit of the protocol and a healthy & active Treasury.

## Motivation

<!--This is the problem statement. This is the *why* of the AELIP. It should clearly explain *why* the current state of the protocol is inadequate.  It is critical that you explain *why* the change is needed, if the AELIP proposes changing how something is calculated, you must address *why* the current calculation is inaccurate or wrong. This is not the place to describe how the AELIP will address the issue!-->

The Aelin Council is the governing body of the Aelin Protocol which also holds the Aelin Treasury on a multisig on the Optimism network. Given the power the Aelin Council has over the Treasury a more concrete set of rules needs to be agreed on to ensure protocol stability and also flexibility to take decisions for continuous operation of the protocol.

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

**Aelin Treasury Policy**

1. The Treasury will be managed by a multisig voting mechanism. A supermajority of Aelin Council seats (N) `(N/2 + 1 - if N is even or to Ceiling(N/2) - if N is odd)` is the required number for a decision to reach consensus.
2. The Aelin Council must work together with the Core Contributors to produce Treasury Reports on at least Quarterly basis and present to the Community for discussion
3. The Aelin Council does not need to create new AELIPs as long as the transaction is allowed by this AELIP
4. The Aelin Council is allowed to create new AELIPs to amend or change the rules set in this AELIP
5. The Aelin Council is allowed to execute transactions for protocol operations such as:
   - necessary payments (ex. 3rd parties),
   - recurrent payments (ex. salaries & contractors),
   - transferring funds to contracts (ex. ecosystem incentives and inflationary rewards),
   - refunding deployment and transaction costs to Aelin Council members and Core Contributors,
   - vesting of tokens to Core and Early Contributors
6. The Aelin Council is allowed to make changes to the Treasury distribution, such as:
   - acquire & swap assets
   - move assets to other networks provided there is a multisig owned by the Aelin Council
   - invest into Liquidity Pools, Yield Farms and similar protocols
   - invest into other DAOs
7. The Aelin Council is allowed to launch future Aelin pools to diversify & increase treasury assets
8. The Aelin Council will initially hold the 2% fee from completed Aelin Pools on behalf of the community until AELIN staking and fee distribution is enabled

### Rationale

<!--This is where you explain the reasoning behind how you propose to solve the problem. Why did you propose to implement the change in this way, what were the considerations and trade-offs. The rationale fleshes out what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->

N/A

### Technical Specification

<!--The technical specification should outline the public API of the changes proposed. That is, changes to any of the interfaces Synthetix currently exposes or the creations of new ones.-->

N/A

### Test Cases

<!--Test cases for an implementation are mandatory for AELIPs but can be included with the implementation..-->

N/A

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
