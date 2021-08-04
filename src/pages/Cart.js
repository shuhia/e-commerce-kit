import React, { useEffect, useState } from "react";
import Quantity from "../components/business/Quantity";
import { Link } from "react-router-dom";
import styles from "./cart.module.css";
import Button from "../components/buttons/Button";
import { useMediaQuery } from "react-responsive";
import useCartContext from "../contexts/cart/useCartContext";
import { SectionDesktop } from "../components/sections/Section";

function ProductData({ product, removeProduct, updateProduct, isDektop }) {
  const { name, price, img, id } = product;
  const [quantity, setQuantity] = useState(product.quantity);
  const [total, setTotal] = useState(price.value * quantity + price.currency);
  useEffect(() => {
    setTotal(price.value * quantity + price.currency);
    const newProduct = { ...product, quantity };
    updateProduct(newProduct);
  }, [quantity]);

  const counter = (
    <Quantity
      value={quantity}
      setValue={(value) => {
        setQuantity((prev) => value);
      }}
    ></Quantity>
  );

  return (
    <>
      <td className={styles.product}>
        <img className={styles.img} src={img} alt={product.name}></img>
        <div>
          <Link to="/product">
            <h4>{name}</h4>
          </Link>
          <div className={styles.remove} onClick={() => removeProduct(id)}>
            {product.subcription && (
              <div>subscription: {product.subcription}</div>
            )}

            <u>Remove</u>
          </div>
        </div>
      </td>
      {isDektop ? (
        <>
          <td className={styles.price}>{price.value + price.currency}</td>
          <td className={styles.quantity}>{counter}</td>
        </>
      ) : (
        <td>
          {total} {counter}
        </td>
      )}

      {isDektop && <td className={styles.total}>{total}</td>}
    </>
  );
}

function Cart(props) {
  const {
    cart,
    setCart,
    count,
    addItem,
    updateItem,
    removeItem,
    total,
  } = useCartContext();

  const isDektop = useMediaQuery({ minWidth: 800 });
  const items = cart.items;

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
        {items.map((product, index) => {
          return (
            <tr key={"product" + index}>
              <ProductData
                product={product}
                updateProduct={updateItem}
                removeProduct={removeItem}
                isDektop={isDektop}
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

  const mobileTable = (
    <table className={styles.table}>
      <thead>
        <tr>
          <th colSpan="1" style={{ textAlign: "left" }}>
            Product
          </th>
          <th colSpan="1">Total</th>
        </tr>
      </thead>
      <tbody className="products">
        {items.map((product, index) => {
          return (
            <tr key={"product" + index}>
              <ProductData
                product={product}
                updateProduct={updateItem}
                removeProduct={removeItem}
              ></ProductData>
            </tr>
          );
        })}
      </tbody>
      <tfoot>
        <tr className={styles.footer}>
          <td colSpan={2} className={styles.subtotalMobile}>
            <div>
              <b>
                <span>Sub-total:</span>
                <span>{total}$</span>
              </b>
            </div>
            <div>Tax and shipping cost will be calculated later</div>
            <Button name="Checkout" href="/checkout"></Button>
          </td>
        </tr>
      </tfoot>
    </table>
  );

  return (
    <SectionDesktop
      title="Your cart items"
      description={<Link to="/">Back to shopping</Link>}
      content={
        <>
          <div className={styles.container}>
            {isDektop ? table : mobileTable}
          </div>
        </>
      }
    ></SectionDesktop>
  );
}

export default Cart;
