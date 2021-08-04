import React, { useState, useEffect } from "react";
import CustomerContext from "./CustomerContext";
import useStoreContext from "./useStoreContext";

function CustomerProvider(props) {
  const { product } = useStoreContext();
  const [selectedProduct, setSelectedProduct] = useState(product);
  const value = { selectedProduct, setSelectedProduct };

  function placeOrder() {}

  return (
    <CustomerContext.Provider value={value}>
      {props.children}
    </CustomerContext.Provider>
  );
}

export default CustomerProvider;
