import React, { useEffect, useState } from "react";

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
    price: { value: 5, currency: "$" },
    quantity: 1,
  };

  const product2 = {
    name: "Spiced Mint Candleaf ®",
    id: uuidv4(),
    img: productImg,
    price: { value: 5, currency: "$" },
    quantity: 1,
  };
  const [cart, setCart] = useState({ owner: "", items: [product, product2] });

  const [count, setCount] = useState(cart.items.length);
  useEffect(() => {
    setCount(cart.items.reduce((count, item) => count + item.quantity, 0));
  }, [cart]);

  const addItem = (item) => {
    setCart((prev) => ({ ...prev, items: [item, ...prev.items] }));
  };

  function updateItem(item) {
    setCart((prev) => ({
      ...prev,
      items: prev.items.map((prev) => (prev.id === item.id ? item : prev)),
    }));
  }

  function removeItem(id) {
    setCart((prev) => ({
      ...prev,
      items: [...prev.items.filter((product) => product.id !== id)],
    }));
  }

  const [selectedProduct, setSelectedProduct] = useState(product);

  return (
    <>
      <Router>
        <Navbar
          navItems={
            <>
              <NavItem name="Discover" href="/discover"></NavItem>
              <NavItem name="About" href="/about"></NavItem>
              <NavItem name="Contact" href="/contact"></NavItem>
              <NavItem name="Components" href="/components"></NavItem>
              <NavItem href="/profile">
                <Profile width={50} height={50}></Profile>
              </NavItem>

              <NavItem href="/cart">
                <CartItem count={count}></CartItem>
              </NavItem>
            </>
          }
        ></Navbar>
        <Switch>
          <Route exact path="/product">
            <Product product={selectedProduct} addItem={addItem}></Product>
          </Route>
          <Route exact path="/discover" component={Discover}></Route>
          <Route exact path="/cart">
            <Cart
              cart={cart}
              addItem={addItem}
              removeItem={removeItem}
              updateItem={updateItem}
            ></Cart>
          </Route>
          <Route exact path="/checkout">
            <Checkout></Checkout>
          </Route>
          <Route exact path="/components" component={Components}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/" component={Home} />
        </Switch>
        <Footer lists={lists}></Footer>
      </Router>
    </>
  );
}

export default App;
