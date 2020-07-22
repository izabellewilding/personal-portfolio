/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import SEO from "./seo"
import "../styles/fonts.scss"
import "../styles/imports.scss"
import "../styles/all.scss"
import "../styles/gradient.scss"
import "../styles/mdc-drawer.scss"
import "@rmwc/tooltip/tooltip.css"
import "../../node_modules/tailwindcss/dist/base.css"
import "../../node_modules/tailwindcss/dist/components.css"
import "../../node_modules/tailwindcss/dist/utilities.css"

// import "@rmwc/tooltip/tooltip.css"

// import Header from "./header"

const Layout = ({ children }) => {
  return (
    <>
      <SEO title="Izabelle Wilding | Web development and Design" />
      <div className="">{children}</div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
