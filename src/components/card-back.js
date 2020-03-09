import React from "react"
import "../styles/card-back.scss"
import "../styles/projects.scss"
import Img from "./image"
import GitHub from "../assets/github-darkRed.svg"

const CardBack = ({ ...props }) => {
  return (
    <div className="card-back" {...props}>
      <div className="card-gradient"></div>

      <div className="card-text-wrapper p-5">
        <h3 className="card-back-title font-semibold">Main Features</h3>
        {/* <h3 className="card-back-subtitle">Features</h3> */}
        <ul style={{ listStyle: "square" }}>
          <li>{props.listItem1}</li>
          <li>{props.listItem2}</li>
          <li>{props.listItem3}</li>
        </ul>{" "}
        <div className="card-back-buttons">
          <a href={props.siteLink} target="_blank" rel="noopener noreferrer">
            <button className="visit-site-button">View Site</button>
          </a>{" "}
          {/* <CardWave className="card-wave" /> */}
          <a href={props.gitLink} target="_blank" rel="noopener noreferrer">
            <button className="visit-site-button">
              {" "}
              <GitHub className="git-button-icon" />
              Git
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default CardBack
