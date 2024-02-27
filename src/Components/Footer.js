import React from "react";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Email from "@mui/icons-material/Email";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a
          href="https://www.linkedin.com/in/gail-lobo-web-developer/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedIn></LinkedIn>
        </a>
        <a
          href="mailto:gaillobo89@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Email></Email>
        </a>
      </div>
      <p>&copy; 2024 Gail Lobo</p>
    </div>
  );
}

export default Footer;
