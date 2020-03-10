import React, { useState } from "react"

import "../styles/card-back.scss"
import "../styles/card-flip.css"
import "../styles/card-front.scss"
import "../styles/all.scss"

import CardFront from "./card-front"
import CardBack from "./card-back"
import GitHub from "../assets/github-darkRed.svg"

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

const Projects = ({ projectsRef, ...props }) => {
  return (
    <main
      ref={projectsRef}
      {...props}
      className="mt-12 mb-12 w-full min-h-screen flex justify-center items-center "
    >
      <div className="container inline-block pb-16">
        {/* <div classname="section">
          <h1 className="text-3xl text-blue-900 md:pb-4 md:pl-16 pl-2 pl-4 pt-8">
            Here are some of the projects I've been working on. Have a browse or
            check out the code on GitHub.
          </h1>{" "}
          <a>{GitHub}</a>
        </div> */}
        <section className="projects justify-center">
          <Card
            cardFront={
              <CardFront
                style={{ backgroundColor: "#18132a" }}
                // logo={<ElecLogo />}
                cardImage="../images/doula-site.JPG"
                cardTitle="Web Design and Development for a Bristol Doula"
              />
            }
            cardBack={
              <CardBack
                style={{
                  backgroundColor: "#18132a",
                }}
                listItem1="Fully customizable content with Netlify CMS"
                listItem2="Built using Bulma CSS framework"
                listItem3="Live Instagram feed"
                siteLink="https://chantal-baptiste-doula.netlify.com/"
                gitLink="https://github.com/doula-website/personal-doula-website"
              />
            }
          />{" "}
          <Card
            cardFront={
              <CardFront
                // logo={<FoodBlogLogo />}
                cardImage="../images/abof-img.png"
                cardTitle="Recipe Website and Blog"
              />
            }
            cardBack={
              <CardBack
                listItem1="On and offline search bar made with Elasticlunr"
                listItem2="MDX recipe pages"
                listItem3="Responsive UI design, bespoke SVGs, easy to read recipe format"
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
                  cardTitle="Artist Image Gallery"
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
