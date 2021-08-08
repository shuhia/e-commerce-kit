import React, { useRef } from "react";
import { useReducer, useEffect } from "react";
import styles from "./quantity.module.css";

function Quantity(props) {
  const { value = 0, setValue = () => {} } = props;
  const setCount = (state, action) => {
    const { type, payload } = action;

    switch (type) {
      case "increase":
        return state + 1;
      case "decrease":
        return state > 0 ? state - 1 : 0;
      case "setState":
        return Number(payload);

      default:
        return state;
    }
  };

  const [count, dispatch] = useReducer(setCount, value);
  const inputRef = useRef();

  useEffect(() => setValue(count), [count, setValue]);

  return (
    <span className={styles.container}>
      <div className={styles.controller}>
        <span
          className={styles.button}
          onClick={() => dispatch({ type: "decrease" })}
        >
          -
        </span>
        <label></label>
        <input
          className={styles.value}
          onChange={(e) => {
            dispatch({ type: "setState", payload: e.target.value });
          }}
          value={count}
          ref={inputRef}
        />
        <span
          className={styles.button}
          onClick={() => dispatch({ type: "increase" })}
        >
          +
        </span>
      </div>
    </span>
  );
}

export default Quantity;
