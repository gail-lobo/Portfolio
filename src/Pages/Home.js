import React from "react";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Email from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, My Name is Gail</h2>
        <div className="prompt">
          <p>
            A software developer fueled by learning, growth, and bouncing back
            from setbacks!
          </p>
          <a
            href="https://www.linkedin.com/in/gail-lobo-web-developer/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn></LinkedIn>
          </a>
          <a
            href="https://github.com/gail-lobo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon></GitHubIcon>
          </a>
          <a
            href="mailto:gaillobo89@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Email></Email>
          </a>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <div>
          <p>Front-End: ReactJS, HTML, CSS, Bootstrap</p>
          <p>Back-End: NodeJS, ExpressJS</p>
          <p>Database: MySQL, MongoDB, MS SQL</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
