import React from "react"
import styles from "./experience.module.css"

export default function Experience({ text, subtitle, title, img, date }) {
  return (
    <div
      className={styles.row}
      data-sal="slide-right"
      data-sal-delay="0"
      data-sal-easing="ease"
    >
      <div className={styles.container}>
        {" "}
        <img src={img} alt={title} className={styles.img}></img>
      </div>
      <div className={styles.col}>
        <div className={styles.title}>{title}</div>
        <div className={styles.subtitle}>
          {subtitle}
          <i>{date}</i>
        </div>
        <br></br>
        <div className={styles.body}>{text}</div>
      </div>
    </div>
  )
}
