import React from "react";
import classes from "./Navbar.module.css";
import logo from  './logo.jpg'


const Navbar = () => {
  return (
    <div className={classes.main}>
      <div className={classes.logo}>
        {" "}
        <img className={classes.logoImg} src={logo} alt="/logo"></img>{" "}
      </div>
      <div className={classes.navElements}>
        <a href="/" className={classes.navlinks}>Home</a>
        <a href="/about" className={classes.navlinks}>About</a>
        <a href="/contact" className={classes.navlinks}>Contact</a>
      </div>
    </div>
  );
};

export default Navbar;
