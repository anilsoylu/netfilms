import React from "react"
import Link from "next/link"

import styles from "./styles.module.css"

function index() {
  return (
    <footer className={styles.footer}>
      Made with ❤️ by&nbsp;
      <Link href="https://twitter.com/anilsoylu" target="_blank">
        Anıl SOYLU
      </Link>
    </footer>
  )
}

export default index
