import React, { useEffect, useState, useRef } from "react"

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
      setSticky(projectsRef.current.getBoundingClientRect().top <= 80)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleHeaderNavigation = navItem => {
    if (navItem === "landing") {
      landingRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
    } else if (navItem === "projects") {
      projectsRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
    } else if (navItem === "about") {
      aboutRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
    } else if (navItem === "contact") {
      contactRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <Layout>
      <Header isSticky={isSticky} onNav={handleHeaderNavigation} />
      <LandingPage navItem="landing" id="home" ref={landingRef} />
      <Projects navItem="projects" id="projects" ref={projectsRef} />
      <About navItem="about" ref={aboutRef} id="about" />
      <Contact navItem="contact" id="contact" ref={contactRef} />
    </Layout>
  )
}

export default IndexPage
