import React from "react";
import LinkButton from "../buttons/LinkButton";
import styles from "./card.module.css";

function BackgroundCard() {
  return (
    <div className={styles.background}>
      <div>
        <div className={styles.title}>
          <div>🌱</div>
          <div>The nature of candle</div>
        </div>
        <p className={styles.decription}>
          All handmade with natural soy wax, Candleaf is a companion for all
          your pleasure moments
        </p>
      </div>
      <LinkButton name="discover our collection" href="/discover"></LinkButton>
    </div>
  );
}

export default BackgroundCard;
