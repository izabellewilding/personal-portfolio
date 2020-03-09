/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect, useState, useRef } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "../style.css"
import "../styles/all.scss"
import "../styles/gradient.scss"
import Header from "./header"
import LandingPage from "./landing-page"
import Projects from "../components/projects.js"
import Footer from "../components/footer.js"
import About from "../components/about.js"
// import Header from "./header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

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
    <>
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <div className="scrolling-box">
        <link rel="stylesheet" href="./mdc.drawer.min.css" />
        <Header isSticky={isSticky} />
        <LandingPage id="1" />
        <Projects id="projects" projectsRef={ref} />
        <About id="about" />
        <Footer id="contact" />
      </div>
      {/* <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer> */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
