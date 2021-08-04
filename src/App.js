import React from "react";
import "./app.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";

import Cart from "./pages/Cart";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";
import Components from "./pages/Components";
import Discover from "./pages/Discover";

import CartProvider from "./contexts/cart/CartProvider";
import StoreProvider from "./contexts/store/StoreProvider";
import CustomerProvider from "./contexts/customer/CustomerProvider";

function App() {
  return (
    <>
      <Router>
        <StoreProvider>
          <CustomerProvider>
            <CartProvider>
              <Layout>
                <Switch>
                  <Route exact path="/product" component={Product}></Route>
                  <Route exact path="/discover" component={Discover}></Route>
                  <Route exact path="/cart" component={Cart}></Route>
                  <Route path="/checkout" component={Checkout}></Route>
                  <Route
                    exact
                    path="/components"
                    component={Components}
                  ></Route>
                  <Route exact path="/about" component={About}></Route>
                  <Route exact path="/" component={Home}></Route>
                </Switch>
              </Layout>
            </CartProvider>
          </CustomerProvider>
        </StoreProvider>
      </Router>
    </>
  );
}

export default App;
