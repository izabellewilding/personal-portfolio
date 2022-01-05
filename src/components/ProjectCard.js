import React from "react"
import Github from "../assets/github-darkRed.svg"
import Home from "../assets/add_to_home_screen-24px.svg"

const LinkButton = ({ icon, ...props }) => {
  return (
    <a
      href={props.href}
      className="flex flex-row items-center text-sm  DM-sans text-white"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="view on Guthub"
    >
      {icon}
      <p className="mr-2">{props.label}</p>
    </a>
  )
}

const ProjectCard = ({ ...props }) => {
  return (
    <div
      {...props}
      className=" shadow-lg DM-sans w-full max-w-screen relative min-w-full h-full "
    >
      <section
        className="relative bg-gray-800 text-white p-5 h-full lg:p-10 flex flex-col md:justify-between "
        style={{
          backgroundColor: `${props.backgroundcolor}`,
        }}
      >
        <div>
          <div className="quicksand quicksand-letter-spacing text-sm  uppercase">
            {props.date}
          </div>
          <div className="font-bold text-3xl mb-6">{props.cardtitle}</div>
          <ul className=" text-gray-400 text-lg list-disc p-4">
            <li> {props.listitem1}</li>
            <li> {props.listitem2}</li>
            <li> {props.listitem3}</li>
          </ul>{" "}
        </div>
        <section className="flex flex-row md:flex-col">
          <LinkButton
            href={props.sitelink}
            icon={<Home className="button-icons svg-lightPrimary" />}
            label="View"
          />
          <LinkButton
            href={props.gitlink}
            icon={<Github className="button-icons svg-lightPrimary" />}
            label="Source Code"
          />
        </section>
        {/* <section className="project-image-wrapper h-1/2">
          <Img
            src={props.cardimage} // pauseRef={pause => this.pauseGif = pause}
            className="project-image"
          />{" "}
        </section> */}
      </section>{" "}
      {/* <div className="h-1/2 "></div>{" "} */}
    </div>
  )
}

export default ProjectCard
