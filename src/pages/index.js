import React from "react"
import Hero from "../components/hero.js"
import About from "../components/about.js"
import Portfolio from "../components/portfolio.js"
import Contact from "../components/contact.js"
import Footer from "../components/footer.js"
import Scrollspy from "react-scrollspy"

export default function Home() {
  return (
    <div>
      <Scrollspy items={["about", "portfolio", "contact"]}>
        <Hero />
        <section id="about">
          {" "}
          <About />
        </section>

        <section id="portfolio">
          {" "}
          <Portfolio />
        </section>
        <section id="contact">
          {" "}
          <Contact />
        </section>
        <Footer />
      </Scrollspy>
    </div>
  )
}
