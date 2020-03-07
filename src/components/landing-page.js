import React from "react"
import styled from "styled-components"
import SocialIcons from "../components/social-icons.js"
import { Link, animateScroll as scroll } from "react-scroll"

import Splash from "../assets/slash-nice.svg"
import SplashMedium from "../assets/slash-medium.svg"

// const Gradient = styled.div`
//   background: linear-gradient(
//     0deg,
//     rgba(0, 0, 0, 1) 0%,
//     rgba(0, 1, 62, 0.5055894183845413) 29%,
//     rgba(0, 13, 104, 0.15825048281031162) 59%,
//     rgba(198, 204, 214, 0) 100%
//   );
// `

const LandingPage = props => {
  return (
    //landing page top
    <main
      {...props}
      className="gradient w-full h-screen relative items-center justify-center "
    >
      <div className="relative w-full h-screen">
        {" "}
        <Splash
          className=" absolute lightSVG bottom-0 splash "
          style={{ height: "35vh" }}
        />
        <SplashMedium
          className=" absolute bottom-0  lightSVG splash-med-left  invisible sm:visible"
          style={{ height: "50vh" }}
        />
        <Splash
          className=" absolute lightSVG top-0 splash2 "
          style={{ height: "35vh" }}
        />
        <SplashMedium className="h-screen absolute bottom-0 right-0 lightSVG" />
      </div>{" "}
      <div className=" absolute opacity-25 bottom-0 right-0 top-0 left-0" />
      {/* <Gradient className="w-full h-full absolute bottom-0 right-0 top-0 left-0 " /> */}
      <div className=" w-full h-full absolute bottom-0 right-0 top-0 left-0 flex">
        {" "}
        {/* hero text */}
        <div className="relative h-full w-full mx-auto items-center justify-center flex flex-col lg:w-6/12 px-4 ml-auto mr-auto text-center">
          <div className="inline-block">
            <h1 className="relative text-darkPrimary text-5xl md:text-6xl uppercase barlow-cond leading-none">
              Izabelle Wilding
            </h1>{" "}
            <p className="landing-subheading quicksand text-xl md:text-2xl text-lightPrimary uppercase">
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
            className=" absolute bottom-0 bg-transparent hover:bg-blue-500 text-blue-100 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded  quicksand"
            style={{ bottom: "25%" }}
            role="button"
          >
            Click to see Projects
          </Link>
        </div>{" "}
      </div>{" "}
      {/* </div>{" "} */}
      {/* </div> */}
    </main>
  )
}
export default LandingPage
