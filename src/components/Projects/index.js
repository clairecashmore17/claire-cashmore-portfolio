import React from "react";
import "./index.css";

function Projects() {
  const big_projects = [
    {
      name: "Movie-Matchers",
      img_name: "Movie-Matchers.png",
      proj_link: "https://github.com/clairecashmore17/project-1",
    },
    {
      name: "Bragging Rights",
      img_name: "Braggin_rights.png",
      proj_link: "https://github.com/clairecashmore17/bragging-rights",
    },
    {
      name: "Web Game using Phaser&React",
      img_name: "phaser-react-game.png",
      proj_link: "https://github.com/clairecashmore17/phaser-game",
    },
  ];
  const small_projects = [
    {
      name: "Weather Site",
      img_name: "weather-site.png",
      proj_link: "https://github.com/clairecashmore17/weather-site",
    },
    {
      name: "Tech Blog",
      img_name: "Tech-blog.png",
      proj_link: "https://github.com/clairecashmore17/tech-blog",
    },
    {
      name: "README Generator",
      img_name: "readme-generator.JPG",
      proj_link: "https://github.com/clairecashmore17/readme-generator",
    },
    {
      name: "REACT Oh Snap Portfolio",
      img_name: "oh-snap.png",
      proj_link: "https://github.com/clairecashmore17/oh-snap",
    },
  ];
  return (
    <>
      <section id="projects">
        <h2 className="title">Projects</h2>
        <div id="proj-collection">
          {big_projects.map((project) => (
            <div className="project card">
              <a href={project.proj_link} target="_blank">
                <img
                  src={require(`../../images/${project.img_name}`)}
                  alt={project.name}
                  key={project.name}
                />
              </a>

              <div id="project-name">{project.name}</div>
            </div>
          ))}
        </div>
        <div id="proj-collection">
          {small_projects.map((project) => (
            <div className="card" id="small-project">
              <a href={project.proj_link} target="_blank">
                <img
                  src={require(`../../images/${project.img_name}`)}
                  alt={project.name}
                  key={project.name}
                />
              </a>

              <div id="project-name">{project.name}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Projects;
