import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div>
        <h2 className={classes.main__text}>Fluffy Animal Rides</h2>
        <h3 className={classes.sec__text}>
          Website by:{" "}
          <a
            className={`${classes["sec__text--link"]}`}
            href="https://www.github.com/bkhadka2"
            target="_blank"
            rel="noreferrer"
          >
            Bishal Khadka
          </a>
        </h3>
        <h3 className={classes.sec__text}>
          Picture by:{" "}
          <a
            className={`${classes["sec__text--link"]}`}
            href="https://www.vecteezy.com/"
            target="_blank"
            rel="noreferrer"
          >
            vecteezy.com
          </a>
        </h3>
      </div>
    </div>
  );
};

export default Footer;
