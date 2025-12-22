import React from "react";
import Section from "./Section";
import Cards from "../cards/Cards";
import ProductCard from "../cards/ProductCard";

function Featured({ products = [] }) {
  if (!products.length) {
    return null;
  }

  return (
    <Section
      id="popular"
      title="Popular"
      description="Our top selling product that you may like"
    >
      <Cards>
        {products.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </Cards>
    </Section>
  );
}

export default Featured;
