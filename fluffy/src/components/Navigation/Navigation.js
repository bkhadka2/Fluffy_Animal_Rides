import React from "react";
import classes from "./Navigation.module.css";
import Fluffy from "../assets/fluffy.png";
import { GiHamburgerMenu } from "react-icons/gi";

const Navigation = () => {
  return (
    <div className={classes.navigation__image}>
      <nav className={classes.navigation__elements}>
        <li>
          <a href="/">
            <img src={Fluffy} alt="fluffy logo" className={classes.navigation__logo} />
          </a>
        </li>
        <div className={classes["navigation__elements--centered"]}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a
              href="https://forms.gle/ETYMAwPLMStsh6Ts8"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cotton Candy
            </a>
          </li>
          <li>
            <a href="/">Services</a>
          </li>
          <li>
            <a href="/">About Us</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </div>
        <div className={classes.navigation__hamburger}>
          <GiHamburgerMenu />
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
