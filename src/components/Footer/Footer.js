import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.socials}>
      <div className={classes.icons}>
        <a href="https://www.facebook.com/atharva.kutwal.73/">
          <i className="fa fa-facebook-square icons"></i>
        </a>

        <a href="https://www.instagram.com/atharvakutwal2002/">
          <i className="fa fa-instagram icons"></i>
        </a>
        <a href="https://www.linkedin.com/in/atharva-kutwal-588a8a219/">
          <i className="fa fa-linkedin icons"></i>
        </a>
        <a href="https://twitter.com/AtharvaKalyan">
          <i className="fa fa-twitter icons"></i>
        </a>
      </div>
      <div className={classes.text}>
       |  Made with ❤ by Atharva |
      </div>
    </div>
  );
};

export default Footer;
