import React from "react";
import { useRouteMatch } from "react-router-dom";
import Order from "../components/sections/Order";
import BigButton from "../components/buttons/BigButton";
import { Link } from "react-router-dom";

function Shipping() {
  return (
    <section>
      <form>
        <div>
          <label for="contact">contact</label>
          <input id="contact"></input>
          <Link to="details">Edit</Link>
        </div>
        <div>
          <label for="adress">adress</label>
          <input id="adress"></input>
          <Link to="details">Edit</Link>
        </div>
        <fieldset>
          <legend>Shipping method</legend>
          <input id="standardShipping" type="radio" checked></input>
          <label for="standardShipping">standard Shipping</label>
        </fieldset>
        <BigButton
          name="Go to payment"
          href={"/checkout" + "/payment"}
        ></BigButton>
      </form>
      <Order></Order>
    </section>
  );
}

export default Shipping;
