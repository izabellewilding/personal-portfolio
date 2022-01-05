import React, { useEffect, useState, useRef } from "react"
import SEO from "../components/seo"
import Layout from "../components/Layout.js"
import Header from "../components/Header.js"
import About from "../components/About.js"
import LandingPage from "../components/landing-page"
import Projects from "../components/Projects.js"
import Contact from "../components/Contact"

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
      <div className="relative bg-white z-20">
        <About navitem="about" ref={aboutRef} id="about" />
        <Projects navitem="projects" id="projects" ref={projectsRef} />
        <Contact navitem="contact" id="contact" ref={contactRef} />
      </div>
    </Layout>
  )
}

export default IndexPage
