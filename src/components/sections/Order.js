import React from "react";
import useCartContext from "../../contexts/cart/useCartContext";
import Coupon from "../business/Coupon";
import BackgroundCard from "../cards/BackgroundCard";
import styles from "./order.module.css";

function Order({ shipping = 0 }) {
  const { items, total, count } = useCartContext();
  const currency = "$";

  return (
    <div className={styles.root}>
      <table className={styles.table}>
        {items.map((item) => {
          return (
            <tr className={styles.product} colspan="2">
              <td style={{ position: "relative" }}>
                <img src={item.img} width="160px"></img>
                <span
                  style={{
                    position: "absolute",
                    top: 0,
                    left: "100%",
                    background: "green",
                    color: "white",
                    borderRadius: "50%",
                    minWidth: "3ch",
                    textAlign: "center",
                  }}
                >
                  {item.quantity}
                </span>
              </td>
              <td>
                <span>{item.name}</span>
                <p>{item.price.value + item.price.currency}</p>
              </td>
            </tr>
          );
        })}

        <tr>
          <td className={styles.coupon} colspan="2">
            <Coupon></Coupon>
          </td>
        </tr>
        <tr>
          <td>Subtotal</td>
          <td>{total + currency}</td>
        </tr>
        <tr>
          <td>shipping</td>
          <td>{shipping + currency}</td>
        </tr>
        <tr>
          <td>total</td>
          <td>{total + currency}</td>
        </tr>
      </table>
    </div>
  );
}

export default Order;
