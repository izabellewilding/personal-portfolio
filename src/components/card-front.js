import React from "react"
import Img from "../components/image"
import "../styles/projects.css"
import styled from "styled-components"
import GitHub from "../assets/github-darkRed.svg"

const Gradient = styled.div`
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 7%,
    rgba(0, 9, 36, 0.82) 40%,
    rgba(0, 8, 9, 0.62) 64%
  );
  height: 100%;
  width: 100%;
`

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
        className="card-font-image-wrapper absolute top-0 bottom-0 right-0 left-0"
        {...props}
      >
        <Img src={props.cardImage} className="card-img " />
      </div>{" "}
      <Gradient className=" absolute top-0 bottom-0 right-0 left-0" />
      <p className="absolute text-white text-4xl uppercase flex barlow-cond p-8 text-center">
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
      </div>
    </div>
  )
}

export default CardFront
