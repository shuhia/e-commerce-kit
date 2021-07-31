import React from "react";
import Header from "../components/Header";
import Section from "../components/Section";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ProductCard from "../components/cards/ProductCard";
import product from "../images/product-1.png";
import Cards from "../components/cards/Cards";
import candlesImage from "../images/candles.png";
import Button from "../components/buttons/Button";

import testmonialImage from "../images/cards-testimonial.png";
import TestimonialCard from "../components/cards/TestimonialCard";

function Home() {
  return (
    <>
      <Header></Header>
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
      <Section
        id="benefits"
        title="Clean and fragrant soy wax"
        description="Made for your home and for your wellness"
        content={<></>}
      >
        <aside>
          <img className="benefits-candles" src={candlesImage}></img>
        </aside>
        <ul>
          <li>
            <b>Eco-sustainable:</b> All recyclable materials, 0% CO2 emissions
          </li>
          <li>
            <b>Hyphoallergenic:</b> 100% natural, human friendly ingredients{" "}
          </li>
          <li>
            <b>Handmade:</b> All candles are craftly made with love.
          </li>
          <li>
            <b>Long burning:</b> No more waste. Created for last long.
          </li>
        </ul>
        <div className="section-button">
          <Button name="See more"></Button>
        </div>
      </Section>
      <Section
        id="testimonials"
        title="Testimonials"
        description="Some quotes from our happy customers"
      >
        <div
          className="carusell"
          style={{
            display: "flex",

            width: "100%",
            overflowX: "scroll",
            overflowY: "none",
          }}
        >
          <TestimonialCard></TestimonialCard>
          <TestimonialCard></TestimonialCard>
          <TestimonialCard></TestimonialCard>
          <TestimonialCard></TestimonialCard>
          <TestimonialCard></TestimonialCard>
          <TestimonialCard></TestimonialCard>
        </div>
      </Section>
      <Section
        id="popular"
        title="Popular"
        description="Our top selling product that you may like"
      >
        <Cards>
          <ProductCard title="test" img={product}></ProductCard>
          <ProductCard title="test" img={product}></ProductCard>
          <ProductCard title="test" img={product}></ProductCard>
          <ProductCard title="test" img={product}></ProductCard>
        </Cards>
      </Section>
    </>
  );
}

export default Home;
