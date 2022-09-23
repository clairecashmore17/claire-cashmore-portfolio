import React from "react";
import "./index.css";
function About() {
  return (
    <>
      <section id="about">
        <h2 className="title">About Me</h2>

        <img
          src="https://clairecashmore17.github.io/Portfolio/images/claire-profile.jpg"
          alt="Claire Cashmore"
        />

        <p id="about-me">
          I am a recent graduate with B.S. in Computer Engineering from Embry
          Riddle Aeronautical University. I have played soccer for 18 years
          including 4 at a collegiate level. Being athletic is a huge part of my
          life despite my love for sitting behind a screen.
          <br />
          <br />
          I plan to attend George Washington University to attain my masters in
          Computer Science specializing in Computer Graphics, animation, and
          multimedia. I have a large interest in the gaming and/or graphic
          development specifically.
          <br />
          <br />
          Proficient with C/C++ but have worked with python, C#, and javascript.
          Always looking for a new opportunity to learn and become experienced
          in any language.
          <br />
          <br />
          Experienced coursework such as Data Structures and Algorithms,
          Software Engineering Practices, Discrete Math Structures, and
          Microprocessors.
        </p>
      </section>
    </>
  );
}

export default About;
