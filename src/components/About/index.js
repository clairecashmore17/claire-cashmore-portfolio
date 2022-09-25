import React from "react";
import "./index.css";
function About() {
  return (
    <>
      <section id="about">
        <h2 className="title">About Me</h2>
        <div id="info">
          <img
            id="profile-img"
            src="https://clairecashmore17.github.io/Portfolio/images/claire-profile.jpg"
            alt="Claire Cashmore"
          />

          <p id="about-me">
            I am a graduate with B.S. in Computer Engineering from Embry Riddle
            Aeronautical University. I completed my studies with a 3.471 GPA
            while participating in the schools collegiate soccer team. I hope to
            continue the pattern of maintaining a balance between staying
            athletic and following my dreams in the software industry.
            <br />
            <br />
            After completing my undergraduate degree, I decided to pursue
            Full-Stack development through George Washington University's 2U
            blended program. I have since gained experience in developing a
            full-stack application and hope to find a job to apply these skills.
            <br />
            <br /> I am currently seeking a role as a full-stack developer or
            software engineer. Proficient with C/C++ but have worked with C# and
            javascript. Always looking for a new opportunity to learn and become
            experienced in any language. <br />
            <br /> Experienced coursework such as Data Structures and
            Algorithms, Software Engineering Practices, Discrete Math
            Structures, and Microprocessors, Node.js, Handlebars, HTML and CSS.
          </p>
        </div>
      </section>
    </>
  );
}

export default About;
