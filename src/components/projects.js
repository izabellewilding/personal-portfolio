import React from "react"
import "../styles/card-back.css"
import "../styles/card-flip.css"
// import "../styles/card-front.css"
import "../styles/all.css"
import Bird from "../assets/bird-green.svg"
import ProjectCard from "./project-card.js"

// const Card = ({ cardFront, cardBack }) => {
//   return (
//     <div className="flip-container m-5">
//       <div className="flipper">
//         <div className="front">{NewCard}</div>
//         <div className="back">{cardBack}</div>
//       </div>
//     </div>
//   )
// }

const Projects = React.forwardRef((props, ref) => {
  return (
    <main
      ref={ref}
      {...props}
      className="relative pt-20 w-full min-h-screen max-w-screen-xl m-auto flex justify-center items-center "
    >
      <Bird className="bird" />

      <div className="header-offset"></div>
      <div className="inline-block pb-16 w-full p-10">
        <h1
          className="quicksand uppercase text-md font-semibold"
          style={{ letterSpacing: 3 }}
        >
          Selected Work{" "}
        </h1>{" "}
        <h2
          className="DM-sans text-5xl font-semibold"
          style={{ paddingBottom: "10vh" }}
        >
          Take a Look{" "}
        </h2>{" "}
        <section className="projects w-full grid grid-cols-1 md:grid-cols-2 gap-10 justify-between">
          <ProjectCard
            date="July 2020"
            backgroundcolor="#643ede"
            cardimage="../images/todo-app.JPG"
            cardtitle="Tdolist - Todo app built with React Hooks"
            gitlink="https://github.com/izabellewilding/react-todo-app"
            sitelink="https://tdolist.netlify.app/"
            listitem1="Progressive Web App Configued (Works Offline)"
            listitem2="Modern User Interface"
            listitem3="Saves todos in browser storage"
          />

          <ProjectCard
            date="April - July 2020"
            cardimage="../images/pottery-ecommerce.JPG"
            backgroundcolor="#262229"
            cardtitle="eCommerce - Using Stripe and Gatsby"
            gitlink="https://github.com/izabellewilding/gatsby-stripe-ecommerce"
            sitelink="https://pottery-ecommerce.netlify.app/"
            listitem1="Stripe secure payment integration"
            listitem2="Products automatically pulled from Stripe by gatsby-plugin-stripe"
            listitem3="Shopping cart built with React Hooks"
          />

          <ProjectCard
            cardimage="../images/doula-site.JPG"
            cardtitle="Small Business Website for a Bristol Based Doula"
            sitelink="https://doula-site.netlify.com/"
            gitlink="https://github.com/doula-website/personal-doula-website"
            listitem1="Netlify CMS integration"
            listitem2="Live Instagram feed using Netlify Cloud Functions "
            listitem3="Bulma CSS theme"
          />
          {/*           
          <Card
            cardFront={
              <CardFront
                cardImage="../images/abof-img.png"
                cardTitle="Food Recipe Website"
                gitLink="https://github.com/izabellewilding/gatsby-recipe-blog"
                siteLink="https://abitoffood.netlify.com/"
              />
            }
            cardBack={
              <CardBack
                listItem1="Elasticlunr on and offline search bar"
                listItem2="Markdown recipe pages"
                listItem3="Fully responsive UI"
                style={{
                  backgroundColor: "#18132a",
                }}
                gitLink="https://github.com/izabellewilding/gatsby-recipe-blog"
                siteLink="https://abitoffood.netlify.com/"
              /> */}
          {/* }
          />{" "}
          <Card
            cardFront={
              <CardFront
                style={{ backgroundColor: "#18132a" }}
                cardImage="../images/elec-site-img.png"
                cardTitle="Small business website"
                siteLink="https://www.alexwildingelectricalservices.com/"
                gitLink="https://github.com/izabellewilding/website-for-electrician"
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
              /> */}
          {/* } */}
          {/* /> */}
        </section>
      </div>
    </main>
  )
})

export default Projects
