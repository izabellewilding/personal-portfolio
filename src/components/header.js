import React, { useState } from "react"
import { Link } from "gatsby"
import Logo from "../assets/text-logo2.svg"
import GitHub from "../assets/github-darkRed.svg"
import Email from "../assets/email-darkRed.svg"
import LinkedIn from "../assets/linkedin-darkRed.svg"
import Twitter from "../assets/twitter.svg"
import Medium from "../assets/medium.svg"

import classNames from "classnames"
import { Drawer, DrawerHeader, DrawerTitle, DrawerContent } from "@rmwc/drawer"
import styled from "styled-components"
import { List } from "@rmwc/list"
import "@material/list/dist/mdc.list.min.css"
import "@material/drawer/dist/mdc.drawer.min.css"

const StyledDrawer = styled(Drawer)`
  background-color: #ffffff;
  top: 0;
  bottom: 0;
  z-index: 50;
  height: 100vh;
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
      className={`${
        props.isSticky ? "nav-active shadow z-40" : "nav-hidden shadow z-40"
      }`}
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
          <li className="text-darkPrimary nav-list-item hover-textLight custom-underline mr-6 p-1 quicksand">
            Projects
          </li>{" "}
        </a>
        <a
          onClick={() => props.onNav("about")}
          className="hover:text-midPrimary cursor-pointer"
        >
          {" "}
          <li className="text-darkPrimary nav-list-item  hover-textLight custom-underline mr-6 p-1 quicksand">
            About
          </li>
        </a>
        <Link to="/blog">
          <li className="text-darkPrimary nav-list-item hover-textLight custom-underline mr-6 p-1 quicksand">
            Blog
          </li>
        </Link>{" "}
        <a
          onClick={() => props.onNav("contact")}
          className="hover:text-midPrimary cursor-pointer"
        >
          <li className="text-darkPrimary nav-list-item hover-textLight custom-underline mr-6 p-1 quicksand">
            Contact
          </li>
        </a>{" "}
      </ul>
      <div className="flex-shrink-0 p-4 cursor-pointer" onClick={menu}>
        <div
          id="nav-toggle"
          href="#"
          className={classNames("visible md:invisible", {
            active: menuIconActive,
          })}
        >
          <span></span>
        </div>
      </div>
      <StyledDrawer
        className="z-10 h"
        dir="ltr"
        modal
        open={open}
        onClose={menu}
      >
        <DrawerHeader>
          {" "}
          <DrawerTitle>
            {" "}
            <Link to="/">
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
            <a
              onClick={() => props.onNav("about")}
              className="hover:text-midPrimary cursor-pointer"
            >
              {" "}
              <li className="text-darkPrimary nav-list-item  mr-6 p-1">
                About
              </li>
            </a>
            <a href="/blog">
              <li className="text-darkPrimary nav-list-item mr-6 p-1">Blog</li>
            </a>{" "}
            <a
              onClick={() => props.onNav("contact")}
              className="hover:text-midPrimary cursor-pointer"
            >
              <li className="text-darkPrimary nav-list-item mr-6 p-1">
                Contact
              </li>{" "}
            </a>{" "}
            {/* <Link className="hover:text-midPrimary cursor-pointer">
              <li className="nav-list-item mr-6 p-1">
                <a className="text-darkPrimary" href="#">
                  Blog
                </a>
              </li>
            </Link>{" "} */}
          </StyledList>
        </DrawerContent>
      </StyledDrawer>
      <div className=" flex flex-row w-full justify-end invisible md:visible">
        <a
          href="https://github.com/izabellewilding"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lightPrimary flex font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
          type="button"
        >
          <GitHub className="social-icon" />{" "}
        </a>
        <a
          href="https://www.linkedin.com/in/izabelle-wilding-b68a73130/"
          target="_blank"
          rel="noopener noreferrer"
          className=" text-lightPrimary flex font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
          type="button"
        >
          <LinkedIn className="social-icon" />
        </a>
        <a
          href="https://twitter.com/izzwizz_"
          target="_blank"
          rel="noopener noreferrer"
          className=" text-gray-900 font-normal h-10 w-10 flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
          title="Twitter"
        >
          <Twitter className="social-icon" />
        </a>
        <a
          href="https://medium.com/@izabellewilding"
          target="_blank"
          rel="noopener noreferrer"
          className=" text-gray-900 font-normal h-10 w-10 flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
          title="Medium"
        >
          <Medium className="social-icon" />
        </a>
      </div>
    </header>
  )
}

export default Header
