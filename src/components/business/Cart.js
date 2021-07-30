import React, { useState } from "react";
import cartSvg from "../../images/cart.svg";
import "./cart.css";

function Cart(props) {
  const [count, setCount] = useState(0);
  return (
    <span className="cart">
      <img className="cart-img" src={cartSvg} onClick={() => {}} />
      <span className="cart-quantity">{count}</span>
    </span>
  );
}

export default Cart;
