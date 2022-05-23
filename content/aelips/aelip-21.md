---
aelip: 21
network: Optimism
title: Pool Filtering
status: Draft
author: Ser Link (@S3rLink)
Release: n/a
Implementor: n/a
created: 05-20-2022
---

## Simple Summary

This AELIP proposes to increase users’ confidence in Aelin raises by introducing a way in which the council, a limited number of other trusted people, and community members may leverage their reputation to vouch for reputable pool sponsors. Users will then have the ability to filter the “All pools” user interface to show only pools that have attained a reputation level they are willing to consider for investment.

## Abstract

This AELIP proposes to establish a way for trusted addresses to express confidence in a sponsor and for users to then be able to filter the user interface such that it is cleaner and only shows trusted pools while still allowing the protocol to be accessible to all sponsors.

## Motivation

There is currently no way in which legitimate sponsors may differentiate their pool from pools that are malicious or spam. So far 3 pools have resulted in a deal being brought to users (out of a total of over 40 pools created excluding the Aelin raise). There is nothing in place to prioritize legitimate pools on the user interface resulting in legitimate pools becoming less visible as new, potentially spam pools are created. This has contributed to a lack of user confidence in many sponsors which has resulted in increasingly lower pool participation by users. Lower pool participation has made it difficult for serious sponsors to raise the amount of capital required to negotiate a deal on behalf of the users. It is critical for the protocol to create a way in which legitimate sponsors can demonstrate / market their legitimacy and hold their vouchers accountable via their reputation for the sponsor’s performance.

## Specification

### Overview

Once a pool is created, the sponsor may solicit the council, certain people the council has awarded vouching rights to, and community members with an ENS address to vouch for their pool. This will allow users to filter the user interface based on the extent that a pool has been vouched for.

The first and default filter will be to show only pools that have either been vouched for directly by the Aelin council or by people the council has delegated this right to. For instance, the Aelin council may determine to allow addresses such as one associated with Optimism or Kain.eth to vouch for a pool. Receiving the support of either of the council or trusted vouchers represents the highest level of trust a pool is able to receive and is notated with a tick mark. This does not indicate any degree of due diligence that has been performed or provide an expectation of investment performance, but rather is an attestation that the sponsor is known, not believed to be a scammer, and that users can expect to receive the token that they paid for.

The next level of vouching can be performed by any community member with an ENS address. This won’t give a tickmark to the pool since it isn’t the highest level of reputational vouching, but it will add an additional layer that can be filtered to differentiate from pools who have not been vouched for at all. Since any ENS address will have the ability to perform this basic vouch function, users will need to review the listing of addresses that have vouched for the pool to determine if addresses they trust have signaled support for the pool they are considering investing in.

Aelin council members are disallowed from directly vouching from pools.

### Rationale

As evidenced by the number of spam pools that now represent the large majority of pools on the user interface, it is critical for the protocol to establish a way for sponsors to market the legitimacy of their pool. Establishing an additional evaluation metric serves the interest of sponsors who wish to bring a deal to users, but who have not yet built a strong reputation within the community. Additionally, it is important for users to have the ability to customize their filter to only view quality pools if they wish.

### Technical Specification

Add a “vouch” function in the pool smart contract which will emit a “vouched” event. This event can then be indexed by the graph, which will be fetched from the UI. Every pool in the UI will have a vouch section showing addresses and ENS. If a pool hasn’t been vouched, it will be hidden by default in the UI.

Additionally, there will be a new contract deployed that will be owned by the Aelin Council with a sole method called “delegateVouch”, where only the Council may call it with an address that the Council trusts to vouch for a pool.

### Test Cases

N/A

### Configurable Values (Via ACCP)

N/A

## Copyright

Copyright and related rights waived via CC0.
