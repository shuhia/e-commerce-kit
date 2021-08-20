import React, { useEffect, useState } from "react";

import Order from "../sections/Order";
import LinkButton from "../buttons/LinkButton";

import { useRef } from "react";

function ControlledInput(props) {
  const { name = "", content = "content" } = props;
  const input = useRef();
  const [editable, setEditable] = useState(false);
  const toggleEdit = (e) => {
    setEditable((prev) => !prev);
  };

  useEffect(() => {
    input.current.contentEditable = editable;
    if (editable) input.current.focus();
  }, [editable]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <span>{name}</span>
      <span
        ref={input}
        style={{ flex: 1, margin: 10, minHeigh: "1ch" }}
        onClick={() => setEditable(true)}
      >
        {content}
      </span>
      <span onClick={toggleEdit}>{editable ? "Done" : "Edit"}</span>
    </div>
  );
}

function Shipping() {
  return (
    <section
      style={{
        display: "grid",
        justifyContent: "center",
        gridTemplateColumns: "1fr 1fr",
        padding: " 20px 0",
      }}
    >
      <form
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexFlow: "column",
          padding: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexFlow: "column",
            width: 445,
            height: 117,
            border: "1px solid black",
            justifyContent: "space-around",
            padding: 15,
            borderRadius: 15,
          }}
        >
          <ControlledInput name="contact"></ControlledInput>
          <span style={{ border: "1px solid black" }}></span>
          <ControlledInput name="Ship to"></ControlledInput>
        </div>

        <fieldset>
          <legend>Shipping method</legend>
          <div
            style={{
              display: "flex",
              flexFlow: "column",
              width: 445,
              height: 117,
              border: "1px solid black",
              justifyContent: "space-around",
              borderRadius: 15,
              padding: 15,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <input id="standardShipping" type="radio" checked></input>
              <label for="standardShipping">standard Shipping</label>
              <b>Free</b>
            </div>
          </div>
        </fieldset>
        <LinkButton
          name="Go to payment"
          to={"/checkout" + "/payment"}
        ></LinkButton>
      </form>
      <Order></Order>
    </section>
  );
}

export default Shipping;
