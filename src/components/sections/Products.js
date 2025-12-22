import React from "react";
import { useMemo } from "react";
import Section from "./Section";
import Cards from "../cards/Cards";
import ProductCard from "../cards/ProductCard";

function Products({ products = [] }) {
  const catalog = useMemo(() => products.slice(0, 8), [products]);

  return (
    <Section
      title="Products"
      description="Order it for you or for your beloved ones "
    >
      <Cards>
        {catalog.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </Cards>
    </Section>
  );
}

export default Products;
