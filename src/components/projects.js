import React from "react"
import "../styles/all.scss"
import ProjectCard from "./project-card.js"

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
              listitem1="Stripe Checkout redirect for secure payments"
              listitem2="Loads Stripe products from Stripe API at build time using SSG"
              listitem3="Custom built shopping cart built with React Context provider"
            />

            <ProjectCard
              date="July 2020"
              cardtitle="Registration Form"
              sitelink="https://react-registration-form.netlify.app/"
              gitlink="https://github.com/izabellewilding/registration-form"
              listitem1="JavaScript (React Hooks) form submission"
              listitem2="Clean use of CSS-in-JS"
              listitem3="Follows HTML form best practices"
            />
          </section>
        </div>
      </div>
    </main>
  )
})

export default Projects
