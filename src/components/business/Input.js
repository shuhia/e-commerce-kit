import React from "react";

function Input(props) {
  const { variant = "big" } = props;
  const styles = "input-" + { variant };
  return <input className={variant}></input>;
}

export default Input;
