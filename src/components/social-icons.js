import React from "react"

import GitHub from "../assets/github-darkRed.svg"
import Email from "../assets/email-darkRed.svg"
import LinkedIn from "../assets/linkedin-darkRed.svg"

import "../styles/social-icons.css"

const SocialIcons = props => {
  return (
    <div className="social-bar">
      <div className="flex">
        <a
          href="https://github.com/izabellewilding"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon-container m-5"
          title="GitHub"
        >
          <GitHub id="git-icon " className="social-icon" />
          <p className="text-xs icon-text p-2">GitHub</p>
        </a>
        <a
          href="https://www.linkedin.com/in/izabelle-wilding-b68a73130/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon-container m-5"
          title="Linkedin"
        >
          <LinkedIn className="social-icon w-1/3" />
          <p className="text-xs icon-text p-2">Linkedin</p>
        </a>
        <a
          href="mailto:izabellewilding@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon-container m-5"
          title="Email"
        >
          <Email className="social-icon w-1/3" />
          <p className=" text-xs icon-text p-2">Email</p>
        </a>
      </div>
    </div>
  )
}

export default SocialIcons
