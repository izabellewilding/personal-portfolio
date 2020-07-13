import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql, Link, navigate } from "gatsby"
import {
  Card,
  CardPrimaryAction,
  CardActions,
  CardActionIcon,
  CardActionButtons,
  CardActionButton,
  CardActionIcons,
} from "@rmwc/card"
import "@material/card/dist/mdc.card.css"
import "@material/button/dist/mdc.button.css"
import "@material/icon-button/dist/mdc.icon-button.css"
import "@material/list/dist/mdc.list.min.css"
import "@material/drawer/dist/mdc.drawer.min.css"

import Header from "../components/header"
import Contact from "../components/contact"
import Medium from "../assets/medium.svg"
import Img from "gatsby-image"

const ListItem = ({ data, ...props }) => {
  return (
    <div className="m-6">
      <SEO title="Izabelle Wilding: Blog" />
      <Link to={props.linkTo} className="blog-post-card">
        <Card
          style={{
            justifyContent: "space-between",
          }}
          className="w-full blog-post-card"
        >
          <CardPrimaryAction>
            <Img fluid={props.fluid} />
            <div style={{ padding: "0 1rem 1rem 1rem" }}>
              <h3
                className=" text-xl text-center "
                style={{ paddingTop: "1rem" }}
              >
                {props.postTitle}
              </h3>
            </div>
          </CardPrimaryAction>
          <CardActions>
            <CardActionButtons>
              <CardActionButton>Read</CardActionButton>
            </CardActionButtons>
          </CardActions>
        </Card>
      </Link>
      {/* <Img
        src={props.src}
        fixed={data.file.childImageSharp.fixed}
        className="blog-post-thumbnail"
      /> */}
    </div>
  )
}
const BlogHome = ({ data }) => {
  const result = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
              postImage {
                id
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              title
              description
            }
          }
        }
      }
    }
  `)

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
    <Layout pageTitle="blog">
      <Header isSticky={true} onNav={handleHeaderNavigation} />
      <div className="header-offset"></div>

      <main className="flex-col relative w-full min-h-full flex flex-wrap items-center overflow-hidden pb-64 ">
        <div className="blog-page-header">
          <h2 className="text-5xl text-center leading-normal quicksand uppercase ">
            Blog Posts
          </h2>
          <div className="flex flex-col justify-center text-center  align-middle">
            <h3 className="mb-5 text-lg font-sans uppercase">
              Find me on Medium
            </h3>
            <a
              href="https://medium.com/@izabellewilding"
              target="_blank"
              rel="noopener noreferrer"
              className=""
              title="Medium"
            >
              <Medium className=" h-8" />
            </a>
          </div>
        </div>
        <div className="flex flex-wrap justify-center mt-12 md:m-12 max-w-6xl">
          {result.allMarkdownRemark.edges.map(({ node }) => {
            return (
              <ListItem
                linkTo={node.frontmatter.path}
                fluid={node.frontmatter.postImage.childImageSharp.fluid}
                postTitle={node.frontmatter.title}
                postDescription={node.frontmatter.description}
              />
            )
          })}
        </div>
      </main>
      <Contact />
    </Layout>
  )
}

export default BlogHome
