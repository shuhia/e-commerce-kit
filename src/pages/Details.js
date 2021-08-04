import React from "react";
import BigButton from "../components/buttons/BigButton";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Input from "../components/business/Input";

import Dropdown from "../components/business/Dropdown";
import Button from "../components/buttons/Button";
import Coupon from "../components/business/Coupon";
import useCartContext from "../contexts/cart/useCartContext";
import Order from "../components/sections/Order";

function Inputs(props) {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {props.children}
      </div>
    </>
  );
}

function Details() {
  const { cart } = useCartContext();
  const isMobile = useMediaQuery({ maxWidth: 800 });
  const desktop = (
    <>
      <form id="details">
        <fieldset id="contact">
          <legend>Contact</legend>
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
        <fieldset id="shipping">
          <legend>Shipping</legend>
          <Inputs>
            <Input name="firstname" size="medium" for="details"></Input>
            <Input name="lastname" size="medium" for="details"></Input>
          </Inputs>
          <Input name="Adress" for="details"></Input>
          <Input name="Shipping note" for="details"></Input>
          <Inputs>
            <Input name="city" size="small" for="details"></Input>
            <Input name="Postal code" size="small" for="details"></Input>
            <Input name="Province" size="small" for="details"></Input>
          </Inputs>
          <Dropdown
            id="country"
            for="details"
            label="country"
            options={["italy"]}
          >
            <option value="italy" label="country">
              italy
            </option>
          </Dropdown>
          <input id="save" type="checkbox" for="details"></input>
          <label for="save">
            Save this informations for a future fast checkout
          </label>
        </fieldset>
        <Inputs>
          <Link href="/checkout/cart">Back to cart</Link>
          <Button
            name="Go to shipping"
            href={"/checkout" + "/shipping"}
          ></Button>
        </Inputs>
      </form>
      <Order></Order>
    </>
  );

  const mobile = (
    <form>
      <fieldset id="contact">
        <legend>Contact</legend>
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

      <Input name="firstname" for="details"></Input>
      <Input name="lastname" for="details"></Input>
      <Input name="Adress" for="details"></Input>
      <Input name="Shipping note" for="details"></Input>
      <Input name="city" for="details"></Input>
      <Input name="Postal code" for="details"></Input>
      <Input name="Province" for="details"></Input>
      <Dropdown
        id="country"
        for="details"
        label="country"
        options={["italy"]}
      ></Dropdown>
      <input type="checkbox"></input>
      <label for="save">
        Save this informations for a future fast checkout
      </label>

      <div>
        <Link href="/checkout/cart">Back to cart</Link>
      </div>
      <BigButton
        name="Go to shipping"
        href={"/checkout" + "/shipping"}
      ></BigButton>
    </form>
  );

  return (
    <>
      <section>{isMobile ? mobile : desktop}</section>
    </>
  );
}

export default Details;
