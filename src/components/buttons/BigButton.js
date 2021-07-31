import React from "react";
import styles from "./button.module.css";

function BigButton(props) {
  const { name = "Button", href = "#products" } = props;
  return (
    <a className={styles.big} href={href}>
      <span className={styles.icon}></span>
      <span>{name}</span>
    </a>
  );
}

export default BigButton;
