import React, { useState } from "react";
import CustomerContext from "./CustomerContext";

function CustomerProvider(props) {
  const [selectedProduct, setSelectedProduct] = useState();
  const value = { selectedProduct, setSelectedProduct };

  function placeOrder() {}

  return (
    <CustomerContext.Provider value={value}>
      {props.children}
    </CustomerContext.Provider>
  );
}

export default CustomerProvider;
