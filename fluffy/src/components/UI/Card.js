import classes from "./Card.module.css";

const Card = (props) => {
  const cls = props.className
  return <div className={`${classes.card} ${cls}`}>{props.children}</div>;
};

export default Card;
