import classes from "./Heading.module.css";
import Card from "../UI/Card";

const Heading = (props) => {
  return (
    <Card>
      <h1>{props.heading}</h1>
      <hr />
    </Card>
  );
};

export default Heading;
