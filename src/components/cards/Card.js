import React from "react";
import styles from "./card.module.css";

function Card({ img = "", title = "", description = "" }) {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={img} alt={title}></img>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
    </div>
  );
}

export default Card;
