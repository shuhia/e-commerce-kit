import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./navItem.module.css";

function NavItem(props) {
  const { name = "", href = "/", active = true } = props;
  return (
    <li className={styles.container}>
      {active ? (
        <NavLink to={href}>
          {name}
          {props.children}
        </NavLink>
      ) : (
        <span style={{ opacity: 0 }}>
          {name}
          {props.children}
        </span>
      )}
    </li>
  );
}

export default NavItem;
