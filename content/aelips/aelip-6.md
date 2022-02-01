---
aelip: 6
network: Ethereum & Optimism
title: Pro Rata Period Calculation, Deal Creation Limits, & Initial Aelin Pool Open Redemptions
status: Implemented
author: Alex the Bored Ape (@AlexTheBoredApe)
Release: Beren
Implementor: Alex the Bored Ape (@AlexTheBoredApe)
created: 2022-01-03
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Simply describe the outcome the proposed changes intends to achieve. This should be non-technical and accessible to a casual community member.-->

The calculation for purchasers who max their pro rata calculation and are eligible for the open redemption period is incorrect although no funds are at risk from the current implementation. This AELIP proposes to update the AelinPool.sol contract so it works as intended.

Additionally, there exists a bug where a sponsor can create infinite amounts of deals forever for a pool that have no intention of ever being funded in order to brick funds. This AELIP also addresses this issue.

Finally, after the completion of the intial $AELIN pool it was found that only 8 transactions of small amounts (see tx hashes below in tech specification) were submitted after the deadline and some purchasers accepted by mistake. Therefore, it is proposed to refund their $sUSD for the open period but allow them to keep their $AELIN allocation for the pro rata period instead of refunding all their $sUSD.

## Abstract

<!--A short (~200 word) description of the proposed change, the abstract should clearly describe the proposed change. This is what *will* be done if the AELIP is implemented, not *why* it should be done or *how* it will be done. If the AELIP proposes deploying a new contract, write, "we propose to deploy a new contract that will do x".-->

At the moment if a user has 100 pool tokens with a 10% allocation they may accept 10 tokens and qualify for the open redemption period. However, if they withdraw 90 pool tokens for the underlying purchase token and then accept 1 pool token out of their remaining 10 they will still qualify. The updated calculation proposed here will require them to accept the full 10 tokens to qualify no matter how much they withdraw ahead of time.

For the deal creation side, if a sponsor has as script that continuously creates a new deal after the previous one expires they will be able to stop users from withdrawing their funds. A simple limit of 5 deals fixes this issue.

## Motivation

<!--This is the problem statement. This is the *why* of the AELIP. It should clearly explain *why* the current state of the protocol is inadequate.  It is critical that you explain *why* the change is needed, if the AELIP proposes changing how something is calculated, you must address *why* the current calculation is inaccurate or wrong. This is not the place to describe how the AELIP will address the issue!-->

In order for oversubscribed pools to function properly on behalf of all parties, purchasers must be properly de-allocated based on their contributions to the pool. Technically, no funds are at risk with the current implementation but the intention of the pro rata period is to force purchasers to accept their max allocation from their full deposit if they want to enter the open redemption period. This AELIP addresses that issue. It also fixes a bug where sponsors can create infinite deals, bricking user funds by limiting the amount of deals to 5.

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

At the start of the pro rata redemption period pool tokens can be redeemed for deal tokens. After redeeming their max allocation in the pro rata period, each address is then eligible to redeem in the open period. However, eligibility for the open period is not calculated correctly due to a lack of accounting for partial withdrawals which purchasers can do once a deal has been proposed.

In order to avoid this loophole being exploited by purchasers the following contract changes are proposed.

1. when a purchaser withdraws a new mapping will be added that will track each individual purchasers total amount withdrawn: `mapping(address => uint256) public amountWithdrawn;`
2. when a purchaser attempts to accept their max pro rata allocation it will check their amount withdrawn to make sure they retain the same allocation: `(proRataConversion * (balanceOf(purchaser) + amountAccepted[purchaser] + amountWithdrawn[purchaser])) / 1e18 - amountAccepted[purchaser]`
3. Also, for the UI, a global variable will be added that will track the total amount withdrawn by all purchasers: `uint256 public totalAmountWithdrawn;`

For the deal creation side the fix is to add a global counter `uint8 public numberOfDeals;` and a `uint8 constant MAX_DEALS = 5;` variable and then throw a require statement when the amount of deals created has exceeded the limit of 5.

### Rationale

<!--This is where you explain the reasoning behind how you propose to solve the problem. Why did you propose to implement the change in this way, what were the considerations and trade-offs. The rationale fleshes out what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->

While technically the current implementation does not cause a loss of funds and everything is working properly, the lack of accounting of withdrawals can incentivize purchasers entering the pool to do unwanted things; such as making it seem like a large deposit is interested, but accept a much smaller allocation before deciding to purchase more in the open redemption period. There are a number of reasons why a purchaser might use this loophole to their advantage, but it is against the best interests of the sponsor, less sophisticated purchasers, and the counter party. Therefore, it is important to fix this and force purchasers who want to enter the open period to accept their full allocation.

### Technical Specification

<!--The technical specification should outline the public API of the changes proposed. That is, changes to any of the interfaces Aelin currently exposes or the creations of new ones.-->

the changes for this AELIP are in the functions `maxProRataAmount` (which was renamed for clarity from `maxProRataAvail`), `_withdraw` and `maxDealAccept`, the latter of which is an external view method only for clients to call.

```
    function maxProRataAmount(address purchaser) public view returns (uint256) {
        if (
            (balanceOf(purchaser) == 0 &&
                amountAccepted[purchaser] == 0 &&
                amountWithdrawn[purchaser] == 0) ||
            holderFundingExpiry == 0 ||
            aelinDeal.proRataRedemptionStart() == 0 ||
            block.timestamp >= aelinDeal.proRataRedemptionExpiry()
        ) {
            return 0;
        }
        return
            (proRataConversion *
                (balanceOf(purchaser) +
                    amountAccepted[purchaser] +
                    amountWithdrawn[purchaser])) /
            1e18 -
            amountAccepted[purchaser];
    }
```

```
    function _withdraw(uint256 purchaseTokenAmount) internal {
        require(block.timestamp >= poolExpiry, "not yet withdraw period");
        if (holderFundingExpiry > 0) {
            require(
                block.timestamp > holderFundingExpiry ||
                    aelinDeal.depositComplete(),
                "cant withdraw in funding period"
            );
        }
        _burn(msg.sender, purchaseTokenAmount);
        IERC20(purchaseToken).safeTransfer(msg.sender, purchaseTokenAmount);
        amountWithdrawn[msg.sender] += purchaseTokenAmount;
        totalAmountWithdrawn += purchaseTokenAmount;
        emit WithdrawFromPool(msg.sender, purchaseTokenAmount);
    }
```

```
    function maxDealAccept(address purchaser) external view returns (uint256) {
        /**
         * The if statement is checking to see if the holder has not funded the deal
         * or if the period is outside of a redemption window so nothing is available.
         * It then checks if you are in the pro rata period and open period eligibility
         */
        if (
            holderFundingExpiry == 0 ||
            aelinDeal.proRataRedemptionStart() == 0 ||
            (block.timestamp >= aelinDeal.proRataRedemptionExpiry() &&
                aelinDeal.openRedemptionStart() == 0) ||
            (block.timestamp >= aelinDeal.openRedemptionExpiry() &&
                aelinDeal.openRedemptionStart() != 0)
        ) {
            return 0;
        } else if (block.timestamp < aelinDeal.proRataRedemptionExpiry()) { // the changes for this AELIP are in this if block
            uint256 maxProRata = maxProRataAmount(purchaser);
            return
                maxProRata > balanceOf(purchaser)
                    ? balanceOf(purchaser)
                    : maxProRata;
        } else if (!openPeriodEligible[purchaser]) {
            return 0;
        } else {
            return maxOpenAvail(purchaser);
        }
    }
```

Also, here are the 8 transactions submitted by purchasers in the first $AELIN pool during the open redmeption period:

```
  "0xd036894615103757c454d32b433a3051741271f8434369672b8ac5d84243894a".toLowerCase(), // $1950
  "0xa809d172637e63a2ce5a3217381c12cb7f44d24731d60248642a76eb574866ef".toLowerCase(), // $230
  "0xbbd7f386fc8d92975833ee6a1666f19dcf3a6857a8e35a75f914a40624ef70a9".toLowerCase(), // $1000
  "0x901aea11e9791d2b299c7c4511d0a1b28ecb5aa598f3353139d5cf028c37a202".toLowerCase(), // $1550
  "0x907ee3e8cb03a8a1674b0e70105c17e38959612431af97bb2ed26df7b5309bcd".toLowerCase(), // $7000
  "0x8670b8a4b249a6783258003814f4aec11cc684a0e959e4c868aca5bd61739b47".toLowerCase(), // $17
  "0x9e34a83d91a30af9edbbd9267f60e9b9a4819926a557dc0a6e2817067c05f21d".toLowerCase(), // $5818
  "0x0d9d596715689910f43a0843b8c59b1104f70faf6aeb541888141755949dd3b1".toLowerCase(), // $6718
```

### Test Cases

<!--Test cases for an implementation are mandatory for AELIPs but can be included with the implementation..-->

Tests will be implemented in the Aelin contracts repo

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
