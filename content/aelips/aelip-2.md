---
aelip: 2
network: Ethereum & Optimism
title: AELIN Council
status: Implemented
author: Alex the Bored Ape (@AlexTheBoredApe)
Release: n/a
Implementor: n/a
created: 2021-12-14
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Simply describe the outcome the proposed changes intends to achieve. This should be non-technical and accessible to a casual community member.-->

This AELIP proposes to formalise the election process, powers, responsibilities, and procedures of the Aelin Council.

## Abstract

<!--A short (~200 word) description of the proposed change, the abstract should clearly describe the proposed change. This is what *will* be done if the AELIP is implemented, not *why* it should be done or *how* it will be done. If the AELIP proposes deploying a new contract, write, "we propose to deploy a new contract that will do x".-->

The Aelin Council is the governing body of the Aelin Protocol. The Interim Aelin Council was elected by SNX holders as per Synthetix Improvement Proposal 180. This AELIP specifies the process for AELIN token holders to elect The Aelin Council. The Council consists of 5 members who are voted in by $AELIN token holders for an epoch lasting 3 months. The Aelin Council is responsible for managing the protocol treasury, paying core contributors and third party auditors/ developers, and voting on community, protocol and governance related proposals. Each Council member will receive a monthly stipend of 0.2 $AELIN at the end of each month of service.

## Motivation

<!--This is the problem statement. This is the *why* of the AELIP. It should clearly explain *why* the current state of the protocol is inadequate.  It is critical that you explain *why* the change is needed, if the AELIP proposes changing how something is calculated, you must address *why* the current calculation is inaccurate or wrong. This is not the place to describe how the AELIP will address the issue!-->

The initial Aelin Council was created by a vote from Synthetix stakers. This allowed the Aelin Protocol to emerge from a legitimately decentralized governance framework. However, moving forward, due to the importance of the Aelin Council a more concrete set of rules and responsibilities needs to be drafted to ensure protocol stability. This AELIP seeks to provide guidance and rules for the Council to ensure stability to protocol governance over time.

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

The Aelin Council is necessary in order to ensure protocol development continues, the treasury is managed properly, and the greater community is actively being engaged. The Aelin Council is a body of 5 members elected by $AELIN token holders using snapshot. Only staked $AELIN (single token $AELIN staking contract, aka pool 1) and $AELIN staked in LP tokens ($AELIN-$ETH, aka pool 2) will be allowed to vote. The number of $AELIN tokens in the staked LP tokens will be calculated at the time of the snapshot which will be taken in the week before a vote.

Elections will happen every 3 months. In advance of an election, an interested party can post their bio along with their Ethereum address in Discord to be added to the next snapshot vote. New candidate nominations can be put forward up to 48 hours in advance of an election. The top 5 candidates from each election will serve on the Aelin Council for the next 3 months. Should a member need to leave the Council for personal or health reasons or for failing to perform Council duties, the candidate with the next highest number of votes in the election will replace them; if there are no available candidates from the prior election a new snapshot will be created for the community to vote on a replacement.

Council members are required to attend weekly meetings and actively engage with the community and other Council members about protocol development on Discord.

**Treasury Management**

Aelin Council will manage community treasury funds for the long term benefit of the protocol. These funds will be used for ecosystem incentives and inflationary rewards, to pay core contributors, external developers/ auditors, and Council stipends. The Council may launch Aelin pools to diversify treasury assets at their discretion. The Council will initially hold the fee pool on behalf of the community until AELIN staking is enabled. The treasury will be managed by a multisig voting mechanism. A supermajority of Council seats (N) `(N/2 + 1 - if N is even or to Ceiling(N/2) - if N is odd)` is the required number for a decision to reach consensus.

**Proposal Voting**

When an AELIP is in the "AC Review Pending" state, it will be discussed in the Council's weekly call. Each member is expected to participate in the voting process for each AELIP once it enters the "Vote Pending" state. A supermajority of Council seats (N) `(N/2 + 1 - if N is even or to Ceiling(N/2) - if N is odd)` is the required number for a decision to reach consensus. Once the “Vote Pending” state has commenced, Council members will have no more than one week to vote on any single proposal.

**Meta governance**

Any AELIPs proposed pertinent to the Council operations and governance that are meant to go into effect within the current 3 month epoch will need unanimous approval from all Council members to go into effect. AELIPs impacting Council operations which go into effect in the following epoch only require a supermajority.

### Rationale

<!--This is where you explain the reasoning behind how you propose to solve the problem. Why did you propose to implement the change in this way, what were the considerations and trade-offs. The rationale fleshes out what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->

### Technical Specification

<!--The technical specification should outline the public API of the changes proposed. That is, changes to any of the interfaces Synthetix currently exposes or the creations of new ones.-->

### Test Cases

<!--Test cases for an implementation are mandatory for AELIPs but can be included with the implementation..-->

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
