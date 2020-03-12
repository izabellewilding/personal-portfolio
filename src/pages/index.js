import React, { useEffect, useState, useRef } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import Header from "../components/header"
import About from "../components/about.js"
import LandingPage from "../components/landing-page"
import Projects from "../components/projects.js"
import SEO from "../components/seo"
import Contact from "../components/contact"
// import Blog from "../pages/blog"

const IndexPage = () => {
  const [isSticky, setSticky] = useState(false)
  const ref = useRef(null)
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
      // } else if (navItem === "blog") {
      //   blogRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <Layout>
      <Header isSticky={isSticky} onNav={handleHeaderNavigation} />
      <LandingPage navItem="landing" id="home" ref={landingRef} />
      <Projects navItem="projects" id="projects" ref={projectsRef} />
      <About navItem="about" ref={aboutRef} id="about" />
      <Contact navItem="contact" id="contact" ref={contactRef} />
      {/* <Blog id="blog" ref={blogRef} /> */}
    </Layout>
  )
}

export default IndexPage
