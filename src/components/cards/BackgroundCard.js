import React from "react";
import "./cards.css";
import LinkButton from "../buttons/LinkButton";

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
      <LinkButton name="discover our collection" href="/discover"></LinkButton>
    </div>
  );
}

export default BackgroundCard;
