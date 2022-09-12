---
aelip: 34
network: Optimism and Mainnet
title: Laminar Allocation for NFT Gated Deals
status: Vote_Pending
author: SeaGolem (@SeaGolem)
Release: n/a
Implementor: n/a
created: 09-08-2022
---

## Simple Summary

This AELIP proposes to create a new allocation mechanism, commonly referred to as a "Laminar allocation", for investors in NFT gated deals when there is excess interest in a capped deal. In the proposed allocation, smaller investors are deallocated less than larger investors to ensure a wider distribution of deal tokens.

## Abstract

In contrast to a proportional allocation which always provides the highest pool share to the largest investor, this system proposes to calculate a maximum allocation (cutoff) based on the number of NFTs used and the investment values they each represent.

In this system, investment under the cutoff value will not be diluted, and all investments above would be limited to this cutoff value. For NFT gated deals, an investor may still spread the value of their investment across multiple NFTs held in the same wallet. Instead of doing the calculation per investor wallet, the calculation will be done per NFT used to invest in the pool.

## Motivation

NFTs are scarce by nature and therefore alternative allocation mechanisms in NFT gated pools are immune to Sybil attacks on the pool through multiple wallets creation. Thanks to this property, new ways to allocate investments can be created.

NFTs are very often associated with communities composed of people with common interests that already established strong social bounds. In a sense, investing with your NFT community is more akin to investing with a group of friends rather than competing against unknown market actors.

Laminar allocation aims at sponsors wanting more decentralization for their pool outcome and prioritizing equity among community members.

## Specification

### Overview

Allocation/Deallocation option:
When creating an uncapped NFT Gated deal, a sponsor or protocol will have the option to use the "Laminar allocation" instead of the currently only option "Proportional Deallocation". Investors will then associate their investment with either one or multiple NFTs. Hence, each NFT always represents a non-zero investment value.

When the time of allocating pool tokens to the investors comes, if the raised capital is above the desired capital target, a laminar allocation will happen. It consists of calculating the maximum allocation (cut-off) allowed for each NFT, in order for the deal to distribute, without dilution, to the maximum number of NFTs whose values are under this cut-off.

Example:
Let’s imagine the following scenario. A NFT gated uncapped pool is opened by a sponsor, trying to raise 50k sUSD. 10 unique holders each holding 1 NFT invest in the pool. The below table shows the outcome of a laminar allocation.

<img src="/laminar_1.png"  width="300" height="300">

![laminar allocation example image 2](/laminar_2.png 'Laminar Allocation')

NFT Sprinkling:
Laminar Allocation requires us to add a third allocation mechanism to NFTs in an Aelin deal: “NFT Sprinkling”. The 2 current ways to use NFTs at the moment are:
You need at least 1 to participate. It is then used as an entrance ticket and has an unlimited investment amount.
A cap per NFT is set. Having multiple NFTs becomes an advantage allowing for a greater investment.

The only way for an investor to skew the laminar allocation in its favor is to divide its investment across multiple NFTs, incentivizing them to buy more. To take advantage of that property this AELIP proposes to create a third option: “NFT Sprinkling”.

When selected by a sponsor at the creation of the pool, the investors will be able to spread their uncapped investment across multiple NFTs being held in the same wallet. Example: an investor wants to invest 40k sUSD and holds 4 NFTs. By selecting them, each NFT will be attributed the value of 10k sUSD.

In this case, a NFT does not just have a cap per investment or not, it also helps to reduce how much an investor is deallocated.

### Rationale

Proportional allocation partially rises from the difficulty to find an alternative not subjected to wallet gaming (Sybil attack). As wallets are free, unlimited and extremely easy to create, one malicious actor can take advantage of any solution based on a per wallet distribution. NFTs, by their nature, allow new approaches to emerge.

Visualizing the difference:
The distribution problem is equivalent to the following one: a tube, with a constant section, filled with water, represents each NFT. The height of water in each tube represents the investment value held by each NFT. The capital target of the pool is represented by an empty tank below the tubes, of a volume corresponding to the investment target. How to fill the tank with the tubes' content?

Proportional:
In this setup, each tube has a faucet at the bottom. You have to calculate the ratio (Total volume in the tubes/Capital Target).Then mark all the tubes using this ratio. Finally, use the faucets to empty each tube until the marking

![proportional example gif 1](/proportional.gif 'Proportional')

Laminar:
Here, you link all tubes together with 1 faucet at the bottom.
Simply open the faucet until the tank is filled; gravity will take care of the distribution. Hence the term "Laminar"

![laminar example gif 1](/laminar.gif 'Laminar')

Proportional/Laminar output comparison:

<img src="/laminar_3.png"  width="300" height="300">

![laminar allocation example image 4](/laminar_4.png 'Laminar vs Proportional')

NFT Sprinkling:
The only way to skew the allocation of a fixed investment amount is to spread it across multiple NFTs. NFT Sprinkling uses and formalizes this practice. In our use case, it can be considered a positive thing as it provides more utility to the NFTs from a collection and drives value into accumulating more of them. This has the potential to create buying pressure on a collection, increasing its floor value and thus be beneficial for all holders.

Impact of NFT sprinkling on the laminar allocation example:
An uncapped NFT gated pool has been set, trying to raise $100,000
250 unique holders of 1 NFT have each invested $1,000 in a pool
On top of this 1 unique holder used their NFTs to invest $50,000
Below is the impact of the number of NFTs this holder uses with NFT sprinkling on the pool and his own allocation. For reference, if proportional allocation were used the holders allocation would be $16,667.
This holder would need to hold 50 NFTs to reach the same allocation he would have had using proportional allocation.

### Technical Specification

Below is an un-optimized python code calculating the laminar distribution that can be used as reference for the developments of the solidity code

![python example image 5](/python_example.png 'Laminar in Python')

### Test Cases

NA

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
