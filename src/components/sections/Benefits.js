import React from "react";
import Section from "./Section";
import Button from "../buttons/Button";
import productSet from "../assets/products/product-set-1.png";
import checkMark from "../assets/icons/checkmark.svg";
import styles from "./benefits.module.css";

function Benefits() {
  return (
    <Section
      id="benefits"
      title="Clean and fragrant soy wax"
      description="Made for your home and for your wellness"
      content={<></>}
      styles={styles}
    >
      <aside>
        <img
          className="benefits-candles"
          styles={{ listStyle: { checkMark } }}
          src={productSet}
          alt="product-set-1"
        ></img>
      </aside>
      <ul className={styles.list}>
        <li>
          <b>Eco-sustainable:</b> All recyclable materials, 0% CO2 emissions
        </li>
        <li>
          <b>Hyphoallergenic:</b> 100% natural, human friendly ingredients{" "}
        </li>
        <li>
          <b>Handmade:</b> All candles are craftly made with love.
        </li>
        <li>
          <b>Long burning:</b> No more waste. Created for last long.
        </li>
      </ul>
      <div className="section-button">
        <Button name="See more"></Button>
      </div>
    </Section>
  );
}

export default Benefits;
