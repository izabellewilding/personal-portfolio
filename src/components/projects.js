import React, { useState } from "react"

import "../styles/card-back.scss"
import "../styles/card-flip.css"
import "../styles/card-front.scss"
import "../styles/all.scss"

import CardFront from "./card-front"
import CardBack from "./card-back"
import GitHub from "../assets/github-darkRed.svg"
import ElecLogo from "../assets/alex-wilding-logo.svg"
import FoodBlogLogo from "../assets/bitoffood-underlined.svg"
// import Arrow from "../assets/arrow4-black.svg"

const Card = ({ cardFront, cardBack }) => {
  return (
    <div className="flip-container m-5">
      <div className="flipper">
        <div className="front">{cardFront}</div>
        <div className="back">{cardBack}</div>
      </div>
    </div>
  )
}

const Projects = props => {
  return (
    <main
      {...props}
      className=" w-full min-h-full flex justify-center items-center "
    >
      <div className="container inline-block bg-lightestBlue pb-16">
        <div classname="section">
          <h1 className="text-3xl text-blue-900 md:pb-4 md:pl-16 pl-2 pl-4 pt-8 uppercase quicksand">
            Projects
          </h1>{" "}
          <a>{GitHub}</a>
        </div>
        <section className="projects">
          {" "}
          <Card
            cardFront={
              <CardFront
                // logo={<FoodBlogLogo />}
                cardImage="../images/abof-img.png"
                cardTitle="Food recipe blog"
              />
            }
            cardBack={
              <CardBack
                listItem1="On and offline search bar made with Elasticlunr"
                listItem2="MDX recipe pags"
                listItem3="Responsive original UI design with custom SVGs"
                style={{
                  backgroundColor: "#18132a",
                }}
                gitLink="https://github.com/izabellewilding/gatsby-recipe-blog"
                siteLink="https://abitoffood.netlify.com/"
                // cardImage="../images/card2-img.png"
              />
            }
          />{" "}
          <div className="relative">
            <Card
              cardFront={
                <CardFront
                  style={{
                    fontFamily: "europa",
                  }}
                  cardImage="../images/flickrapi-img.JPG"
                  // logo={"Artist Photograph & Art Gallery"}
                  cardTitle="Flickr Image Gallery"
                />
              }
              cardBack={
                <CardBack
                  listItem1="Data fetching from Flickr API"
                  listItem2="Responsive image carousel"
                  listItem3="Page slide transition using React Router"
                  style={{
                    backgroundColor: "#18132a",
                  }}
                  gitLink="https://github.com/izabellewilding/flickr_API_artist_stream"
                  siteLink="https://flickr-api-gallery.netlify.com/#/"
                  // cardImage="../images/card1-img"
                />
              }
            />
            {/* <a
              href="#about"
              class=" absolute bottom-0 invisible md:visible bg-transparent hover:bg-blue-500 text-blue-900 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded  quicksand"
              style={{ bottom: "-4rem", left: "35%" }}
              role="button"
            >
              About Me
            </a> */}
          </div>
          <Card
            cardFront={
              <CardFront
                style={{ backgroundColor: "#18132a" }}
                // logo={<ElecLogo />}
                cardImage="../images/elec-site-img.png"
                cardTitle="Small business website"
              />
            }
            cardBack={
              <CardBack
                style={{
                  backgroundColor: "#18132a",
                }}
                listItem1="Optimised for SEO with targeted keyword strategy"
                listItem2="Responsive design"
                listItem3="High lighthouse performance score"
                siteLink="https://www.alexwildingelectricalservices.com/"
                gitLink="https://github.com/izabellewilding/website-for-electrician"
              />
            }
          />
          {/* </article> */}
        </section>
      </div>
    </main>
  )
}

export default Projects
