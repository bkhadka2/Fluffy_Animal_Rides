import classes from "./Animal.module.css";
import groupAnimal from "../assets/animal.jpg";

const Animal = () => {
  return (
    <div className={classes.div__mainImage}>
      <img
        src={groupAnimal}
        alt="group of animal"
        className={classes.main__animal}
      />
    </div>
  );
};

export default Animal;
