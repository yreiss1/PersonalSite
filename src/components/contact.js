import React from "react"
import styles from "./contact.module.css"
class Contact extends React.Component {
  render() {
    return (
      <div className={styles.body}>
        <div className={styles.title}>Contact Me</div>
        <div className={styles.subtitle}>
          Shoot me a message if you’d like to work together, or just want to say
          hello!
        </div>
        <div className={styles.subtitle}>Form Coming soon</div>
      </div>
    )
  }
}

export default Contact
