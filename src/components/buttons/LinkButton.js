import React from "react";
import { Link } from "react-router-dom";
import styles from "./button.module.css";

function LinkButton(props) {
  const { name = "Button", to = "/discover", icon, size = "large" } = props;
  return (
    <Link to={to} className={styles[size]}>
      {icon && <span className={styles.icon}>{icon}</span>}
      <span>{name}</span>
    </Link>
  );
}

export default LinkButton;
