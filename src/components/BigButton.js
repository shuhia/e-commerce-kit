import React from "react";

function BigButton(props) {
  const { name = "Button" } = props;
  return (
    <div className={"big-button"}>
      <span className="big-button-icon"></span>
      <span>{name}</span>
    </div>
  );
}

export default BigButton;
