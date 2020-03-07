import React, { useState } from "react"
// import { Link } from "gatsby"
import Logo from "../assets/text-logo2.svg"
import GitHub from "../assets/github-darkRed.svg"
import Email from "../assets/email-darkRed.svg"
import LinkedIn from "../assets/linkedin-darkRed.svg"
import { Link, animateScroll as scroll } from "react-scroll"
import classNames from "classnames"

import { Drawer, DrawerHeader, DrawerTitle, DrawerContent } from "@rmwc/drawer"
import styled from "styled-components"
import { ListItem, List } from "@rmwc/list"
import "@material/list/dist/mdc.list.css"
import "@material/drawer/dist/mdc.drawer.css"

const StyledDrawer = styled(Drawer)`
  background-color: #17102feb;
  top: 0;
  bottom: 0;
  z-index: 2;
`

const StyledLink = styled(Link)`
  && {
    font-family: "europa";
    // text-transform: uppercase;
    font-size: 112.5%;
    color: #d7ffff;
  }
`
const StyledList = styled(List)`
  && {
    display: flex;
    flex-direction: column;
  }
`

const Header = props => {
  const [menuIconActive, setMenuIconActive] = useState(false)
  const [open, setOpen] = useState(false)

  function menu() {
    setMenuIconActive(!menuIconActive)
    drawerOpen()
  }

  function drawerOpen() {
    setOpen(!open)
  }
  return (
    <header
      {...props}
      className={`${props.isSticky ? "sticky shadow" : "notSticky"}`}
    >
      <div className="flex-shrink-0 p-4 cursor-pointer">
        <Logo className="h-12 nav-logo svg-darkPrimary" />
      </div>
      {/* <i className="fas fa-bars fa-2x visible md:invisible mr-10 md:mr-0 text-blue-200 cursor-pointer"></i> */}
      <ul className=" hidden md:visible text-darkPrimary quicksand md:flex  items-center overflow-x-hidden mr-10 font-semibold">
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
      <div className="flex-shrink-0 p-4 cursor-pointer">
        <div
          id="nav-toggle"
          href="#"
          className={classNames({ active: menuIconActive })}
          onClick={menu}
        >
          <span></span>
        </div>
      </div>
      <StyledDrawer dir="ltr" modal open={open} onClose={menu}>
        <DrawerHeader>
          {" "}
          <DrawerTitle>
            {" "}
            <Logo className="h-12 nav-logo svg-lightPrimary" />
          </DrawerTitle>
        </DrawerHeader>
        <DrawerContent>
          <StyledList>
            <StyledLink to="/" className="nav-list-item">
              Projects
            </StyledLink>
            {/* <StyledLink to="/blog" className="nav-list-item">
                Blog
              </StyledLink> */}

            <StyledLink to="/about" className="nav-list-item">
              About
            </StyledLink>

            {/* <StyledLink to="/404" className="nav-list-item">
                Resume
              </StyledLink> */}
          </StyledList>
        </DrawerContent>
      </StyledDrawer>
      <div className="mt-6 flex flex-row w-full justify-end invisible md:visible">
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
}

export default Header
