import SubmitButton from "./SubmitButton";
import CartItem from "../business/CartItem";

import React from "react";

function CartButton(props) {
  return (
    <SubmitButton {...props}>
      <CartItem></CartItem>
    </SubmitButton>
  );
}

export default CartButton;
