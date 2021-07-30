import React from "react";

function Card({ img = "", title = "", description = "" }) {
  return (
    <div className="card">
      <img className="card-image" src={img} alt={title}></img>
      <div className="card-title">{title}</div>
      <div className="card-description">{description}</div>
    </div>
  );
}

export default Card;
