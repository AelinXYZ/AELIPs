---
aelip: 28
network: Optimism
title: Velodrome Liquidity Incentives
status: Vote_Pending
author: Matt and cb0x (@MattLosquadro) (@cb0x)
Release: n/a
Implementor: n/a
created: 07/11/22
---

## Simple Summary

This AELIP proposes to run a month long trial of Velodrome AMM incentives for the AELIN/ETH pool. Aelin treasury will be distributing $4,000 USD per week, paid for in OP tokens received in the Phase 0.

## Abstract

Ending incentives for Pool 2 (AELIN/ETH) could drastically decrease the liquidity for AELIN on chain. To protect investors from too much slippage whenever they are trying to buy or sell AELIN, it is important to keep that liquidity at a sufficient level.

This AELIP proposes to run a trial for a period of 4 weeks with [Velodrome](https://app.velodrome.finance). Aelin treasury will be distributing voting rewards (also called "bribes") in OP in order to maximise the VELO rewards emitted to the AELIN/ETH pool. This means LPs will be earning VELO instead of AELIN.

It is important to note that the Velodrome DAO will be matching rewards with Aelin treasury (around $8,000 USD in total per week), making emissions of VELO larger than the previous token incentive program.

As described in [AELIP-22](https://aelips.aelin.xyz/aelips/aelip-22), the current distribution of OP will follow the plan below:

- 40% to LP stakers (AELIN/ETH), or equivalent program to maintain liquidity on the AELIN/ETH pair
- 60% to a pool incentive program

Since this AELIP is linked with LP incentives, the OP tokens will be taken from the 40% kept to reward LPs. A total of $16,000 USD in OP will be taken from this allocation to run this trial. If results are satisfying at the end of the 4 weeks, another AELIP might be presented to extend this program.

## Motivation

Direct incentives with AELIN tokens have been highly capital inefficient because of a "farm and dump" behaviour observed in the last few months increasing the sell pressure, but also because the value of the rewards distributed each month became too low to keep the interest of the LPs, leading to a drop in liquidity.

It was important for the original incentive program to be terminated (see [AELIP-26](https://aelips.aelin.xyz/aelips/aelip-26)) and replaced by another one with a larger token emission which could avoid a sell pressure on AELIN at the same time.

## Specification

### Overview

The proposal will be submitted per the Optimism network guidelines.

### Rationale

N/A

### Technical Specification

The Aelin dApp will show a redirect and APY to the Velodrome pool.

### Test Cases

TBD

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
