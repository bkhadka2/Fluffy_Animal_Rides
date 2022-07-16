import classes from "./Service.module.css";
import Card from "../UI/Card";
import Heading from "../Heading/Heading";
import Button from "../UI/Button";

const Service = () => {
  return (
    <>
      <div name="services">
        <Heading heading={"Services"} />
        <Card>
          <div className={classes.grid}>
            <div className={classes.row}>
              <div className={classes.col_1_of_2}>
                <p
                  className={`${classes.services__topic} ${classes["services__topic--leftalign"]}`}
                >
                  A. Animal Rides
                </p>
              </div>
            </div>
            <div className={classes.row}>
              <div className={classes.col_1_of_2}>
                <p className={classes["services__list--item"]}>
                  1. Fluffy Rides - 5 minutes
                </p>
              </div>
              <div
                className={`${classes.col_1_of_2} ${classes["services__list--item"]} ${classes["services__list--item--price--mobile"]}`}
              >
                <p>$5.00</p>
              </div>
            </div>
            <div className={classes.row}>
              <div className={classes.col_1_of_2}>
                <p className={classes["services__list--item"]}>
                  2. Fluffy Rides - 15 minutes
                </p>
              </div>
              <div
                className={`${classes.col_1_of_2} ${classes["services__list--item"]} ${classes["services__list--item--price--mobile"]}`}
              >
                <p>$10.00</p>
              </div>
            </div>
            <div className={classes.row}>
              <div className={classes.col_1_of_2}>
                <p className={classes["services__list--item"]}>
                  3. Fluffy Rides - 25 minutes
                </p>
              </div>
              <div
                className={`${classes.col_1_of_2} ${classes["services__list--item"]} ${classes["services__list--item--price--mobile"]}`}
              >
                <p>$15.00</p>
              </div>
            </div>
            <div className={classes.row}>
              <div className={classes.col_1_of_2}>
                <p className={classes["services__list--item"]}>
                  4. Fluffy Rides - 40 minutes
                </p>
              </div>
              <div
                className={`${classes.col_1_of_2} ${classes["services__list--item"]} ${classes["services__list--item--price--mobile"]}`}
              >
                <p>$20.00</p>
              </div>
            </div>
            <div className={classes.row}>
              <div className={classes.col_1_of_2}>
                <p
                  className={`${classes.services__topic} ${classes["services__topic--leftalign"]}`}
                >
                  B. Cotton Candy
                </p>
              </div>
            </div>
            <div className={classes.row}>
              <div className={classes.col_1_of_2}>
                <p className={classes["services__list--item"]}>
                  1. Fluffy Candy - Regular Size
                </p>
              </div>
              <div
                className={`${classes.col_1_of_2} ${classes["services__list--item"]} ${classes["services__list--item--price--mobile"]}`}
              >
                <p>$3.99</p>
              </div>
            </div>
            <div className={classes.row}>
              <div className={classes.col_1_of_2}>
                <p className={classes["services__list--item"]}>
                  2. Fluffy Candy - Animal Design
                </p>
              </div>
              <div
                className={`${classes.col_1_of_2} ${classes["services__list--item"]} ${classes["services__list--item--price--mobile"]}`}
              >
                <p>$7.99</p>
              </div>
            </div>
            <div className={classes.row}>
              <div className={classes.col_1_of_2}>
                <p
                  className={`${classes.services__topic} ${classes["services__topic--leftalign"]}`}
                >
                  C. Parties & Events
                </p>
              </div>
            </div>
            <div className={classes.row}>
              <div className={classes.col_1_of_2}>
                <p className={classes["services__list--item"]}>
                  1. Order Cotton Candy for Events
                </p>
              </div>
              <div
                className={`${classes.col_1_of_2} ${classes["services__list--item"]} ${classes["services__list--item--price--mobile"]}`}
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
      </div>
    </>
  );
};

export default Service;
