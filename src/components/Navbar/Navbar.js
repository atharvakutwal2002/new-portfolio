import React from "react";
import classes from "./Navbar.module.css";
import logo from  './logo.jpg'
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div className={classes.main}>
      <div className={classes.logo}>
        {" "}
        <img className={classes.logoImg} src={logo} alt="/logo"></img>{" "}
      </div>
      <div className={classes.navElements}>
        <Link activeClassName={classes.navlinksActive} activeStyle={{color: 'red'}} to="/" className={classes.navlinks}>Home</Link>
        <Link activeClassName={classes.navlinksActive} activeStyle={{color: 'red'}} to="/about" className={classes.navlinks}>About</Link>
        <Link activeClassName={classes.navlinksActive} activeStyle={{color: 'red'}} to="/contact" className={classes.navlinks}>Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
