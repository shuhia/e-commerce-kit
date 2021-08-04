import React from "react";
import Header from "../components/sections/Header";

import candlesImage from "../images/candles.png";
import Benefits from "../components/sections/Benefits";
import Testimonials from "../components/sections/Testimonials";

import Products from "../components/sections/Products";

import useStoreContext from "../contexts/store/useStoreContext";
import Featured from "../components/sections/Featured";

function Home() {
  const { products } = useStoreContext();
  return (
    <>
      <Header></Header>
      <Products products={products}></Products>
      <Benefits candlesImage={candlesImage}></Benefits>
      <Testimonials></Testimonials>
      <Featured></Featured>
    </>
  );
}

export default Home;
