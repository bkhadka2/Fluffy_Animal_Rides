import React from "react";
import classes from "./Navigation.module.css";
import Fluffy from "../../assets/fluffy.png";
import { GiHamburgerMenu } from "react-icons/gi";
// import { useState } from "react";

const Navigation = () => {
  return (
    <nav className={classes.navBar}>
      <li className={classes.leftAlign}>
        <a href="/">
          <img src={Fluffy} alt="dogImage" className={classes.dogImage} />
        </a>
      </li>
      <div className={classes.mainNav}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About Us</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
        <li>
          <a
            href="https://forms.gle/ETYMAwPLMStsh6Ts8"
            target="_blank"
            rel="noopener noreferrer"
          >
            Online Order
          </a>
        </li>
      </div>
      <div className={classes.menu}>
        <GiHamburgerMenu />
      </div>
    </nav>
  );
};

export default Navigation;
