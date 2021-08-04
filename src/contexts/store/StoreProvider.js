import React, { useState, useEffect } from "react";
import StoreContext from "./StoreContext";
import { v4 as uuidv4 } from "uuid";
import productImg from "../images/product-1.png";

function random(min = 0, max = 10) {
  return min + Math.floor(Math.random() * max + 1);
}

function StoreProvider(props) {
  /**
   *
   * @param {String} name Products name.
   * @param {Number} id Products ID.
   * @param {Object} img Products Img.
   * @param {Number} price The price of the product.
   * @param {Number} quantity The amount of the product.
   * @returns {Object} Object with follwing keys: name, id, img, price and quantity.
   */

  function randomProduct(
    name = "Spiced Mint Candleaf ®",
    id = uuidv4(),
    img = { productImg },
    price = { value: random(), currency: "$" },
    quantity = 1
  ) {
    return {
      name,
      id,
      img,
      price,
      quantity,
    };
  }

  // Returns an array with random products
  /**
   *
   * @param {Number} amount of products.
   * @returns {Array} amount products in array.
   */
  function randomProducts(amount) {
    return Array(amount)
      .fill("product")
      .map(() => randomProduct());
  }

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
