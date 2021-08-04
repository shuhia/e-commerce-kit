import React from "react";
import Products from "../components/sections/Products";
import useStoreContext from "../contexts/store/useStoreContext";

function Discover() {
  const { products } = useStoreContext();
  return <Products products={products}></Products>;
}

export default Discover;
