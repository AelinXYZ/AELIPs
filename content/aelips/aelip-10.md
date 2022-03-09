---
aelip: 10
network: Ethereum & Optimism
title: Re-enable Pool Transfers
status: Approved
author: Alex the Bored Ape (@AlexTheBoredApe)
Release: Nuada
Implementor: Alex the Bored Ape (@AlexTheBoredApe)
created: 2021-01-28
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Simply describe the outcome the proposed changes intends to achieve. This should be non-technical and accessible to a casual community member.-->

This AELIP proposes to re-enable transfers for pool tokens. Pool tokens will be transferrable before and after the deal acceptance window, but will be blocked during the acceptance window so the deal allocation calculations can work properly.

## Abstract

<!--A short (~200 word) description of the proposed change, the abstract should clearly describe the proposed change. This is what *will* be done if the AELIP is implemented, not *why* it should be done or *how* it will be done. If the AELIP proposes deploying a new contract, write, "we propose to deploy a new contract that will do x".-->

Once this AELIP is implemented, pool tokens may be put into an AMM or other types of trading contracts. These funds will be tradable/ tarnsferrable until the deal acceptance window starts, at which point they will be blocked until after the window, including both the allocation and open period, is closed.

Once the deal acceptance window is closed, the pool tokens may be transferred again, but the tokens will no longer be eligible for the deal. However, pool tokens may still be withdrawn for the underlying purchase currency.

## Motivation

<!--This is the problem statement. This is the *why* of the AELIP. It should clearly explain *why* the current state of the protocol is inadequate.  It is critical that you explain *why* the change is needed, if the AELIP proposes changing how something is calculated, you must address *why* the current calculation is inaccurate or wrong. This is not the place to describe how the AELIP will address the issue!-->

At the moment you cannot transfer pool tokens. However, for popular pools, which reach their cap or where the purchase window has passed, an investor who did not enter the pool may be willing to pay a premium for the pool tokens if they are interested in accessing a potential deal. Having pool transfers re-enabled allows for the creation of a market around tokens prior to a deal being created and funded; the funding of a deal starts the acceptance window.

In addition, purchasers may want to transfer their purchase tokens to another wallet for many reasons, such as their original wallet being compromised or if they are updating wallets for enhanced security. This design allows for more flexibility around this.

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

This AELIP proposes investors may transfer their pool tokens under the following 3 circumstances:

1. The deal acceptance window has not started yet
2. the deal acceptance window is over, which can happen in 2 ways:
   - The allocation window is fully allocated and there is no open window. At the end of the allocation window the deal acceptance window is over.
   - Investors were deallocated in the allocation window, so there is an open window in case any investors do not redeem their full allocation. At the end of the open window the deal acceptance window is over.

### Rationale

<!--This is where you explain the reasoning behind how you propose to solve the problem. Why did you propose to implement the change in this way, what were the considerations and trade-offs. The rationale fleshes out what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->

There was a much more complicated option to re-enable pool transfers which allows investors to transfer a portion of their pool tokens during the deal acceptance window but only under certain conditions.

However, the solution that was chosen (and outlined in this AELIP) is both easier to understand and implement. The goal is to avoid excess complexity unless the beneifts far exceed the added technical debt and security risks with more complex factory contracts. In this case it was an easy decision to go with the current proposed solution.

### Technical Specification

<!--The technical specification should outline the public API of the changes proposed. That is, changes to any of the interfaces Synthetix currently exposes or the creations of new ones.-->

To update pool transfers we will simply change the transfer modifier from:

```
    modifier blockTransfer() {
        require(false, "cannot transfer pool tokens");
        _;
    }
```

to:

```
    modifier transferWindow() {
        require(
            aelinDeal.proRataRedemptionStart() == 0 ||
                (block.timestamp >= aelinDeal.proRataRedemptionExpiry() &&
                    aelinDeal.openRedemptionStart() == 0) ||
                (block.timestamp >= aelinDeal.openRedemptionExpiry() &&
                    aelinDeal.openRedemptionStart() != 0),
            "no transfers after redeem starts"
        );
        _;
    }
```

1. `aelinDeal.proRataRedemptionStart() == 0`: This means that the deal acceptance window has not started yet
2. `(block.timestamp >= aelinDeal.proRataRedemptionExpiry() && aelinDeal.openRedemptionStart() == 0)`: This means there is no open window and the allocation window is over.
3. `(block.timestamp >= aelinDeal.openRedemptionExpiry() && aelinDeal.openRedemptionStart() != 0)`: This means there is an open window after the allocation window and both periods are over.

### Test Cases

<!--Test cases for an implementation are mandatory for AELIPs but can be included with the implementation..-->

Tests will be implemented in the Aelin contracts repo.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
