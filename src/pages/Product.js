import React from "react";
import Quantity from "../components/business/Quantity";
import styles from "./product.module.css";
import BigButton from "../components/buttons/BigButton";

function Rectangle({
  width = 100,
  height = 50,
  position = "relative",
  color = "grey",
  border = "1px solid black",
}) {
  return (
    <div
      style={{
        width: width,
        height: height,
        position: position,
        background: color,
        border: border,
      }}
    ></div>
  );
}

function Square(width = 50, height = 50) {
  return <Rectangle width={width} height={height}></Rectangle>;
}

function Product(props) {
  function handleSubmit(e) {
    e.preventDefault();
    alert("Add to cart");
  }

  return (
    <section className={styles.container}>
      <form id="order" className={styles.form} onSubmit={handleSubmit}>
        <h1 className={styles.title}>Spiced Mint Candleaf®</h1>
        <img className={styles.img} src="" alt="" />
        <div>
          <span className={styles.price}>$ 9.99</span>

          <Quantity></Quantity>
        </div>
        <fieldset className={styles.subscription}>
          <legend>Subscription</legend>
          <input id="oneTime" htmlFor="order" name="time" type="radio"></input>
          <label htmlFor="oneTime">One time purchase</label>
          <div>
            <input id="weeks" htmlFor="order" type="radio" name="time"></input>
            <label htmlFor="weeks"> Subscribe and deliver every</label>
            <select id="amount" name="amount" htmlFor="order">
              <option value={4}>4 weeks</option>
              <option value={3}>3 weeks</option>
              <option value={2}>2 weeks</option>
              <option value={1}>1 weeks</option>
            </select>
            <p>
              Subscribe now and get the 10% of discount on every recurring
              order. The discount will be applied at checkout. See details
            </p>
          </div>
        </fieldset>
        <button type="submit" className={styles.submit}>
          <span></span>
          <span>+ Add to cart</span>
        </button>
      </form>
      <dl className={styles.features}>
        <dt>Beast of Bodmin</dt>
        <dd>A large feline inhabiting Bodmin Moor.</dd>

        <dt>Morgawr</dt>
        <dd>A sea serpent.</dd>

        <dt>Owlman</dt>
        <dd>A giant owl-like creature.</dd>
      </dl>
      <footer>
        <h1>
          All hand-made with natural soy wax, Candleaf is made htmlFor your
          pleasure moments
        </h1>
        <h2>🚚 FREE SHIPPING</h2>
      </footer>
    </section>
  );
}

export default Product;
