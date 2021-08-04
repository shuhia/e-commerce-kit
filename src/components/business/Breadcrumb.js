import React from "react";
import styles from "./breadcrumb.module.css";
import { Link } from "react-router-dom";
import { useParams, useLocation } from "react-router-dom";

function Breadcrumb({ pages = [] }) {
  const location = useLocation();
  return (
    <div>
      <ul className={styles.breadcrumb}>
        {pages.map((page, index) => {
          return (
            <li key={"listItem-" + index}>
              <Link
                className={styles.link}
                style={{
                  fontWeight: page.href === location.pathname && "bold",
                }}
                key={"link-" + index}
                to={page.href}
              >
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
