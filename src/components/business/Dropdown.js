import React, { useRef, useState, useEffect } from "react";
import styles from "./dropdown.module.css";
import arrow from "../../images/keyboard_arrow_down_black_24dp.svg";

function Dropdown() {
  const [show, setShow] = useState(false);
  const dropdown = useRef();
  const options = ["test1", "test2", "test3"];
  const [selected, setSelected] = useState("province");
  function select(e) {
    setSelected(options[e.target.id]);
    setShow(false);
  }

  useEffect(() => {
    window.addEventListener("click", (e) => {
      console.log(e.target);
    });
  }, []);

  return (
    <div className={styles.small} ref={dropdown}>
      <div className={styles.selector} onClick={() => setShow((prev) => !prev)}>
        <div>
          <span className={styles.label}>Label</span>
          <span className={styles.selected}>{selected}</span>
        </div>

        <div className={styles.dropdown}>
          |<img src={arrow} />
        </div>
      </div>

      {show && (
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
