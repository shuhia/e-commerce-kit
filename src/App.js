import "./styles/styles.css";
import Navbar from "./components/Navbar";
import Header from "./components/Heading";
import Section from "./components/Section";
import Quantity from "./components/Quantity";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Test from "./pages/Test";
import ProductCard from "./components/ProductCard";
import product from "./images/product-1.png";
import Cards from "./components/Cards";

function Home() {
  return (
    <>
      <Header></Header>
      <Section>
        <Cards
          title="Prodcuts"
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
        <Navbar></Navbar>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/test" component={Test}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
