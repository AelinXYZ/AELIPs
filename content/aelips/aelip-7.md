---
aelip: 7
network: Ethereum & Optimism
title: Transfer Updates
status: Draft
author: Alex the Bored Ape (@AlexTheBoredApe)
Release: Thranduil
Implementor: Alex the Bored Ape (@AlexTheBoredApe)
created: 2021-01-12
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Simply describe the outcome the proposed changes intends to achieve. This should be non-technical and accessible to a casual community member.-->

Since pool tokens and deal tokens are wrapped ERC20 versions of the purchase currency and vesting underlying deal token contracts respectively, they may be transferred per the ERC20 standard. However, these are not typical ERC20 tokens and need to be managed carefully.

This AELIP addresses changes to the pool and deal contracts transfer methods to protect purchasers while further exploration is made for future factory contracts.

Additionally, a helper transfer method for the treasury only that is not needed will be removed in this AELIP.

## Abstract

<!--A short (~200 word) description of the proposed change, the abstract should clearly describe the proposed change. This is what *will* be done if the AELIP is implemented, not *why* it should be done or *how* it will be done. If the AELIP proposes deploying a new contract, write, "we propose to deploy a new contract that will do x".-->

Pool token transfer issues will be resolved by removing all restrictions although this means anyone buying them after the redemption window for a premium will not have access to the deal and will have to withdraw them for the purchase currency.

Deal token transfers will be blocked due to issues with claiming math and the incompatibility with the current logic if they are put into contracts and AMMs. This will be researched and udpated in future factory contracts.

Additionally, a helper transfer method for the treasury only that makes it easier to send out deal fees that is not needed will be removed in this AELIP.

## Motivation

<!--This is the problem statement. This is the *why* of the AELIP. It should clearly explain *why* the current state of the protocol is inadequate.  It is critical that you explain *why* the change is needed, if the AELIP proposes changing how something is calculated, you must address *why* the current calculation is inaccurate or wrong. This is not the place to describe how the AELIP will address the issue!-->

As Aelin Protocol gets more popular there is a natural inclination for those who miss out on the purchase windows to speculate by buying the pool tokens at a premium for access to a deal or for holders wishing to exit their position to sell at a loss as well. There are many reasons to trade pool tokens.

Additionally, since deal tokens represent vesting schedules the ability to trade them for early liquidity on deals in advance of the vesting contract conclusion is very appealing to holders of the deal tokens who do not want to wait the full vesting period for an exit.

However, due to the fact that pool and deal tokens are not typical ERC20s, careful thought needs to be put into the transfer process so the system works as intended for purchasers and deal token holders. At the moment pool trading will be allowed but deal trading will not be allowed until a new suite of factory contracts are deployed with different claiming logic that will enable transfers.

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

For pool tokens currently you are unable to transfer them after a deal has been created. The intent is to force purchaser to accept the deal or withdraw to their purchase currency at this point in time; however, any pool tokens sitting in a contract, such as an AMM, will not be transferrable, locking them once a deal is created. The solution for pool tokens is to enable transfer at ant point in time. However, anyone receiving them after the redemption window ends will be forced to withdraw them for the underlying purchase currency.

For deal tokens, at the moment you are allowed to transfer them freely until you have vested all your tokens. Due to the deal tokens being wrapped vesting schedules, when you transfer a deal token it triggers a claim of the underlying to that point in time for both the sender and recipient; this maintains the vesting math on both sides up to and after that point in time.

At the end of the vesting period you may not transfer any deal tokens because all your deal tokens are auto claimed, so there will not be any tokens to receive. The underlying deal tokens will be claimed by the sender and then the recipient will not receive anything. Putting deal tokens in AMMs will have an issue as they will be claiming the underlying deal tokens during transfers. The interim solution for deal tokens is to block transfers while more research is done around creating a new formula for transferring and claiming that allows for transfers to work with AMMs or a custom AMM and to protect holders from mistakes causing loss of funds.

Additionally, this AELIP removes an additional function added to make it easier for the treasury to transfer deal fees, since they are early custodians while automated staking is being worked on. this method is in fact not needed due to the ability to use a MultiCall contract to reduce the friction of performing many transactions.

### Rationale

<!--This is where you explain the reasoning behind how you propose to solve the problem. Why did you propose to implement the change in this way, what were the considerations and trade-offs. The rationale fleshes out what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->

For the pool tokens there were two potential options. First, we could block transfers, second, we could enable transfers after the redemption period starts and anyone purchasing or receiving these tokens will need to be aware that they are only going to be able to receive the underlying purchase currency at this point in time. It is deemed an acceptable tradeoff that anyone receiving their pool tokens after the redemption window can only use them to withdraw the underlying purchase currency. This allows for speculation around pool tokens.

On the deal token side due to the complexity around vesting schedules and claiming a new system will be devised that will allow for the safe handling of transfers and the ability for holders to obtain early liquidity. However, this is a complex issue and we need to block transfers since there is an issue with using AMMs with the current system. There is simply not enough time to implement a more effective system at this point in time, but new factories will be deployed with an update on this in the future after the topic is researched more extensively and another AELIP is proposed.

### Technical Specification

<!--The technical specification should outline the public API of the changes proposed. That is, changes to any of the interfaces Synthetix currently exposes or the creations of new ones.-->

The changes on the pool contract are the removal of the `transferWindow` modifier that restricts transfers of pool tokens after the redemption window starts. this now allows people to transfer pool tokens at any time, even if they may only be redeemed for the underlying purchase currency and not accepted for a deal.

Also on the pool contract, the treasury address is no longer being passed to the deal contract since we are removing a special transfer helper that the treasury will not be using.

The changes on the deal contract are a new modified that blocks all transfers. Additionally, the helper function for the treasury that is not needed is being removed.

### Test Cases

<!--Test cases for an implementation are mandatory for AELIPs but can be included with the implementation..-->

Tests will be implemented in the Aelin contracts repo

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
