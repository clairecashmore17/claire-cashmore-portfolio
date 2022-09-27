import React from "react";
import "./index.css";
function Resume() {
  return (
    <>
      <section id="resume">
        <h1 className="title">Resume</h1>
        <div id="resume-info">
          <div id="skills">
            <h2>Proficiencies</h2>
            <ul>
              <li> C Programming </li>
              <li> Javascript </li>
              <li> C++ Programming </li>
              <li> MongoDB </li>
              <li> Express </li>
              <li> React </li>
              <li> Node.js </li>
              <li> HTML and CSS </li>
            </ul>
          </div>
          <div id="pdf">
            <img id="resume-img" src={require("../../images/resume.JPG")} />
            <a href={require("../../images/Resume_PDF.pdf")} download>
              Download as pdf
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Resume;
