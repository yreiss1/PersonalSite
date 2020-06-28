import React from "react"
import aboutStyles from "./about.module.css"

export default function About() {
  return (
    <div className={aboutStyles.background}>
      <div className={aboutStyles.title}>About Me</div>
      <div className={aboutStyles.text}>
        <b>Hello!</b> as you can tell from the section above my name is Yuval
        Reiss. I am a software engineer passionate about using to new
        technologies to build unique and creative user experiences that are both
        effecient and scalable. Some of my other passions include anything
        <b> Guitar</b> related (I'm alittle obssesed), almost all forms of{" "}
        <b>Rock & Roll</b>, <b>World History</b>, <b>Education</b>, and being
        outside as much as I can before I get sunburnt.
        <br />
        <br />
        Feel free to reach out if you're interested in working together or just
        to say hello!
      </div>
    </div>
  )
}
