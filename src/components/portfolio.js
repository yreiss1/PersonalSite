import React from "react"
import styles from "../styles/portfolio.module.css"
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
          "As a recent graduate student at the University of Maryland I got to expand and continue all the things I loved in my Bachelor’s studies. Along with taking advanced Computer Science courses, I joined the Computer Science Department's Human Computer Interaction (HCI) lab, and led a research project focused on building different translational technologies and testing their viability in different use cases. I represented the Computer Science (CS) Graduate student body as a member of the CS department's educational comittee and became the head teachers assistance overseeing approximately 30 teachers assistants each semester, the largest class at the University of Maryland, Introduction to Object Orienting Programming (CMSC 131)."
        }
        subtitle={"Masters in Computer Science, "}
        title={"University of Maryland"}
        date={"earned May 2020"}
        img={maryland}
      ></Experience>
      <Experience
        text={
          "Responsible for rewriting and migrating the Payments API within the Capital One’s iOS app. Recognized for successfully refactoring code to increase scalability and testability. Wrote the payment DELETE Cloud API, which allows users to cancel scheduled payments. Participated in designing API and Coordinator interface to handle all payment network requests in an efficient, scalable, and testable manner."
        }
        subtitle={"Software Engineering Intern, "}
        title={"Capital One"}
        date={"June 2019 - August 2019"}
        img={capone}
      ></Experience>
      <Experience
        text={
          "The University of Maryland presented me with an unprecedented scale and diversity of opportunities. I was able to grow as an educator through my years as a teachers assistant in the Computer Science department and as an instructor in the University's AAP Program. I found many ways to satisfy my need to create and build as a manager at the Sandbox, the largest student run makerspace on campus and as a participant, organizer, and occasional winner of University hackathons. I was able to grow as a leader and improve my speaking abilities as the lead student ambassador of the Computer Science department and of the College of Computer, Math and Natural Sciences (CMNS)."
        }
        subtitle={"B.S in Computer Science, "}
        title={"University of Maryland"}
        date={"earned May 2019"}
        img={maryland}
      ></Experience>
      <Experience
        text={
          "Developed personalized internal dashboards for various departments using Javascript, the .NET Framework, and various API’s. Developed testing suites to optimize run times for the testing builds. Wrote automated tests that assessed various aspects of the product. Developed an evaluation method to assess program strengths and identify areas for improvement. Managed the implementation and testing of software projects to the production environment. Defined test automation framework based on assessments from current testing processes and resources."
        }
        subtitle={"Software Engineering Intern, "}
        title={"Higher Logic"}
        date={"June 2018 - August 2018"}
        img={higherLogic}
      ></Experience>
      <Experience
        text={
          "Led implementation of an internal dashboard application, which streamlines real-time data having of clients’ network operations and security. Monitored the network and key information technology resources for evidence of any suspicious activity. Obtained a working knowledge of monitoring Global Network Intrusion Detections Systems, Firewalls, and Log Correlation Tools for potential threats. Administered network security-related technologies, such as vulnerability management and monitoring systems."
        }
        subtitle={"Software Engineering Intern, "}
        date={"June 2017 - May 2018"}
        title={"Hughes Echostar"}
        img={hughes}
      ></Experience>
    </div>
  )
}
