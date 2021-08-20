import React from "react";
import styles from "./input.module.css";

function Input(props) {
  const { size = "large", name = "input " + size, required } = props;
  return (
    <input
      className={styles[size]}
      name={name}
      placeholder={name}
      required={required}
    ></input>
  );
}

export default Input;
