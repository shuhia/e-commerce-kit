import React, { useCallback, useMemo, useState } from "react";
import StoreContext from "./StoreContext";
import {
  PRODUCT_CATALOG,
  getFeaturedProducts,
  getProductById,
} from "../../utils/product";

function StoreProvider(props) {
  const [products] = useState(PRODUCT_CATALOG);

  const featuredProducts = useMemo(() => getFeaturedProducts(), []);

  const getProduct = useCallback(
    (id) => {
      return getProductById(id) ?? products[0];
    },
    [products]
  );

  const value = { products, featuredProducts, getProduct };

  return (
    <StoreContext.Provider value={value}>
      {props.children}
    </StoreContext.Provider>
  );
}

export default StoreProvider;
