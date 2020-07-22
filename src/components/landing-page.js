import React from "react"
import SocialIcons from "../components/social-icons.js"
import SEO from "../components/seo"
import Splashes from "./splashes.js"
import Logo from "../assets/text-logo2.svg"
import Arrow from "../assets/arrow4-black.svg"
import { ScrollButton } from "./buttons"

const LandingPage = React.forwardRef((props, ref) => {
  return (
    <main
      {...props}
      ref={ref}
      className=" w-full h-screen  items-center justify-center "
      style={{ position: "sticky", top: "0" }}
    >
      {" "}
      <SEO
        title="Homepage"
        description="Izabelle Wilding - Freelance Web Developer"
      />
      <Logo className="absolute top-0 left-0 h-12 z-10 m-4" />
      <div className="gradient relative w-full h-screen"> </div>
      <div className=" absolute opacity-25 bottom-0 right-0 top-0 left-0" />
      <div className=" w-full h-full absolute bottom-0 right-0 top-0 left-0 flex">
        <Splashes /> {/* hero text */}
        <div className="relative h-full w-full mx-auto items-center justify-center flex flex-col lg:w-6/12 px-4 ml-auto mr-auto text-center">
          <div className="inline-block">
            <h1 className="relative whitespace-no-wrap DM-sans text-4xl md:text-6xl text-darkPrimary uppercase  leading-none">
              Izabelle Wilding
            </h1>{" "}
            <p className="landing-subheading quicksand quicksand-letter-spacing text-xl md:text-3xl text-lightPrimary uppercase mb-5 md:mb-0 ">
              Web Development & Design
            </p>{" "}
            <SocialIcons />
          </div>{" "}
          <ScrollButton
            linkto="about"
            content={
              <div className="flex justify-center">
                {<Arrow className="h-12" />}
              </div>
            }
          />
        </div>{" "}
      </div>{" "}
    </main>
  )
})

export default LandingPage
