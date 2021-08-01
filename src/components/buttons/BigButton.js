import React from "react";
import styles from "./button.module.css";
import { Link } from "react-router-dom";

function BigButton(props) {
  const { name = "Button", href = "#products", icon } = props;
  return (
    <Link to={href}>
      <a className={styles.big}>
        <span className={styles.icon}>{icon}</span>
        <span>{name}</span>
      </a>
    </Link>
  );
}

export default BigButton;
