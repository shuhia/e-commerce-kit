import React from "react";
import Input from "../business/Input";
import Dropdown from "../business/Dropdown";
import LinkButton from "../buttons/LinkButton";
import faker from "faker";
import { Link } from "react-router-dom";
import styles from "./details.module.css";

function DetailsForm() {
  return (
    <form className={styles.container}>
      <fieldset id="contact" className={styles.contactFieldset}>
        <header className={styles.header}>
          <span className={styles.title}>Contact</span>
          <span className={styles.login}>
            Do you have an account? <Link>Login</Link>
          </span>
        </header>
        <Input name="Email or phoneNumber"></Input>
        <input
          id="discount"
          name="discount"
          type="checkbox"
          for="details"
        ></input>
        <label for="discount">
          Add me to Candleaf newsletter for a 10% discount
        </label>
      </fieldset>
      <fieldset className={styles.shippingFieldset}>
        <header className={styles.header}>
          <span className={styles.title}>Shipping</span>
        </header>
        <Input name="firstname" for="details"></Input>
        <Input name="lastname" for="details"></Input>
        <Input name="Adress" for="details"></Input>
        <Input name="Shipping note" for="details"></Input>
        <Input name="city" for="details"></Input>
        <Input name="Postal code" for="details"></Input>
        <div>
          <Dropdown
            id="province"
            for="details"
            label="province"
            options={Array(5)
              .fill(0)
              .map(() => faker.address.state())}
            styles={styles.dropdown}
          ></Dropdown>
        </div>
        <div>
          <Dropdown
            id="country"
            for="details"
            label="Country/Region"
            options={Array(5)
              .fill(0)
              .map(() => faker.address.country())}
            styles={styles.dropdown}
          ></Dropdown>
        </div>
        <input id="save" name="save" type="checkbox"></input>
        <label for="save">Save payment info for future purchases</label>
      </fieldset>
      <LinkButton
        name="Go to shipping"
        to={"/checkout" + "/shipping"}
      ></LinkButton>
      <Link to="/checkout/cart">Back to cart</Link>
    </form>
  );
}

export default DetailsForm;
