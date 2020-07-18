import React from "react"
import styles from "../styles/footer.module.css"

export default function Footer() {
  return (
    <div className={styles.background}>
      <div className={styles.row}>
        <div className={styles.text}>
          Designed and developed by me using Gatsby.js
        </div>
        <div className={styles.text}> All rights reserved 2020</div>
      </div>
    </div>
  )
}
