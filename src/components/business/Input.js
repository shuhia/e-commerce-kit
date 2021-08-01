import React from "react";
import styles from "./input.module.css";

function Input(props) {
  const { size = "big", name = "input " + size } = props;
  return (
    <input className={styles[size]} placeholder={name} name={name}></input>
  );
}

export default Input;
