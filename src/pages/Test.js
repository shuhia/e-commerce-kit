import React from "react";
import Quantity from "../components/Quantity";
import Section from "../components/Section";
import ProductCard from "../components/ProductCard";
import product from "../images/product-1.png";
import Cards from "../components/Cards";

function Test() {
  return (
    <Section>
      <Quantity></Quantity>

      <Cards
        title="Prodcuts"
        description="Order it for you or for your beloved ones."
      >
        <ProductCard title="test" img={product}></ProductCard>
        <ProductCard title="test" img={product}></ProductCard>
        <ProductCard title="test" img={product}></ProductCard>
        <ProductCard title="test" img={product}></ProductCard>
        <ProductCard title="test" img={product}></ProductCard>
      </Cards>
    </Section>
  );
}

export default Test;
