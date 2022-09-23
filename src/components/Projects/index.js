import React from "react";
import "./index.css";

function Projects() {
  const projects = [
    {
      name: "project 1",
      img_src: "",
    },
    {
      name: "project 2",
      img_src: "./Movie-Matchers.png",
    },
  ];
  return (
    <>
      <section id="projects">
        <h2 className="title">Projects</h2>
        <div id="proj-collection">
          {projects.map((project) => (
            <div className="project card">
              <img src={project.img_src} alt="${}" />
              <div>{project.name}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Projects;
