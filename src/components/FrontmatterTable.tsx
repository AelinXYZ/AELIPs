import React from 'react'
import { format } from 'date-fns'
import { graphql } from 'gatsby'

import { FrontmatterFragment } from '../../types/gql'
import { AuthorList } from './AuthorList'
import { ProposalStatus } from './ProposalStatus'

interface Props {
  frontmatter: FrontmatterFragment
}

const FrontmatterTable: React.FC<Props> = ({ frontmatter }) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>Author</th>
          <td>
            <AuthorList author={frontmatter.author} />
          </td>
        </tr>
        <tr>
          <th>Status</th>
          <td>{frontmatter.status}</td>
        </tr>

        {frontmatter.type && (
          <tr>
            <th>Type</th>
            <td>{frontmatter.type}</td>
          </tr>
        )}

        {frontmatter.network && (
          <tr>
            <th>Network</th>
            <td>{frontmatter.network}</td>
          </tr>
        )}

        <tr>
          <th>Implementor</th>
          <td>{frontmatter.implementor || 'TBD'}</td>
        </tr>

        <tr>
          <th>Release</th>
          <td>{frontmatter.release || 'TBD'}</td>
        </tr>

        {frontmatter.proposal && (
          <tr>
            <th>Proposal</th>
            <td>
              <ProposalStatus url={frontmatter.proposal} />
            </td>
          </tr>
        )}

        {frontmatter.discussions_to && (
          <tr>
            <th>Discussions-To</th>
            <td>
              <a href={frontmatter.discussions_to}>
                {frontmatter.discussions_to}
              </a>
            </td>
          </tr>
        )}
        {frontmatter.created && (
          <tr>
            <th>Created</th>
            <td>{format(new Date(frontmatter.created), 'yyyy-MM-dd')}</td>
          </tr>
        )}
        {frontmatter.updated && (
          <tr>
            <th>Updated</th>
            <td>{format(new Date(frontmatter.created), 'yyyy-MM-dd')}</td>
          </tr>
        )}
      </tbody>
    </table>
  )
}

export const query = graphql`
  fragment Frontmatter on MarkdownRemarkFrontmatter {
    aelip
    accp
    title
    author
    type
    proposal
    implementor
    release
    discussions_to
    created
    updated
    status
  }
`

export default FrontmatterTable
