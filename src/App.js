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

function App() {
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
                <img className="profile" src="./profile.svg"></img>
              </NavItem>

              <NavItem href="/cart">
                <CartItem></CartItem>
              </NavItem>
            </>
          }
        ></Navbar>
        <Switch>
          <Route exact path="/product">
            <Product></Product>
          </Route>
          <Route exact path="/cart" component={Cart} />
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
