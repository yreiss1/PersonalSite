import React from "react"
import Hero from "../components/hero.js"
import About from "../components/about.js"
import Portfolio from "../components/portfolio.js"
import Contact from "../components/contact.js"
import Footer from "../components/footer.js"
import News from "../components/news.js"
import Scrollspy from "react-scrollspy"
import { Helmet } from "react-helmet"

export default function Home() {
  return (
    <main>
      <Helmet>
        <html lang="en" />
        <title>Yuval Reiss's Site</title>
        <description>
          Just a developer who passionate about education and rock and roll
        </description>
      </Helmet>

      <div>
        <Scrollspy items={["about", "portfolio", "news", "contact"]}>
          <Hero />
          <section id="about">
            {" "}
            <About />
          </section>

          <section id="portfolio">
            {" "}
            <Portfolio />
          </section>
          <section id="news">
            <News />
          </section>
          <section id="contact">
            {" "}
            <Contact />
          </section>
         
          <Footer />
        </Scrollspy>
      </div>
    </main>
  )
}
