---
aelip: 42
network: All networks
title: Vest AMM
status: Approved
author: alex, cb0x, ser link (@Alex | Aelin)
Release: n/a
Implementor: n/a
created: 03-02-2022
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Simply describe the outcome the proposed changes intends to achieve. This should be non-technical and accessible to a casual community member.-->

Vest AMM is a liquidity primitive that allows protocols to secure long-term liquidity by motivating liquidity providers (LPs) to lock capital in exchange for incentives such as single sided rewards, additional LP tokens, or boosted yield. Being AMM agnostic, Vest AMM creates a wrapper around supported AMMs (Uniswap, Balancer, Curve, Velodrome, etc…) and locks the capital for a duration determined by the protocol. This eliminates the need for protocols to actively maintain LP incentive programs which makes the management of token liquidity easier, cost effective, and more reliable.

The design of Vest AMM gives protocols the ability to customize their liquidity strategy using unique incentives to reward LPs. Protocols may use Vest AMM to obtain Protocol owned Liquidity (PoL), distribute their token, rent liquidity, or anything on the spectrum in between these options.

The product lines introduced by Vest AMM will be:

- liquidity launches (fixed price and auction)
- liquidity growth rounds (protocol and community options)
- liquidity lock program for existing LPs

This AELIP introduces Vest AMM, and if passed, establishes it as a part of the suite of Aelin community fundraising products.

## Abstract

<!--A short (~200 word) description of the proposed change, the abstract should clearly describe the proposed change. This is what *will* be done if the AELIP is implemented, not *why* it should be done or *how* it will be done. If the AELIP proposes deploying a new contract, write, "we propose to deploy a new contract that will do x".-->

A new Aelin factory contract will be deployed which facilitates the creation of Vest AMM instances. A Vest AMM instance or vAMM is a contract wrapper around an external AMM, such as Uniswap or Balancer. vAMM instances allow protocols to establish long term liquidity by depositing their native token and then providing customizable incentives to motivate LPs to lock their capital on the other side of the pair.

Vest AMM allows protocols to select an AMM (Uniswap, Balancer, Curve, Velodrome, etc.) and contribute their tokens to a vAMM instance which can then be matched by investors contributing to the other side of the AMM pairing. When creating the vAMM instance, protocols will be able to choose the paired asset investors will deposit (ETH, sUSD, USDC, etc.), length of the vesting schedule(s), amount of LP funds returned to the protocol/investors, and any incentive-based rewards for investors. The innovative incentive mechanisms behind Vest AMM are described in detail in the Overview section below. Investors participate simply by depositing assets such as ETH, sUSD, or USDC which provides for a better UX as investors aren’t required to directly interact with the native token or LP tokens. The funds deposited into the vAMM by the protocol and investors are paired and then deposited into an AMM and locked on customizable vesting schedules resulting in a reliable source of liquidity. Protocols and investors are now in long term alignment.

## Motivation

<!--This is the problem statement. This is the *why* of the AELIP. It should clearly explain *why* the current state of the protocol is inadequate.  It is critical that you explain *why* the change is needed, if the AELIP proposes changing how something is calculated, you must address *why* the current calculation is inaccurate or wrong. This is not the place to describe how the AELIP will address the issue!-->

Liquidity is critical to improve trading outcomes for investors entering or exiting a token, but maintaining sufficient levels of liquidity over a long term horizon has proven to be quite challenging for protocols. Many protocols reward LPs in their pool 2 with their native token weekly or are forced to rent their liquidity by bribing voters to direct rewards to their LPs. Despite these incentives, once the pool 2 rewards or bribes end, liquidity often evaporates soon after. This is not an efficient use of a protocol’s capital as it creates little alignment between the protocol and LPs and ultimately is an ongoing expense with no assurance of future liquidity.

Vest AMM creates sustainable, long term liquidity, which aligns the protocol and LPs since the native token is not being distributed in a way that can be easily farmed and sold. Vest AMM gives protocols the flexibility to customize the way in which they incentivize investors to lock up their capital by offering: single sided tokens, a greater share of the LP tokens than the investors initially contributed, and/or a boost in yield.

## Specification

### Overview

<!--This is a high-level overview of *how* the AELIP will solve the problem. The overview should clearly describe how the new feature will be implemented.-->

A new Aelin factory will be introduced that protocols can call to create new vAMMs. The technical specification of this AELIP goes through detailed technical topics and case studies for how vAMMs can be used.

vAMM Lifecycle Overview:

1. A vAMM instance is created when a protocol selects an AMM and the asset they wish investors to deposit to be paired with the protocol’s native token. During this step the protocol also sets the terms of the vAMM which include the details of the vesting schedule, how many LP tokens are retained by the protocol vs. returned to the investors, how many single sided tokens investors receive, and who receives trading fees.

2. The protocol deposits their native tokens into the vAMM.

3. Investors deposit the paired asset chosen by the protocol.

4. The investors receive locked LP tokens on a vesting schedule, single sided rewards (which may also be locked on vesting schedules), or a combination of LP tokens and single sided rewards.

5. A vAMM, which has been fully matched, may be reused and the protocol can deposit additional rewards to incentivize depositors to continue locking tokens.

Note: Instead of creating new incentive programs with the same vAMM, a protocol can give existing investors the opportunity to extend their lockup in exchange for additional rewards

Novel Incentive Mechanisms:

1. Single sided token rewards: Single sided reward bonuses which are very similar to how investors are currently incentivized by most AMMs. Vest AMM differentiates itself here as each reward token may optionally be locked on a custom vesting schedule that creates better alignment between the protocol and LPs. Additionally, protocols deposit the single sided rewards just one time when the vAMM is created, instead of doing it on a regular basis (e.g. every week). Further, the amount of rewards offered per $1 of LP capital contributed is predetermined which results in greater capital efficiency and eliminates uncertainty over the amount of liquidity the rewards offered will bring.

2. LP token rewards: This incentive mechanism is a system of shifting LP token ownership percentages. For example, in a 50/50 ABC/wETH Balancer pool, the protocol is providing 50% of the capital to the vAMM in the form of ABC tokens so they are entitled to 50% of the LP position at the end. However, the protocol may choose to incentivize investors to lock capital for an extended duration by giving up a higher percentage of the LP tokens to investors at the end of the vesting period. For example, an investor who provided 50% of the capital in the form of wETH could earn 75% of the LP tokens over a 2 year period.

   In addition to giving away a higher share of LP ownership to investors, this will inherently boost swap yields for locked LPs. Investors who receive 75% of the LP tokens despite having put in only 50% of the capital receive a 50% boost in yield due to increased ownership of the LP pool. Trading fees generated on behalf of the locked LPs are reinvested into the pool on behalf of the user to compound growth. For Uniswap v3, due to concentrated liquidity, passive capital receives lower trading fees so Vest AMM will deposit funds with an active capital management provider (e.g. Gamma) to further boost yields for LPs who are locked.

3. Yield boost without LP tokens: As mentioned above, the protocol may give away some of their LP tokens which will boost the yield for locked LPs. However, the protocol may also elect to give 100% of the yield generated by their LP regardless of the amount of LP tokens they are retaining at the end of the vesting period.

Highlighted use case: Protocol Liquidity Growth Round

In the ABC example above, the protocol is giving away more LP shares to investors to increase their ownership and yield to incentivize deposits; however, ABC protocol could also use Vest AMM to significantly grow their PoL by taking 100% of the LP tokens. This approach gives wETH investors 0% of the LP tokens despite putting in 50% the capital. In this example, the protocol could deposit their native token and/or other tokens as single sided rewards generally equal to at least 100% of the value of wETH that investors deposit but will almost always be a greater amount. Effectively ABC protocol is using Vest AMM to sell ABC tokens locked on a vesting schedule at a discounted price. Also, as the LP tokens owned by the protocol are on a vesting schedule, investors can better predict liquidity in the future as their ABC tokens vest.

For example, an investor deposits 100 sUSD which is paired with 10 ABC tokens (based on current AMM pricing ratios). Instead of giving the investor LP tokens, the protocol keeps 100% of the LP tokens and gives the investor a higher amount of value (e.g. 150%) of their sUSD in locked ABC tokens (15 ABC) on a vesting schedule. This is similar to other liquidity competitors but has a better UX for investors, since the end user only needs to provide sUSD, never has to interact with ABC token or enter into a LP position, and can reasonably predict the amount of liquidity that will be available as their ABC tokens vest.

_Early Unlocks_:
It might be necessary to unlock capital from the pool early. For example, if a token migration occurs or if a protocol has successfully grown to the point they are comfortable unlocking all the locked LPs. The logic around unlocking tokens is as follows:
the holder who deposits single sided rewards can unlock those at any time
for the LP tokens, the protocol can unlock at any time as long as they dont take more LP tokens than they contributed
If a protocol takes more LP tokens than they contributed (protocol liquidity growth round), then at least half of the investors who provided capital to the pool need to vote to unlock it

_Built-in Protocol Fee Distribution Module_:
It is common for protocols to distribute protocol fees to LPs staked in a pool 2. Vest AMM makes it easy for protocols to distribute protocol fees to locked LPs in vAMMs as an additional way to incentivize deposits or simply as a part of the protocol’s fee distribution. When an investor deposits their paired asset, their LP tokens are locked but they will be automatically enrolled in a multi-token staking rewards contract that allows protocols to distribute protocol fees to locked LPs. Protocol fees sent to locked vAMM LPs may be emitted across a time period set by the protocol and will be claimable by LPs while they are locked in a vAMM.

_Aelin Protocol Fees_:
Vest AMM will take a fee equal to 1% of assets deposited as well as 20% of ongoing swap fees from LPs with locked liquidity. The remaining amount of swap fees earned by locked LPs will be reinvested in the AMM; Balancer reinvests swap fees automatically but protocols like Uniswap do not automatically reinvest swap fees so Vest AMM will manage that for LPs in vAMM contracts.

Vest AMM will also take a 1% fee on single sided reward tokens and protocols fees that are distributed to token holders. Fees are only captured when an investor deposits assets so if a protocol creates a vAMM but cancels it before any investor deposits there would be no fees incurred.

_Fee example_:

1. Protocol offers 100 ABC tokens to be matched against 1,000 sUSD (10 sUSD per ABC token) with a single-sided reward of 1,000 OP tokens to the pool
2. An investor deposits 100 sUSD, pairing sUSD against 10 of the available ABC tokens

- 1 sUSD and 0.1 ABC token are collected as Vest AMM protocol fees (1% of LP assets)
- 99 sUSD is LP’d against 9.9 ABC tokens and locked in a vesting schedule
  - The LP token split will be 50/50 to the protocol and investor in this case but this balance is configurable by the protocol
- 1 OP token is collected as a protocol fee (1% of single sided rewards)
- 99 OP tokens are locked in a vesting schedule for the investor
- 20% of swap fees from the sUSD/ABC pool is collected as a protocol fee
  - At an APY of ~20% this is roughly 4 sUSD and 0.4 ABC tokens annually

3. Protocol ABC distributes 100 sUSD from trading/protocol fees on their platform to investors locked in the vAMM. 1 sUSD is collected as a fee and the other 99 sSUD go to the investors

### Rationale

The goal is to create a liquidity system that incentivizes capital providers to be long term holders, while keeping the UX simple for investors. Investors do not deal directly with the AMM or protocol tokens; they only need to approve and deposit an asset such as sUSD, USDC, or ETH, and then they may participate in providing long term liquidity and earning rewards.

### Technical Specification

<!--The technical specification should outline the public API of the changes proposed. That is, changes to any of the interfaces Aelin currently exposes or the creations of new ones.-->

A VestAMM Factory contract will be deployed that will have a “createVestAMM()” function that will have the following parameters:

1. AMM Info:

- AMM Specific Integration Library, Quote Asset, Base Asset, Base Asset Amount

2. vAMM Info:

- Has Launch Phase, Deposit Window, LP Funding Window, Main Holder, Upper Funding Limit for existing pools, Lower Funding Limit for existing pools, Initial Quote Per Base for Launches

3. Vesting Data:

- Vesting Schedules Array including deallocation strategy, max amount per schedule and depositor share (0 to 100),

4. Single Sided Rewards array:

- Reward Token, Reward Per Quote, Vesting Data, Migration Rules, Holder if not main holder

5. Deal Access:

- Merkle Root, IPFS Hash, NFT Collection Rules, Allow List

Similar to the existing Aelin pools we will use a minimal proxy to create each vAMM instance, calling an “initialize()” method that will take the pool parameters set above.

Once the vAMM instance has been created, the protocol/main holder and any other holders providing single sided rewards will call “depositBase()” or “depositSingle()” to send their tokens into the contract. Once all the tokens have been sent the deposit window will start.

During the deposit window, investors will show up with the paired token selected by the protocol (sUSD, USDC, ETH, etc) and call the “acceptDeal()” method. The investor will get a NFT in exchange representing their position, which will be finalized with all the vesting details and any refunds needed for deallocations when the LP position is created by the protocol.

At the end of the deposit window, the protocol will deposit the paired tokens alongside the protocol tokens deposited into the selected AMM. Any unmatched tokens will be withdrawn by the protocol. There are two different vAMM cases to consider here:

1. The first is a liquidity launch where the price is set by the protocol. In this case the protocol will create a new pool in the selected AMM and deposit at the ratio set by the “Initial Quote Per Base” parameter passed in when the vAMM was created. They will do this by calling a public “provideNewLiquidity()” function, which anyone can call. If the method is not called in the LP Funding Window then investors may take all their capital back.

2. The second case is when a pool already exists and the collected funds will be deposited at the existing price ratio. In this case the protocol is the only address that may call the “provideLiquidity()” function. If the price shifts down from when the vAMM was created then a protocol has the option to add more tokens to match more capital. If the price shifts up from when the vAMM was created the protocol will be LPing less tokens than they originally deposited. The leftover tokens will be turned into single sided rewards going to investors as extra protection against IL since the price has shifted upwards they are more at risk of IL on a downward trend. With the extra single sided rewards the risk of IL on a price dip is minimized greatly.

In either scenario if investors oversubscribe during the deposit window, the excess amount of deposit tokens will be proportionally returned to investors.

When providing liquidity a different library contract will be called depending on the AMM selected (Uniswap, Balancer, etc.). New libraries will be added to a global mapping of valid library contract addresses managed by the Aelin Council. This will allow Aelin to support new AMMs by letting the Aelin Council update the contract mapping without deploying entirely new versions of our contracts.

As soon as investors call “AcceptDeal()” they will be eligible for single sided rewards, although some of these may be on vesting schedules. They will also receive NFTs that represent their LP token vesting schedule and the right to any protocol/trading fees distributed to the locked/vesting LPs so long as they hold the NFT. Locked LPs may transfer all or a partial amount of their holdings stored in the NFT to a new wallet as desired.

Upon vesting, investors may call a “claim()” function to collect their LP tokens and may either choose to receive the LP tokens, withdraw double sided, or may choose to swap to one asset in the pool or another when receiving funds.

### Test Cases

<!--Test cases for an implementation are mandatory for AELIPs but can be included with the implementation..-->

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
