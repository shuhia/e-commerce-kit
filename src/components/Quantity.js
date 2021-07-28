import React from "react";
import { useReducer } from "react";

function Quantity() {
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
  const [count, dispatch] = useReducer(setCount, 0);

  return (
    <div className="quantity">
      <div className="quantity-title">Quantity</div>
      <button
        className="button-increase"
        onClick={() => dispatch({ type: "increase" })}
      >
        <b>+</b>
      </button>
      <input
        className="quantity-value"
        value={count}
        onInput={(e) => dispatch({ type: "setState", payload: e.target.value })}
        maxLength={3}
      />

      <button
        className="button-decrease"
        onClick={() => dispatch({ type: "decrease" })}
      >
        <b>-</b>
      </button>
    </div>
  );
}

export default Quantity;
