import "./styles/styles.css";
import ReactNavbar from "./components/Navbar";
import Header from "./components/Heading";
import Section from "./components/Section";
import Quantity from "./components/Quantity";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Test from "./pages/Test";
import ProductCard from "./components/ProductCard";
import product from "./images/product-1.png";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

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

function Home() {
  return (
    <>
      <Header></Header>
      <Section id="products">
        <Cards
          title="Products"
          description="Order it for you or for your beloved ones."
        >
          <ProductCard title="test" img={product}></ProductCard>
          <ProductCard title="test" img={product}></ProductCard>
          <ProductCard title="test" img={product}></ProductCard>
          <ProductCard title="test" img={product}></ProductCard>
          <ProductCard title="test" img={product}></ProductCard>
          <ProductCard title="test" img={product}></ProductCard>
          <ProductCard title="test" img={product}></ProductCard>
          <ProductCard title="test" img={product}></ProductCard>
        </Cards>
      </Section>
    </>
  );
}

function App() {
  return (
    <>
      <Router>
        <ReactNavbar></ReactNavbar>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/test" component={Test}></Route>
        </Switch>
        <Footer lists={lists}></Footer>
      </Router>
    </>
  );
}

export default App;
