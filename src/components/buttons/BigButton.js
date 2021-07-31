import React from "react";
import "./buttons.css";

function BigButton(props) {
  const { name = "Button", href = "#products" } = props;
  return (
    <a className={"big-button"} href={href}>
      <span className="big-button-icon"></span>
      <span>{name}</span>
    </a>
  );
}

export default BigButton;
