import classes from "./About.module.css";
import Card from "../UI/Card";
import Heading from "../Heading/Heading";
import Button from "../UI/Button";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const About = () => {
  return (
    <>
      <div name="about">
        <Heading heading={"About US"}></Heading>
        <Card>
          <div className={classes.card__main}>
            <div className={classes.card__content}>
              <div className={classes["card__content--heading"]}>
                <h2>Location</h2>
              </div>
              <div className={classes["card__content--body"]}>
                <LocationOnIcon className={classes.location__icon} />
              </div>
              <div className={classes.location__description}>
                Address: S4001 Sunset Dr, San Angel, TX 76904
              </div>
              <div>
                <a
                  href="https://goo.gl/maps/HtdXTcpm6NpgpFmi7"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button className={classes["card__content--button"]}>
                    Take me there!
                  </Button>
                </a>
              </div>
            </div>
            <div className={classes.card__content}>
              <div className={classes["card__content--heading"]}>
                <h2>Location</h2>
              </div>
              <div className={classes["card__content--body"]}>
                <LocationOnIcon className={classes.location__icon} />
              </div>
              <div className={classes.location__description}>
                Address: S4001 Sunset Dr, San Angel, TX 76904
              </div>
              <div>
                <a
                  href="https://goo.gl/maps/HtdXTcpm6NpgpFmi7"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button className={classes["card__content--button"]}>
                    Take me there!
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default About;
