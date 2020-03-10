import React from "react"
import Image from "./image"
import WhatIDo from "../assets/what-i-do.svg"
// import Wave from "../assets/waveFlipped.svg"

const About = props => {
  return (
    <div
      {...props}
      className="relative w-full min-h-full flex flex-wrap items-center overflow-hidden bg-midPrimary pb-16 pt-16"
    >
      <div className="w-full md:w-5/12 px-4 mr-auto ml-auto mb-8 ">
        {/* <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
          <i className="fas fa-user-friends text-xl"></i>
        </div> */}
        <h2 className="text-3xl mb-2 leading-normal chivo">About Me</h2>

        <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-800"></p>
        <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-800">
          Hello! I'm Izabelle, a freelance web developer based in Bristol. I
          hadn't always planned to become a developer, but my love for language,
          solving complex problems, and art lead me here. As a developer I can
          channel my combined knowledge and interests into building responsive,
          high performance, attractive UIs using HTML, CSS, and JavaScript.
        </p>
        <br />
        <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-800">
          Most of my websites are built with Gatby and React, but I'm always
          looking to expand my knowledge of frameworks and libraries. I spend a
          lot of my free time experimenting with Photoshop and Illustrator to
          convert my art and hand drawn images in SVGs for my sites.
        </p>
      </div>

      <div className="w-full md:w-4/12 px-4 mr-auto ml-auto flex justify-center">
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <Image
            className="w-full"
            style={{ maxHeight: 228 }}
            src="../images/adrien-converse-xzH7K6nVVgI-unsplash.jpg"
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4 bg-white">
            <div className="font-bold text-xl mb-2 text-darkPrimary">
              My Blog
            </div>
            <p className="text-gray-700 text-base bg-white">
              I've recently started writing a front-end blog to reaffirm my
              knowledge and explore some of the interesting topics I've been
              learning about :-){" "}
            </p>
          </div>
          <div className="px-6 py-4 bg-white">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              #blog
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              #front-end
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
              #web development
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
