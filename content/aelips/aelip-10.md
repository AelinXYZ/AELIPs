---
aelip: 10
network: Ethereum & Optimism
title: Re-enable Pool Transfers
status: Draft
author: Alex the Bored Ape (@AlexTheBoredApe)
Release: Nuada
Implementor: Alex the Bored Ape (@AlexTheBoredApe)
created: 2021-01-28
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Simply describe the outcome the proposed changes intends to achieve. This should be non-technical and accessible to a casual community member.-->

This AELIP proposes to re-enable transfers for pool tokens. Pool tokens will be transferrable before and after the deal acceptance window but will still be blocked during this period due to the allocation calculations.

## Abstract

<!--A short (~200 word) description of the proposed change, the abstract should clearly describe the proposed change. This is what *will* be done if the AELIP is implemented, not *why* it should be done or *how* it will be done. If the AELIP proposes deploying a new contract, write, "we propose to deploy a new contract that will do x".-->

Once this AELIP is implemented, pool tokens may be put into an AMM or other types of trading contracts. These funds will be tradable/ tarnsferrable until the deal acceptance window starts, at which point they will be blocked until after the window is closed.

Once the window is closed the pool tokens may be transferred again; however, at this point the tokens will not be eligible for the deal but may still be withdrawn for the purchase currency.

## Motivation

<!--This is the problem statement. This is the *why* of the AELIP. It should clearly explain *why* the current state of the protocol is inadequate.  It is critical that you explain *why* the change is needed, if the AELIP proposes changing how something is calculated, you must address *why* the current calculation is inaccurate or wrong. This is not the place to describe how the AELIP will address the issue!-->

At the moment you cannot transfer pool tokens. However, for popular pools that reach their cap or where the purchase window has passed someone who missed out on entering the pool might be willing to pay a premium for the purchase tokens to access the deal. Having pool transfers re-enabled allows for the creation of a market around tokens prior to a deal being created and then funded; the funding of which kick starts the deal acceptance window.

In addition, purchasers may want to transfer their purchase tokens to another wallet for many reasons, such as their original wallet being compromised or if they are updating wallets for enhanced security.

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
2. The allocation is 100% and the initial acceptance window is over and there is no open window
3. Investors were deallocated in the first acceptance window then only after the second, open round is over may transfers occur

### Rationale

<!--This is where you explain the reasoning behind how you propose to solve the problem. Why did you propose to implement the change in this way, what were the considerations and trade-offs. The rationale fleshes out what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->

There was a much more complicated option that allowed users to transfer some pool tokens during the deal acceptance window but only under certain conditions. The solution that was chosen and outlined in this AELIP, however, is much easier for investors to grok and much simpler from an implementation perspective.

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

### Test Cases

<!--Test cases for an implementation are mandatory for AELIPs but can be included with the implementation..-->

Tests will be implemented in the Aelin contracts repo.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
