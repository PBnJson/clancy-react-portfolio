import React from "react";
import Typical from "react-typical";
import "./Profile.css";

export default function Profile() {
  const scrollingElement = document.scrollingElement || document.body;

  const scrollToBottomHandler = () => {
    scrollingElement.scrollTop = scrollingElement.scrollHeight;
  };

  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://github.com/PBnJson">
                <i className="fa fa-github-square"></i>
              </a>

              <a href="https://www.linkedin.com/in/joshua-clancy-b57448240/">
                <i className="fa fa-linkedin-square"></i>
              </a>

              <a href="https://twitter.com/JoshuaMClancy">
                <i className="fa fa-twitter-square"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">Josh</span>
            </span>{" "}
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  steps={[
                    "Full Stack Developer",
                    2000,
                    "Sofware Engineer",
                    1000,
                    "Spanish Speaker",
                    1500,
                    "FrontEnd Designer",
                    1000,
                    "BackEnd Developer",
                    1250,
                  ]}
                  loop={Infinity}
                  wrapper="p"
                />
              </h1>
            </span>
            <span className="profile-role-tagline">
              There's something special about building something other people
              will use.
            </span>
          </div>

          <div className="profile-options">
            <button className="btn primary-btn" onClick={scrollToBottomHandler}>
              {" "}
              Hire Me{" "}
            </button>
            <a
              href="ClancysResume.pdf"
              download="ClancysResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              type="application/pdf"
            >
              <button className="btn highlighted-btn">View Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
