import React from "react";
import Input from "./Input";
import styles from "./coupon.module.css";

function Coupon() {
  return (
    <div className={styles.container}>
      <input type="text"></input>
      <input type="submit"></input>
    </div>
  );
}

export default Coupon;
