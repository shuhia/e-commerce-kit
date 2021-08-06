import React from "react";
import styles from "./button.module.css";
import { Link } from "react-router-dom";

function Button(props) {
  const {
    name = "name",
    href = "/",
    onClick,
    size = "small",
    type = "button",
    color,
  } = props;
  return (
    <Link style={{ textDecoration: "none" }} to={href}>
      <button
        style={{
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          color: { color },
        }}
        type={type}
        className={styles[size]}
        onClick={onClick}
      >
        <>{name}</>
      </button>
    </Link>
  );
}

export default Button;
