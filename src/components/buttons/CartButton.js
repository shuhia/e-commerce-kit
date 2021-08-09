import SubmitButton from "./SubmitButton";
import { ReactComponent as Cart } from "../assets/icons/cart.svg";

import React from "react";

function CartButton(props) {
  return (
    <SubmitButton {...props}>
      <Cart></Cart>
    </SubmitButton>
  );
}

export default CartButton;
