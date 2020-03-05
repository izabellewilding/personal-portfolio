import React from "react"
import Img from "../components/image"
import "../styles/card-front.scss"
import "../styles/projects.scss"
import styled from "styled-components"

const Gradient = styled.div`
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 7%,
    rgba(0, 22, 85, 0.5784185500372023) 40%,
    rgba(198, 204, 214, 0) 64%
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
      <p className="absolute bottom-0 left-0 text-white text-3xl flex quicksand uppercase p-5">
        {props.cardTitle}
      </p>
    </div>
  )
}

export default CardFront
