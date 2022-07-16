import classes from "./Animal.module.css";
import groupAnimal from "../assets/animal.jpg";

const Animal = () => {
  return (
    <div name="home">
      <img
        src={groupAnimal}
        alt="group of animal"
        className={classes["main__imageContainer--animal"]}
      />
    </div>
  );
};

export default Animal;
