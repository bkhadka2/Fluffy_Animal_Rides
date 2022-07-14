import classes from "./Button.module.css";

const Button = (props) => {
  const cls = props.className;
  return <button className={`${classes.button} ${cls}`}>{props.children}</button>;
};

export default Button;
