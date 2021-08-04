import React, { useEffect, useState } from "react";

import CartContext from "./CartContext";

import { v4 as uuidv4 } from "uuid";

import productImg from "../images/product-1.png";

function random(min = 0, max = 10) {
  return min + Math.floor(Math.random() * max + 1);
}

function CartProvider(props) {
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

  const [cart, setCart] = useState({ owner: "", items: products });

  const [count, setCount] = useState(cart.items.length);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    setCount(cart.items.reduce((count, item) => count + item.quantity, 0));
    setTotal(
      cart.items.reduce(
        (sum, item) => sum + item.price.value * item.quantity,
        0
      )
    );
  }, [cart]);

  const addItem = (item) => {
    if (item.quantity > 0)
      setCart((prev) => ({ ...prev, items: [item, ...prev.items] }));
  };

  function updateItem(item) {
    setCart((prev) => ({
      ...prev,
      items: prev.items.map((prev) => (prev.id === item.id ? item : prev)),
    }));
  }

  function removeItem(id) {
    setCart((prev) => ({
      ...prev,
      items: [...prev.items.filter((product) => product.id !== id)],
    }));
  }

  // Functions

  // Value
  const value = {
    cart,
    setCart,
    count,
    addItem,
    updateItem,
    removeItem,
    total,
  };

  return (
    <CartContext.Provider value={value}>{props.children}</CartContext.Provider>
  );
}

export default CartProvider;
