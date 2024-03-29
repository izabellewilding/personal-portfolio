import React from "react"
import Img from "./image"
import "../styles/projects.css"
import styled from "styled-components"
import GitHub from "../assets/github-darkRed.svg"

//flip cards are no longer part of the site but leaving here for future use 


// const Gradient = styled.div`
//   background: linear-gradient(
//     0deg,
//     rgba(0, 0, 0, 1) 7%,
//     rgba(0, 9, 36, 0.82) 40%,
//     rgba(0, 8, 9, 0.62) 64%
//   );
//   height: 100%;
//   width: 100%;
// `

const CardFront = ({ ...props }) => {
  return (
    <div
      className="card-front relative"
      {...props}
      // style={{
      //   border: "solid black 1px",
      // }}
    >
      {" "}
      <div
        className="card-font-image-wrapper absolute top-0 bottom-0 right-0 left-0 flex"
        {...props}
      >
        <Img src={props.cardImage} className="card-img " />
        {/* <Gradient className=" absolute top-0 bottom-0 right-0 left-0" /> */}
        <p className="text-white text-4xl uppercase flex barlow-cond p-8 text-center">
          {props.cardTitle}
        </p>
        <div className="card-buttons absolute visible md:invisible text-center">
          <a href={props.siteLink} target="_blank" rel="noopener noreferrer">
            <button className="visit-site-button">View Site</button>
          </a>{" "}
          <a href={props.gitLink} target="_blank" rel="noopener noreferrer">
            <button className="visit-site-button">
              {" "}
              <GitHub className="git-button-icon" />
              Github
            </button>
          </a>
        </div>{" "}
      </div>
    </div>
  )
}

export default CardFront
