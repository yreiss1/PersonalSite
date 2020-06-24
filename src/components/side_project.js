import React from "react"
import styles from "./side_project.module.css"
import helpfulHands from "../assets/helpful_hands.png"
import bandmates from "../assets/bandmates.png"

export default function SideProject() {
  return (
    <div className={styles.row}>
      <div className={styles.container}>
        <img
          src={helpfulHands}
          alt="Helpful Hands"
          className={styles.img}
        ></img>
      </div>
      <div className={styles.container}>
        <img src={bandmates} alt="Bandmates" className={styles.img}></img>
      </div>
      <div className={styles.container}>
        <p>Coming soon</p>
      </div>
    </div>
  )
}
