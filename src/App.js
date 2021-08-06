import React from "react";
import "./app.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Redirect } from "react-router";

import Layout from "./components/layout/Layout";
import Breadcrumb from "./components/business/Breadcrumb";

import Cart from "./pages/Cart";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Components from "./pages/Components";
import Discover from "./pages/Discover";
import Details from "./pages/Details";
import Shipping from "./pages/Shipping";
import Payment from "./pages/Payment";

import CartProvider from "./contexts/cart/CartProvider";
import StoreProvider from "./contexts/store/StoreProvider";
import CustomerProvider from "./contexts/customer/CustomerProvider";

function App() {
  const path = "/checkout";
  const pages = [
    { name: "cart", href: "/cart" },
    { name: "details", href: path + "/details" },
    { name: "shipping", href: path + "/shipping" },
    { name: "payment", href: path + "/payment" },
  ];
  const breadCrumb = <Breadcrumb pages={pages}></Breadcrumb>;

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
                  <Route
                    exact
                    path="/components"
                    component={Components}
                  ></Route>
                  <Route exact path="/about" component={About}></Route>
                  <Route exact path="/" component={Home}></Route>
                  <Route exact path={"/checkout/details"}>
                    {breadCrumb}
                    <Details></Details>
                  </Route>
                  <Route exact path={"/checkout/shipping"}>
                    {breadCrumb}
                    <Shipping></Shipping>
                  </Route>
                  <Route exact path={"/checkout/payment"}>
                    {breadCrumb}
                    <Payment></Payment>
                  </Route>
                  <Route exact path={"/checkout"}>
                    <Redirect exact to={"/checkout/details"}></Redirect>
                  </Route>
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
