import React from "react";
import Section from "../../components/sections/Section";
import Cards from "../../components/cards/Cards";
import ProductCard from "../../components/cards/ProductCard";
import useStoreContext from "../../contexts/store/useStoreContext";

function Products() {
  const { products } = useStoreContext();

  return (
    <Section
      title="All products"
      description="Order it for you or for your beloved ones "
    >
      <Cards>
        {products.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </Cards>
    </Section>
  );
}

export default Products;
