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

function Group(props) {
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
          <Group>
            <Input name="firstname" size="medium" for="details"></Input>
            <Input name="lastname" size="medium" for="details"></Input>
          </Group>
          <Input name="Adress" for="details"></Input>
          <Input name="Shipping note" for="details"></Input>
          <Group>
            <Input name="city" size="small" for="details"></Input>
            <Input name="Postal code" size="small" for="details"></Input>
            <Input name="Province" size="small" for="details"></Input>
          </Group>
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
        <Group>
          <Link to="/cart">Back to cart</Link>
          <LinkButton
            name="Go to shipping"
            to={"/checkout" + "/shipping"}
          ></LinkButton>
        </Group>
      </form>
      <Order></Order>
    </>
  );

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
        <DetailsForm></DetailsForm>
        <Order></Order>
      </section>
    </>
  );
}

export default Details;
