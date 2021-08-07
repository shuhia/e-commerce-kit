import React from "react";
import Quantity from "./Quantity";
import productImg from "../assets/products/product-1.png";
import LinkButton from "../buttons/LinkButton";

import styles from "./subscription.module.css";

function Subscription({
  price = 0,
  currency = "$",
  quantity,
  options,
  title = "Spiced Mint Candleaf®",
  img = productImg,
}) {
  return (
    <form className={styles.container} onSubmit={(e) => e.preventDefault()}>
      <input type="radio" id="one-time" name="choice"></input>
      <label for="one-time">One time purchase</label>
      <div className={styles.subscribe}>
        <input type="radio" id="subscribe" name="choice"></input>
        <label for="subscribe">Subscribe and delivery every </label>

        <select id="select-week" name="select-week">
          <option value={4}>4 weeks</option>
        </select>
        <p>
          Subscribe now and get the 10% of discount on every recurring order.
          The discount will be applied at checkout. See details
        </p>
      </div>
    </form>
  );
}

export default Subscription;
