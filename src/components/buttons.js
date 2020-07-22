import React from "react"
import { Link as ScrollLink } from "react-scroll"
import { Link as GatsbyLink } from "gatsby"

export const ScrollButton = ({ ...props }) => {
  return (
    <ScrollLink
      to={props.linkto}
      spy={true}
      smooth={true}
      offset={0}
      duration={500}
      className="p-4 w-full DM-sans text-lg "
      role="button"
    >
      {props.content}
    </ScrollLink>
  )
}

export const NavigationButton = ({ ...props }) => {
  return (
    <GatsbyLink
      to={props.linkto}
      className="p-4 w-full DM-sans text-lg "
      role="button"
    >
      <div>{props.content}</div>
    </GatsbyLink>
  )
}

export const TextButton = ({ ...props }) => {
  return (
    <div className="p-4 rounded-full text-lightPrimary uppercase DM-sans text-lg bg-secondary button-hover ">
      {props.text}
    </div>
  )
}
