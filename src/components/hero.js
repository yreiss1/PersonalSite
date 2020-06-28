import React from "react"
import heroStyles from "./hero.module.css"
import hero from "../assets/hero.jpeg"
import typography from "../utils/typography.js"

export default function Hero() {
  return (
    <div>
      <div className={heroStyles.navbar}>
        <a href="#about" className={heroStyles.navlinks}>
          About
        </a>
        <a href="#portfolio" className={heroStyles.navlinks}>
          Portfolio
        </a>
        <a href="#contact" className={heroStyles.navlinks}>
          Contact
        </a>
      </div>
      <div className={heroStyles.fadeIn}>
        <img className={heroStyles.img} src={hero} alt="Yuval Reiss"></img>
        <div className={heroStyles.position}>
          <div className={heroStyles.hello}>Hello, I'm</div>
          <div className={heroStyles.name}>Yuval Reiss</div>
        </div>
      </div>
    </div>
  )
}
