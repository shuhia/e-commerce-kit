import React from "react";
import "./app.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Redirect } from "react-router";

import Layout from "./components/layout/Layout";
import Breadcrumb from "./components/navigation/Breadcrumb";

import Cart from "./components/pages/Cart/Cart";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Product from "./components/pages/Products/Product/Product";
import ProductsSection from "./components/pages/Products/Products";
import Details from "./components/pages/Details";
import Shipping from "./components/pages/Shipping";
import Payment from "./components/pages/Payment";

import CartProvider from "./contexts/cart/CartProvider";
import StoreProvider from "./contexts/store/StoreProvider";
import CustomerProvider from "./contexts/customer/CustomerProvider";
import { useLocation } from "react-router";
import { useEffect } from "react";

function ScrollToTop(props) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return props.children;
}

function App() {
  const path = "/checkout";
  const pages = [
    { name: "cart", href: "/cart" },
    { name: "details", href: path + "/details" },
    { name: "shipping", href: path + "/shipping" },
    { name: "payment", href: path + "/payment" },
  ];

  return (
    <>
      <Router>
        <StoreProvider>
          <CartProvider>
            <CustomerProvider>
              <Layout>
                <ScrollToTop>
                  <Switch>
                    <Route exact path="/product" component={Product}></Route>
                    <Route
                      exact
                      path="/discover"
                      component={ProductsSection}
                    ></Route>
                    <Route exact path="/cart" component={Cart}></Route>
                    <Route exact path="/about" component={About}></Route>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path={"/checkout/details"}>
                      <Breadcrumb pages={pages}> </Breadcrumb>
                      <Details></Details>
                    </Route>
                    <Route exact path={"/checkout/shipping"}>
                      <Breadcrumb pages={pages}> </Breadcrumb>
                      <Shipping></Shipping>
                    </Route>
                    <Route exact path={"/checkout/payment"}>
                      <Breadcrumb pages={pages}> </Breadcrumb>
                      <Payment></Payment>
                    </Route>
                    <Route exact path={"/checkout"}>
                      <Redirect exact to={"/checkout/details"}></Redirect>
                    </Route>
                  </Switch>
                </ScrollToTop>
              </Layout>
            </CustomerProvider>
          </CartProvider>
        </StoreProvider>
      </Router>
    </>
  );
}

export default App;
