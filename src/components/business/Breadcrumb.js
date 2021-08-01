import React from "react";
import styles from "./breadcrumb.module.css";
import { Link } from "react-router-dom";

function Breadcrumb({ pages = [] }) {
  return (
    <div>
      <h2>Breadcrumb for checkout</h2>
      <ul className={styles.breadcrumb}>
        {pages.map((page, index) => {
          return (
            <li key={"listItem-" + index}>
              <Link key={"link-" + index} to={page.href}>
                {page.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Breadcrumb;
