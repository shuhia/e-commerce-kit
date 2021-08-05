import React, { useState } from "react";
import BigButton from "../buttons/BigButton";
import { Link } from "react-router-dom";

const InputGroup = ({ legend = "Payment method", ...rest }) => {
  return (
    <fieldset>
      <legend>{legend}</legend>
      {rest.children}
    </fieldset>
  );
};

const InputGroupRadioSelection = (props) => {
  const { name = "billingAdress", options = [1, 2, 3] } = props;
  const type = "radio";

  const inputs = options.map((option, id) => {
    return (
      <>
        <input id={option + "option" + id} type={type} name={name}></input>
        <label for={option + "option" + id}>{option}</label>
        <br></br>
      </>
    );
  });

  return (
    <>
      <InputGroup legend="Billing Adress">{inputs}</InputGroup>
    </>
  );
};

const PaymentForm = () => {
  const options = [
    "Same as the shipping address",
    "Use a different address for billing",
  ];

  const [value, setValue] = useState("mm/yy");
  const [paid, setPaid] = useState(false);

  return (
    <form>
      <div className="summary"></div>
      <InputGroup legend="Payment method">
        <input name="cardNr" placeholder="Card Number" required></input>
        <br></br>
        <input name="username" placeholder="Holder Name" required></input>
        <br></br>
        <div>
          <input
            name="exp"
            type="text"
            minLength="5"
            maxLength="5"
            placeholder="Exp"
            required
            value={value}
            onChange={(e) => {
              const value = e.target.value;
              if (value) {
                const month = value.substring(0, 2);
                const year = value.substring(3);
                setValue(month + "/" + year);
              }
            }}
          ></input>
          <input name="cvv" maxLength="3" placeholder="CVV" required></input>
        </div>
      </InputGroup>
      <InputGroup legend="Tax Info">
        <input name="vat" placeholder="(optional)"></input>
        <br></br>
        <input name="pec" placeholder="(optional)"></input>
      </InputGroup>
      <InputGroupRadioSelection
        name="billingAdress"
        options={options}
      ></InputGroupRadioSelection>
      <button type="submit">Pay Now</button>
      <Link to="checkout/shipping">Back to shipping</Link>
    </form>
  );
};

export default PaymentForm;
