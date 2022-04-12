---
aelip: 15
network: Ethereum & Optimism
title: NFT collection whitelist
status: Draft
author: Alex the Bored Ape and cb0x (@AlexTheBoredApe) (@cb0x)
Release: n/a
Implementor: n/a
created: 04-08-2022
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Simply describe the outcome the proposed changes intends to achieve. This should be non-technical and accessible to a casual community member.-->

This AELIP proposes to add the ability to create pools which only non-fungible token (NFT) collections may access. Instead of a size-limited address-based whitelist or a deal that is open to the public, sponsors may now create pools specifically for one or multiple NFT collections.

## Abstract

<!--A short (~200 word) description of the proposed change, the abstract should clearly describe the proposed change. This is what *will* be done if the AELIP is implemented, not *why* it should be done or *how* it will be done. If the AELIP proposes deploying a new contract, write, "we propose to deploy a new contract that will do x".-->

The purpose of Aelin protocol is to allow protocols to raise money from the community instead of a small number of VCs. However, which community are you raising from when using Aelin? The answer is not always clear. Allocating deal tokens to holders of specific NFT collections will allow protocols and DAOs to target a very specific and large group of investors, which can improve the process of building and growing their own community.

Sponsors may allow each wallet holding a qualified NFT to deposit an unlimited amount of Investment tokens, a certain amount of Investment tokens per wallet or a certain amount of Investment tokens per qualified NFT held.

## Motivation

<!--This is the problem statement. This is the *why* of the AELIP. It should clearly explain *why* the current state of the protocol is inadequate.  It is critical that you explain *why* the change is needed, if the AELIP proposes changing how something is calculated, you must address *why* the current calculation is inaccurate or wrong. This is not the place to describe how the AELIP will address the issue!-->

NFT projects and communities are viral in their behavior. When a project launches a successful collection, innovates on intellectual property in clever ways, creates a novel token, or builds an open virtual world, others look to copy this successful outcome. By serving NFT communities, Aelin is hoping to start a new trend of protocols providing seed deals to these communities.

## Specification

### Overview

<!--This is a high-level overview of *how* the AELIP will solve the problem. The overview should clearly describe how the new feature will be implemented.-->

In order to achieve the functionality outlined in this AELIP the contracts will need some additional logic in order to allow a sponsor to add one or multiple NFT collections and their allocation rule when creating a pool.

### Rationale

<!--This is where you explain the reasoning behind how you propose to solve the problem. Why did you propose to implement the change in this way, what were the considerations and trade-offs. The rationale fleshes out what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->

Aelin protocol is a reflexive system. The more deals on the platform, the more investors will come, which will increase the number of people willing to join the ecosystem to sponsor and find deals to make with protocols.

With the update of v1 website and the creation of the pool incentives AELIP, it has been clear that Aelin still needs to find a mechanism to bootstrap this reflexivity and kick start the protocol to the next level of growth.

### Technical Specification

<!--The technical specification should outline the public API of the changes proposed. That is, changes to any of the interfaces Synthetix currently exposes or the creations of new ones.-->

In the createPool method called by a sponsor, there will be an array of NFT structs passed into the method as a single argument, which defines which collections can access the pool and the Investment token rules for each collection.

When an Investor calls the purchasePoolTokens method on the contract, the function will loop over all the structs and determine if this is a NFT deal and how many Investment tokens the investor may deposit. There are 3 potential rules that may be created for an investor holding a NFT:

1. Sponsors may allow each wallet holding a qualified NFT to deposit an unlimited amount of Investment tokens
2. a certain amount of Investment tokens per wallet
3. a certain amount of Investment tokens per qualified NFT held

Under scenario 1, any investor holding a qualified NFT may participate in the pool but the NFT they participate with is blacklisted after the deposit event. IF an investor holds multiple NFTs they must select which one they want to use before a deposit event. The remaining NFTs they hold remain eligible for participating in the deal.

Under scenario 2, an investor has access to a specific allocation and all the tokens in their wallet will be blacklisted at the end of the transaction. If the investor wishes to have a higher allocation they must split the NFTs between multiple wallets before participating in the deal.

Under scenario 3, an investor gets a specific allocation per NFT held. Each time they participate they must select the NFTs they are using for their allocation and they may invest up to the allocation per NFT times the amount of NFTs they hold. At the end of a transaction the contract will blacklist each NFT they have minted against even if they have not used their full allocation for that NFT.

For blacklisted NFTs, Aelin contracts will track which NFTs they have minted against so if anyone aims to use the same ones on a different address it can be blocked. The remaining rules of the Aelin pool function as normal.

Additionally, an event must be fired when the createPool method is called by a sponsor for every NFT struct passed. This will allow the subgraph to read the rules of the NFT collections and makes it easier for the clients to show which NFT projects are able to access a pool and how much the rules of the pool.

### Test Cases

<!--Test cases for an implementation are mandatory for AELIPs but can be included with the implementation..-->

TBD

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
