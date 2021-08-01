import React from "react";
import Quantity from "../components/business/Quantity";
import Section from "../components/Section";
import ProductCard from "../components/cards/ProductCard";
import product from "../images/product-1.png";
import Cards from "../components/cards/Cards";
import CartItem from "../components/business/CartItem";
import Rating from "../components/Rating";
import Profile from "../components/Profile";
import TestimonialCard from "../components/cards/TestimonialCard";
import Form from "../components/Form";
import Breadcrumb from "../components/business/Breadcrumb";
import Input from "../components/business/Input";
import Dropdown from "../components/business/Dropdown";

function Test() {
  return (
    <>
      <Section title="Cards">
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
          <CartItem></CartItem>
        </Cards>
      </Section>
      <Section>
        <TestimonialCard></TestimonialCard>
        <Rating></Rating>
        <Profile></Profile>
      </Section>
      <Section title="order">
        <Form></Form>
        <p className="description">
          All hand-made with natural soy wax, Candleaf is made for your pleasure
          moments.
        </p>
      </Section>
      <Section title="business components">
        <Breadcrumb></Breadcrumb>
        <div>
          inputs
          <Input size="small"></Input>
          <Input size="medium"></Input>
          <Input size="large"></Input>
        </div>
        <Dropdown></Dropdown>
      </Section>
    </>
  );
}

export default Test;
