import React from "react";
import image from "./img.webp";
import classes from "./Home.module.css";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <div className={classes.main}>
      <img className={classes.img} src={image}></img>
      <div className={classes.text}>
        <p className={classes.textOne}>Hi, my name is </p>
        <p className={classes.textTwo}>Atharva Kutwal</p>
        <TypeAnimation
          sequence={["Full Stack Developer !", 1000, "Software Engineer !", 1000 , "Gym Freak !", 1000]}
          speed={50}
          repeat={Infinity}
          style={{ fontSize: "2em" }}
        />

        <p className={classes.textThree}>Building things for Web !</p>
      </div>
    </div>
  );
};

export default Home;
