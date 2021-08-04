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

import CartProvider from "./contexts/cart/CartProvider";
import StoreProvider from "./contexts/store/StoreProvider";
import CustomerProvider from "./contexts/customer/CustomerProvider";

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

  return (
    <>
      <StoreProvider>
        <CustomerProvider>
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
                  <Product></Product>
                </Route>
                <Route exact path="/discover" component={Discover}></Route>
                <Route exact path="/cart">
                  <Cart></Cart>
                </Route>
                <Route path="/checkout">
                  <Checkout></Checkout>
                </Route>
                <Route exact path="/components" component={Components}></Route>
                <Route exact path="/about" component={About}></Route>
                <Route exact path="/">
                  <Home></Home>
                </Route>
              </Switch>
              <Footer lists={lists}></Footer>
            </Router>
          </CartProvider>
        </CustomerProvider>
      </StoreProvider>
    </>
  );
}

export default App;
