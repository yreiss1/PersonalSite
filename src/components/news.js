import React from "react"
import styles from "../styles/news.module.css"

import Popup from "reactjs-popup"


export default function News() {

    return <div className={styles.background}>
        <div className={styles.title}>In the News</div> 
        <div style={{'paddingBottom': '50px'}}>Hover over images for more information</div>

        <div className={styles.row}> 
        <Popup
        contentStyle={{ width: "350px",  borderRadius: "25px" }}
        on="hover"
        trigger={
        <div className={styles.container}>
        
            <img
              src={"https://seekvectorlogo.net/wp-content/uploads/2019/01/patch-media-vector-logo.png"}
              alt=""
              className={styles.img}
            ></img>
          </div>}
          > <h1>Coronavirus Inspires UMD Grads To Create App For Volunteers</h1>
          <br></br>
          <p>
          I was interviewed by Patch Media in April of 2020 about Helpful Hands, an app designed to help those struggling most through the Covid-19 pandemic.
          </p>
          <br></br>
        
            <a href="https://patch.com/maryland/collegepark/coronavirus-inspires-umd-grads-create-app-volunteers?fbclid=IwAR1MXi4WVKO_0Kjh0KpJ5fenDla3m81ou3acKlJUJvCrb_BhjokOhRPVi2I">Link To Article</a>
          
          </Popup>

          <Popup
        contentStyle={{ width: "350px",  borderRadius: "25px" }}
        on="hover"
        trigger={
          <div className={styles.container}>
            <img
              src={"https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/challenge_thumbnails/000/772/130/datas/original.png"}
              alt="Helpful Hands"
              className={styles.img}
            ></img>
          </div>}
          >
              <h1>Google's 1st Place at Bitcamp Hackathon</h1>
          <br></br>
          <p>
              I was awarded Google's 1st place for the best use of Google's cloud platform for my app DoDally.
          </p>
          <br></br>

          <a href="https://devpost.com/software/dodally">To Devpost</a>

          </Popup>
        </div>

    </div> 
}