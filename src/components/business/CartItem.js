import React, { useState } from "react";
import cartSvg from "../../images/cart.svg";
import styles from "./cartItem.module.css";

function CartItem({ count = 0 }) {
  return (
    <div className={styles.container}>
      <img className={styles.img} src={cartSvg} alt="cart" />
      <span className={styles.count}>{count}</span>
    </div>
  );
}

export default CartItem;
