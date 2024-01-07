import React, { useEffect } from "react";
import classes from "./Skills.module.css";
import js from "./js.png";
import cpp from "./cpp.png";
import java from "./java.png";
import mysql from "./mysql.png";
import github from "./github.png";
import git from "./git.png";
import vercel from "./vercel.png";
import netlify from "./netlify.png";
import react from "./react.png";
import next from "./nextJS.png";
import express from "./express.png";
import node from "./node.png";
import mongo from "./mongo.png";
import firebase from "./firebase.png";
import Aos from "aos";
import "aos/dist/aos.css"

const Skills = () => {
  useEffect(()=>{
    Aos.init({duration:2000});
  },[])
  return (
    <div className={classes.main}>
      <div data-aos="fade-left" className={classes.subSection}>
        {" "}
        <p>Programming Languages</p>
        <div className={classes.iconSection}>
          <img src={js}></img>  <img src={cpp} /> <img src={java} /> 
          <img src={mysql}></img>{" "}
        </div>
      </div>
      <div data-aos="fade-right" className={classes.subSection}>
        <p> Technologies/Frameworks</p>
        <div className={classes.iconSection}>
          <img src={react} /> <img src={node} /> <img src={express} />{" "}
          <img src={mongo} /> <img src={firebase} /> <img src={next} />
        </div>
      </div>
      <div data-aos="fade-left" className={classes.subSection}>
        <p>Developer Tools</p>
        <div className={classes.iconSection}>
          <img src={git} /> <img src={github} /> <img src={netlify} />{" "}
          <img src={vercel} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
