import React, { useState } from "react";
import CustomerContext from "./CustomerContext";
import useCartContext from "../cart/useCartContext";

function CustomerProvider(props) {
  const [selectedProduct, setSelectedProduct] = useState();

  const cart = useCartContext();
  function placeOrder() {
    cart.emptyCart();
  }
  
  const value = { selectedProduct, setSelectedProduct, placeOrder };
  return (
    <CustomerContext.Provider value={value}>
      {props.children}
    </CustomerContext.Provider>
  );
}

export default CustomerProvider;
