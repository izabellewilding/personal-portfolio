import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import { navigate } from "gatsby"
import Contact from "../components/contact"

const handleHeaderNavigation = navitem => {
  if (navitem === "landing") {
    navigate("/")
  } else if (navitem === "projects") {
    navigate("/#projects")
  } else if (navitem === "about") {
    navigate("/#about")
  } else if (navitem === "contact") {
    navigate("/#contact")

    // } else if (navitem === "blog") {
    //   blogRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
  }
}

const Thanks = () => {
  return (
    <Layout>
      {" "}
      <Header isSticky={true} onNav={handleHeaderNavigation} />
      <div className="header-offset"></div>
      <div className="m-12 md:m-40">
        <p>Thank you! I'll get back to you as soon as possible.</p>
      </div>
      <Contact />
    </Layout>
  )
}
export default Thanks
