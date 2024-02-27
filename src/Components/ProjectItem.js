import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";

function ProjectItem({ image, name, skills, features, gitLink }) {
  return (
    <div className="projectItem">
      <div className="card">
        <div className="frontEnd">
          <div
            style={{ backgroundImage: `url(${image})` }}
            className="bgImage"
          ></div>
          <h2>{name}</h2>
          <div>
            {skills.map((skill, index) => {
              return (
                <span className="skill" key={index}>
                  {" "}
                  {skill}
                </span>
              );
            })}
          </div>
        </div>
        <div className="backEnd">
          <div className="features">
            <p className="featuresTitle">Highlights:</p>
            {features.map((feature, index) => {
              return (
                <p className="featuresContent" key={index}>
                  &#x2022; {feature}
                </p>
              );
            })}
          </div>
          <div className="gitIcon">
            <a href={gitLink} target="_blank" rel="noopener noreferrer">
              <GitHubIcon></GitHubIcon>
              <p>GitHub</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
