import React from "react";

import styles from "./button.module.css";

function SubmitButton({ name, formId, size = "large", onClick, ...rest }) {
  return (
    <>
      <button
        type="submit"
        for={formId}
        className={styles[size]}
        onClick={onClick}
      >
        {rest.children}
        <span>{name}</span>
      </button>
    </>
  );
}

export default SubmitButton;
