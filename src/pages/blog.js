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
import Header from "../components/header"
import Contact from "../components/contact"
import FavoriteBorder from "../assets/favorite_border-24px.svg"
import Share from "../assets/share-24px.svg"
import More from "../assets/more_vert-24px.svg"

import Img from "../components/image"

const ListItem = props => {
  return (
    <Link to={props.linkTo} className="blog-post-card">
      <Card style={{ width: "20rem", height: "20rem" }}>
        <CardPrimaryAction>
          {/* <CardMedia
            sixteenByNine
            src={props.src}
            style={{
              backgroundImage: "{props.src}",
            }}
          ></CardMedia> */}
          <Img src={props.src} />
          <div style={{ padding: "0 1rem 1rem 1rem" }}>
            <h2 style={{ paddingTop: "1rem" }}>{props.postTitle}</h2>
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
            <CardActionIcon icon={<FavoriteBorder />} />
            <CardActionIcon icon={<Share />} />
            <CardActionIcon icon={<More />} />
          </CardActionIcons>
        </CardActions>
      </Card>
    </Link>
    //     <Img src={props.src} className="blog-post-thumbnail" />
    //
  )
}
const Blog = () => {
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
              postImage
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
                src={node.frontmatter.postImage}
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

export default Blog
