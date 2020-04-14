import React from "react"
import { graphql, navigate } from "gatsby"
import Layout from "../components/layout"
import Header from "../components/header"
import Contact from "../components/contact"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  const handleHeaderNavigation = navItem => {
    if (navItem === "landing") {
      navigate("/")
    } else if (navItem === "projects") {
      navigate("/#projects")
    } else if (navItem === "about") {
      navigate("/#about")
    } else if (navItem === "contact") {
      navigate("/#contact")

      // } else if (navItem === "blog") {
      //   blogRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }
  return (
    <Layout>
      <Header isSticky={true} onNav={handleHeaderNavigation} />
      <div className="header-offset"></div>
      <div className="w-full min-h-full flex flex-wrap overflow-hidden mt-12">
        <div className="w-full md:w-7/12 px-4 mr-auto ml-auto mb-8">
          <header className="">
            <h1 className="text-3xl mb-2 leading-normal chivo">
              {frontmatter.title}
            </h1>
            <h2 className="text-2xl mb-2 quicksand text-gray-700">
              {frontmatter.description}
            </h2>
            <h3>{frontmatter.date}</h3>
          </header>
          <div className="" dangerouslySetInnerHTML={{ __html: html }} />
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
        postImage {
          id
          childImageSharp {
            fluid {
              originalImg
            }
          }
        }
        description
      }
    }
  }
`
