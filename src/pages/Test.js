import React from "react";
import Quantity from "../components/business/Quantity";
import Section from "../components/Section";
import ProductCard from "../components/cards/ProductCard";
import product from "../images/product-1.png";
import Cards from "../components/cards/Cards";
import Cart from "../components/business/Cart";

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
        <Cart></Cart>
      </Cards>
    </Section>
  );
}

export default Test;
