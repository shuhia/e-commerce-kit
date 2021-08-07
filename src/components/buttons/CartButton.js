import SubmitButton from "./SubmitButton";
import { ReactComponent as cartSvg } from "../assets/icons/cart.svg";

import React from "react";

function CartButton(props) {
  return (
    <SubmitButton {...props}>
      <cartSvg></cartSvg>
    </SubmitButton>
  );
}

export default CartButton;
