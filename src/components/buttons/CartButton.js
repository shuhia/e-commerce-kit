import SubmitButton from "./SubmitButton";
import CartItem from "../cart/CartItem";

import React from "react";

function CartButton(props) {
  return (
    <SubmitButton {...props}>
      <CartItem></CartItem>
    </SubmitButton>
  );
}

export default CartButton;
