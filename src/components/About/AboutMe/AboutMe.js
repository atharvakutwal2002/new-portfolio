import React from "react";
import classes from "./AboutMe.module.css";
import { TypeAnimation } from "react-type-animation";

const AboutMe = () => {
  return (
    <div className={classes.main}>
      <TypeAnimation
        sequence={[
          `Hello There ! 👋 
          I'm Atharva Kutwal , 4th year undergrad 👨‍🎓 currently pursuing IT engineering from D. Y. Patil College of Engineering, Akurdi, Pune. \n
          As an accomplished full Stack Developer 👨‍💻, I have had the privilege of working on a diverse range of projects. \n
          Talking about my experience , I have worked as an Software Developer Intern in Leamigo (Indian Startup ) where I've built frontend and Integrated Backed API , payment gateways . I have also secured 3rd rank 🥉 in Paytech Pioneer Hackathon organised by Worldline Global Services .\n
          Apart from this , I love watching anime 🎬 , also I'm a fitness enthusiast who loves hitting gym very often 🏋️‍♂️ .`,
          1000,
          "",
        ]}
        speed={60}
        style={{ whiteSpace: "pre-line" }}
        repeat={Infinity}
      />
    </div>
  );
};

export default AboutMe;
