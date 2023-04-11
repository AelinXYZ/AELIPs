---
aelip: 50
network: All networks
title: AELIN Token Update
status: Draft
author: cb0x (@cb0x), Ser Link (@S3rLink), Alex the Bored Ape (@AlexTheBoredApe)
Release: n/a
Implementor: cb0x (@cb0x)
created: 04/11/2023
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Simply describe the outcome the proposed changes intends to achieve. This should be non-technical and accessible to a casual community member.-->

The proposed AELIP aims to introduce a new AELIN ERC20 token while deprecating the current one. AELIN token holders will be able to exchange their old AELIN for the new one without any time restrictions. This token will be deployed on Optimism and bridgeable to Ethereum, Arbitrum and Polygon exactly like the current token.

## Abstract

<!--A short (~200 word) description of the proposed change, the abstract should clearly describe the proposed change. This is what *will* be done if the AELIP is implemented, not *why* it should be done or *how* it will be done. If the AELIP proposes deploying a new contract, write, "we propose to deploy a new contract that will do x".-->

The new AELIN token is designed to address some of the limitations of the current token. The new token will have a supply of 10 million tokens, which means current token holders will be able to swap their old token for the new one at a rate of 1 for 2,000.

Additionally, the new token will support an inflationary mechanism which could be used to reward users for participating in the network and contributing to its growth. It’s important to note that the inflation rate will be set to 0 at the launch. This parameter could be changed via AELIP, if needed.

Additionally, the initial tokenomics were not sustainable since the majority was earmarked for inflation while only 5% of the token supply was allocated to the DAO and CCs in total. After inflation was turned off it was clear that the DAO, which holds the majority of tokens, needed to restructure the token allocations and make it clear how they will be used. Furthermore, the CC allocations are under market compensation and need to be increased in order to retain CCs and continue developing the protocol. A formal restructuring of all the token allocation buckets is included in this AELIP.

## Motivation

<!--This is the problem statement. This is the *why* of the AELIP. It should clearly explain *why* the current state of the protocol is inadequate.  It is critical that you explain *why* the change is needed, if the AELIP proposes changing how something is calculated, you must address *why* the current calculation is inaccurate or wrong. This is not the place to describe how the AELIP will address the issue!-->

The current token supply of 5,000 was decided during the last bull cycle as a humorous "meme supply" by its initial founder, but it has proven to be less than ideal for the long-term growth and development of the Aelin protocol. The low token supply creates a perception of high token value, which can discourage potential investors from buying the tokens, assuming that they are already too expensive. This could create a bias in the market and limit the potential for wider adoption and growth of the Aelin ecosystem. Therefore, introducing a new token with a larger supply is necessary to address these issues and provide a more flexible and sustainable tokenomics model for the Aelin protocol.

Since a token swap is necessary to address the current limitations of the token, it makes sense to introduce a new token that is compatible with inflation. Even if inflation is not immediately implemented, having the option available for the future provides flexibility for the Aelin protocol and its tokenomics. This ensures that the Aelin ecosystem can adapt to changing market conditions and continue to provide value to its users over the long term.

### Token Allocations

The following allocation are proposed for the new AELIN token with a supply of 10M tokens:
Community treasury: 38%
Core contributors: 20%
Second AELIN raise: 16.8%
SNX stakers: 15%
Bribes, LM, Council Stipend: 5.2%
First AELIN raise: 5%

When AELIP #3 was proposed in the initial tokenomics, only 5% of the token supply was allocated to the DAO and core contributors, it did not contemplate a developer DAO, competitive market compensation, the need to pivot or even to hire additional core contributors. Over the past year, Aelin has had to pivot significantly from the initial roadmap which intended for Aelin to be a very simple protocol. Aelin has continued to innovate and will be adding a new product that has the potential to find immediate product market fit.

This AELIP is frontrunning our expected product market fit so growth is not slowed by the inability to incentivize our products, external developers, bring on new core contributors, and ensure continuity by locking down current core contributors with competitive token packages. While 20% of the AELIN tokens are being reserved by this protocol, all allocations of tokens still must be approved by the Aelin council. All core contributor tokens will be eligible to be staked across all networks.

<img src="/allocations.png"  width="650" height="350">

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

Creating and launching a new token for AELIN is a relatively straightforward process. It involves developing a new token following the ERC20 standard, along with additional features such as the ability to enable and disable inflation. The token swap will be orchestrated through another smart contract that will facilitate the exchange of the new token with the current one.

### Rationale

<!--This is where you explain the reasoning behind how you propose to solve the problem. Why did you propose to implement the change in this way, what were the considerations and trade-offs. The rationale fleshes out what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->

Unfortunately, there were limited options available to address the token supply issue with the current AELIN token. The only viable option was to leave the token as it is and not create a new one. However, since it is relatively easy to create an ERC20 token and since organizing a token swap is not a major friction point for the users, the introduction of a new token seems to be the most pertinent idea.

While the inflation feature was not the primary motivation for the creation of the AELIP, it was seen as a bonus that would provide additional flexibility for the protocol in the future.

### Technical Specification

<!--The technical specification should outline the public API of the changes proposed. That is, changes to any of the interfaces Synthetix currently exposes or the creations of new ones.-->

Two smarts contracts will be deployed:

The first one being the new AELIN token, which will be an ERC20 with a 10M token supply and additional functions, allowing the contract to inflate the supply.

To do so, a few parameters could be used:

`INFLATION_RATE`: the rate of inflation per second
`INFLATION_PERIOD`: the duration of each inflation period
`lastInflationTime`: variable to keep track of when the last inflation occurred

These parameters could be easily updated through an AELIP or an ACCP.
An `inflate` function will also be added which by using the parameters listed above, will be able to mint the new tokens.

The second contract will be used to do the token swap. Treasury will send the new AELIN to this contract and AELIN holders will use a `swap` function to convert their old AELIN to the new one. This function will basically distribute the new AELIN at a 1 for 2,000 ratio and keep (or burn) the old tokens.

### Test Cases

<!--Test cases for an implementation are mandatory for AELIPs but can be included with the implementation..-->

N/A

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
