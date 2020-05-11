import React from "react"
import { Link } from "gatsby"
import Image from "./image"
// import Bird from "../assets/bird-green.svg"

const About = React.forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      {...props}
      className=" relative w-full min-h-full flex flex-wrap items-center bg-lightPrimary pb-16 pt-12 "
    >
      {/* <div className="header-offset"></div> */}
      <div className="max-width md:flex mr-auto ml-auto">
        <div className="w-full md:w-5/12 px-4 mr-auto ml-auto mb-8 ">
          {/* <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
          <i className="fas fa-user-friends text-xl"></i>
        </div> */}{" "}
          <h2 className="text-3xl mb-2 leading-normal chivo">About Me</h2>
          <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-800"></p>
          <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-800">
            Hi, I'm Izabelle. A freelance web developer based in Bristol. I
            hadn't always planned to become a developer, but my love for
            language, solving complex problems, and art lead me here. I spend my
            time building responsive, high performance web applications
            following the JAMStack architecture.
          </p>
          <br />
          <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-800">
            I use React and frameworks like Gatsby to make most of my websites,
            but I'm always looking to expand my knowledge of frameworks and
            libraries. I spend a lot of my free time experimenting with
            Photoshop and Illustrator to convert hand drawn images into SVGs for
            my sites.
          </p>
        </div>

        <div className="sm:w-4/12 px-4 mr-auto ml-auto flex justify-center">
          {" "}
          {/* <Bird className="bird absolute right-0 opacity-75 h-screen" /> */}
          <Link
            to="/blog"
            className="relative max-w-sm rounded bg-white overflow-hidden shadow-lg"
            style={{ minWidth: "21rem" }}
          >
            {" "}
            <Image
              className="w-full"
              style={{ maxHeight: 228 }}
              src="../images/adrien-converse-xzH7K6nVVgI-unsplash.jpg"
              alt="Sunset in the mountains"
            />
            <div className="px-6 bg-white relative">
              {" "}
              <div className="font-bold text-xl mb-2 text-darkPrimary pt-4">
                My Blog
              </div>
              <p className="text-gray-700 text-base bg-white">
                I've recently started writing a front-end blog to reaffirm my
                knowledge and explore some of the topics I've been learning
                about.
              </p>
            </div>
            <div className="px-6 py-4 bg-white">
              <Link to="/react-component-lifecycle">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                  #React Lifecycle
                </span>
              </Link>
              <Link to="/problem-creating-react-app">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                  #Dependency Tree Error
                </span>
              </Link>
              {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
              #web development
            </span> */}
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
})

export default About
