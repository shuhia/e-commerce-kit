import React from "react";
import "./cards.css";
import BigButton from "../buttons/BigButton";

function BackgroundCard() {
  return (
    <div className="background-card">
      <div>
        <div className="background-card-title">
          <div>🌱</div>
          <div>The nature of candle</div>
        </div>
        <p className="background-card-description">
          All handmade with natural soy wax, Candleaf is a companion for all
          your pleasure moments
        </p>
      </div>
      <BigButton name="discover our collection" href="#products"></BigButton>
    </div>
  );
}

export default BackgroundCard;
