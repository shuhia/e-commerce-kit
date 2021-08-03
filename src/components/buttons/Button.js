import React from "react";
import styles from "./button.module.css";
import { Link } from "react-router-dom";

function Button(props) {
  const { name = "Button", href = "/" } = props;
  return (
    <Link to={href} className={styles.small}>
      <span>{name}</span>
    </Link>
  );
}

export default Button;
