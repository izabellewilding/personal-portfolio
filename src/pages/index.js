import React, { useEffect, useState, useRef } from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Header from "../components/header"
import About from "../components/about.js"
import LandingPage from "../components/landing-page"
import Projects from "../components/projects.js"
import Contact from "../components/contact"

const IndexPage = () => {
  const [isSticky, setSticky] = useState(false)
  const landingRef = useRef()
  const aboutRef = useRef()
  const projectsRef = useRef()
  const contactRef = useRef()

  // const blogRef = useRef()

  //sticky header scroll
  useEffect(() => {
    const handleScroll = () => {
      setSticky(aboutRef.current.getBoundingClientRect().top <= 80)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }

    //smooth scrolling effect
  }, [])

  const handleHeaderNavigation = navitem => {
    if (navitem === "landing") {
      landingRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
    } else if (navitem === "projects") {
      projectsRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
    } else if (navitem === "about") {
      aboutRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
    } else if (navitem === "contact") {
      contactRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <Layout className="relative">
      {" "}
      <SEO title="Izabelle Wilding | Web development and Design" />
      <Header isSticky={isSticky} onNav={handleHeaderNavigation} />
      <LandingPage navitem="landing" id="home" ref={landingRef} />
      <About
        navitem="about"
        ref={aboutRef}
        id="about"
        style={{ position: "sticky", top: -20 }}
      />
      <Projects navitem="projects" id="projects" ref={projectsRef} />
      <Contact navitem="contact" id="contact" ref={contactRef} />
    </Layout>
  )
}

export default IndexPage
