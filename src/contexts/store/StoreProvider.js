import React, { useState } from "react";
import StoreContext from "./StoreContext";
import {
  generateRandomProducts,
  generateRandomProduct,
} from "../../utils/utils";

function StoreProvider(props) {
  function fetchProducts() {}

  // Create 4 random products and store it in products
  const [products, setProducts] = useState(generateRandomProducts(4));

  const product = products[0];

  const value = { product, products };
  return (
    <StoreContext.Provider value={value}>
      {props.children}
    </StoreContext.Provider>
  );
}

export default StoreProvider;
