import React from "react";
import styles from "./button.module.css";
import { Link } from "react-router-dom";

function BigButton(props) {
  const { name = "Button", href = "#products" } = props;
  return (
    <Link to={href}>
      <a className={styles.big}>
        <span className={styles.icon}></span>
        <span>{name}</span>
      </a>
    </Link>
  );
}

export default BigButton;
