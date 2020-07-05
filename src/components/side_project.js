import React from "react"
import styles from "./side_project.module.css"
import helpfulHands from "../assets/helpful_hands.png"
import bandmates from "../assets/bandmates.png"
import Popup from "reactjs-popup"

export default function SideProject() {
  return (
    <div className={styles.row}>
      <Popup
        contentStyle={{ width: "350px", height: "300px", borderRadius: "25px" }}
        on="hover"
        trigger={
          <div className={styles.container}>
            <img
              src={helpfulHands}
              alt="Helpful Hands"
              className={styles.img}
            ></img>
          </div>
        }
      >
        <h1>Helpful Hands</h1>
        <br></br>
        <p>
          During the the difficult brought on by the Covid-19 epidemic, Helping
          Hands seeks to connect those who bare a higher risk of contracting
          Covid-19 with those willing to volunteer to help keep those who are
          most vulnerable safe at home.
        </p>
        <br></br>

        <div className={styles.badgeRow}>
          <a href="https://play.google.com/store/apps/details?id=com.fifteenten.helpinghands">
            <img
              style={{ width: "155px", marginTop: "-10px" }}
              alt="Get it on Google Play"
              src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png"
            />
          </a>

          <a
            href="https://apps.apple.com/us/app/helpful-hands/id1504554846?mt=8"
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
        </div>
      </Popup>
      <Popup
        contentStyle={{ width: "350px", height: "300px", borderRadius: "25px" }}
        on="hover"
        trigger={
          <div className={styles.container}>
            <img src={bandmates} alt="Bandmates" className={styles.img}></img>
          </div>
        }
      >
        <h1>Bandmates</h1>
        <br></br>
        <p>
          Music is always better when shared, Bandmates is an app that hopes to
          embolden local music scenes around the globe by helping musicans to
          connect to other musicians locally in order to foster collaboration.
        </p>
        <br></br>

        <h3>Development currently paused due to Covid-19 </h3>
      </Popup>
      <Popup
        on="hover"
        trigger={
          <div className={styles.container}>
            <p>Coming soon</p>
          </div>
        }
      >
        <div>Whats up?</div>
      </Popup>
    </div>
  )
}
