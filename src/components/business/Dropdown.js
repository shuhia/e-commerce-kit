import React, { useRef, useState, useEffect } from "react";
import styles from "./dropdown.module.css";
import arrow from "../assets/icons/keyboard_arrow_down_black_24dp.svg";

function Dropdown({
  size = "large",
  label = "label",
  options = ["test1", "test2", "test3"],
}) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(false);

  const [selected, setSelected] = useState("province");
  function select(e) {
    setSelected(options[e.target.id]);
    setOpen(false);
  }

  return (
    <div
      className={styles[size]}
      onMouseEnter={(e) => setActive(true)}
      onMouseLeave={(e) => {
        setActive(false);
        setOpen(false);
      }}
    >
      <div
        className={styles.selector}
        onClick={() => {
          if (active) setOpen((prev) => !prev);
        }}
      >
        <div className={styles.selectorField}>
          <span className={styles.label}>{label}</span>
          <span className={styles.selected}>{selected}</span>
        </div>

        <div className={styles.dropdown}>
          |<img src={arrow} />
        </div>
      </div>

      {open && (
        <ul className={styles.select}>
          {options.map((option, index) => {
            return (
              <ol id={index} key={"option-" + index} onClick={select}>
                {option}
              </ol>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
