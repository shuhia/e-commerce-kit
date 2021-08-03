import React from "react";
import Card from "./Card";
import "./cards.css";
import { useHistory } from "react-router-dom";

function ProductCard({ product = {}, setSelectedProduct }) {
  const { price = "" } = product;
  const history = useHistory();

  function handleClick(e) {
    history.push("/product");
    setSelectedProduct(product);
  }
  console.log(product);
  return (
    <div className="product-card" onClick={handleClick}>
      <img src={product.img} alt={product.name} />
      <div className="product-card-description">
        <div className="product-card-title">
          <b>{product.name}</b>
        </div>
        <div className="product-card-price">
          <b>{price.value + price.currency}</b>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
