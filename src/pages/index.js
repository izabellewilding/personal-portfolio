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

  useEffect(() => {
    const handleScroll = () => {
      setSticky(ref.current.getBoundingClientRect().top <= 80)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", () => handleScroll)
    }
  }, [])

  return (
    <Layout>
      <Header isSticky={isSticky} />
      <LandingPage id="home" />
      <Projects id="projects" projectsRef={ref} />
      <About id="about" />
      <Contact id="contact2" name="contact2" />
      {/* <Blog id="blog" /> */}
    </Layout>
  )
}

export default IndexPage
