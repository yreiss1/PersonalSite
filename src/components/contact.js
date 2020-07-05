import React from "react"
import styles from "./contact.module.css"
import { SocialIcon } from "react-social-icons"

class Contact extends React.Component {
  render() {
    return (
      <div className={styles.body}>
        <div className={styles.title}>Contact Me</div>
        <div className={styles.subtitle}>
          Feel free to get in touch with any method below!
        </div>
        <div className={styles.linksRow}>
          <SocialIcon
            bgColor="#0c1b33"
            url="https://github.com/yreiss1"
            style={{ height: "75px", width: "75px" }}
          ></SocialIcon>
          <SocialIcon
            url="https://facebook.com/yuval.reiss.56"
            network="facebook"
            style={{ height: "75px", width: "75px" }}
          ></SocialIcon>
          <SocialIcon
            url="https://linkedin.com/in/yuval-reiss-231405148/"
            style={{ height: "75px", width: "75px" }}
          ></SocialIcon>
          <SocialIcon
            bgColor="#E5C2C0"
            url="mailto:reiss.yuval@gmail.com"
            network="email"
            style={{ height: "75px", width: "75px" }}
          ></SocialIcon>
        </div>
      </div>
    )
  }
}

export default Contact
