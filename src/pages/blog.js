import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
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
import FavoriteBorder from "../assets/favorite_border-24px.svg"
import Share from "../assets/share-24px.svg"
import More from "../assets/more_vert-24px.svg"
import Wave from "../assets/waveFlipped.svg"

import { Link } from "gatsby"
import Img from "../components/image"

const ListItem = props => {
  return (
    <Link to={props.linkTo} className="blog-post-card">
      <Card style={{ width: "21rem" }}>
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
            <p theme="textSecondaryOnBackground">{props.postDescription}</p>
          </div>
        </CardPrimaryAction>
        <CardActions>
          <CardActionButtons>
            <CardActionButton>Read</CardActionButton>
            <CardActionButton>Bookmark</CardActionButton>
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

  console.warn(result)
  return (
    <Layout pageTitle="blog">
      <Header isSticky={true} />

      <main className="flex-col relative w-full min-h-full flex flex-wrap items-center overflow-hidden  pb-64 pt-16">
        <Wave className="wave absolute bottom-0 left-0 right-0 svg-darkPrimary" />

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
    </Layout>
  )
}

export default Blog
