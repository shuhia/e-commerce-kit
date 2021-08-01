import React from "react";
import Section from "../components/Section";
import ProductCard from "../components/cards/ProductCard";
import product from "../images/product-1.png";
import Cards from "../components/cards/Cards";

function Discover() {
  return (
    <Section
      id="products"
      title="Products"
      description="Order it for you or for your beloved ones."
    >
      <Cards>
        <ProductCard title="test" img={product}></ProductCard>
        <ProductCard title="test" img={product}></ProductCard>
        <ProductCard title="test" img={product}></ProductCard>
        <ProductCard title="test" img={product}></ProductCard>
        <ProductCard title="test" img={product}></ProductCard>
        <ProductCard title="test" img={product}></ProductCard>
        <ProductCard title="test" img={product}></ProductCard>
        <ProductCard title="test" img={product}></ProductCard>
      </Cards>
    </Section>
  );
}

export default Discover;
