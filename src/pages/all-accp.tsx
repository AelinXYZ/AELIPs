import React from 'react'
import { graphql } from 'gatsby'
import { sortBy, filter, flow } from 'lodash/fp'
import { Helmet } from 'react-helmet'

import statuses from '../../ci/statuses'
import { AllAccpQuery } from '../../types/gql'
import Main from '../layout/Main'
import { StatusTable } from '../components/StatusTable'
import { StatusLabel } from '../components/StatusLabel'

interface Props {
  data: AllAccpQuery
}

const Template: React.FC<Props> = ({ data: { allMarkdownRemark } }) => {
  const { group } = allMarkdownRemark

  const columns = flow(
    filter(({ fieldValue }) => statuses.indexOf(fieldValue) > -1),
    sortBy(({ fieldValue }) => statuses.indexOf(fieldValue)),
  )(group) as AllAccpQuery['allMarkdownRemark']['group']

  return (
    <Main>
      <Helmet title="All ACCPs" />
      <header className="post-header">
        <h1 className="post-title">All ACCPs</h1>
      </header>
      <div className="post-content">
        {columns.map((g) => {
          const rows = sortBy('frontmatter.accp')(g.nodes)
          return (
            <div key={g.fieldValue}>
              <StatusLabel label={g.fieldValue} />
              <StatusTable rows={rows as any} />
            </div>
          )
        })}
      </div>
    </Main>
  )
}

export default Template

export const pageQuery = graphql`
  query allAccp {
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/accp/" }
        frontmatter: { accp: { ne: null } }
      }
    ) {
      group(field: frontmatter___status) {
        fieldValue
        nodes {
          id
          frontmatter {
            ...Frontmatter
          }
        }
      }
    }
  }
`
