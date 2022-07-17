import React from "react";
import classes from "./Navigation.module.css";
import Fluffy from "../assets/fluffy.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-scroll";

const Navigation = () => {
  return (
    <div className={classes.navigation__image}>
      <nav className={classes.navigation__elements}>
        <li>
          <img
            src={Fluffy}
            alt="fluffy logo"
            className={classes.navigation__logo}
          />
          {/* </Link> */}
        </li>
        <div className={classes["navigation__elements--centered"]}>
          <li>
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-280}
              duration={500}
              className={classes["navigation__link"]}
            >
              Home
            </Link>
          </li>
          <li>
            <a
              href="https://forms.gle/ETYMAwPLMStsh6Ts8"
              target="_blank"
              rel="noopener noreferrer"
              className={classes["navigation__link"]}
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
              className={classes["navigation__link"]}
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
              className={classes["navigation__link"]}
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
              className={classes["navigation__link"]}
            >
              Contact
            </Link>
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
