import React from "react";
import { Link } from "react-router-dom";

function NavItem(props) {
  const { name = "", href = "/" } = props;
  return (
    <li className="main-nav-item">
      <Link to={href}>
        {name}
        {props.children}
      </Link>
    </li>
  );
}

export default NavItem;
