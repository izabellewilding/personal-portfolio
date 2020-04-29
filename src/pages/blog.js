import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql, Link, navigate } from "gatsby"
import {
  Card,
  CardPrimaryAction,
  CardMedia,
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
import FavoriteBorder from "../assets/favorite_border-24px.svg"
import Share from "../assets/share-24px.svg"
import More from "../assets/more_vert-24px.svg"
import Img from "gatsby-image"

const ListItem = ({ data, ...props }) => {
  return (
    <div className="m-6">
      <Link to={props.linkTo} className="blog-post-card">
        <Card
          style={{
            width: "20rem",
            height: "20rem",
            justifyContent: "space-between",
          }}
        >
          <CardPrimaryAction>
            {/* <CardMedia
              sixteenByNine
              // src={props.fluid}
              // style={{
              //   backgroundImage: `${props.fluid}`,
              // }}
            > */}
            <Img fluid={props.fluid} /> {/* </CardMedia> */}
            {/* <Img src={props.src} /> */}
            <div style={{ padding: "0 1rem 1rem 1rem" }}>
              <h3 className=" text-xl" style={{ paddingTop: "1rem" }}>
                {props.postTitle}
              </h3>
              {/* <Typography
              use="subtitle2"
              tag="h2"
              theme="textSecondaryOnBackground"
              style={{ marginTop: "-1rem" }}
            >
              by Izzy Wilding
            </Typography> */}
            </div>
          </CardPrimaryAction>
          <CardActions>
            <CardActionButtons>
              <CardActionButton>Read</CardActionButton>
            </CardActionButtons>
            <CardActionIcons>
              <CardActionIcon icon={<Share />} />
            </CardActionIcons>
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

      <main className="flex-col relative w-full min-h-full flex flex-wrap items-center overflow-hidden  pb-64 pt-16">
        <h2 className="text-3xl mb-8 leading-normal ">Blog Posts</h2>
        <div className="blog-post-list">
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
