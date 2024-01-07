import React from "react";
import classes from "./About.module.css";
import { useState } from "react";
import AboutMe from "./AboutMe/AboutMe";
import Project from "./Projects/Project";
import Skills from "./Skills/Skills";

const About = () => {
  const [about, setAbout] = useState(true);
  const [project, setProject] = useState(false);
  const [skills, setSkills] = useState(false);
  return (
    <div className={classes.main}>
      <div className={classes.links}>
        <a
          onClick={(e) => {
            setAbout(true);
            setProject(false);
            setSkills(false);
          }}
        >
           Me{" "}
        </a>
        <a
          onClick={(e) => {
            setAbout(false);
            setProject(true);
            setSkills(false);
          }}
        >
          Projects
        </a>
        <a
          onClick={(e) => {
            setAbout(false);
            setProject(false);
            setSkills(true);
          }}
        >
          skills
        </a>
      </div>
      <div className={classes.content}>
        {about && <AboutMe/>}
        {project && <Project/>}
        {skills && <Skills/>}
      </div>
    </div>
  );
};

export default About;
