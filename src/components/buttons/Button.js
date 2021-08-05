import React from "react";
import styles from "./button.module.css";
import { Link } from "react-router-dom";

function Button(props) {
  const {
    name = "Button",
    href = "/",
    onClick,
    size = "small",
    type = "button",
  } = props;
  return (
    <Link to={href}>
      <button type={type} className={styles[size]} onClick={onClick}>
        <span>{name}</span>
      </button>
    </Link>
  );
}

export default Button;
