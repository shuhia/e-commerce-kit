import React from "react";
import styles from "./header.module.css";
import bgImageMobile from "../assets/background/bg-image-mobile.png";
import bgImage from "../assets/background/bg-image-desktop.jpg";
import LinkButton from "../buttons/LinkButton";
import { useMediaQuery } from "react-responsive";

function Header() {
  const isMobile = useMediaQuery({ maxWidth: 800 });
  return (
    <header className={styles.container}>
      <img
        className={styles.image}
        src={isMobile ? bgImageMobile : bgImage}
        alt="background"
      ></img>
      <div className={styles.card}>
        <h1 className={styles.title}>
          🌱<br></br> The nature candle
        </h1>
        <p className={styles.description}>
          All handmade with natural soy wax, Candleaf is a companion for all
          your pleasure moments.
        </p>
        <LinkButton size="small" name="Discover our products"></LinkButton>
      </div>
    </header>
  );
}

export default Header;
