import React from "react";

import { useHistory } from "react-router-dom";

function ProductCard(props) {
  const history = useHistory();
  const { title, img, description, price, link = "/" } = props;
  return (
    <div className="product-card" onClick={() => history.push(link)}>
      <img src={img} alt={title} />{" "}
      <div className="product-card-description">
        <div style={{ textAlign: "left", paddingLeft: 20 }}>
          <b>{title}</b>
        </div>
        <p>
          <b>{description}</b>
        </p>
        <div style={{ textAlign: "right", paddingRight: 20 }}>
          <b>{price}$</b>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
