import React from "react";
import { Link } from "react-router-dom";
import styles from "./navItem.module.css";

function NavItem(props) {
  const { name = "", href = "/" } = props;
  return (
    <li className={styles.container}>
      <Link to={href}>
        {name}
        {props.children}
      </Link>
    </li>
  );
}

export default NavItem;
