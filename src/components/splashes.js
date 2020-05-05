import React from "react"
import Splash from "../assets/slash-nice.svg"
import SplashMedium from "../assets/slash-medium.svg"

const Splashes = () => {
  return (
    <div>
      <Splash
        className=" absolute lightSVG bottom-0 splash "
        style={{ height: "35vh" }}
      />
      <SplashMedium
        className=" absolute bottom-0  lightSVG splash-med-left  invisible sm:visible"
        style={{ height: "50vh" }}
      />
      <Splash
        className=" absolute lightSVG top-0 splash2 "
        style={{ height: "35vh" }}
      />
      <SplashMedium className="h-screen absolute bottom-0 right-0 lightSVG" />
    </div>
  )
}

export default Splashes
