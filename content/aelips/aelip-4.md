---
aelip: 4
network: Ethereum & Optimism
title: Open Redemption Period Bug
status: Implemented
author: Alex the Bored Ape (@AlexTheBoredApe)
Release: Beren
Implementor: Alex the Bored Ape (@AlexTheBoredApe)
created: 2021-12-26
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Simply describe the outcome the proposed changes intends to achieve. This should be non-technical and accessible to a casual community member.-->

A bug has been found in the open redemption period. This AELIP proposes to fix the bug and deploy a new set of factory contracts. It also proposes a plan of action to enable the launch pool to complete successfully despite this bug.

## Abstract

<!--A short (~200 word) description of the proposed change, the abstract should clearly describe the proposed change. This is what *will* be done if the AELIP is implemented, not *why* it should be done or *how* it will be done. If the AELIP proposes deploying a new contract, write, "we propose to deploy a new contract that will do x".-->

The logic in the factory contract will be updated to address a bug in the open redemption period. This will require a deployment of a new set of factory contracts, as the contracts are immutable. This AELIP also proposes to disable the Aelin interface to prevent redemptions and establish an incentive structure to ensure no redemptions are performed on the contract directly during the 24h redemption period.

## Motivation

<!--This is the problem statement. This is the *why* of the AELIP. It should clearly explain *why* the current state of the protocol is inadequate.  It is critical that you explain *why* the change is needed, if the AELIP proposes changing how something is calculated, you must address *why* the current calculation is inaccurate or wrong. This is not the place to describe how the AELIP will address the issue!-->

The bug in the redemption period allows any address to mint an infinite number of deal tokens creating a high likelihood of a single address capturing the entire supply of AELIN in the pool by exploiting this bug.

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

At the start of the redemption period pool tokens can be redeemed for deal tokens. After redeeming in the pro rata period each address is then eligible to redeem in the open period. However, redemptions in the open period are not counted correctly. This means each address can redeem their remaining pool tokens for deal tokens an unlimited number of times, potentially creating an infinite number of deal tokens. This will create a race condition in the redemption period because there will be many deal tokens and only 250 underlying AELIN tokens.

In order to avoid this bug being exploited the following plan is proposed.

1. The Interfaces will be disabled to prevent anyone from accidentally redeeming during the open period.
2. If a single redemption occures directly on the contract the AELIN tokens will be distributed manually by the Aelin Council.
3. In order to disincentivize redemptions directly on the contract, anyone who redeems will get their sUSD back but will receive no AELIN in the subsequent airdrop.

This plan should ensure no one defects and redeems on the contract during the open period in order to attempt to acquire additional AELIN tokens in excess of their original allocation. Because the incentive to defect is high, the punishment for defection must be equally high. The view held by the council is that the threat of being excluded from the subsequent manual AELIN distribution is sufficient to ensure no one redeems on the contract.

### Rationale

<!--This is where you explain the reasoning behind how you propose to solve the problem. Why did you propose to implement the change in this way, what were the considerations and trade-offs. The rationale fleshes out what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->

There were a number of solutions discussed to address this bug. The fundamental question was whether to disclose the bug before the start of the open redemption period or allow the redemption period to proceed. If the bug was not disclosed it created a high likelihood that even if the UI was disabled direct contract interactions would happen creating excess deal tokens and forcing the Council to distribute the tokens manually. This would have likely generated significant frustration within the community. The alternative was to disclose the bug before the redemption period but create a set of incentives that would ensure that no addresses redeemed during the open redemption period. The latter path creates a risk that someone could decided to “grief” the pool, sacrificing their own funds in order to force the Council to distribute the tokens manually based on the ratio of initial redemptions. In spite of this risk the view of the Aelin Council was that it was the optimal path and therefore this is the approach proposed in this AELIP.

### Technical Specification

<!--The technical specification should outline the public API of the changes proposed. That is, changes to any of the interfaces Synthetix currently exposes or the creations of new ones.-->

In the current contracts there are two redemption windows: Pro rata and open redemption. During the pro rata period, capital in the pool is allocated proportionately to their share of capital in the pool. Anyone who fails to redeem their pool tokens in this period may withdraw their purchase tokens. At the end of the pro rata period and start of the open redemption period, the remaining allocation is available to all purchasers who maxed out their allocation in the pro rata period.

The open redemption period, however, has a bug in the solidity contracts. The issues lies with the AelinPool.sol method `acceptDealTokens` or `acceptMaxDealTokens` which calls the method `_acceptDealTokensOpen` which then calls `maxOpenAvail` method. `maxOpenAvail` provides an accurate estimate of the amount of funds which may be sent to the contract by checking the `totalAmountAccepted` variable in the contract.

The problem is that the `totalAmountAccepted` is never increased after the check is complete so the value will remain the same for the next set of transactions and the pool will always remain open for funding, meaning unlimited funds can pour into the contract, minting excessive deal tokens.

This is the current `_acceptDealTokensOpen` method:

```
   function _acceptDealTokensOpen(
       address recipient,
       uint256 poolTokenAmount,
       bool useMax
   ) internal {
       require(
           openPeriodEligible[recipient],
           "ineligible: didn't max pro rata"
       );
       uint256 maxOpen = maxOpenAvail(recipient);
       uint256 acceptAmount = useMax ? maxOpen : poolTokenAmount;
       if (!useMax) {
           require(acceptAmount <= maxOpen, "accepting more than share");
       }
       mintDealTokens(recipient, acceptAmount);
   }
```

and the current `maxOpenAvail` method:

```
   function maxOpenAvail(address purchaser) internal view returns (uint256) {
       return
           balanceOf(purchaser) + totalAmountAccepted <=
               purchaseTokenTotalForDeal
               ? balanceOf(purchaser)
               : purchaseTokenTotalForDeal - totalAmountAccepted;
   }
```

The solution is to implement an increase to the `totalAmountAccepted` variable before calling `mintDealTokens` so future transactions will be aware of the correct amount the contract can accept when checking `maxOpenAvail`.

The updated code adds this line: `totalAmountAccepted += acceptAmount;` as well as a require statement which will error if a purchaser is eligible but there is `"nothing left to accept"` in the open period.

```
   function _acceptDealTokensOpen(
       address recipient,
       uint256 poolTokenAmount,
       bool useMax
   ) internal {
       require(
           openPeriodEligible[recipient],
           "ineligible: didn't max pro rata"
       );
       uint256 maxOpen = maxOpenAvail(recipient);
       require(maxOpen > 0, "nothing left to accept");
       uint256 acceptAmount = useMax ? maxOpen : poolTokenAmount;
       if (!useMax) {
           require(acceptAmount <= maxOpen, "accepting more than share");
       }
       totalAmountAccepted += acceptAmount;
       mintDealTokens(recipient, acceptAmount);
   }
```

### Test Cases

<!--Test cases for an implementation are mandatory for AELIPs but can be included with the implementation..-->

Tests will be implemented in the Aelin contracts repo

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
