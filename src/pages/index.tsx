import * as React from 'react'
import { Helmet } from 'react-helmet'

import Main from '../layout/Main'

// markup
const IndexPage = () => (
  <Main>
    <Helmet title="Aelin Improvement Proposals" />
    <h1 className="page-heading">
      Aelin Improvement Proposals{' '}
      <a
        href="https://discordapp.com/channels/880914235444572210/"
        rel="nofollow"
      >
        <img
          alt="Discord"
          src="https://img.shields.io/discord/880914235444572210?color=768AD4"
        />
      </a>
    </h1>
    <p>
      Aelin Improvement Proposals (AELIPs) describe standards for the Aelin
      platform, including core protocol specifications, client APIs, and
      contract standards.
    </p>

    <h2>Contributing</h2>
    <ol>
      <li>
        Review <a href="/aelips/aelip-1">AELIP-1</a>.
      </li>
      <li>
        Fork the repository by visiting the AELIPs{' '}
        <a href="https://github.com/AelinXYZ/AELIPs">repo</a> and pressing
        "Fork" in the top right.
      </li>
      <li>
        Add your AELIP to your fork of the repository. There is a{' '}
        <a href="https://github.com/AelinXYZ/AELIPs/blob/master/aelip-x.md">
          template AELIP here
        </a>
        .
      </li>
      <li>
        Submit a Pull Request to Aelin's{' '}
        <a href="https://github.com/AelinXYZ/AELIPs">AELIPs repository</a>.
      </li>
    </ol>

    <p>
      Your first PR should be a first draft of the final AELIP. It must meet the
      formatting criteria enforced by the build (largely, correct metadata in
      the header). An editor will manually review the first PR for a new AELIP
      and assign it a number before merging it. Make sure you include a{' '}
      <code>discussions-to</code> header with the URL to a discussion forum or
      open GitHub issue where people can discuss the AELIP as a whole.
    </p>
    <p>
      If your AELIP requires images, the image files should be included in a
      subdirectory of the `assets` folder for that AELIP as follow:{' '}
      <code>aelips/assets/aelip-X</code> (for aelip <b>X</b>). When linking to
      an image in the AELIP, use relative links such as{' '}
      <code>../assets/aelip-X/image.png</code>.
    </p>
    <p>
      When you believe your AELIP is mature and ready to progress past the{' '}
      <code>Draft</code> phase, you should reach out to a Aelin Council member
      on discord by searching members with the "Aelin Council" role or finding
      them within the #governance channel. The Aelin Council will schedule in a
      call with the AELIP author to go through the AELIP in more detail.
    </p>

    <p>
      Once assessed, an AELIP is moved into <code>Feasibility</code> and a Core
      Contributor is assigned. The Core Contributor will work with the author to
      conduct a feasibility study. Once the Author and the Core Contributor are
      satisfied, an AELIP is moved to <code>AC Review Pending</code>. Once the
      Aelin Council has formally reviewed the AELIP during the AELIP
      presentation they can either move it to a vote or send it back to{' '}
      <code>Feasability</code>. A vote is conducted within the{' '}
      <code>aelincouncil.eth</code> snapshot space connected on the snapshot
      dApp. If a vote by the Aelin Council reaches a super majority, the AELIP
      is moved to <code>Approved</code>, otherwise it is <code>Rejected</code>.
    </p>

    <p>
      Once the AELIP has been implemented by either the protocol DAO or the
      AELIP author and relevant parties, the AELIP is assigned the{' '}
      <code>Implemented</code> status. Community members who successfully reach
      this stage are entitled to a reward from the Aelin Protocol.
    </p>

    <h2>AELIP status terms</h2>
    <ul>
      <li>
        <strong>Draft</strong> - The initial state of a new AELIP before the
        Aelin Council and core contributors have assessed it.
      </li>
      <li>
        <strong>Feasibility</strong> - an AELIP that is being assessed for
        feasability with an assigned Core Contributor
      </li>
      <li>
        <strong>AC Review Pending</strong> - an AELIP that is awaiting a Aelin
        Council Review after the Author and Core Contributor are satisfied with
        feasibility
      </li>
      <li>
        <strong>Vote Pending</strong> - an AELIP that is awaiting a vote.
      </li>
      <li>
        <strong>Approved</strong> - an AELIP that has successfully reached a
        super majority Aelin Council vote in favour.
      </li>
      <li>
        <strong>Rejected</strong> - an AELIP that has failed to reach a
        supermajority Aelin Council vote in favour.
      </li>
      <li>
        <strong>Implemented</strong> - an AELIP that has been released to
        main-net.
      </li>
    </ul>
  </Main>
)

export default IndexPage
