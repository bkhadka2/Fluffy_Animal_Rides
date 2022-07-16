import classes from "./About.module.css";
import Card from "../UI/Card";
import Heading from "../Heading/Heading";
import Button from "../UI/Button";

const About = () => {
  return (
    <>
      <div name="about">
        <Heading heading={"About US"}></Heading>
        <Card className={classes.card__container}>
          <div className={classes.card__main}>
            <div className={classes.card__content}>
              <div className={classes["card__content--heading"]}>
                <h2>Location</h2>
              </div>
              <div className={classes["card__content--body"]}></div>
              <div>
                <Button className={classes["card__content--button"]}>
                  Click me!
                </Button>
              </div>
            </div>
            <div className={classes.card__content}>             
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default About;
