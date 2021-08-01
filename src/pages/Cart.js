import React from "react";
import BigButton from "../components/buttons/BigButton";
import Section from "../components/Section";

function Cart() {
  return (
    <Section>
      <BigButton name="Checkout" href="/checkout"></BigButton>
    </Section>
  );
}

export default Cart;
