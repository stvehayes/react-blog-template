import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styles from "./styles.module.css"

const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    <div className={styles.header_main}>
      <h1 style={{ margin: 0 }}>
        <Link to="/">{siteTitle}</Link>
      </h1>
      <div className={styles.header_link}>
        <a href="https://github.com/ipatate/react-scroll-progress-read">
          Github
        </a>
        <a href="https://www.npmjs.com/package/react-scroll-progress-read">
          NPM
        </a>
        <a href="https://twitter.com/PatrickFaramaz">Twitter</a>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
