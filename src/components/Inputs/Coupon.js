import React from "react";
import Input from "./Input";
import styles from "./coupon.module.css";
import Button from "../buttons/Button";

function Coupon() {
  return (
    <div className={styles.container}>
      <input type="text"></input>
      <Button name="Coupon"></Button>
    </div>
  );
}

export default Coupon;
