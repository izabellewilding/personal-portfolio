import React from "react"
import Img from "./image"
import { Link } from "gatsby"
import Linkedin from "../assets/linkedin.svg"
import { Tooltip } from "@rmwc/tooltip"

import Bird from "../assets/bird-green.svg"

const About = React.forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      {...props}
      className="relative w-full min-h-full items-center pb-16 pt-12 "
    >
      {" "}
      <div className="md:flex w-ful flex flex-col lg:flex-row flex-wrap">
        <div className="max-w-screen-lg flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
          <div id="profile" className="w-full relative lg:w-3/5  mx-6 lg:mx-0">
            {/* <Tooltip
              content="I also like to paint - take a look"
              showArrow
              open={true}
            >
              <a
                href="https://www.izabelleart.com/"
                className="bird"
                target="_blank"
              >
                {" "}
                <Bird className="bird" />
              </a>
            </Tooltip>{" "} */}
            <div className="p-4 md:p-12 text-center">
              <Img
                className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
                src="../images/selfie.JPG"
              />

              <h1 className="text-5xl pt-8 mb-12 lg:pt-0 DM-sans font-semibold text-darkPrimary ">
                About Me
              </h1>

              <p className="text-lg">
                I've been learning HTML, CSS, and JavsScript after discovering
                front-end web development around a year and a half ago. I have a
                degree in Linguistics from UCL and love challenging myself to
                learn new technical concepts. I enjoy building JAMstack
                applications with Gatsby and experimenting with functional
                JavaScript.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-2/5">
            <Img
              src="../images/selfie.JPG"
              className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"
              style={{ minHeight: 575 }}
            />
          </div>
        </div>
      </div>
    </div>
  )
})

export default About
