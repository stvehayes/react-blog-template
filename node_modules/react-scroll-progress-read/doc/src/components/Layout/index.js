import React from "react"
import PropTypes from "prop-types"
import { MDXProvider } from "@mdx-js/react"
import { useStaticQuery, graphql } from "gatsby"

import { MDXLayoutComponents, MDXGlobalComponents } from "../mdx"

import Header from "../Header"
import styles from "./styles.module.css"

import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <MDXProvider
        components={{
          ...MDXLayoutComponents,
          ...MDXGlobalComponents,
        }}
      >
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className={styles.container}>
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built by{" "}
            <a href="https://twitter.com/PatrickFaramaz">Faramaz Patrick</a>{" "}
            with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </MDXProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
