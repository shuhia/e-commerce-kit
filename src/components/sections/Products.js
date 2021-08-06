import React from "react";
import Section from "./Section";
import Cards from "../cards/Cards";
import ProductCard from "../cards/ProductCard";

function Products({ products = [] }) {
  console.log(products);
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
