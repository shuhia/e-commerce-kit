import React, { useEffect, useState } from "react";
import BigButton from "../components/buttons/BigButton";
import Section, { SectionDesktop } from "../components/Section";
import Quantity from "../components/business/Quantity";
import productImg from "../images/product-1.png";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import styles from "./cart.module.css";
import Button from "../components/buttons/Button";

const product = {
  name: "Product",
  id: uuidv4(),
  img: productImg,
  price: { value: 5, currency: "$" },
  quantity: 1,
};

const product2 = {
  name: "Product 2",
  id: uuidv4(),
  img: productImg,
  price: { value: 5, currency: "$" },
  quantity: 1,
};

function ProductData({
  product = this.product,
  removeProduct,
  updateProduct,
  updateTotal,
}) {
  const { name, price, img, id } = product;
  const [quantity, setQuantity] = useState(product.quantity);
  const [total, setTotal] = useState(price.value * quantity + price.currency);
  useEffect(() => {
    setTotal(price.value * quantity + price.currency);
    const newProduct = { ...product, quantity };
    updateProduct(newProduct);
  }, [quantity]);

  return (
    <>
      <td className={styles.product}>
        <img src={img}></img>
        <div>
          <h4>{name}</h4>
          <div className={styles.remove} onClick={() => removeProduct(id)}>
            <u>Remove</u>
          </div>
        </div>
      </td>
      <td className={styles.price}>{price.value + price.currency}</td>
      <td className={styles.quantity}>
        <Quantity
          value={quantity}
          setValue={(value) => {
            setQuantity((prev) => value);
          }}
        ></Quantity>
      </td>
      <td className={styles.total}>{total}</td>
    </>
  );
}

function Cart() {
  const [products, setProducts] = useState([product, product2]);
  const [total, setTotal] = useState((prev) =>
    products.reduce(
      (total, product) => total + product.price.value * product.quantity,
      0
    )
  );

  function updateProduct(product) {
    setProducts((prev) =>
      prev.map((prev) => (prev.id === product.id ? product : prev))
    );
  }

  useEffect(() => {
    updateTotal(products);
    console.log(products);
  }, [products]);

  function updateTotal(Products) {
    setTotal((prev) =>
      products.reduce(
        (total, product) => total + product.price.value * product.quantity,
        0
      )
    );
  }

  function removeProduct(id) {
    setProducts((prev) => prev.filter((product) => product.id !== id));
  }

  const table = (
    <table className={styles.table}>
      <thead>
        <tr>
          <th colSpan="1" style={{ textAlign: "left" }}>
            Product
          </th>
          <th colSpan="1">Price </th>
          <th colSpan="1">Quantity</th>
          <th colSpan="1">Total</th>
        </tr>
      </thead>
      <tbody className="products">
        {products.map((product, index) => {
          return (
            <tr key={"product" + index}>
              <ProductData
                product={product}
                updateProduct={updateProduct}
                removeProduct={removeProduct}
                updateTotal={updateTotal}
              ></ProductData>
            </tr>
          );
        })}
      </tbody>
      <tfoot>
        <tr className={styles.footer}>
          <td colSpan={3} className={styles.subtotal}>
            <div>
              <b>
                <span>Sub-total:</span>
                <span>{total}$</span>
              </b>
            </div>
            <div>Tax and shipping cost will be calculated later</div>
          </td>
          <td>
            <Button name="Checkout" href="/checkout"></Button>
          </td>
        </tr>
      </tfoot>
    </table>
  );
  return (
    <SectionDesktop
      title="Your cart items"
      description={<Link to="/">"Back to shopping"</Link>}
      content={<div className={styles.container}>{table}</div>}
    ></SectionDesktop>
  );
}

export default Cart;
