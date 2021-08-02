import React, { useState } from "react";
import cartSvg from "../../images/cart.svg";
import styles from "./cart.module.css";

function CartItem(props) {
  const [count, setCount] = useState(0);
  return (
    <div className={styles.container}>
      <img className={styles.img} src={cartSvg} onClick={() => {}} />
      <span className={styles.count}>{count}</span>
    </div>
  );
}

export default CartItem;
