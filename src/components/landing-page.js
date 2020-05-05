import React from "react"
import SocialIcons from "../components/social-icons.js"
import { Link } from "react-scroll"
import SEO from "../components/seo"
import Splashes from "./splashes.js"

const LandingPage = React.forwardRef((props, ref) => {
  return (
    <main
      {...props}
      ref={ref}
      className=" w-full h-screen relative items-center justify-center "
    >
      {" "}
      <SEO
        title="Homepage"
        description="Izabelle Wilding - Freelance Web Developer"
      />
      <div className="gradient relative w-full h-screen"> </div>{" "}
      <div className=" absolute opacity-25 bottom-0 right-0 top-0 left-0" />
      {/* <Gradient className="w-full h-full absolute bottom-0 right-0 top-0 left-0 " /> */}
      <div className=" w-full h-full absolute bottom-0 right-0 top-0 left-0 flex">
        <Splashes /> {/* hero text */}
        <div className="relative h-full w-full mx-auto items-center justify-center flex flex-col lg:w-6/12 px-4 ml-auto mr-auto text-center">
          <div className="inline-block">
            <h1 className="relative whitespace-no-wrap text-darkPrimary text-5xl md:text-6xl uppercase barlow-cond leading-none">
              Izabelle Wilding
            </h1>{" "}
            <p className="landing-subheading quicksand text-xl md:text-3xl text-lightPrimary uppercase">
              Freelance Web Developer
            </p>{" "}
            <SocialIcons />
          </div>

          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className=" absolute bottom-0 bg-button hover:bg-blue-500 text-blue-100 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded  quicksand"
            style={{ bottom: "25%" }}
            role="button"
          >
            Take me to Projects
          </Link>
        </div>{" "}
      </div>{" "}
      {/* </div>{" "} */}
      {/* </div> */}
    </main>
  )
})

export default LandingPage
