import React from "react"
import "../styles/floating-icons.css"
import SassIcon from "../assets/sass-1.svg"
import GitIcon from "../assets/github-darkRed.svg"
import HTML5Icon from "../assets/html5.svg"
import CSS3Icon from "../assets/css-3.svg"
import GatsbyIcon from "../assets/gatsby.svg"
import ReactLogo from "../assets/react-logo.svg"
import PhotoshopLogo from "../assets/adobephotoshop.svg"
import JSLogo from "../assets/javascript.svg"
import IllustratorLogo from "../assets/adobeillustrator.svg"

const FloatingIcons = () => {
  return (
    <div className="tech-icons">
      {/* <a href="" className="tech-icon-link">
        {" "}
        <div className="tech-icon-container sass">
          <SassIcon className="image tech-icon" />
        </div>
      </a> */}

      <div className="tech-icon-container sass">
        <SassIcon className="image tech-icon large" />
      </div>
      <div className="tech-icon-container git">
        <GitIcon className="image tech-icon medium-size" />
      </div>
      <div className="tech-icon-container react">
        <ReactLogo className="image tech-icon medium-size" />
      </div>
      <div className="tech-icon-container java-script">
        <JSLogo className="image tech-icon small" />
      </div>

      <div className="tech-icon-container gatsby">
        <GatsbyIcon className="image tech-icon" />
      </div>
      <div className="tech-icon-container html-5">
        <HTML5Icon className="image tech-icon medium-size" />
      </div>
      <div className="tech-icon-container photoshop">
        <PhotoshopLogo className="image tech-icon small" />
      </div>
      <div className="tech-icon-container css-3">
        <CSS3Icon className="image tech-icon" />
      </div>
      <div className="tech-icon-container illustrator">
        <IllustratorLogo className="image tech-icon medium-size" />
      </div>
    </div>
  )
}

export default FloatingIcons
