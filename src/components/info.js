import React from "react"

import {
  FaGithub as Github,
  FaInstagram as Insta,
  FaEnvelope as Mail,
  FaLinkedin as LinkedIn,
} from "react-icons/fa"

export default function info() {
  return (
    <div className="container">
      <div className="my-5"></div>
      <div className="display-3" style={{ color: "#FF8A00" }}>
        <span style = {{color : "white"}}>Hello, I'm</span> <br />
        Harsh Patni.
      </div>
      <div className="h1 code mt-4 mb-3">async {"{"}</div>
      <div className="text-muted mx-5 my-4 h3 text-justify info">
        A Passionate Software Engineer, Front-end Engineer, and Project Lead.<br />
        <br /> I'm a mission driven Full-Stack Engineer with a passion of thoughtful learning & collaboration. I’ve always sought out opportunities & challenges that are meaningful to me. I love what I do & I'll never stop engaging my passion to help others & solve problems.
      </div>
      <div className="h1 code mt-2 mb-3">{"}"}</div>
      <div className="h1 mt-5">
        <a className="mr-5 icon" href="https://www.linkedin.com/in/harsh-patni-5a76a7137/">
          <LinkedIn />
        </a>
        <a className="mr-5 icon" href="https://github.com/patni-harsh5">
          <Github />
        </a>
        <a className="mr-5 icon" href="https://www.instagram.com/harsh95patni/">
          <Insta />
        </a>
        <a className="mr-5 icon" href="mailto://patni.harsh5@gmail.com">
          <Mail />
        </a>
      </div>
    </div>
  )
}
