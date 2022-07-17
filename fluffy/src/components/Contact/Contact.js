import classes from "./Contact.module.css";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import EmailIcon from "@material-ui/icons/Email";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import Heading from "../Heading/Heading";

const Contact = () => {
  return (
    <>
      <div name="contact">
        <Heading heading={"Contact"}></Heading>
          <div className={classes.test}>
            <div className={classes.maininfo}>
              <p className={classes.text__main}>
                Enjoy the ride with fluffy ride
              </p>
            </div>
            <div className={classes.info}>
              <div className={classes.col1}>
                <div>
                  <h1 className={classes.text__left}>Fluffy Animal Rides</h1>
                </div>
              </div>
              <div className={classes.col2}>
                <div>
                  <h3 className={classes.text__right}> Contact</h3>
                </div>
                <div className={classes.section__contact}>
                  <PhoneIphoneIcon className={classes.contact__icon} />
                  <div>
                    <p className={classes.contact__info}>970-799-9219</p>
                  </div>
                </div>
                <div className={classes.section__contact}>
                  <EmailIcon className={classes.contact__icon} />
                  <div>
                    <p className={classes.contact__info}>
                      bishalkhadka1600@gmail.com
                    </p>
                  </div>
                </div>
                <div className={classes.socialMedia__container}>
                  <div>
                    <FacebookIcon
                      className={classes.media__icon}
                    ></FacebookIcon>
                  </div>
                  <div>
                    <InstagramIcon
                      className={classes.media__icon}
                    ></InstagramIcon>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </>
  );
};

export default Contact;
