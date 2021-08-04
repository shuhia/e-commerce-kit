import React from "react";
import useCartContext from "../../contexts/useCartContext";
import Coupon from "../business/Coupon";
import BackgroundCard from "../cards/BackgroundCard";
import styles from "./order.module.css";

function Order() {
  const { items, total, count } = useCartContext();

  return (
    <div className={styles.root}>
      <tabel className={styles.table}>
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
          <td>Subtotal</td>
        </tr>
        <tr>
          <td>shipping</td>
          <td>shipping</td>
        </tr>
        <tr>
          <td>total</td>
          <td>total</td>
        </tr>
      </tabel>
    </div>
  );
}

export default Order;
