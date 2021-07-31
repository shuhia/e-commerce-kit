import React from "react";
import styles from "./button.module.css";

function Button(props) {
  const { name = "Button" } = props;
  return (
    <div className={styles.small}>
      <span>{name}</span>
    </div>
  );
}

export default Button;
