---
aelip: 1
network: Ethereum & Optimism
title: Aelin Improvement Proposals Purpose and Guidelines
status: Draft
author: Alex the Bored Ape (@AlexTheBoredApe)
Release: n/a
Implementor: n/a
created: 2021-12-14
---

## What is an AELIP?

AELIP stands for Aelin Improvement Proposal, it has been adapted from the EIP (Ethereum Improvement Proposal). The purpose of this process is to ensure changes to Aelin are transparent and well governed. An AELIP is a design document providing information to the Aelin community about a proposed change to the protocol. The Aelin Council is responsible for building consensus within the community and documenting dissenting opinions.

## AELIP Rationale

We intend AELIPs to be the primary mechanisms for proposing new features, collecting community input on an issue, and for documenting the design decisions for changes to Aelin. Because they are maintained as text files in a versioned repository, their revision history is the historical record of the feature proposal.

It is highly recommended that a single AELIP contain a single key proposal or new idea. The more focused the AELIP, the more successful it is likely to be.

An AELIP must meet certain minimum criteria. It must be a clear and complete description of the proposed enhancement. The enhancement must represent a net improvement.

## AELIP Work Flow

Parties involved in the process are the _author_, the [_AELIP editors_](#aelip-editors), the [Aelin Core Contributors] and the Aelin community.

:warning: Before you begin, vet your idea, this will save you time. Ask the Aelin community first if an idea is original to avoid wasting time on something that will be rejected based on prior research (searching the Internet does not always do the trick). It also helps to make sure the idea is applicable to the entire community and not just the author. Just because an idea sounds good to the author does not mean it will have the intended effect. The appropriate public forum to gauge interest around your AELIP is [the Aelin Discord].

Your role as the champion is to write the AELIP using the style and format described below, shepherd the discussions in the appropriate forums, and build community consensus around the idea. Following is the process that a successful AELIP will move along:

Each status change is requested by the AELIP author and reviewed by the AELIP editors. Use a pull request to update the status. Please include a link to where people should continue discussing your AELIP. The AELIP editors will process these requests as per the conditions below.

- **Draft** -- This AELIP is work-in-progress and being reviewed by an Aelin Council member with the champion.
- **Feasibility** -- This AELIP is assigned with a Core Contributor and undergoing a feasibility study.
- **AC Review Pending** -- This AELIP is being formally reviewed by the Aelin Council to decide on voting or sent back for feasibility study.
- **Vote Pending** -- This AELIP is scheduled for the Aelin Council to vote on via snapshot.
- **Approved** -- This AELIP has passed community governance and is now being prioritised for development.
- **Rejected** -- This AELIP has failed to reach community consensus.
- **Implemented** -- This AELIP has been implemented and deployed to mainnet.

## What belongs in a successful AELIP?

Each AELIP should have the following parts:

- Preamble - RFC 822 style headers containing metadata about the AELIP, including the AELIP number, a short descriptive title (limited to a maximum of 44 characters), and the author details.
- Simple Summary - “If you can’t explain it simply, you don’t understand it well enough.” Provide a simplified and layman-accessible explanation of the AELIP.
- Abstract - a short (~200 word) description of the technical issue being addressed.
- Motivation (\*optional) - The motivation is critical for AELIPs that want to change Aelin. It should clearly explain why the existing specification is inadequate to address the problem that the AELIP solves. AELIP submissions without sufficient motivation may be rejected outright.
- Specification - The technical specification should describe the syntax and semantics of any new feature.
- Rationale - The rationale fleshes out the specification by describing what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work, e.g. how the feature is supported in other languages. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.
- Test Cases - Test cases may be added during the implementation phase but are required before implementation.
- Copyright Waiver - All AELIPs must be in the public domain. See the bottom of this AELIP for an example copyright waiver.

## AELIP Formats and Templates

AELIPs should be written in [markdown] format.
Image files should be included in a subdirectory of the `assets` folder for that AELIP as follows: `assets/aelip-X` (for aelip **X**). When linking to an image in the AELIP, use relative links such as `../assets/aelip-X/image.png`.

## AELIP Header Preamble

Each AELIP must begin with an [RFC 822](https://www.ietf.org/rfc/rfc822.txt) style header preamble, preceded and followed by three hyphens (`---`). This header is also termed ["front matter" by Jekyll](https://jekyllrb.com/docs/front-matter/). The headers must appear in the following order. Headers marked with "\*" are optional and are described below. All other headers are required.

` aelip:` <AELIP number> (AELIP numbering is sequential. This is number 1)

` title:` <AELIP title>

` author:` <a list of the author's or authors' name(s) and/or username(s), or name(s) and email(s). Details are below.>

` * discussions-to:` \<a url pointing to the official discussion thread or discord channel\>

` status:` < Draft \| Feasibility \| AC Review Pending \| Vote Pending \| Approved \| Rejected \| Implemented >

` created:` <date created on>

` * implementer:` \<a the person working on implementing this AELIP\>

` * release:` \<a the date the code in this AELIP was deployed\>

` * updated:` <comma separated list of dates>

` * requires:` <AELIP number(s)>

` * resolution:` \<a url pointing to the resolution of this AELIP\>

Headers that permit lists must separate elements with commas.

Headers requiring dates will always do so in the format of ISO 8601 (yyyy-mm-dd).

#### `author` header

The `author` header optionally lists the names, email addresses or usernames of the authors/owners of the AELIP. Those who prefer anonymity may use a username only, or a first name and a username. The format of the author header value must be:

> Random J. User &lt;address@dom.ain&gt;

or

> Random J. User (@username)

if the email address or GitHub username is included, and

> Random J. User

if the email address is not given.

#### `discussions-to` header

While an AELIP is in **Draft** or **Feasibility** status, a `discussions-to` header will indicate the URL where the AELIP is being discussed.

#### `created` header

The `created` header records the date that the AELIP was assigned a number. Both headers should be in yyyy-mm-dd format, e.g. 2001-08-14.

#### `updated` header

The `updated` header records the date(s) when the AELIP was updated with "substantial" changes. This header is only valid for AELIPs of Draft and Active status.

#### `requires` header

AELIPs may have a `requires` header, indicating the AELIP numbers that this AELIP depends on.

## Auxiliary Files

AELIPs may include auxiliary files such as diagrams. Such files must be named AELIP-XXXX-Y.ext, where “XXXX” is the AELIP number, “Y” is a serial number (starting at 1), and “ext” is replaced by the actual file extension (e.g. “png”).

# AELIP Implementors

AELIP Implementors are core contributors developing the proposals that are passed through governance.

## AELIP Editors

AELIP Editors are assigned by the Council. AELIP editors are the only ones who can merge to the AELIPs repo, this is to ensure correct processes and procedures are adhered to for AELIPs. The current AELIP editors are

` * Kain Warwick (@kaiynne)`

` * Alex the Bored Ape (@AlexTheBoredApe)`

` * 0xcdb (@0xcdb)`

## AELIP Editor Responsibilities

For each new AELIP that comes in, an editor does the following:

- Read the AELIP to check if it is ready: sound and complete. The ideas must make technical sense, even if they don't seem likely to get to final status.
- The title should accurately describe the content.
- Check the AELIP for language (spelling, grammar, sentence structure, etc.), markup (Github flavored Markdown), code style

If the AELIP isn't ready, the editor will send it back to the author for revision, with specific instructions.

Once the AELIP is ready for the repository, the AELIP editor will:

- Assign an AELIP number (generally the PR number or, if preferred by the author, the Issue # if there was discussion in the Issues section of this repository about this AELIP)

- Merge the corresponding pull request

- Send a message back to the AELIP author with the next step.

If a AELIP author submits a PR to a AELIP that is already in “Vote Pending” the AELIP editor must notify the council of the change before merging the PR, and if requested move the AELIP back into “Feasibility”

If a AELIP author submits a PR to a AELIP that is already in “Approved” or “Implemented” then the AELIP editor must request a review of the change by the Council and, if the change is deemed material by the council, must move the AELIP back to “Feasibility”

If a AELIP is in “Approved” or “Implemented” and the CC assigned to the AELIP no longer believes the AELIP is feasible to implement they must notify the Council as soon as is practical that a vote should be held to decide whether to move the AELIP to “Rejected”

A vote to move a AELIP from “Approved” or “Implemented” to “Rejected” must reference the previous vote and the AELIP should be updated with a note to indicate that it was “Rejected” for infeasibility post Approval.

Many AELIPs are written and maintained by developers with write access to the Aelin codebase. The AELIP editors monitor AELIP changes, and correct any structure, grammar, spelling, or markup mistakes we see.

The editors don't pass judgment on AELIPs. We merely do the administrative & editorial part.

AELIP editors must merge or close PRs to the AELIPs repo within a reasonable time, ideally within two weeks of submission. The Council can request an AELIP editor to extend this process if needed to allow governance to assess the AELIP.

A Council member may at any time request that an AELIP be moved from “Rejected” back to “Feasibility” if they believe that the underlying circumstances that caused the AELIP to be rejected have changed.

AELIP editors who fail to adhere to the consensus rules and procedures can be removed at the discretion of the council.

## History

The AELIP document was derived heavily from the EIP Ethereum Improvement Proposal document in many places text was simply copied and modified. Any comments about the AELIP document should be directed to the AELIP editors. The history of the EIP is quoted below from the EIP document for context:

- _"This document (EIP) was derived heavily from [Bitcoin's BIP-0001] written by Amir Taaki which in turn was derived from [Python's PEP-0001]. In many places text was simply copied and modified. Although the PEP-0001 text was written by Barry Warsaw, Jeremy Hylton, and David Goodger, they are not responsible for its use..."_ \*

June 10, 2019: AELIP 1 has been drafted and submitted as a PR.

See [the revision history for further details](https://github.com/AelinXYZ/), which is also available by clicking on the History button in the top right of the AELIP.

### Bibliography

[the aelin discord]: https://discord.gg/nhf23nU8
[pull request]: https://github.com/AelinXYZ/AELIPs/pulls
[markdown]: https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet
[bitcoin's bip-0001]: https://github.com/bitcoin/bips
[python's pep-0001]: https://www.python.org/dev/peps/

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
