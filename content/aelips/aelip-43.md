---
aelip: 43
network: N/A
title: Establish a DevDAO
status: Implemented
author: Ser Link (@S3rLink), Saeta (@saeta-eth)
Release: n/a
Implementor: n/a
created: 02-12-2023
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Simply describe the outcome the proposed changes intends to achieve. This should be non-technical and accessible to a casual community member.-->

This is a proposal to create a structure that allows qualified community members to work alongside the Aelin core contributors and be compensated for their efforts.

## Abstract

<!--A short (~200 word) description of the proposed change, the abstract should clearly describe the proposed change. This is what *will* be done if the AELIP is implemented, not *why* it should be done or *how* it will be done. If the AELIP proposes deploying a new contract, write, "we propose to deploy a new contract that will do x".-->

This AELIP proposes to establish DevDAO which will be a sub-DAO that facilitates the process by which community members contribute to Aelin by means of picking tickets and then being compensated for their work.

## Motivation

<!--This is the problem statement. This is the *why* of the AELIP. It should clearly explain *why* the current state of the protocol is inadequate.  It is critical that you explain *why* the change is needed, if the AELIP proposes changing how something is calculated, you must address *why* the current calculation is inaccurate or wrong. This is not the place to describe how the AELIP will address the issue!-->

As Aelin continues to mature as a protocol, there are an increasing number of ways in which technically inclined community members can contribute to the growth of the protocol which allows core contributors to focus on other tasks to grow the protocol, such as strategy and outreach. This will allow Aelin to increase its technical bandwidth and become more decentralized as additional people will be contributing to the protocol’s codebase.

## Specification

### Overview

<!--This is a high-level overview of *how* the AELIP will solve the problem. The overview should clearly describe how the new feature will be implemented.-->

The DevDAO requires an interface (Discord, Github, etc.) where community developers can monitor open tickets with their associated reward, the core contributors will be responsible for providing a board. A reward would only be given to a community developer in the event that a pull request for a given ticket was evaluated by an auditor and merged by a core contributor.
Community PM: An individual who prepares tickets and handles project management for community-driven initiatives. This individual works directly with core contributors as well as community members to create and manage tickets, assess pull requests, support the Aelin development community, and communicate community needs to core contributors. The Aelin Community PM will receive a compensation package along with core contributor privileges (unless already a core contributor). The Community PM will determine if an AELIP or external audit is required for a ticket to reach the completed phase. Tickets that require an AELIP will be determined by whether they are cosmetic or protocol level changes. Tickets that require external audits will be managed in collaboration with core contributors and the DAO will be responsible for covering audit costs. The Community PM can reserve tickets for individuals if they are confident that the developer can execute on the ticket.

Bounty Hunter: Individuals who take on entry-level tickets.
Aelin Community Dev: Vetted individuals who routinely take on intermediate to advanced tickets. These individuals are eligible for recurring compensation in addition to ticket bounty rewards, adding an element of security to their position. Recurring compensation will be issued by the Treasury Council. As trusted individuals who have proven that they can deliver quality work, higher-level tickets will be reserved for them along with higher tiers of rewards.
Auditors: An auditor will review code prior to it being merged to ensure there are no bugs and that the code meets Aelin community standards. Rewards for auditors will be determined by the Aelin Community PM on a case-by-case basis. Auditors can be trusted community members given the role by the Community PM, Aelin Community Devs who were not responsible for writing the code being audited, or core contributors. For a ticket to pass the auditing phase, both a community auditor and core contributor must have audited and approved the code.
Rewards & Compensation: Compensation will be determined by the Community PM and core contributors prior to the start of the project although revision may occur for significant scope changes. Compensation will primarily be issued in the form of Aelin tokens.

### Rationale

<!--This is where you explain the reasoning behind how you propose to solve the problem. Why did you propose to implement the change in this way, what were the considerations and trade-offs. The rationale fleshes out what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->

Establishing a DevDAO will increase the amount of work that can be completed, increase the decentralization of the protocol, and engage the talented developers in the Aelin community. Aelin reviewed the Kwenta devDAO which was created in early 2022 and modeled Aelin’s version after receiving feedback from Kwenta regarding what worked well and what didn’t.

### Technical Specification

<!--The technical specification should outline the public API of the changes proposed. That is, changes to any of the interfaces Synthetix currently exposes or the creations of new ones.-->

N/A

### Test Cases

<!--Test cases for an implementation are mandatory for AELIPs but can be included with the implementation..-->

N/A

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
