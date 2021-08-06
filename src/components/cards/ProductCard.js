import React from "react";
import Card from "./Card";

import { useHistory } from "react-router-dom";
import useCustomerContext from "../../contexts/customer/useCustomerContext";
import { randomProduct } from "../../utils/product";
import styles from "./card.module.css";

function ProductCard({ product = randomProduct() }) {
  const { price } = product;
  const history = useHistory();
  const { setSelectedProduct } = useCustomerContext();

  function handleClick(e) {
    history.push("/product");
    setSelectedProduct(product);
  }
  return (
    <div className={styles.product} onClick={handleClick}>
      <img src={product.img} alt={product.name} />
      <div className={styles.description}>
        <h1 className={styles.title}>{product.name}</h1>
        <div className={styles.price}>
          <b>{price.value + price.currency}</b>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
