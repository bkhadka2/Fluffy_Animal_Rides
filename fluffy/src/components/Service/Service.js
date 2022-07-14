import classes from "./Service.module.css";
import Card from "../UI/Card";
import Heading from "../Heading/Heading";
import Button from "../UI/Button";

const Service = () => {
  return (
    <>
      <Heading heading={"Services"} />
      <Card>
        <div className={classes.grid}>
          <div className={classes.row}>
            <div className={classes.col_1_of_2}>
              <p
                className={`${classes.services__sub} ${classes.text__primary_left}`}
              >
                A. Animal Rides
              </p>
            </div>
          </div>
          <div className={classes.row}>
            <div className={classes.col_1_of_2}>
              <p className={classes.text__primary_center}>
                1. Fluffy Rides - 5 minutes
              </p>
            </div>
            <div
              className={`${classes.col_1_of_2} ${classes.text__primary_center} ${classes.mobile}`}
            >
              <p>$5.00</p>
            </div>
          </div>
          <div className={classes.row}>
            <div className={classes.col_1_of_2}>
              <p className={classes.text__primary_center}>
                2. Fluffy Rides - 15 minutes
              </p>
            </div>
            <div
              className={`${classes.col_1_of_2} ${classes.text__primary_center} ${classes.mobile}`}
            >
              <p>$10.00</p>
            </div>
          </div>
          <div className={classes.row}>
            <div className={classes.col_1_of_2}>
              <p className={classes.text__primary_center}>
                3. Fluffy Rides - 25 minutes
              </p>
            </div>
            <div
              className={`${classes.col_1_of_2} ${classes.text__primary_center} ${classes.mobile}`}
            >
              <p>$15.00</p>
            </div>
          </div>
          <div className={classes.row}>
            <div className={classes.col_1_of_2}>
              <p className={classes.text__primary_center}>
                4. Fluffy Rides - 40 minutes
              </p>
            </div>
            <div
              className={`${classes.col_1_of_2} ${classes.text__primary_center} ${classes.mobile}`}
            >
              <p>$20.00</p>
            </div>
          </div>
          <div className={classes.row}>
            <div className={classes.col_1_of_2}>
              <p
                className={`${classes.services__sub} ${classes.text__primary_left}`}
              >
                B. Cotton Candy
              </p>
            </div>
          </div>
          <div className={classes.row}>
            <div className={classes.col_1_of_2}>
              <p className={classes.text__primary_center}>
                1. Fluffy Candy - Regular Size
              </p>
            </div>
            <div
              className={`${classes.col_1_of_2} ${classes.text__primary_center} ${classes.mobile}`}
            >
              <p>$3.99</p>
            </div>
          </div>
          <div className={classes.row}>
            <div className={classes.col_1_of_2}>
              <p className={classes.text__primary_center}>
                2. Fluffy Candy - Animal Design
              </p>
            </div>
            <div
              className={`${classes.col_1_of_2} ${classes.text__primary_center} ${classes.mobile}`}
            >
              <p>$7.99</p>
            </div>
          </div>
          <div className={classes.row}>
            <div className={classes.col_1_of_2}>
              <p
                className={`${classes.services__sub} ${classes.text__primary_left}`}
              >
                C. Parties & Events
              </p>
            </div>
          </div>
          <div className={classes.row}>
            <div className={classes.col_1_of_2}>
              <p className={classes.text__primary_center}>
                1. Order Cotton Candy for Events
              </p>
            </div>
            <div
              className={`${classes.col_1_of_2} ${classes.text__primary_center} ${classes.mobile}`}
            >
              <a
                href="https://forms.gle/ETYMAwPLMStsh6Ts8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>Order Cotton Candy</Button>
              </a>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};

export default Service;
