import classes from "./About.module.css";
import Card from "../UI/Card";
import Heading from "../Heading/Heading";

const About = () => {
  return (
    <>
      <Heading heading={"About US"}></Heading>
      <Card className={classes.cls}>
        <div className={classes.card__main}>
          <div className={classes.card__sec}>
            <h2>Location</h2>
          </div>
          <div className={classes.card__sec}>
            <h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem enim eius doloribus totam vero iusto, ad ipsa quam
              voluptatum autem.
            </h2>
          </div>
        </div>
      </Card>
    </>
  );
};

export default About;
