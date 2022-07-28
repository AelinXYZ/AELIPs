---
aelip: 17
network: Optimism
title: AELIP Rewards
status: Implemented
author: Ser Link (@S3rLink)
Release: n/a
Implementor: n/a
created: 04-19-2022
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Simply describe the outcome the proposed changes intends to achieve. This should be non-technical and accessible to a casual community member.-->

This AELIP proposes to incentivize greater participation in governance and grow the Aelin protocol by rewarding community members who draft successful AELIPs.

## Abstract

<!--A short (~200 word) description of the proposed change, the abstract should clearly describe the proposed change. This is what *will* be done if the AELIP is implemented, not *why* it should be done or *how* it will be done. If the AELIP proposes deploying a new contract, write, "we propose to deploy a new contract that will do x".-->

Aelin is ready to further decentralize by engaging the community in the shared responsibility of improving the protocol. Community members who identify an opportunity to improve the protocol may draft an AELIP and will be rewarded with AELIN tokens in compensation for their efforts if the AELIP is approved by the Aelin Council.

## Motivation

<!--This is the problem statement. This is the *why* of the AELIP. It should clearly explain *why* the current state of the protocol is inadequate.  It is critical that you explain *why* the change is needed, if the AELIP proposes changing how something is calculated, you must address *why* the current calculation is inaccurate or wrong. This is not the place to describe how the AELIP will address the issue!-->

Currently all AELIPs published to date have come from the same four people. This isn’t inherently bad; however, the decentralization of thought leadership and responsibility for improvement across the entire community will strengthen the protocol. Not only will the protocol become less dependent on a few people, but those people will have the opportunity to be more selective of which AELIPs they want to sponsor, freeing up additional time for them to focus on other important tasks such as writing code, outreach, or higher level protocol governance.

## Specification

### Overview

<!--This is a high-level overview of *how* the AELIP will solve the problem. The overview should clearly describe how the new feature will be implemented.-->

To become eligible for this reward, community members must first draft an AELIP in accordance with the guidelines, make it available for public comment, and present it to the Aelin Council. If the AELIP passes the Council’s vote, the community member sponsoring the AELIP is eligible for a reward of up to $4,000 USD, paid in AELIN. This max reward amount will be configurable as an ACCP. As some AELIPs may create an exceptionally high amount of value to the protocol, in rare circumstances the council may use their judgment to award an additional one-time payment outside of this process for significant work performed. The reward will be shared equally if multiple community members author the AELIP unless they suggest a different allocation.

No two AELIPs require the same amount of expertise or effort to bring to a passing vote; therefore, they should not be rewarded equally. Additionally, certain AELIPs carry a greater technical debt than others and must be considered if the authors are unable to implement. AELIP compensation will be based on two factors, impact and effort, as judged by the council after passing an AELIP authored by a member of the community. These two factors will be assigned a value for each AELIP on a scale of 1 (low) to 10 (high) by the 5 council members resulting in a total “score” out of 100. If less than 5 council members participate, an average will be used. Once a score is determined, it will be used as a reduction factor to the total reward.

An example of this in practice is as follows: If the AELIP had a very significant impact to the protocol and received an average value of 9 for impact, but either required moderate effort to author or incurs average technical debt and receives an average value of 4 for effort, the total score would be (9 X 5) + (4 X 5) = 65. This total score of 65 would then be divided by 100 and multiplied by $4,000 USD and paid at the commensurate value in AELIN.

Core contributors will not be eligible for this reward. Council members are eligible to receive this reward; however, will be required to recuse themselves from voting. If more than one council member is responsible for co-authoring an AELIP, it will not be eligible for rewards. Additionally, the AELIN council reserves the right to disqualify an AELIP from being eligible for a reward for any reason such as if it does not introduce a meaningful change, it has been unnecessarily split into multiple AELIPs to gain additional rewards, etc.

### Rationale

<!--This is where you explain the reasoning behind how you propose to solve the problem. Why did you propose to implement the change in this way, what were the considerations and trade-offs. The rationale fleshes out what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->

AELIPs play a significant role in the success of the protocol; however, being a relatively new protocol, the core contributors and council members need to focus their efforts on the highest use of their time which often isn’t drafting and sponsoring AELIPs. By activating the community to participate in improving the protocol, Aelin can grow at an even more rapid pace without taking on additional fixed overhead. Further, this puts governance power in the hands of the community members who are most focused on finding ways to improve the protocol with Aelin and incentivizes them to continue to be active governance participants.

### Technical Specification

<!--The technical specification should outline the public API of the changes proposed. That is, changes to any of the interfaces Synthetix currently exposes or the creations of new ones.-->

N/A

### Test Cases

<!--Test cases for an implementation are mandatory for AELIPs but can be included with the implementation..-->

TBD

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
