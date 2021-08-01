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
import Coupon from "../components/business/Coupon";
import Subscription from "../components/business/Subscription";
import { NavbarDesktop, NavbarMobile } from "../components/navigation/Navbar";

function Components() {
  return (
    <>
      <Section title="Navigation">
        <NavbarDesktop></NavbarDesktop>
        <NavbarMobile></NavbarMobile>
      </Section>
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

        <div>
          Dropdowns
          <Dropdown size="small" label="small"></Dropdown>
          <Dropdown size="mobile" label="mobile"></Dropdown>
          <Dropdown size="large" label="large"></Dropdown>
        </div>
        <div>
          Coupon
          <Coupon></Coupon>
        </div>
        <div>
          Subscription
          <Subscription></Subscription>
        </div>
      </Section>
    </>
  );
}

export default Components;
