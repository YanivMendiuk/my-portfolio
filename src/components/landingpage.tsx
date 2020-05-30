import React from "react";
import { Grid, Cell } from "react-mdl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export const Landing: React.FC = () => {
  return (
    <div style={{ width: "100%", margin: "auto" }}>
      <Grid className="landing-grid">
        <Cell col={12}>
          <img src="photo.jpeg" alt="avatar" className="avatar-img" />
          <div className="banner-text">
            <h1>Full Stack Web Developer</h1>
            <hr />
            <p>
              HTML/CSS | JavaScript | TypeScript | React | NodeJS | Express |
              MongoDB
            </p>
            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/yaniv-mendiuk-8543721ab/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
              <a
                href="https://github.com/YanivMendiuk"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
              <a
                href="https://www.facebook.com/yaniv.mendiuk/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              {/* <a href="" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github" />
              </a> */}
            </div>
          </div>
        </Cell>
      </Grid>
    </div>
  );
};
