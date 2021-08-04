import React from "react";
import Section from "./Section";
import Cards from "../cards/Cards";
import ProductCard from "../cards/ProductCard";

function Products({ products = [] }) {
  console.log(products);
  return (
    <Section
      id="products"
      title="Products"
      description="Order it for you or for your beloved ones."
    >
      <Cards>
        {products.map((product, index) => {
          return (
            <ProductCard
              key={"product-" + index}
              product={product}
            ></ProductCard>
          );
        })}
      </Cards>
    </Section>
  );
}

export default Products;
