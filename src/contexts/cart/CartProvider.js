import React, { useEffect, useState } from "react";

import CartContext from "./CartContext";
import {
  generateRandomProducts,
  generateRandomProduct,
} from "../../utils/utils";

function CartProvider(props) {
  const [cart, setCart] = useState({
    owner: "",
    items: generateRandomProducts(4),
  });
  const items = cart.items;
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
  function emptyCart() {
    setCart((prev) => {
      return { ...prev, items: [] };
    });
  }
  // Value
  const value = {
    cart,
    items,
    setCart,
    count,
    addItem,
    updateItem,
    removeItem,
    total,
    emptyCart,
  };

  return (
    <CartContext.Provider value={value}>{props.children}</CartContext.Provider>
  );
}

export default CartProvider;
