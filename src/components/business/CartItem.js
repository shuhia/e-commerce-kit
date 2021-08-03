import React, { useState } from "react";
import cartSvg from "../../images/cart.svg";
import styles from "./cartItem.module.css";
import useCartContext from "../../contexts/useCartContext";

function CartItem(props) {
  const { count = 0 } = useCartContext();

  return (
    <div className={styles.container}>
      <img className={styles.img} src={cartSvg} alt="cart" />
      <span className={styles.count}>{count}</span>
    </div>
  );
}

export default CartItem;
