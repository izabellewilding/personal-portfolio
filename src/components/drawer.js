import React from "react"
import { Drawer, DrawerHeader, DrawerTitle, DrawerContent } from "@rmwc/drawer"
import { List } from "@rmwc/list"
import styled from "styled-components"
import { Link } from "gatsby"
import Logo from "../assets/text-logo2.svg"

const StyledDrawer = styled(Drawer)`
  background-color: #ffffff;
  top: 0;
  bottom: 0;
  z-index: 100;
`

const StyledList = styled(List)`
  && {
    display: flex;
    flex-direction: column;
    list-style: none;
  }
`

const NavDrawer = ({ ...props }) => {
  return (
    <StyledDrawer className="z-50" dir="ltr" modal open={open} onClose={menu}>
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
            <li className="text-darkPrimary nav-list-item  mr-6 p-1">About</li>
          </a>
          <a href="/blog">
            <li className="text-darkPrimary nav-list-item mr-6 p-1">Blog</li>
          </a>{" "}
          <a
            onClick={() => props.onNav("contact")}
            className="hover:text-midPrimary cursor-pointer"
          >
            <li className="text-darkPrimary nav-list-item mr-6 p-1">Contact</li>{" "}
          </a>{" "}
        </StyledList>
      </DrawerContent>
    </StyledDrawer>
  )
}
export default NavDrawer
