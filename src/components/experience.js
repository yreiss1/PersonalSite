import React from "react"
import styles from "./experience.module.css"
import bandmates from "../assets/bandmates.png"

export default function Experience({ text, subtitle, title, img }) {
  return (
    <div className={styles.row}>
      <div className={styles.container}>
        {" "}
        <img src={img} alt="Bandmates" className={styles.img}></img>
      </div>
      <div className={styles.col}>
        <div className={styles.title}>{title}</div>
        <div className={styles.subtitle}>{subtitle}</div>
        <br></br>
        <div className={styles.body}>{text}</div>
      </div>
    </div>
  )
}
