import React from "react"
import Img from "./image"

const LinkButton = ({ icon, ...props }) => {
  return (
    <a
      className="flex flex-row items-center  px-3 py-1 text-sm text-black mr-2 DM-sans"
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
      {props.linkName}
    </a>
  )
}

const ProjectCard = ({ ...props }) => {
  return (
    <a
      href={props.sitelink}
      {...props}
      target="__blank"
      className="overflow-hidden shadow-lg DM-sans w-full relative"
      style={{ height: 600, minWidth: 371 }}
    >
      <div
        className="absolute top-0 bottom-0 right-0 left-0 flex flex-col bg-gray-800 text-white p-10 "
        style={{ backgroundColor: `${props.backgroundColor}` }}
      >
        <div className="quicksand quicksand-letter-spacing text-sm  uppercase">
          {props.date}
        </div>
        <div className="font-bold text-3xl mb-6">{props.cardtitle}</div>
        <ul className=" text-gray-400 text-lg list-disc list-inside">
          <li> {props.listitem1}</li>
          <li> {props.listitem2}</li>
          <li> {props.listitem3}</li>
        </ul>{" "}
      </div>{" "}
      <Img
        src={props.cardimage} // pauseRef={pause => this.pauseGif = pause}
        style={{ position: "absolute", width: "59%", height: "45%" }}
        className=" bottom-0 right-0 h-64 opacity-75"
      />
      {/* <div className="h-1/2 "></div>{" "} */}
    </a>
  )
}

export default ProjectCard
