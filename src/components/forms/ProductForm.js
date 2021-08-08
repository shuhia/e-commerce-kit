import React from "react";
import Quantity from "../business/Quantity";
import LinkButton from "../buttons/LinkButton";
import { ReactComponent as Cart } from "../assets/icons/cart.svg";
import { generateRandomProduct } from "../../utils/product";

function ProductForm(props) {
  // Default values if props is undefined
  const { title = "Form" } = props;

  // Create a random product
  const product = generateRandomProduct();
  const { name, id, img, price, getPrice, quantity, options } = product;

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="title">{title}</div>
      <img src={img} />
      <div>
        <h1>{product.getPrice()}</h1>
        <Quantity></Quantity>
      </div>
      <input type="radio" id="one-time" name="choice"></input>
      <label for="one-time">One time purchase</label>
      <div>
        <input type="radio" id="subscribe" name="choice"></input>
        <label for="subscribe">Subscribe and delivery every </label>

        <select id="select-week" name="select-week">
          <option value={4}>4 weeks</option>
        </select>
        <p>
          Subscribe now and get the 10% of discount on every recurring order.
          The discount will be applied at checkout. See details
        </p>
      </div>
      <LinkButton name="Add to cart" href="#" img={<Cart></Cart>}></LinkButton>
      <div>
        <p>Facts</p>
        <ul></ul>
      </div>
    </form>
  );
}

export default ProductForm;
