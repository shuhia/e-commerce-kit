import React from "react";
import Section from "../../components/sections/Section";
import Cards from "../../components/cards/Cards";
import ProductCard from "../../components/cards/ProductCard";

function Products() {
  return (
    <Section
      title="Products"
      description="Order it for you or for your beloved ones "
    >
      <Cards>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
      </Cards>
    </Section>
  );
}

export default Products;
