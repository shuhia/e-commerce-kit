import React from "react";
import Section from "./Section";
import Button from "../buttons/Button";

function Benefits(candlesImage) {
  return (
    <Section
      id="benefits"
      title="Clean and fragrant soy wax"
      description="Made for your home and for your wellness"
      content={<></>}
    >
      <aside>
        <img className="benefits-candles" src={candlesImage}></img>
      </aside>
      <ul>
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
