import React from "react";
import LinkButton from "../components/buttons/LinkButton";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Input from "../components/business/Input";

import Dropdown from "../components/business/Dropdown";
import Order from "../components/sections/Order";
import Section from "../components/sections/Section";
import DetailsForm from "../components/forms/DetailsForm";

import faker from "faker";

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
            options={Array(5)
              .fill(0)
              .map(() => faker.address.country())}
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
          <LinkButton
            name="Go to shipping"
            href={"/checkout" + "/shipping"}
          ></LinkButton>
        </Inputs>
      </form>
      <Order></Order>
    </>
  );

  const mobile = <DetailsForm></DetailsForm>;

  return (
    <>
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          justifyContent: "center",
          alignItems: "center",
          padding: "0 10%",
        }}
      >
        {isMobile ? mobile : desktop}
      </section>
    </>
  );
}

export default Details;
