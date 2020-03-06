import React from "react"
// import { Link } from "gatsby"
import Logo from "../assets/text-logo2.svg"
import GitHub from "../assets/github-darkRed.svg"
import Email from "../assets/email-darkRed.svg"
import LinkedIn from "../assets/linkedin-darkRed.svg"
import { Link, animateScroll as scroll } from "react-scroll"

const Header = props => (
  <header
    {...props}
    className={`${props.isSticky ? "sticky shadow" : "notSticky"}`}
  >
    <div className="flex-shrink-0 p-4 cursor-pointer">
      <Logo className="h-12 nav-logo svg-darkPrimary" />
    </div>
    <i className="fas fa-bars fa-2x visible md:invisible mr-10 md:mr-0 text-blue-200 cursor-pointer"></i>
    <ul className="text-darkPrimary quicksand md:flex  items-center overflow-x-hidden mr-10 font-semibold">
      {" "}
      <Link
        to="projects"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className="hover:text-midPrimary cursor-pointer"
      >
        <li className="text-darkPrimary nav-list-item custom-underline mr-6 p-1">
          Projects
        </li>{" "}
      </Link>
      <Link
        to="about"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className="hover:text-midPrimary cursor-pointer"
      >
        {" "}
        <li className="text-darkPrimary nav-list-item custom-underline mr-6 p-1">
          About
        </li>
      </Link>
      <Link
        to=""
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className="hover:text-midPrimary cursor-pointer"
      >
        <li className="nav-list-item custom-underline mr-6 p-1">
          <a className="text-darkPrimary" href="#">
            Blog
          </a>
        </li>
      </Link>
      <Link
        to="contact"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className=" cursor-pointer"
      >
        <li className="nav-list-item custom-underline mr-6 p-1">
          <a className="text-darkPrimary" href="#">
            Contact
          </a>
        </li>
      </Link>
    </ul>
    <div className="mt-6 flex flex-row w-full justify-end">
      <a
        href="https://github.com/izabellewilding"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white text-lightPrimary flex font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
        type="button"
      >
        <GitHub className="social-icon-footer" />{" "}
      </a>
      <a
        href="https://www.linkedin.com/in/izabelle-wilding-b68a73130/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white text-lightPrimary  flex font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
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
        className=" bg-white text-gray-900  font-normal h-10 w-10 flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
        type="button"
      >
        <Email className="social-icon-footer" />
      </a>
    </div>
  </header>
)

export default Header
