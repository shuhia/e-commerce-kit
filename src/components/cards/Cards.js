import React from "react";
import "./cards.css";

function Cards(props) {
  const { title, description } = props;
  return (
    <div className="cards">
      <div className="cards-container">{props.children}</div>
    </div>
  );
}

export default Cards;
