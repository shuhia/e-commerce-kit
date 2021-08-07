import React, { useState, useEffect } from "react";
import Quantity from "../components/business/Quantity";
import styles from "./product.module.css";
import { v4 as uuidv4 } from "uuid";
import { useMediaQuery } from "react-responsive";
import useCartContext from "../contexts/cart/useCartContext";
import useCustomerContext from "../contexts/customer/useCustomerContext";
import useStoreContext from "../contexts/store/useStoreContext";
import { randomProduct } from "../utils/utils";
import CartButton from "../components/buttons/CartButton";

function Product() {
  const { selectedProduct = randomProduct() } = useCustomerContext();
  const product = selectedProduct;

  const isDesktop = useMediaQuery({ minWidth: 800 });
  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {};
  }, []);
  const { addItem } = useCartContext();

  const { name, id, img, price } = product;
  function handleSubmit(e) {
    e.preventDefault();
    const subcription = e.target["oneTime"].checked
      ? false
      : e.target["amount"].value;
    console.log(subcription);
    addItem({
      ...product,
      id: uuidv4(),
      quantity: quantity,
      subcription: subcription,
    });
  }

  const facts = Object.entries({
    Wax: "Top grade soy wax that delivers a smokeless and consistent burn",
    Fragrance: "Premium quality ingredients with natural essential oils",
    Burn_Time: "70-75 hours",
    Dimension: "10cm x 5cm",
    Weight: "400g",
  });

  const [quantity, setAmount] = useState(1);

  const desktop = (
    <section className={styles.container}>
      <div>
        <img className={styles.img} src={img} alt="product" />
        <div>
          All hand-made with natural soy wax, Candleaf is made htmlFor your
          pleasure moments
        </div>
        <div>🚚 FREE SHIPPING</div>
      </div>
      <div>
        <form id="order" className={styles.form} onSubmit={handleSubmit}>
          <h1 className={styles.title}>{name}</h1>

          <div className={styles.amount} style={{ display: "flex" }}>
            <span className={styles.price}>{price.value + price.currency}</span>
            <Quantity value={quantity} setValue={setAmount}></Quantity>
          </div>
          <fieldset className={styles.subscription}>
            <input
              id="oneTime"
              htmlFor="order"
              name="time"
              type="radio"
              defaultChecked
            ></input>
            <label for="oneTime">One time purchase</label>
            <div>
              <input
                id="weeks"
                htmlFor="order"
                type="radio"
                name="time"
              ></input>
              <label for="weeks">Subscribe and deliver every</label>
              <select id="amount" name="amount" for="order">
                <option value={4}>4 weeks</option>
                <option value={3}>3 weeks</option>
                <option value={2}>2 weeks</option>
                <option value={1}>1 weeks</option>
              </select>
              <p>
                Subscribe now and get the 10% of discount on every recurring
                order. The discount will be applied at checkout.
              </p>
            </div>
          </fieldset>
          <CartButton name="+ Add to cart"></CartButton>
        </form>
        <ol className={styles.facts}>
          {facts.map((fact) => (
            <li>
              <b>{fact[0]}</b>: {fact[1]}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );

  const mobile = (
    <section className={styles.container}>
      <h1 className={styles.title}>{name}</h1>
      <img className={styles.img} src={img} alt="product" />

      <form id="order" className={styles.form} onSubmit={handleSubmit}>
        <div>
          <div className={styles.amount}>
            <span className={styles.price}>{price.value + price.currency}</span>
            <Quantity value={quantity} setValue={setAmount}></Quantity>
          </div>
        </div>
        <fieldset className={styles.subscription}>
          <input
            id="oneTime"
            htmlFor="order"
            name="time"
            type="radio"
            defaultChecked
          ></input>
          <label for="oneTime">One time purchase</label>
          <div>
            <input id="weeks" htmlFor="order" type="radio" name="time"></input>
            <label for="weeks">Subscribe and deliver every</label>
            <select id="amount" name="amount" for="order">
              <option value={4}>4 weeks</option>
              <option value={3}>3 weeks</option>
              <option value={2}>2 weeks</option>
              <option value={1}>1 weeks</option>
            </select>
            <p>
              Subscribe now and get the 10% of discount on every recurring
              order. The discount will be applied at checkout.
            </p>
          </div>
        </fieldset>
        <CartButton name="+ Add to cart"></CartButton>
      </form>

      <ol className={styles.facts}>
        {facts.map((fact) => (
          <li>
            <b>{fact[0]}</b>: {fact[1]}
          </li>
        ))}
      </ol>

      <footer>
        <div>
          All hand-made with natural soy wax, Candleaf is made htmlFor your
          pleasure moments
        </div>
        <div>🚚 FREE SHIPPING</div>
      </footer>
    </section>
  );

  return <>{isDesktop ? desktop : mobile}</>;
}

export default Product;
