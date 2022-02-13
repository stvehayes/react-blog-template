import React from "react"
import { Link } from "gatsby"

import styles from "./styles.module.css"

const Breadcrumb = ({ list }) => {
  return (
    <ul className={styles.breadcrumb}>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      {list.map(e => {
        if (e.link) {
          return (
            <li key={e.title}>
              <Link to={e.link}>{e.title}</Link>
            </li>
          )
        }
        return <li key={e.title}>{e.title}</li>
      })}
    </ul>
  )
}

export default Breadcrumb
