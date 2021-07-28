import React from "react";

function Cards(props) {
  const { title, description } = props;
  return (
    <div class="cards">
      <header class="cards-header">
        <h1>{title}</h1>
        <p>{description}</p>
      </header>
      <div className="cards-container">{props.children}</div>
    </div>
  );
}

export default Cards;
