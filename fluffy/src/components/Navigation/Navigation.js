import React from "react";
import classes from "./Navigation.module.css";
import Fluffy from "../assets/fluffy.png";
import { GiHamburgerMenu } from "react-icons/gi";
import ClearIcon from "@material-ui/icons/Clear";
import { Link } from "react-scroll";
import { useState } from "react";

const Navigation = () => {
  const [ham, setHam] = useState(false);

  const hamHandler = () => {
    setHam((prevState) => !prevState);
  };

  return (
    <div className={classes.navigation__image}>
      <nav
        className={`${
          !ham
            ? classes["navigation__elements"]
            : classes["navigation__elements--small"]
        }`}
      >
        <li>
          <img
            src={Fluffy}
            alt="fluffy logo"
            className={classes.navigation__logo}
          />
          {/* </Link> */}
        </li>
        <div
          className={`${
            !ham
              ? classes["navigation__elements--centered"]
              : classes["navigation__elements--centered--small"]
          }`}
        >
          <li>
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-280}
              duration={500}
              className={`${
                !ham
                  ? classes["navigation__link"]
                  : classes["navigation__link--small"]
              }`}
              onClick={hamHandler}
            >
              Home
            </Link>
          </li>
          <li>
            <a
              href="https://forms.gle/ETYMAwPLMStsh6Ts8"
              target="_blank"
              rel="noopener noreferrer"
              className={`${
                !ham
                  ? classes["navigation__link"]
                  : classes["navigation__link--small"]
              }`}
              onClick={hamHandler}
            >
              Cotton Candy
            </a>
          </li>
          <li>
            <Link
              to="services"
              activeClass={classes.active}
              spy={true}
              smooth={true}
              offset={-230}
              duration={500}
              className={`${
                !ham
                  ? classes["navigation__link"]
                  : classes["navigation__link--small"]
              }`}
              onClick={hamHandler}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="about"
              activeClass={classes.active}
              spy={true}
              smooth={true}
              offset={-200}
              duration={500}
              className={`${
                !ham
                  ? classes["navigation__link"]
                  : classes["navigation__link--small"]
              }`}
              onClick={hamHandler}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              activeClass={classes.active}
              spy={true}
              smooth={true}
              offset={-230}
              duration={500}
              className={`${
                !ham
                  ? classes["navigation__link"]
                  : classes["navigation__link--small"]
              }`}
              onClick={hamHandler}
            >
              Contact
            </Link>
          </li>
        </div>
        <div
          className={`${
            !ham
              ? classes.navigation__hamburger
              : classes["navigation__hamburger--small"]
          }`}
        >
          {!ham && <GiHamburgerMenu onClick={hamHandler} />}
          {ham && (
            <ClearIcon
              onClick={hamHandler}
              className={`${
                !ham
                  ? classes.navigation__hamburger
                  : classes["navigation__hamburger--small"]
              }`}
            />
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
