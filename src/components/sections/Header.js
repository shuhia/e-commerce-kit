import React from "react";
import styles from "./header.module.css";
import bgImageMobile from "../assets/background/bg-image-mobile.png";
import bgImage from "../assets/background/bg-image-desktop.jpg";
import LinkButton from "../buttons/LinkButton";
import { useMediaQuery } from "react-responsive";
import useStoreContext from "../../contexts/store/useStoreContext";
import useCustomerContext from "../../contexts/customer/useCustomerContext";
import { useHistory } from "react-router-dom";

function HeroCta() {
  const history = useHistory();
  const { products } = useStoreContext();
  const { setSelectedProduct } = useCustomerContext();

  const heroProduct = products?.[0];

  const handleClick = () => {
    if (!heroProduct) return;
    setSelectedProduct(heroProduct);
    history.push(`/product?id=${heroProduct.id}`);
  };

  if (!heroProduct) return null;

  return (
    <button className={styles.cta} onClick={handleClick}>
      <span>Shop {heroProduct.name}</span>
      <span className={styles.price}>
        {heroProduct.price.value}
        {heroProduct.price.currency}
      </span>
    </button>
  );
}

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
        <div className={styles.actions}>
          <LinkButton
            size="small"
            name="Discover our products"
            to="/discover"
          ></LinkButton>
          <HeroCta />
        </div>
      </div>
    </header>
  );
}

export default Header;
