import React from "react";
import Section from "../components/Section";
import ProductCard from "../components/cards/ProductCard";
import product from "../images/product-1.png";
import Cards from "../components/cards/Cards";
import useStoreContext from "../contexts/useStoreContext";

function Discover() {
  const { products } = useStoreContext();
  return (
    <Section
      id="products"
      title="Products"
      description="Order it for you or for your beloved ones."
    >
      <Cards>
        {products.map((product, index) => {
          return <ProductCard product={product}> </ProductCard>;
        })}
      </Cards>
    </Section>
  );
}

export default Discover;
