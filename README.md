# AELIPs [![Discord](https://img.shields.io/discord/880914235444572210.svg?color=768AD4&label=discord&logo=https%3A%2F%2Fdiscordapp.com%2Fassets%2F8c9701b98ad4372b58f13fd9f65f966e.svg)](https://discord.gg/r75VTheV) [![Twitter Follow](https://img.shields.io/twitter/follow/aelinprotocol.svg?label=aelinprotocol&style=social)](https://twitter.com/aelinprotocol)

Aelin Improvement Proposals (AELIPs) describe standards for the Aelin platform, including core protocol specifications, client APIs, and contract standards.

# Contributing

1.  Review [AELIP-1](aelips/aelip-1.md).
2.  Fork the repository by clicking "Fork" in the top right.
3.  Add your AELIP to your fork of the repository. There is a [template AELIP here](aelip-x.md).
4.  Submit a Pull Request to Aelin's [AELIPs repository](https://github.com/AelinXYZ/AELIPs).

Your first PR should be a first draft of the final AELIP. It must meet the formatting criteria enforced by the build (largely, correct metadata in the header). An editor will manually review the first PR for a new AELIP and assign it a number before merging it. Make sure you include a `discussions-to` header with the URL to a new thread on [research.aelin.xyz](https://research.aelin.xyz) where people can discuss the AELIP as a whole.

If your AELIP requires images, the image files should be included in a subdirectory of the `assets` folder for that AELIP as follow: `assets/aelip-X` (for aelip **X**). When linking to an image in the AELIP, use relative links such as `../assets/aelip-X/image.png`.

When you believe your AELIP is mature and ready to progress past the Draft phase, you should reach out to a Aelin Council member on discord by searching members with the "Aelin Council" role or finding them within the #governance channel. The Aelin Council will schedule in a call with the AELIP author to go through the AELIP in more detail.

Once assessed, an AELIP is moved into `Feasibility` and a Core Contributor is assigned. The Core Contributor will work with the author to conduct a feasibility study. Once the Author and the Core Contributor are satisfied, an AELIP is moved to `AC Review Pending`. Once the Aelin Council has formally reviewed the AELIP during the AELIP presentation they can either move it to a vote or send it back to `Feasability`. A vote is conducted within the `aelincouncil.eth` snapshot space connected on the [staking](https://staking.aelin.xyz/) dApp. If a vote by the Aelin Council reaches a super majority, the AELIP is moved to `Approved`, otherwise it is `Rejected`.

Once the AELIP has been implemented by either the protocol DAO or the AELIP author and relevant parties, the AELIP is assigned the `Implemented` status. There is a 500 sUSD bounty for proposing an AELIP that reaches the `Implemented` phase.

# AELIP Statuses

- **Draft** - The initial state of a new AELIP before the Aelin Council and core contributors have assessed it.
- **Feasibility** - an AELIP that is being assessed for feasibility with an assigned Core Contributor
- **AC_Review_Pending** - an AELIP that is awaiting a Aelin Council Review after the Author and Core Contributor are satisfied with feasibility
- **Vote_Pending** - an AELIP that is awaiting a vote.
- **Approved** - an AELIP that has successfully reached a super majority Aelin Council vote in favour.
- **Rejected** - an AELIP that has failed to reach a super-majority Aelin Council vote in favour.
- **Implemented** - an AELIP that has been released to main-net.

# Validation

AELIPs must pass some validation tests.

It is possible to run the AELIP validator locally:

```
npm install (if not done already)
npm run test
```

# JSON API

All AELIPs & ACCPs data is available in JSON format by status at the following urls:

## AELIPs

```
https://aelips.aelin.xyz/api/aelips/draft.json
https://aelips.aelin.xyz/api/aelips/feasibility.json
https://aelips.aelin.xyz/api/aelips/ac-review-pending.json
https://aelips.aelin.xyz/api/aelips/vote-pending.json
https://aelips.aelin.xyz/api/aelips/approved.json
https://aelips.aelin.xyz/api/aelips/rejected.json
https://aelips.aelin.xyz/api/aelips/implemented.json
```

## ACCPs

```
https://aelips.aelin.xyz/api/accp/draft.json
https://aelips.aelin.xyz/api/accp/feasibility.json
https://aelips.aelin.xyz/api/accp/ac-review-pending.json
https://aelips.aelin.xyz/api/accp/vote-pending.json
https://aelips.aelin.xyz/api/accp/approved.json
https://aelips.aelin.xyz/api/accp/rejected.json
https://aelips.aelin.xyz/api/accp/implemented.json
```

# Automerger

The AELIP repository contains an "auto merge" feature to ease the workload for AELIP editors. If a change is made via a PR to a draft AELIP, then the authors of the AELIP can Github approve the change to have it auto-merged by the [aelip-automerger](https://github.com/bakaoh/aelip_automerger) bot.
