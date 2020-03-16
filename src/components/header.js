import React, { useState, useRef } from "react"
import { Link } from "gatsby"
import Logo from "../assets/text-logo2.svg"
import GitHub from "../assets/github-darkRed.svg"
import Email from "../assets/email-darkRed.svg"
import LinkedIn from "../assets/linkedin-darkRed.svg"
import classNames from "classnames"

import { Drawer, DrawerHeader, DrawerTitle, DrawerContent } from "@rmwc/drawer"
import styled from "styled-components"
import { ListItem, List } from "@rmwc/list"
import "@material/list/dist/mdc.list.min.css"
import "@material/drawer/dist/mdc.drawer.min.css"

const StyledDrawer = styled(Drawer)`
  background-color: #ffffff;
  top: 0;
  bottom: 0;
  z-index: 2;
`

const StyledList = styled(List)`
  && {
    display: flex;
    flex-direction: column;
    list-style: none;
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
      className={`${props.isSticky ? "sticky shadow gradient" : "notSticky"}`}
    >
      <Link to="/" className="flex-shrink-0 p-4 cursor-pointer">
        <Logo className="h-12 nav-logo svg-darkPrimary" />
      </Link>
      <ul className="invisible md:visible text-darkPrimary quicksand flex items-center text-center mr-10 font-semibold w-full">
        {" "}
        <a
          onClick={() => props.onNav("projects")}
          className="hover:text-midPrimary cursor-pointer"
        >
          <li className="text-darkPrimary nav-list-item custom-underline mr-6 p-1 quicksand">
            Projects
          </li>{" "}
        </a>
        <a
          onClick={() => props.onNav("about")}
          className="hover:text-midPrimary cursor-pointer"
        >
          {" "}
          <li className="text-darkPrimary nav-list-item custom-underline mr-6 p-1 quicksand">
            About
          </li>
        </a>
        <a href="/blog">
          <li className="text-darkPrimary nav-list-item custom-underline mr-6 p-1 quicksand">
            Blog
          </li>
        </a>{" "}
        <a
          onClick={() => props.onNav("contact")}
          className="hover:text-midPrimary cursor-pointer"
        >
          <li className="text-darkPrimary nav-list-item custom-underline mr-6 p-1 quicksand">
            Contact
          </li>
        </a>{" "}
        {/* <Link
          
          className="hover:text-midPrimary cursor-pointer"
        >
          <li className="text-darkPrimary nav-list-item custom-underline mr-6 p-1">
            Blog
          </li>
        </Link> */}
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
      <StyledDrawer
        className=" z-10"
        dir="ltr"
        modal
        open={open}
        onClose={menu}
      >
        <DrawerHeader>
          {" "}
          <DrawerTitle>
            {" "}
            <Link>
              <Logo className="h-12 nav-logo svg-darkPrimary" />
            </Link>
          </DrawerTitle>
        </DrawerHeader>
        <DrawerContent>
          <StyledList stlye={{ listStyle: "none" }}>
            <a
              onClick={() => props.onNav("projects")}
              className="hover:text-midPrimary cursor-pointer"
            >
              <li className="text-darkPrimary nav-list-item mr-6 p-1">
                Projects
              </li>
            </a>
            {/* <StyledLink to="/blog" className="nav-list-item">
                Blog
              </StyledLink> */}
            <a
              onClick={() => props.onNav("about")}
              className="hover:text-midPrimary cursor-pointer"
            >
              {" "}
              <li className="text-darkPrimary nav-list-item  mr-6 p-1">
                About
              </li>
            </a>
            <Link to="/blog">
              <li className="text-darkPrimary nav-list-item mr-6 p-1 quicksand">
                Blog
              </li>
            </Link>{" "}
            <a
              onClick={() => props.onNav("contact")}
              className="hover:text-midPrimary cursor-pointer"
            >
              <li className="text-darkPrimary nav-list-item mr-6 p-1">
                Contact
              </li>{" "}
            </a>{" "}
            {/* <Link
              to="blog"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="hover:text-midPrimary cursor-pointer"
              activeClass="sm-active"
              onSetActive={handleSetActive}
            >
              <li className="nav-list-item mr-6 p-1">
                <a className="text-darkPrimary" href="#">
                  Blog
                </a>
              </li>
            </Link> */}
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
          className="text-lightPrimary flex font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
          type="button"
        >
          <GitHub className="social-icon-footer" />{" "}
        </a>
        <a
          href="https://www.linkedin.com/in/izabelle-wilding-b68a73130/"
          target="_blank"
          rel="noopener noreferrer"
          className=" text-lightPrimary flex font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
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
          className=" text-gray-900 font-normal h-10 w-10 flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
          type="button"
        >
          <Email className="social-icon-footer" />
        </a>
      </div>
    </header>
  )
}

export default Header
