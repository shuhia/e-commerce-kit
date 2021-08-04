import React from "react";
import { Link } from "react-router-dom";
import styles from "./navItem.module.css";

function NavItem(props) {
  const { name = "", href = "/", active = true } = props;
  return (
    <li className={styles.container}>
      {active ? (
        <Link to={href}>
          {name}
          {props.children}
        </Link>
      ) : (
        <span style={{ backgroundColor: "grey" }}>
          {name}
          {props.children}
        </span>
      )}
    </li>
  );
}

export default NavItem;
