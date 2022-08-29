import React, { useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService.js";
import Animations from "../../utilities/Animations";
import "./AboutMe.css";

export default function AboutMe(props) {
  const scrollingElement = document.scrollingElement || document.body;

  const scrollToBottomHandler = () => {
    scrollingElement.scrollTop = scrollingElement.scrollHeight;
  };

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  useEffect(() => {
    return () => {
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  const SCREEN_CONSTANTS = {
    description:
      "I am a full stack web developer and former teacher with a background in MERN stacks. I love working for hours developing applications that someone will use. My professional committment, motivation, and eagerness to learn new languages would a be an asset for any company or business looking for a software engineer.",
    highlights: {
      bullets: [
        "Full Stack Web Development",
        "Fully Designed and Interactive Front-End",
        "React with Node.js",
        "REST API Endpoints, 3rd party and in-house",
        "Databases Management (MySql and MongoDb)",
      ],
      heading: "Skills Highlights...",
    },
  };
  const renderHighlights = () => {
    return SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };

  return (
    <div
      className="about-me-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"Why hire me?"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
              </div>
              {renderHighlights()}
            </div>
            <div className="about-me-options">
              <button
                className="btn primary-btn"
                onClick={scrollToBottomHandler}
              >
                {""}
                Hire Me{" "}
              </button>
              <a
                href="ClancyResume.pdf"
                download="Clancy ClancyResume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                type="application/pdf"
                title="PDF Resume"
                aria-label="Resume button"
              />
              <button className="btn highlighted-btn">View Resume</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
