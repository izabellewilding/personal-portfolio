import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import { navigate } from "gatsby"
import Contact from "../components/contact"

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

const Thanks = () => {
  return (
    <Layout>
      {" "}
      <Header isSticky={true} onNav={handleHeaderNavigation} />
      <div className="m-40">
        <p>
          Thank you! I have received your message and will be in touch
          shortly...
        </p>
      </div>
      <Contact />
    </Layout>
  )
}
export default Thanks
