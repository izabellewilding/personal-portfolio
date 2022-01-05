import React from "react"
import "../styles/all.scss"
import ProjectCard from "./ProjectCard"

const Projects = React.forwardRef((props, ref) => {
  return (
    <main
      ref={ref}
      {...props}
      className="w-full "
      style={{ backgroundColor: "#f2f2f2" }}
    >
      <div className="relative py-20 w-full min-h-screen max-w-screen-xl m-auto flex justify-center items-center">
        <div className="header-offset"></div>
        <div className="inline-block pb-16 w-full p-4 md:p-10">
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
          <section className="w-full grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10 justify-between">
          <ProjectCard
              date="November 2021"
              backgroundcolor="rgb(86 141 163)"
              cardtitle="Avatar Generator used to generate avatars for NFTs"
              gitlink="https://github.com/izabellewilding/avatar-generator"
              listitem1="Custom built node CLI tool"
              listitem2="Generates avatars from a set of SVGs"
              listitem3="Made for an NFT project"
            />
               <ProjectCard
              date="April - July 2020"
              cardimage="../images/pottery-ecommerce.JPG"
              backgroundcolor="#c61ee9"
              cardtitle="eCommerce - Using Stripe and Gatsby"
              gitlink="https://github.com/izabellewilding/gatsby-stripe-ecommerce"
              sitelink="https://pottery-ecommerce.netlify.app/"
              listitem1="Stripe Checkout redirect for secure payments"
              listitem2="Loads Stripe products from Stripe API at build time using SSG"
              listitem3="Custom built shopping cart built with React Context provider"
            />
    
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
              date="July 2020"
              cardtitle="React Hooks Registration Form"
              backgroundcolor="hsl(229deg 24% 22%)"
              sitelink="https://react-registration-form.netlify.app/"
              gitlink="https://github.com/izabellewilding/registration-form"
              listitem1="Follows HMTL and accessibility best practices with password and email validation"
              listitem2="CSS-in-JS styled-component styling"
              listitem3="Unit testing with React-Testing Library"
            />        
            <ProjectCard
              date="August 2020"
              backgroundcolor="rgb(198 30 233)"
              cardtitle="Technical Test for Kerve Creative (Bath)"
              gitlink="https://github.com/izabellewilding/Kerve-Test-Antiques"
              sitelink="https://kerve-test.netlify.app/"
              listitem1="Website built with flat HTML, SASS, and JavaScript"
              listitem2="Responsive to 4 key brekpoints (small mobile to large screen)"
              listitem3="JavaScript and CSS animations"
            />
               <ProjectCard
              date="August 2020"
              backgroundcolor="rgb(6 108 80)"
              cardtitle="Technical Test for Ecologi Climate Action (Bath)"
              gitlink="https://github.com/izabellewilding/Kerve-Test-Antiques"
              sitelink="https://kerve-test.netlify.app/"
              listitem1="Website built with flat HTML, SASS, and JavaScript"
              listitem2="Responsive to 4 key brekpoints (small mobile to large screen)"
              listitem3="JavaScript and CSS animations"
            />
            {/* <ProjectCard
              date="March - April 2020"
              cardtitle="Small Business Website"
              backgroundcolor="#076686"
              sitelink="https://doula-site.netlify.com/"
              gitLink="https://github.com/doula-website/personal-doula-website"
              listitem1="Instagram feed with Netlify Cloud Functions"
              listitem2="Bulma CSS styling"
              listitem3="Netlify CMS integration"
            /> */}
          </section>
        </div>
      </div>
    </main>
  )
})

export default Projects
