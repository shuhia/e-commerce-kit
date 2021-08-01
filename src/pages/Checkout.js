import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import Breadcrumb from "../components/business/Breadcrumb";
import Details from "./Details";
import Shipping from "./Shipping";
import Payment from "./Payment";

function Checkout() {
  let { path, url } = useRouteMatch();

  const pages = [
    { name: "cart", href: "/cart" },
    { name: "details", href: path + "/details" },
    { name: "shipping", href: path + "/shipping" },
    { name: "payment", href: path + "/payment" },
  ];

  return (
    <Router>
      <Breadcrumb pages={pages}></Breadcrumb>
      <Switch>
        <Route exact path={path}>
          <Details></Details>
        </Route>
        <Route exact path={path + "/shipping"}>
          <Shipping></Shipping>
        </Route>
        <Route exact path={path + "/payment"}>
          <Payment></Payment>
        </Route>
      </Switch>
    </Router>
  );
}

export default Checkout;
