---
aelip: 14
network: Ethereum & Optimism
title: Updated Tokenomics
status: Vote_Pending
author: Alex the Bored Ape and cb0x (@AlexTheBoredApe) (@cb0x)
Release: Bernard
Implementor: n/a
created: 04-07-2022
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Simply describe the outcome the proposed changes intends to achieve. This should be non-technical and accessible to a casual community member.-->

This AELIP proposes to update Aelin Protocol tokenomics. Protocol fees on each deal will be collected directly in the underlying deal token, which will be placed in a 6 month escrow contract. Every quarter the Aelin Council will sell the deal tokens that have completed escrow in the prior quarter using a customized Aelin Pool with no protocol fees only the Council can access.

This pool will accept the native token on the chain where the deal is occurring (ETH, AVAX, etc...) and use the proceeds to buy AELIN tokens. Each quarter, 25% of the total AELIN collected will be distributed to stakers (30%), liquidity providers (50%) and to the treasury (20%).

## Abstract

<!--A short (~200 word) description of the proposed change, the abstract should clearly describe the proposed change. This is what *will* be done if the AELIP is implemented, not *why* it should be done or *how* it will be done. If the AELIP proposes deploying a new contract, write, "we propose to deploy a new contract that will do x".-->

Moving forward, the 2% protocol fee on each deal will be collected in the underlying deal token (unwrapped), which will be placed in a 6-month escrow contract. Every quarter the Aelin Council will sell the deal tokens that have vested in the prior quarter using customized Aelin Pools with no protocol fees which only the Council can access.

The pools will be uncapped and investors will have one week to invest using the native token on the chain where the deal is occurring. Tokens will be sold at a 20% discount to market with a 2 week vesting cliff and linear 2 week vesting period. The deal will be presented up front so this will use the new protocol workflow where a deal is known ahead of time and by entering the pool an investor is automatically accepting the terms. If there is excess capital in the pool, everyone will be deallocated proportionally. Any unsold tokens may be sold at a later quarter if there is an expectation of future demand.

The native chain tokens received by the protocol will be used to buy AELIN at spot rates via the DEX where the Council is incentivizing liquidity on the chain where the deal occurred. The resulting AELIN tokens will be distributed to the Aelin Treasury (20%) along with stakers and LPs who will claim them from staking rewards contracts on the network where the deal is occuring. The rewards will be emitted over the following quarter for stakers; single-sided AELIN stakers will receive 30% of the rewards and LPs will receive the remaining 50%.

## Motivation

<!--This is the problem statement. This is the *why* of the AELIP. It should clearly explain *why* the current state of the protocol is inadequate.  It is critical that you explain *why* the change is needed, if the AELIP proposes changing how something is calculated, you must address *why* the current calculation is inaccurate or wrong. This is not the place to describe how the AELIP will address the issue!-->

In the current state of the protocol, deal fees are collected and held by the Council which will then distribute the whole amount to AELIN stakers. This process is supposed to be updated soon, to be fully automated and avoid Council custody.

However, this means that there will be a lot of different deal tokens for stakers to claim, causing issues with gas and transaction fees and potentially making it nonviable to stake in small amounts. There is no point claiming dust from various tokens, multiple times a month.

This AELIP will address this issue by allowing stakers to claim AELIN, a single token. AELIN tokens will be bought at spot price by the protocol itself. This will remove the necessity for stakers to claim multiple tokens, multiple times. In this model, they only claim AELIN tokens, one time per epoch or once per multiple epochs as desired. It also adds buying pressure to AELIN, which the current tokenomics do not offer.

## Specification

### Overview

<!--This is a high-level overview of *how* the AELIP will solve the problem. The overview should clearly describe how the new feature will be implemented.-->

Since this AELIP will update AELIN tokenomics and the way staking works, a decent amount of changes and improvements are expected. These changes can be divided into the following sections:

- Protocol fees: Underlying deal tokens will be collected directly instead of wrapped deal tokens when accepting a deal in the AelinPool contract. In the current model, wrapped deal tokens are minted and sent to the investor, the sponsor and the Aelin treasury. Then the investment tokens are sent to the holder. This AELIP will update this part specifically so no wrapped deal tokens are sent to the treasury, only the underlying deal tokens directly. However, these underlying deal tokens will be subject to a 6 month escrow before they can be sold by the protocol to buyback AELIN tokens. The amount of time deal tokens are escrowed for will be updatable by a smart contract function only the Aelin Council may call.

- Aelin Buyback: The buyback logic will sit in the customized Aelin factory contracts that only the Council can access as the sponsor. These custom factories will work exactly like a traditional Upfront Aelin factory (a new factory where the deal is known upfront which is currently under development) except the Aelin Council is the only account that may be a sponsor and there are no protocol fees since these are the pool where the fees will be sold to investors. If the token is not yet trading on any network the Council may delay the sale until there is sufficient liquidity to support a sale price for the Aelin Pool.

- Aelin staking: The staking experience will not alter for users from what they experience today. However, the amount of AELIN given to stakers will no longer come from treasury funds. Instead, the AELIN given to stakers will come from a buyback program once a quarter and the rewards from the buyback will be emitted over 13 weeks split between pool 1 and pool 2.

The treasury funds previously allocated to staking rewards will instead be used to conduct an AELIN pool on each new chain added by the protocol so the communities on every chain have AELIN to stake.

### Rationale

<!--This is where you explain the reasoning behind how you propose to solve the problem. Why did you propose to implement the change in this way, what were the considerations and trade-offs. The rationale fleshes out what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->

Most of the questions, doubts and suggestions were around the buyback idea and how Aelin should manage it versus the original deal fee structure. Which tokens does the protocol need to collect for fees, how do we sell these tokens and finally what do we do with the AELIN tokens we just bought?

As discussed earlier, the current state of the protocol collects fees from the wrapped deal tokens. This AELIP proposes to change this and take underlying deal tokens on a 6 month escrow instead.

Another potential solution would have been to keep collecting wrapped deal tokens and auction them off immediately at the end of every deal. The main motivation for this was the possibility of selling these “remaining” deal tokens at premium, especially for hyped pools which got their cap filled rapidly. This means more fees collected and more AELIN to be distributed to Aelin stakers at the end.

The problem is, at the time of writing this AELIP, there is no guarantee that most of the pools will have the same level of hype. This could lead to selling deal tokens at discount instead of premium for pools which didn’t fill their cap or just didn’t get enough interest. Under our current plan every protocol doing deals with Aelin will have 6 months to continue developing their projects and improve their token price in the process. The Aelin Council will retain the right to withhold a token from a sale if there is not enough liquidity for the token at that point in time.

Another idea around these new tokenomics was to burn the freshly-bought AELIN instead of redistributing them. The main idea behind this was to drive the price up when buying and then to reduce the supply by burning them. There are only 5,000 AELIN tokens and making the supply a deflationary one was a very interesting thought. But unfortunately, this solution would make the staking of AELIN tokens completely useless. No incentives to stake and earn a passive income could be a turnoff for a lot of investors, which could turn the token into a very speculative asset, driving people to buy it only before the end of a deal, pre-buyback, and selling it just after.

Finally, it is crucial for these new tokenomics to be protected against people willing to game the staking and rewards claiming mechanism. This is why only a portion of the rewards coming from the cumulative buyback tokens (25% of the $AELIN) will be distributed quarterly, instead of the full amount. This will encourage stakers to hold their position for the long term in order to claim the entire share of rewards.

Note that there is continued research being done around adding time-weighted staking to the system described above, where you increase your rewards the longer you commit to staking. This will work alongside our current system but the implementation is still under research. A new AELIP will be presented in the future outlining how this will work if it is added to the system.

### Technical Specification

<!--The technical specification should outline the public API of the changes proposed. That is, changes to any of the interfaces Synthetix currently exposes or the creations of new ones.-->

N/A

### Test Cases

<!--Test cases for an implementation are mandatory for AELIPs but can be included with the implementation..-->

N/A

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
