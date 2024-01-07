import React from "react";
import classes from "./Project.module.css";
import ecom from "./ecom.svg";
import blog from "./blog.svg";
import food from "./food.png";
import github from "./github.svg";
import live from "./live.svg";
import { TypeAnimation } from "react-type-animation";

const Project = () => {
  return (
    <div>
      <div className={classes.headingSection}>
        <TypeAnimation
          sequence={[`Here are some of my Projects !.`, 1000, ""]}
          speed={60}
          style={{ whiteSpace: "pre-line" }}
          repeat={Infinity}
          className={classes.heading}
        />
      </div>

      <div className={classes.projects}>
        <div className={classes.projectCard}>
          <img className={classes.image} src={ecom}></img>
          <div className={classes.details}>
            <p className={classes.title}>Ecommerce Web application</p>
            <p className={classes.projDetails}>
              This is Website build on top of MERN Stack .
            </p>
            <div className={classes.iconSection}>
              <a target="_blank" href="https://github.com/atharvakutwal2002/Ecommerce">
                <img className={classes.icon} src={github}></img>
              </a>
              <a target="_blank" href="https://ecommerce-mrzf-d7k5v8fbv-atharvakutwal2002-gmailcom.vercel.app/">
                <img className={classes.icon} src={live}></img>
              </a>
            </div>
          </div>
        </div>

        <div className={classes.projectCard}>
          <img src={blog}></img>
          <div className={classes.details}>
            <p className={classes.title}>Personal Blog Website</p>
            <p className={classes.projDetails}>
              Building using NextJS Framework and MERN Stack .
            </p>
            <div className={classes.iconSection}>
              <a target="_blank" href="https://github.com/atharvakutwal2002/my-blogs">
                <img className={classes.icon} src={github}></img>
              </a>
              <a target="_blank" href="https://my-blogs-seven.vercel.app/">
                <img className={classes.icon} src={live}></img>
              </a>
            </div>
          </div>
        </div>

        <div className={classes.projectCard}>
          <img src={food}></img>
          <div className={classes.details}>
            <p className={classes.title}>Food Order Web application</p>
            <p className={classes.projDetails}>
              ReactJS used in frontend and firebase as backend .
            </p>
            <div className={classes.iconSection}>
              <a target="_blank" href="https://github.com/atharvakutwal2002/Biryani-House">
                <img className={classes.icon} src={github}></img>
              </a>
              <a target="_blank" href="https://biryani-house-59tm.vercel.app/">
                <img className={classes.icon} src={live}></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
