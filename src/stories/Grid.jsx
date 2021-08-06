import React from "react";
import "./grid.css";
import { randomProduct } from "../utils/utils";

function Grid() {
  const product = randomProduct();
  const { img } = product;

  return (
    <div className="grid">
      <div className="title">title</div>
      <div className="description">description</div>
      <img className="image" src={img} alt={product.name} />
    </div>
  );
}

export default Grid;
