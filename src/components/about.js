import React from "react"
import aboutStyles from "../styles/about.module.css"

export default function About() {
  return (
    <div className={aboutStyles.background}>
      <div className={aboutStyles.title}>About Me</div>
      <div className={aboutStyles.text}>
      <strong>Hello!</strong> I am an experienced software engineer passionate about using new technologies to build unique and creative user experiences that are both productive, efficient and scalable. 
I recently obtained a Master’s degree in <strong>Computer Science</strong> from the <strong>University of Maryland</strong>.
<br/>
<br/>
Some of my other passions include anything <b>Guitar</b> related (I'm a little obsessed), almost all forms of <b>Rock & Roll</b>,<b>World History</b> , <b>Education</b>, and being outside as much as I can before I get sunburnt.
        <br />
        <br />
        Feel free to reach out if you're interested in working together or just
        to say hello!
      </div>
    </div>
  )
}
