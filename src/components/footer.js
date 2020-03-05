import React from "react"
import { Link } from "gatsby"
import GitHub from "../assets/github-darkRed.svg"
import Email from "../assets/email-darkRed.svg"
import LinkedIn from "../assets/linkedin-darkRed.svg"
import styled from "styled-components"

const Gradient = styled.div`
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 1, 62, 0.5055894183845413) 29%,
    rgba(0, 13, 104, 0.15825048281031162) 59%,
    rgba(198, 204, 214, 0) 100%
  );
`

const Footer = () => {
  return (
    <footer className="relative bg-lightBlue pt-8 pb-6">
      <div
        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 text-light"
        style={{ height: "80px", transform: "translateZ(0)" }}
      >
        {/* <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="bg-darkBlue"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg> */}
      </div>
      <div className="container mx-auto px-4">
        {" "}
        <div className="flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4">
            {" "}
            <Gradient className="w-full h-full absolute bottom-0 right-0 top-0 left-0 opacity-50  " />
            <h4 className="text-3xl font-semibold .text-light">Get in touch</h4>
            <h5 className="text-lg mt-0 mb-2 text-light">
              Find me on these platforms - or say hello!
            </h5>{" "}
            <div className="mt-6 flex flex-row">
              <a
                href="https://github.com/izabellewilding"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-400 flex shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <GitHub className="social-icon-footer" />{" "}
              </a>
              <a
                href="https://www.linkedin.com/in/izabelle-wilding-b68a73130/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 shadow-lg flex font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <LinkedIn className="social-icon-footer" />
              </a>
              {/* <button
                className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <i className="fab fa-dribbble"></i>
              </button> */}
              <a
                href="mailto:izabellewilding@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-gray-900 shadow-lg font-normal h-10 w-10 flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <Email className="social-icon-footer" />
              </a>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              {/* <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                  Useful Links
                </span> */}
              {/* <ul className="list-unstyled"> */}
              {/* <li>
                    <a
                      className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="https://www.creative-tim.com/presentation"
                    >
                      Blog
                    </a>
                  </li> */}
              {/* <li>
                    <a
                      className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="https://blog.creative-tim.com"
                    >
                      Resume
                    </a>
                  </li> */}
              {/* <li>
                    <a
                      className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="https://www.github.com/creativetimofficial"
                    >
                      Art
                    </a>
                  </li> */}
              {/* <li>
                    <a
                      className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="https://www.creative-tim.com/bootstrap-themes/free"
                    >
                      Free Products
                    </a>
                  </li> */}
              {/* </ul>
              </div> */}
              {/* <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                  Other Resources
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="https://github.com/creativetimofficial/argon-design-system/blob/master/LICENSE.md"
                    >
                      MIT License
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="https://creative-tim.com/terms"
                    >
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="https://creative-tim.com/privacy"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="https://creative-tim.com/contact-us"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-400" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-gray-600 font-semibold py-1">
              Copyright © {new Date().getFullYear()}{" "}
              <a
                href="https://www.creative-tim.com"
                className="text-gray-600 hover:text-gray-900"
              >
                Izabelle Wilding
              </a>
            </div>
          </div>
        </div>{" "}
      </div>
    </footer>
  )
}

export default Footer
