import React from "react";
import { useReducer, useEffect } from "react";
import "./quantity.css";

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

  useEffect(() => setValue(count), [count, setValue]);

  return (
    <div className="quantity">
      <div
        className="quantity-controller"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button
          className="button-decrease"
          onClick={() => dispatch({ type: "decrease" })}
        >
          <b>-</b>
        </button>
        <input
          className="quantity-value"
          value={count}
          onInput={(e) =>
            dispatch({ type: "setState", payload: e.target.value })
          }
          maxLength={3}
        />
        <button
          className="button-increase"
          onClick={() => dispatch({ type: "increase" })}
        >
          <b>+</b>
        </button>
      </div>
    </div>
  );
}

export default Quantity;
