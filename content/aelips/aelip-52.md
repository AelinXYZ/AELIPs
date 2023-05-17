---
aelip: 52
network: All networks
title: POAP support for NFT gated deals
status: Draft
author: cb0x (@0xcdb)
Release: n/a
Implementor: n/a
created: 05-17-2023
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Simply describe the outcome the proposed changes intends to achieve. This should be non-technical and accessible to a casual community member.-->

This AELIP proposes to add POAP support for NFT gated deals by allowing users to add multiple ID ranges for a collection.

## Abstract

<!--A short (~200 word) description of the proposed change, the abstract should clearly describe the proposed change. This is what *will* be done if the AELIP is implemented, not *why* it should be done or *how* it will be done. If the AELIP proposes deploying a new contract, write, "we propose to deploy a new contract that will do x".-->

POAP tokens follow the ERC721 standard, which allows each token to be uniquely identified by an ID. However, given that multiple identical POAPs are typically minted for a single event, a range of IDs needs to be defined in order to target specific events for an NFT gated deal.

The logic of the NFT gated deal will be enhanced to allow for the specification of multiple ID ranges. This will empower the pool creator with the ability to whitelist several events within the same deal.

## Motivation

<!--This is the problem statement. This is the *why* of the AELIP. It should clearly explain *why* the current state of the protocol is inadequate.  It is critical that you explain *why* the change is needed, if the AELIP proposes changing how something is calculated, you must address *why* the current calculation is inaccurate or wrong. This is not the place to describe how the AELIP will address the issue!-->

Incorporating POAP support into NFT gated deals can enhance community engagement by recognizing and rewarding participation in specific events.

This AELIP not only paves the way for POAP integration into NFT gated deals but also extends its scope to encompass any ERC721 collection. This proposed feature is designed to recognize and handle varying traits or attributes associated with the ID range. Therefore, it's not just limited to POAP tokens, but has the potential to support any ERC721-based collection.

## Specification

### Overview

<!--This is a high-level overview of *how* the AELIP will solve the problem. The overview should clearly describe how the new feature will be implemented.-->

The NFT gated deal logic will be updated in order to support the addition of ID ranges to an NFT collection. This will apply to both pools and direct deals.

### Rationale

<!--This is where you explain the reasoning behind how you propose to solve the problem. Why did you propose to implement the change in this way, what were the considerations and trade-offs. The rationale fleshes out what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->

While it would have been possible to use distinct attributes of POAP tokens, such as the event ID, the goal of this AELIP was to avoid confining the new feature exclusively to POAPs. As a result, a universally shared property among all ERC721 tokens - the token ID - was chosen for implementation. Moreover, the provision to specify diverse ranges of these IDs was incorporated.

This approach ensures that the new feature can accommodate any ERC721 tokens and not only POAPs.

### Technical Specification

<!--The technical specification should outline the public API of the changes proposed. That is, changes to any of the interfaces Synthetix currently exposes or the creations of new ones.-->

An ID range could be define in a solidity struct:

```
    struct IdRange {
        uint256 begin;
        uint256 end;
    }
```

`AelinNftGating.sol` and `AelinPool.sol` will both require changes. For every collection passed to a pool/deal, the logic will check if whether or not a collection includes a range. If so, only users owning NFTs of this collection with IDs within the specified range will be allowed to invest. If not, the transaction will revert.

### Test Cases

<!--Test cases for an implementation are mandatory for AELIPs but can be included with the implementation..-->

N/A

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
