import React from "react";

function Button(props) {
  const { name = "Button" } = props;
  return (
    <div className={"button"}>
      <span>{name}</span>
    </div>
  );
}

export default Button;