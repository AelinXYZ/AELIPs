---
aelip: 20
network: Optimism & Mainnet
title: Interim Rewards + Aelin Treasury Allocation
status: Vote_Pending
author: Alex the Lizard (@AlexTheLizard)
Release: n/a
Implementor: n/a
created: 05-13-2022
---

## Simple Summary

The new AELIN tokenomics from AELIP-14 remove inflationary rewards from the protocol, replaced by a buyback and distribution mechanism. This AELIP proposes to continue temporary protocol inflation for 12 months so stakers may continue earning yield before the new tokenomics have time to go into effect.

Additionally, the protocol will now retain ~50% of the AELIN tokens after the temporary inflation period is finalized. 15% of the AELIN tokens will be set aside for CC payments, both now and into the future. The remaining 35% will be used for future AELIN pools and rewards programs.

## Abstract

Under the new tokenomics, stakers earn yield from AELIN buybacks and distributions instead of inflationary rewards. However, it will be a minimum of 6 months before the buybacks start due to the protocol's escrow period on deal fees. In addition, tokens may be sold over the quarter following the escrow, potentially leading to a 9-month delay from initial deal flow; on top of which, at their discretion the Council may extend the escrow period for a deal by 90 days at a time.

Therefore, we are proposing a 12 month inflationary rewards program for Optimism and Mainnet Ethereum to alleviate lack of rewards until the new tokenomics go into effect. Pool 2 (Aelin/ETH) on Mainnet will receive 25 AELIN per month for a total of 300 AELIN across 12 months. Optimism will receive 73 AELIN per month for a total of 876 AELIN altogether. Therefore, the final inflationary rewards provided by the Aelin treasury for stakers will total 1176 AELIN.

For new networks added, such as Avalanche, Arbitrum, Gnosis Chain, etc... there is no need for inflationary rewards, since there will be no staking added for the first 6-12 months on a network until protocol fees have had time to go through escrow and the initial buyback on that chain is ready to occur.

## Motivation

The new AELIN tokenomics will simplify the staking process, add buy pressure to AELIN, and remove inflation from the system but it will take some time to go into effect. In the interim we want to reward community members who stake their tokens or provide liquidity against ETH. This AELIP ensures that there remain incentives as we go through the interim phase before the new tokenomics can have an impact.

## Specification

### Overview

We will provide inflationary rewards for both Optimism and Mainnet Ethereum for 12 30-day periods following the passing of this AELIP. For Optimism pools 1 and 2 which will be in the middle of ongoing rewards period, the first rewards period out of the 12 in total will start at the end of the current rewards period.

### Rationale

The aim is to incentivize single sided stakers and AELIN/ETH liquidity providers with rewards until the buyback tokenomics have time to take effect. However, once the new tokenomics take effect there will be no need to incentivize liquidity with inflationary rewards. Fortunately, by delaying staking for 6-12 months on new networks we can remove the need for any inflationary rewards on a new chain and keep the inflation to Optimism and Mainnet Ethereum while still doing deals on every network with buybacks and staking planned for each of those networks.

### Technical Specification

n/a

### Test Cases

n/a

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
