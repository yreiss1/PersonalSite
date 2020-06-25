import React from "react"
import styles from "./portfolio.module.css"
import SideProject from "./side_project.js"
import Experience from "./experience.js"
import maryland from "../assets/maryland.png"
import hughes from "../assets/hughes.png"
import capone from "../assets/capone.png"
import higherLogic from "../assets/higherlogic.png"
export default function Portfolio() {
  return (
    <div className={styles.background}>
      <div className={styles.title}>Portfolio</div>

      <div className={styles.subtitle}>Side Projects</div>
      <SideProject></SideProject>

      <div className={styles.subtitle}>Work/Education</div>
      <Experience
        text={
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed ."
        }
        subtitle={"Masters in Computer Science, earned May 2020"}
        title={"University of Maryland"}
        img={maryland}
      ></Experience>
      <Experience
        text={
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed ."
        }
        subtitle={"Software Engineer Intern - Mobile Payments Team"}
        title={"Capital One"}
        img={capone}
      ></Experience>
      <Experience
        text={
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed ."
        }
        subtitle={"B.S in Computer Science, earned May 2019"}
        title={"University of Maryland"}
        img={maryland}
      ></Experience>
      <Experience
        text={
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed ."
        }
        subtitle={"Software Engineer Intern - FullStack Web Team"}
        title={"Higher Logic"}
        img={higherLogic}
      ></Experience>
      <Experience
        text={
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed ."
        }
        subtitle={"Software Engineer Intern"}
        title={"Hughes Echostar"}
        img={hughes}
      ></Experience>
    </div>
  )
}
