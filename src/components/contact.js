import React from "react"
import { Link, navigate } from "gatsby"
import GitHub from "../assets/github-darkRed.svg"
import Email from "../assets/email-darkRed.svg"
import LinkedIn from "../assets/linkedin-darkRed.svg"
import FloatingIcons from "../components/floating-icons"

// const Gradient = styled.div`
//   background: linear-gradient(
//     0deg,
//     rgba(0, 0, 0, 1) 0%,
//     rgba(0, 1, 62, 0.5055894183845413) 29%,
//     rgba(0, 13, 104, 0.15825048281031162) 59%,
//     rgba(198, 204, 214, 0) 100%
//   );
// `
function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }

  render() {
    return (
      <section className="section w-full p-4 sm:w-9/12 lg:w-1/2 m-auto md:m-0 my-4 shadow-md">
        <div className=" font-sans">
          <h1 className="text-xl chivo-reg mb-6 text-center uppercase underlined inline text-lightPrimary">
            Contact
          </h1>
          <form
            name="contact"
            method="post"
            action="/thanks"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={this.handleSubmit}
            className="mt-8"
          >
            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
            <input type="hidden" name="form-name" value="contact" />
            <div hidden>
              <label>
                Don’t fill this out:{" "}
                <input name="bot-field" onChange={this.handleChange} />
              </label>
            </div>
            <div className="flex flex-col md:flex-row justify-between">
              <div className="field w-full md:w-2/5">
                <label className="mb-6 text-lightPrimary " htmlFor={"name"}>
                  Your name
                </label>
                <div className="control">
                  <input
                    className="mt-2 pr-2 block w-full hover:border-teal-400 bg-gray-100 text-grey-darker border border-red rounded py-2 px-4 mb-3"
                    type={"text"}
                    name={"name"}
                    onChange={this.handleChange}
                    id={"name"}
                    required={true}
                  />
                </div>
              </div>
              <div className="field w-full md:w-2/4">
                <label className="label text-lightPrimary " htmlFor={"email"}>
                  Email
                </label>
                <div className="control">
                  <input
                    className="mt-2 block w-full text-grey-darker bg-gray-100 border hover:border-teal-400 rounded py-2 px-4 mb-3"
                    type={"email"}
                    name={"email"}
                    onChange={this.handleChange}
                    id={"email"}
                    required={true}
                  />
                </div>
              </div>
            </div>
            <div className="field">
              <label className="label text-lightPrimary " htmlFor={"message"}>
                Message
              </label>
              <div className="control">
                <textarea
                  className="mt-2 block w-full bg-gray-100  hover:border-teal-400 text-grey-darker border border-red rounded py-2 px-4 mb-3"
                  name={"message"}
                  onChange={this.handleChange}
                  id={"message"}
                  required={true}
                />
              </div>
            </div>
            <div className="field">
              <button
                className="mt-2 h-12 gradient button w-full uppercase  text-darkPrimary rounded p-2 whitespace-no-wrap"
                type="submit"
                style={{ height: "3rem" }}
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </section>
    )
  }
}

const Contact = React.forwardRef((props, ref) => {
  return (
    <footer
      ref={ref}
      className="relative bg-darkPrimary pt-12 pb-12 overflow-hidden"
    >
      <FloatingIcons />
      <div
        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 text-light"
        style={{ height: "80px", transform: "translateZ(0)" }}
      ></div>
      <div className="container mx-auto px-4">
        {" "}
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/3 px-4">
            {" "}
            {/* <Gradient className="w-full h-full absolute bottom-0 right-0 top-0 left-0 opacity-50  " /> */}
            <h4 className="text-3xl font-semibold text-lightPrimary mb-6">
              Get in touch
            </h4>
            <h5 className="text-lg mt-0 mb-2 text-gray-400">
              Find me on these platforms - or say hello!
            </h5>{" "}
            <p className="text-gray-500">izabellewilding@gmail.com</p>
            <div className="my-6 flex flex-row">
              <a
                href="https://github.com/izabellewilding"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white flex shadow-lg font-normal p-2  items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <GitHub className="social-icon-footer" />{" "}
              </a>
              <a
                href="https://www.linkedin.com/in/izabelle-wilding-b68a73130/"
                target="_blank"
                rel="noopener noreferrer"
                className=" bg-white shadow-lg flex font-normal p-2 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <LinkedIn className="social-icon-footer" />
              </a>

              <a
                href="mailto:izabellewilding@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className=" bg-white text-gray-900 shadow-lg font-normal p-2 flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <Email className="social-icon-footer" />
              </a>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4 pt-8 md:pt-0">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full ml-auto">
                <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                  Useful Links
                </span>
                <ul className="list-unstyled">
                  <li>
                    <Link
                      to="/"
                      className="text-gray-700 hover:text-white font-semibold block pb-2 text-sm"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/blog"
                      className="text-gray-700 hover:text-white font-semibold block pb-2 text-sm"
                    >
                      Blog
                    </Link>
                  </li>
                  {/* <li>
                    <Link
                      to="/"
                      className="text-gray-700 hover:text-white font-semibold block pb-2 text-sm"
                      href="https://blog.creative-tim.com"
                    >
                      Resume
                    </Link>
                  </li> */}
                  <li>
                    <a
                      href="https://izabelle-art.netlify.com/#/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-white font-semibold block pb-2 text-sm"
                    >
                      Art
                    </a>
                  </li>
                </ul>
              </div>
              {/* <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                  Other Resources
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="https://github.com/creativetimofficial/argon-design-system/blob/master/LICENSE.md"
                    >
                      MIT License
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="https://creative-tim.com/terms"
                    >
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="https://creative-tim.com/privacy"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="https://creative-tim.com/contact-us"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
        <ContactForm />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-gray-600 font-semibold py-1">
              Copyright © {new Date().getFullYear()}{" "}
              <a className="text-gray-600">Izabelle Wilding</a>
            </div>
          </div>
        </div>{" "}
      </div>
    </footer>
  )
})
export default Contact
