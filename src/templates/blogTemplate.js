import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Header from "../components/header"
import Contact from "../components/contact"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <Header isSticky={true} />
      <div className="header-padding"></div>
      <div className="blog-post-container">
        <div
          className="blog-post"
          style={{ textAlign: "start", fontFamily: "europa" }}
        >
          <header className="blog-intro">
            <h1>{frontmatter.title}</h1>
            <h2>{frontmatter.description}</h2>
            <h3>{frontmatter.date}</h3>
          </header>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
      <Contact />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        postImage
        description
      }
    }
  }
`
