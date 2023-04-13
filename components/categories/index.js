import React from "react"
import Link from "next/link"

import styles from "./styles.module.css"

function Catgories({ categories }) {
  return (
    <div className={styles.categories}>
      {categories.map((category) => (
        <Link
          key={category.id}
          href={`/category/${category.id}`}
          className={styles.category}
        >
          <div className={styles.name}>{category.name}</div>
        </Link>
      ))}
    </div>
  )
}

export default Catgories
