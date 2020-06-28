/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import SEO from "./seo"
import "../styles/imports.css"
import "../styles/all.css"
import "../styles/gradient.css"
import "../styles/mdc-drawer.css"
import "@rmwc/tooltip/tooltip.css"

import "@material/drawer/dist/mdc.drawer.min.css"
import "@material/list/dist/mdc.list.min.css"

// import "@rmwc/tooltip/tooltip.css"

// import Header from "./header"

const Layout = ({ children }) => {
  return (
    <>
      <SEO />
      <div className="">{children}</div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
