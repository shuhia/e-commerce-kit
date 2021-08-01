import React from "react";
import Card from "./Card";
import "./cards.css";
import { useHistory } from "react-router-dom";

function ProductCard(props) {
  const history = useHistory();
  const { title, img, price, link = "/Product" } = props;
  return (
    <div className="product-card" onClick={() => history.push(link)}>
      <img src={img} alt={title} />{" "}
      <div className="product-card-description">
        <div className="product-card-title">
          <b>{title}</b>
        </div>
        <div className="product-card-price">
          <b>{price}$</b>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
