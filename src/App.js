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
                    <Route exact path="/discover" component={Discover}></Route>
                    <Route exact path="/cart" component={Cart}></Route>
                    <Route exact path="/about" component={About}></Route>
                    <Route exact path="/components" component={Components} />
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
