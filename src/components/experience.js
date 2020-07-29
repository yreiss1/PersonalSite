import React from "react"
import styles from "../styles/experience.module.css"

export default function Experience({ text, subtitle, title, img, date, google, apple }) {
  console.log(google);
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

        <div className={styles.badgeRow}>
          {google !== null &&
          <a href={google}>
            <img
              style={{ width: "155px", marginTop: "-10px" }}
              alt="Get it on Google Play"
              src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png"
            />
          </a>
}
          {apple !== null &&
          <a
            href={apple}
            alt="Download on the Apple Store"
            style={{
              display: "inline-block",
              overflow: "hidden",
              background: `url(
                ${"https://linkmaker.itunes.apple.com/en-us/badge-lrg.svg?releaseDate=2020-05-06&kind=iossoftware&bubble=ios_apps"}
              )`,
              width: "135px",
              height: "40px",
            }}
          ></a>
}
        </div>
      </div>
    </div>
  )
}
