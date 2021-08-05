import React from "react";

import styles from "./button.module.css";
import { Link } from "react-router-dom";

function SubmitButton({ name, formId, size = "big", onClick }) {
  return (
    <>
      <button
        type="submit"
        for={formId}
        className={styles[size]}
        onClick={onClick}
      >
        <span>{name}</span>
      </button>
    </>
  );
}

export default SubmitButton;
