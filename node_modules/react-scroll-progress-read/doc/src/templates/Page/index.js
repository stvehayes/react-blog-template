import React from "react"
import { graphql, Link } from "gatsby"
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer"

import SEO from "../../components/seo"
import Layout from "../../components/Layout"
import Breadcrumb from "../../components/Breadcrumb"

import styles from "./styles.module.css"

export default ({ data, pathContext }) => {
  const { mdx } = data
  const { prev, next } = pathContext
  console.log(prev, next)

  return (
    <Layout>
      <SEO title={mdx.frontmatter.title} description={mdx.excerpt} />
      <Breadcrumb list={[{ title: mdx.frontmatter.title }]} />
      <div>
        <h2 className={styles.h2}>{mdx.frontmatter.title}</h2>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </div>
      <div className={styles.pagination}>
        <div>
          {prev && (
            <Link to={prev.frontmatter.slug}>{prev.frontmatter.title}</Link>
          )}
        </div>
        <div>
          {next && (
            <Link to={next.frontmatter.slug}>{next.frontmatter.title}</Link>
          )}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        slug
      }
      body
      excerpt(pruneLength: 100)
    }
  }
`
