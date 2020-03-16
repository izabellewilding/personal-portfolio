/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect, useState, useRef, forwardRef } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "../styles/imports.css"
import "../styles/all.css"
import "../styles/gradient.css"

import "@material/drawer/dist/mdc.drawer.min.css"
import "@material/list/dist/mdc.list.min.css"
import Header from "../components/header"
import Contact from "../components/contact"
import "@rmwc/tooltip/tooltip.css"

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

  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}

      {children}
      {/* <Footer name="footer" id="footer" /> */}

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
