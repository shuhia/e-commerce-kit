import React from "react";
import styles from "./button.module.css";
import { Link } from "react-router-dom";

function BigButton(props) {
  const { name = "Button", href = "/discover", icon } = props;
  return (
    <Link to={href} className={styles.big}>
      <span className={styles.icon}>{icon}</span>
      <span>{name}</span>
    </Link>
  );
}

export default BigButton;
