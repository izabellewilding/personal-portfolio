import React from "react"
import Logo from "../assets/text-logo2.svg"

const Header = props => (
  <header
    {...props}
    className={`${props.isSticky ? "sticky shadow-sm" : "notSticky"}`}
  >
    <div className="flex-shrink-0 p-4 cursor-pointer">
      <Logo className=" h-12 nav-logo svg-darkPrimary" />
    </div>
    <i className="fas fa-bars fa-2x visible md:invisible mr-10 md:mr-0 text-blue-200 cursor-pointer"></i>
    <ul className="text-darkPrimary quicksand md:flex overflow-x-hidden mr-10 font-semibold">
      <li className="nav-list-item custom-underline mr-6 p-1">
        <a className="hover:text-midPrimary" href="#">
          Projects
        </a>
      </li>
      <li className="nav-list-item custom-underline mr-6 p-1">
        <a className="hover:text-midPrimary" href="#">
          Blog
        </a>
      </li>
    </ul>
  </header>
)

export default Header
