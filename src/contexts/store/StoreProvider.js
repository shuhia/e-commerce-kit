import React, { useState } from "react";
import StoreContext from "./StoreContext";
import { randomProduct, randomProducts } from "../../utils/utils";

function StoreProvider(props) {
  function fetchProducts() {}

  // Create 4 random products and store it in products
  const [products, setProducts] = useState(randomProducts(4));

  const product = products[0];

  const value = { product, products, randomProduct, randomProducts };
  return (
    <StoreContext.Provider value={value}>
      {props.children}
    </StoreContext.Provider>
  );
}

export default StoreProvider;
