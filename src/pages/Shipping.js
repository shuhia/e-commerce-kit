import React from "react";
import { useRouteMatch } from "react-router-dom";
import BigButton from "../components/buttons/BigButton";

function Shipping() {
  const { url } = useRouteMatch();
  return (
    <div>
      <BigButton name="Go to payment" href={url + "/payment"}></BigButton>
    </div>
  );
}

export default Shipping;
