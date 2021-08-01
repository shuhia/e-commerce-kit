import React from "react";
import { useRouteMatch } from "react-router-dom";
import BigButton from "../components/buttons/BigButton";

function Shipping() {
  return (
    <div>
      <BigButton
        name="Go to payment"
        href={"/checkout" + "/payment"}
      ></BigButton>
    </div>
  );
}

export default Shipping;
