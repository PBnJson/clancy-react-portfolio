import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import Animations from "../../utilities/Animations";
import ScrollService from "../../utilities/ScrollService";
import "./Resume.css";

export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

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

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "_" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Skill-Set", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 85 },
    { skill: "React", ratingPercentage: 75 },
    { skill: "Express JS", ratingPercentage: 85 },
    { skill: "Node JS", ratingPercentage: 80 },
    { skill: "Mongo Db", ratingPercentage: 85 },
    { skill: "API Routes/Endpoints", ratingPercentage: 90 },
    { skill: "HTML", ratingPercentage: 95 },
    { skill: "CSS", ratingPercentage: 85 },
    { skill: "Golang", ratingPercentage: 2 },
    { skill: "Spanish Speaker", ratingPercentage: 100 },
  ];

  const projectDetails = [
    {
      title: "Portfolio Website",
      duration: { fromDate: "2022", toDate: "" },
      description:
        "Personal website showcasing design and function while working with arrays to display data in meaningful ways.",
      subHeading: "Tech Used: React, Node, Bootstrap",
    },
    {
      title: "Recipe and Nutrition Facts App",
      duration: { fromDate: "2022", toDate: "" },
      description:
        "An app that uses a food API to display recipes and another nutritial ingredients API to show various nutrition facts.",
      subHeading: "Tech Used: Vanilla JavaScript",
    },
    {
      title: "'consoleLog' a tech blog",
      duration: { fromDate: "2022", toDate: "" },
      description:
        "A fun way to upload a photo and chat with other like minded technology enthusiasts.",
      subHeading: "Tech Used: JS, Node, Bootstrap",
    },
  ];
  // EDUCATION ***
  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Texas A&M University - Commerce"}
        subHeading={"Bachelor of Science, Double Major - Psychology/Spanish"}
        fromDate={"2000"}
        toDate={"2007"}
      />
      <ResumeHeading
        heading={"SMU"}
        subHeading={"Full Stack Web Development"}
        fromDate={"2022"}
        toDate={"2022"}
      />
    </div>,

    // WORK EXPERIENCE ***
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Mesquite ISD"}
          subHeading={"General Education Teacher"}
          fromDate={"2008"}
          toDate={"2022"}
        />
        <div className="experience-description">
          <span className="resume-descrition-text">
            I have taught 1st - 3rd grade in both monolingual and in a bilingual
            classroom for 6 years. Being a teacher has taught me many
            transferable skills...
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - Importance/Necessity of collaboration, hard work, and goal setting
            and achieving.
          </span>
          <br />
          <span className="resume-description-text">
            - Working and excelling in a high stress enviornment while
            maintaining a very positive attitude.
          </span>
          <br />
          <span className="resume-description-text">
            - Maybe most importantly, a lifelong love and deep desire to keep
            learning...
          </span>
          <br />
        </div>
      </div>
    </div>,

    // SKILLSET ***
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage"
            ></div>
          </div>
        </div>
      ))}
    </div>,
    <div className="resume-screen-container" key="projects">
      {projectDetails.map((projectDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectDetails.title}
          subHeading={projectDetails.subHeading}
          description={projectDetails.description}
          fromDate={projectDetails.duration.fromDate}
          toDate={projectDetails.duration.toDate}
        />
      ))}
    </div>,

    // INTERESTS ***
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Continued Learning"
        description="Currently I am diving deeper into Data Visualization and taking an EdX course on Smart Contracts and Distributed Ledger Technologies/Blockchain. I am excited at the possiblity of learning new tech!"
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;
    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };
    setCarousalOffSetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="Your connection was lost"
          className="bullet-logo"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreen = () => {
    return (
      <div
        style={carousalOffSetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          <div className="resume-bullet-details">{getResumeScreen()}</div>
        </div>
      </div>
    </div>
  );
}
