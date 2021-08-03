import React, { useContext, useEffect, useState } from "react";

import "./app.css";
import Navbar from "./components/navigation/Navbar";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Footer from "./components/Footer";
import NavItem from "./components/navigation/NavItem";
import CartItem from "./components/business/CartItem";

import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";
import Cart from "./pages/Cart";
import Components from "./pages/Components";
import Discover from "./pages/Discover";
import Profile from "./components/Profile";

import productImg from "./images/product-1.png";

import { v4 as uuidv4 } from "uuid";

import CartProvider from "./contexts/CartProvider";

function random(min = 0, max = 10) {
  return min + Math.floor(Math.random() * max + 1);
}

function App() {
  const discover = {
    name: "discover",

    links: ["New season", "Most searched", "Most selled"],
  };
  const about = {
    name: "about",

    links: ["Help", "Shipping", "Affilliate"],
  };
  const info = {
    name: "info",

    links: ["Contact us", "Privacy Policies", "Terms & Conditions"],
  };

  const lists = [discover, about, info];
  const product = {
    name: "Spiced Mint Candleaf ®",
    id: uuidv4(),
    img: productImg,
    price: { value: random(), currency: "$" },
    quantity: 1,
  };

  const product2 = {
    name: "Spiced Mint Candleaf ®",
    id: uuidv4(),
    img: productImg,
    price: { value: random(), currency: "$" },
    quantity: 1,
  };

  const products = [product, product2];

  const [selectedProduct, setSelectedProduct] = useState(product);

  return (
    <>
      <CartProvider>
        <Router>
          <Navbar
            navItems={
              <>
                <NavItem name="Products" href="/discover"></NavItem>
                <NavItem name="About" href="/about"></NavItem>
                <NavItem name="Contact" href="/contact"></NavItem>
                <NavItem href="/profile">
                  <Profile width={50} height={50}></Profile>
                </NavItem>

                <NavItem href="/cart">
                  <CartItem></CartItem>
                </NavItem>
                <NavItem name="Components" href="/components"></NavItem>
              </>
            }
            cart={
              <NavItem href="/cart">
                <CartItem></CartItem>
              </NavItem>
            }
          ></Navbar>
          <Switch>
            <Route exact path="/product">
              <Product product={selectedProduct}></Product>
            </Route>
            <Route exact path="/discover" component={Discover}></Route>
            <Route exact path="/cart">
              <Cart></Cart>
            </Route>
            <Route exact path="/checkout">
              <Checkout></Checkout>
            </Route>
            <Route exact path="/components" component={Components}></Route>
            <Route exact path="/about" component={About}></Route>
            <Route exact path="/">
              <Home products={products}></Home>
            </Route>
          </Switch>
          <Footer lists={lists}></Footer>
        </Router>
      </CartProvider>
    </>
  );
}

export default App;
