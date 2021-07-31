import React from "react";
import Quantity from "./business/Quantity";
import productImg from "../images/product-1.png";
import BigButton from "./buttons/BigButton";

function Form({
  price = 0,
  currency = "$",
  quantity,
  options,
  title = "Spiced Mint Candleaf®",
  img = productImg,
}) {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="title">{title}</div>
      <img src={img} />
      <div>
        <h1>{price + currency}</h1>
        <Quantity></Quantity>
      </div>
      <input type="radio" id="one-time" name="choice"></input>
      <label for="one-time">One time purchase</label>
      <div>
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
      <BigButton></BigButton>
      <div>
        <p>Facts</p>
        <ul></ul>
      </div>
    </form>
  );
}

export default Form;
