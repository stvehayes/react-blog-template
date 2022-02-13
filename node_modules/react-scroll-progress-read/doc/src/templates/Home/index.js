import React from "react"
import { Link, graphql } from "gatsby"
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer"
import Layout from "../../components/Layout"
import SEO from "../../components/seo"

import styles from "./styles.module.css"

export default ({ data }) => {
  const { allMdx, mdx } = data
  return (
    <Layout>
      <SEO title={mdx.frontmatter.title} description={mdx.excerpt} />
      <div style={{ marginTop: "30px" }}>
        <h2>{mdx.frontmatter.title}</h2>
        <p>
          When you scroll on the page, the bar indicate the progression on the
          page or on the paragraph.
        </p>
        <h3>{allMdx.totalCount} examples for using the component</h3>
        <ul className={styles.example_list}>
          {data.allMdx.edges.map(({ node }) => (
            <li key={node.id}>
              <Link to={node.frontmatter.slug}>{node.frontmatter.title}</Link>
            </li>
          ))}
        </ul>
        <MDXRenderer>{mdx.body}</MDXRenderer>
        <br />
        <br />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        slug
      }
      body
      excerpt(pruneLength: 100)
    }
    allMdx(
      sort: { fields: [frontmatter___date], order: ASC }
      filter: { frontmatter: { slug: { ne: "/" } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            slug
          }
          excerpt(pruneLength: 100)
        }
      }
    }
  }
`
