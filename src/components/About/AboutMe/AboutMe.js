import React from "react";
import classes from "./AboutMe.module.css";
import { TypeAnimation } from "react-type-animation";

const AboutMe = () => {
  return (
    <div className={classes.main}>
      {/* <TypeAnimation
        sequence={[
          ``,
          1000,
          "",
        ]}
        speed={60}
        style={{ whiteSpace: "pre-line" }}
        
      /> */}
      Hello There ! 👋 
          I'm Atharva Kutwal , 4th year undergrad 👨‍🎓 currently pursuing IT engineering from D. Y. Patil College of Engineering, Akurdi, Pune. <br/> <br/>
          As an accomplished full Stack Developer 👨‍💻, I have had the privilege of working on a diverse range of projects. <br/> <br/>
          Talking about my experience , I have worked as an Software Developer Intern in Leamigo (Indian Startup ) where I've built frontend and Integrated Backed API , payment gateways . I have also secured 3rd rank 🥉 in Paytech Pioneer Hackathon organised by Worldline Global Services .<br/> <br/>
          Apart from this , I love watching anime 🎬 , also I'm a fitness enthusiast who loves hitting gym very often 🏋️‍♂️ .
    </div>
  );
};

export default AboutMe;
