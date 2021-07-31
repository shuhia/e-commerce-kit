import "./app.css";
import Navbar from "./components/navigation/Navbar";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Test from "./pages/Test";

import Footer from "./components/Footer";
import NavItem from "./components/navigation/NavItem";
import Cart from "./components/business/Cart";

import Home from "./pages/Home";
import About from "./pages/About";

const discover = {
  name: "discover",
  links: ["New season", "Most searched", "Most selled"],
};
const about = { name: "about", links: ["Help", "Shipping", "Affilliate"] };
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
              <NavItem name="Discover"></NavItem>
              <NavItem name="About" href="/about"></NavItem>
              <NavItem name="Contact us"></NavItem>
              <NavItem name="Test" href="/test"></NavItem>
              <NavItem>
                <img className="profile" src="./profile.svg"></img>
              </NavItem>

              <NavItem>
                <Cart></Cart>
              </NavItem>
            </>
          }
        ></Navbar>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/test" component={Test}></Route>
          <Route exact path="/about" component={About}></Route>
        </Switch>
        <Footer lists={lists}></Footer>
      </Router>
    </>
  );
}

export default App;
