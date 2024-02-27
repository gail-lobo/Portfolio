import React from "react";
import ProjectItem from "../Components/ProjectItem";
import ProjectList from "../assets/ProjectList";
import "../styles/Projects.css";

function Projects() {
  return (
    <div className="projects">
      <h1>My Personal Projects</h1>
      <div className="projectList">
        {ProjectList.map((project, idx) => {
          return (
            <ProjectItem
              key={idx}
              id={idx}
              name={project.name}
              image={project.image}
              skills={project.skills}
              gitLink={project.gitLink}
              features={project.features}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
