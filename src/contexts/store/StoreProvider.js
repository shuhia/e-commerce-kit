import React, { useState, useEffect } from "react";
import StoreContext from "./StoreContext";
import { v4 as uuidv4 } from "uuid";
import productImg from "../images/product-1.png";

function random(min = 0, max = 10) {
  return min + Math.floor(Math.random() * max + 1);
}

function StoreProvider(props) {
  const product = {
    name: "Spiced Mint Candleaf ®",
    id: uuidv4(),
    img: productImg,
    price: { value: random(), currency: "$" },
    quantity: 1,
  };

  const product2 = {
    name: "Spiced Mint Candleaf ®",
    id: uuidv4(),
    img: productImg,
    price: { value: random(), currency: "$" },
    quantity: 1,
  };
  const products = [product, product2];

  function randomProduct() {
    return {
      name: "Spiced Mint Candleaf ®",
      id: uuidv4(),
      img: productImg,
      price: { value: random(), currency: "$" },
      quantity: 1,
    };
  }

  function fetchProducts() {}

  const value = { product, products, randomProduct };
  return (
    <StoreContext.Provider value={value}>
      {props.children}
    </StoreContext.Provider>
  );
}

export default StoreProvider;
