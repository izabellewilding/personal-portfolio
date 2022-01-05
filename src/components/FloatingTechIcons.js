import React from "react"
import "../styles/floating-icons.scss"
import SassIcon from "../assets/sass-1.svg"
import GitIcon from "../assets/github-darkRed.svg"
import HTML5Icon from "../assets/html5.svg"
import CSS3Icon from "../assets/css-3.svg"
import GatsbyIcon from "../assets/gatsby.svg"
import ReactLogo from "../assets/react-logo.svg"
import PhotoshopLogo from "../assets/adobephotoshop.svg"
import JSLogo from "../assets/javascript.svg"
import IllustratorLogo from "../assets/adobeillustrator.svg"

const IconContainer = ({ children, ...props }) => {
  return (
    <div className={` tech-icon-container ${props.iconName}`}>{children}</div>
  )
}
const FloatingIcons = () => {
  return (
    <div className="tech-icons">
      <IconContainer iconName="sass">
        <SassIcon className="image tech-icon large" />
      </IconContainer>
      <IconContainer iconName="git">
        <GitIcon className="image tech-icon medium-size" />
      </IconContainer>{" "}
      <IconContainer iconName="react">
        <ReactLogo className="image tech-icon medium-size" />
      </IconContainer>
      <IconContainer iconName="java-script">
        <JSLogo className="image tech-icon small" />
      </IconContainer>{" "}
      <IconContainer iconName="gatsby">
        <GatsbyIcon className="image tech-icon" />
      </IconContainer>{" "}
      <IconContainer iconName="html-5">
        <HTML5Icon className="image tech-icon medium-size" />
      </IconContainer>{" "}
      <IconContainer iconName="photoshop">
        <PhotoshopLogo className="image tech-icon small" />
      </IconContainer>{" "}
      <IconContainer iconName="css-3">
        <CSS3Icon className="image tech-icon" />
      </IconContainer>{" "}
      <IconContainer iconName="illustrator">
        <IllustratorLogo className="image tech-icon medium-size" />
      </IconContainer>{" "}
    </div>
  )
}

export default FloatingIcons
