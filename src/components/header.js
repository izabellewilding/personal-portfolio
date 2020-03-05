// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import Logo from "../assets/text-logo2.svg"

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faCoffee } from "@fortawesome/free-solid-svg-icons"

const Header = ({ siteTitle }) => (
  <header>
    <div className="flex justify-between items-center fixed top-0 6 bg-transparent z-10 invisible md:visible">
      <div className="flex-shrink-0 p-4 cursor-pointer">
        <Logo className="h-16 nav-logo " />
      </div>
      <i className="fas fa-bars fa-2x visible md:invisible mr-10 md:mr-0 text-blue-200 cursor-pointer"></i>
      {/* <ul className="quicksand md:flex overflow-x-hidden mr-10 font-semibold">
        <li className="nav-list-item custom-underline mr-6 p-1">
          <a className="text-white  hover:text-pink-600" href="#">
            Projects
          </a>
        </li>
        <li className="nav-list-item custom-underline mr-6 p-1">
          <a className="text-white hover:text-pink-600" href="#">
            Blog
          </a>
        </li>
        <li className="nav-list-item custom-underline mr-6 p-1">
          <a className="text-white  hover:text-pink-600" href="#">
            Resume
          </a>
        </li>
      </ul> */}
    </div>
  </header>
)

export default Header
