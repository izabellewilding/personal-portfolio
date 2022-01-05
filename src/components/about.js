import React from "react"
import Bird from "../assets/bird-green.svg"
import {
  ScrollButton,
  NavigationButton,
  TextButton,
} from "./Buttons"

const About = React.forwardRef((props, ref) => {
  return (
    <div
    //a ref passed down from index.js for scroll into view functionality
      ref={ref}
      {...props}
      className="relative w-full min-h-screen bg-white z-10"
    >
      <Bird className="bird" />

      <div className=" w-full flex ">
        <div className="max-w-screen-lg flex items-center justify-center h-auto lg:h-screen m-auto my-32 lg:my-0">
          <div
            id="profile"
            className="w-full flex flex-col relative m-auto lg:w-2/3 text-center lg:mx-0 p-3"
          >
            {/* <Img
                className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
                src="../images/selfie.JPG"
              /> */}

            <h1 className="text-5xl pt-8 mb-12 lg:pt-0 DM-sans font-semibold text-darkPrimary ">
              About Me
            </h1>

            <p className="text-lg">
              Front-end focused Javascript developer. I work on specialist
              component development, accessibility, UI bug fixes, and recently
              lead a rebuild of our core component library using the Adobe React
              Aria accessibility hooks. I love working at the forefront of
              modern frontend development and use tools such as React Query,
              Storybook, and Styled-Components.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 mx-20 col-gap-8 mt-6">
              <ScrollButton
                linkto="projects"
                content={<TextButton text="Projects" />}
              />
              <NavigationButton
                linkto="/blog"
                content={<TextButton text="Blog" />}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})

export default About
