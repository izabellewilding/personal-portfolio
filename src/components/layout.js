/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import "../styles/imports.css"
import "../styles/all.css"
import "../styles/gradient.css"
import "../styles/mdc-drawer.css"

import "@material/drawer/dist/mdc.drawer.min.css"
import "@material/list/dist/mdc.list.min.css"

// import "@rmwc/tooltip/tooltip.css"

// import Header from "./header"

const Layout = ({ children }) => {
  return <>{children}</>
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
