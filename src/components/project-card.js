import React from "react"
import Img from "./image"
import Github from "../assets/github-darkRed.svg"
import Home from "../assets/add_to_home_screen-24px.svg"

const LinkButton = ({ icon, ...props }) => {
  return (
    <a
      href={props.href}
      className="flex flex-row items-center px-3 py-1 text-sm  mr-2 DM-sans text-white"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="view on Guthub"
    >
      {icon}
      <p className=" mr-2">{props.label}</p>
    </a>
  )
}

const ProjectCard = ({ ...props }) => {
  return (
    <div
      {...props}
      className="overflow-hidden shadow-lg DM-sans w-full relative "
      style={{ height: 600, minWidth: 371 }}
    >
      <div
        className="absolute top-0 bottom-0 right-0 left-0  bg-gray-800 text-white p-10 flex flex-col justify-between "
        style={{ backgroundColor: `${props.backgroundcolor}` }}
      >
        <section>
          <div className="quicksand quicksand-letter-spacing text-sm  uppercase">
            {props.date}
          </div>
          <div className="font-bold text-3xl mb-6">{props.cardtitle}</div>
          <ul className=" text-gray-400 text-lg list-disc list-inside">
            <li> {props.listitem1}</li>
            <li> {props.listitem2}</li>
            <li> {props.listitem3}</li>
          </ul>{" "}
        </section>
        <section className="flex flex-col justify-end">
          <LinkButton
            href={props.sitelink}
            icon={<Home className=" button-icons svg-lightPrimary" />}
            label="View"
          />
          <LinkButton
            href={props.gitlink}
            icon={<Github className="button-icons svg-lightPrimary" />}
            label="Source Code"
          />
        </section>
      </div>{" "}
      <Img
        src={props.cardimage} // pauseRef={pause => this.pauseGif = pause}
        style={{ position: "absolute", width: "59%", height: "45%" }}
        className=" bottom-0 right-0 h-64 opacity-75"
      />{" "}
      {/* <div className="h-1/2 "></div>{" "} */}
    </div>
  )
}

export default ProjectCard
