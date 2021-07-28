import React from "react";

function ProductCard(props) {
  const { name, image, description } = props;
  return (
    <div className="product-card">
      <img src="img_avatar.png" alt="product" />
      <div className="product-card-content">
        <h4>
          <b>{name}</b>
        </h4>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ProductCard;
