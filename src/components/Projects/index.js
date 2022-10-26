import React from "react";
import "./index.css";

function Projects() {
  const big_projects = [
    {
      name: "Movie-Matchers",
      img_name: "Movie-Matchers.png",
      proj_link: "https://github.com/clairecashmore17/project-1",
      description:
        "Frontend website designed to determine your personality and pair it with a movie and a drink.",
      tech: "Javascript, HTML, CSS",
    },
    {
      name: "Bragging Rights",
      img_name: "Braggin_rights.png",

      proj_link: "https://github.com/clairecashmore17/bragging-rights",
      description:
        "Full stack website allowing users to post their favorite in-game achievements and comment on others.",
      tech: "Javascript, Node.js, MySQL, Express.js, Uploader.js",
    },
    {
      name: "PetYard",
      img_name: "Petyard.png",
      proj_link: "https://github.com/clairecashmore17/petyard",
      description:
        "Full-stack React app. Online blog website with a front-end twist! Join others and learn about their pets through our app!",
      tech: "Javascript, React, Node, MongoDB, GraphQL, Apollo",
    },
  ];
  const small_projects = [
    {
      name: "Weather Site",
      img_name: "weather-site.png",
      proj_link: "https://github.com/clairecashmore17/weather-site",
      description:
        "Front-end Website using public API to fetch information and display weather for the searched city made by users. ",
      tech: "Javascript, HTML, CSS",
    },
    {
      name: "Web Game using Phaser&React",
      img_name: "phaser-react-game.png",
      proj_link: "https://github.com/clairecashmore17/phaser-game",
      description: "A basic web browser game developed with Phaser and React",
      tech: "Javascript, React, Phaser3",
    },
    {
      name: "Tech Blog",
      img_name: "Tech-blog.png",
      proj_link: "https://github.com/clairecashmore17/tech-blog",
      description:
        "Create an account; post,comment, and view different posts through your own registered account! Keep up to date with your fellow tech friends.",
      tech: "Javascript, Node.js, Express.js, MySQL",
    },
    {
      name: "README Generator",
      img_name: "readme-generator.JPG",
      proj_link: "https://github.com/clairecashmore17/readme-generator",
      description:
        "Program that takes in user input in order to generate a README.md file with all project information provided.",
      tech: "Javascript, Node.js, Inquirer.js",
    },
    {
      name: "REACT Oh Snap Portfolio",
      img_name: "oh-snap.png",
      proj_link: "https://github.com/clairecashmore17/oh-snap",
      description:
        "Portfolio using React and MongoDB to create an interactive website showcasing the authors photos.",
      tech: "Javascript, React, MongoDB",
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
              <div id="project-description">{project.description}</div>
              <div id="project-tech">
                Technology Used: <br></br>
                {project.tech}
              </div>
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
              <div id="project-description">{project.description}</div>
              <div id="project-tech">
                Technology Used: <br></br>
                {project.tech}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Projects;
