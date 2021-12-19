import React from 'react'
import { MarkdownRemark } from '../../types/gql'
import { AuthorList } from './AuthorList'

interface Props {
  rows: Partial<MarkdownRemark>[]
}

const StatusTable: React.FC<Props> = ({ rows }) => {
  return (
    <table className="aeliptable">
      <thead>
        <tr>
          <th className="aelipnum">Number</th>
          <th className="title w-2/3">Title</th>
          <th className="author w-1/3">Author</th>
        </tr>
      </thead>

      <tbody>
        {rows.map((row) => (
          <tr key={row.id}>
            <td className="aelipnum">
              {row.frontmatter.aelip ? (
                <a href={`/aelips/aelip-${row.frontmatter.aelip}`}>
                  {row.frontmatter.aelip}
                </a>
              ) : (
                <a href={`/accp/accp-${row.frontmatter.accp}`}>
                  {row.frontmatter.accp}
                </a>
              )}
            </td>
            <td className="title">{row.frontmatter.title}</td>
            <td className="author">
              <AuthorList author={row.frontmatter.author} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export { StatusTable }
