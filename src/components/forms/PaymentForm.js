import React, { useState } from "react";

import Button from "../buttons/Button";
import SubmitButton from "../buttons/SubmitButton";
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

  const handleSubmit = (e) => {
    e.preventDefault();

    setPaid(true);
  };

  return (
    <>
      {!paid ? (
        <form id="payment">
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
              <input
                name="cvv"
                maxLength="3"
                placeholder="CVV"
                required
              ></input>
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
          <SubmitButton
            name="Pay Now"
            onClick={handleSubmit}
            formId="payment"
          ></SubmitButton>
          <br></br>
          <Link to="checkout/shipping">"Back to shipping"</Link>
        </form>
      ) : (
        <div>
          <svg
            width="100"
            height="100"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M50 93.75C61.6032 93.75 72.7312 89.1406 80.9359 80.9359C89.1406 72.7312 93.75 61.6032 93.75 50C93.75 38.3968 89.1406 27.2688 80.9359 19.0641C72.7312 10.8594 61.6032 6.25 50 6.25C38.3968 6.25 27.2688 10.8594 19.0641 19.0641C10.8594 27.2688 6.25 38.3968 6.25 50C6.25 61.6032 10.8594 72.7312 19.0641 80.9359C27.2688 89.1406 38.3968 93.75 50 93.75ZM50 100C63.2608 100 75.9785 94.7322 85.3553 85.3553C94.7322 75.9785 100 63.2608 100 50C100 36.7392 94.7322 24.0215 85.3553 14.6447C75.9785 5.26784 63.2608 0 50 0C36.7392 0 24.0215 5.26784 14.6447 14.6447C5.26784 24.0215 0 36.7392 0 50C0 63.2608 5.26784 75.9785 14.6447 85.3553C24.0215 94.7322 36.7392 100 50 100Z"
                fill="#56B280"
                fill-opacity="0.6"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M68.5625 31.0625C69.4372 30.1955 70.618 29.7075 71.8496 29.7041C73.0812 29.7007 74.2646 30.1822 75.1441 31.0444C76.0236 31.9066 76.5283 33.0803 76.5493 34.3117C76.5703 35.5431 76.1058 36.7334 75.2563 37.625L50.3063 68.8125C49.8775 69.2744 49.3599 69.6451 48.7846 69.9023C48.2093 70.1596 47.588 70.2982 46.9578 70.3099C46.3277 70.3216 45.7017 70.2061 45.1172 69.9703C44.5328 69.7345 44.0019 69.3832 43.5563 68.9375L27.025 52.4C26.5645 51.9709 26.1951 51.4534 25.9389 50.8784C25.6827 50.3034 25.5449 49.6827 25.5338 49.0533C25.5227 48.4239 25.6385 47.7987 25.8742 47.2151C26.11 46.6314 26.4609 46.1012 26.906 45.6561C27.3511 45.2109 27.8813 44.86 28.465 44.6243C29.0487 44.3885 29.6739 44.2727 30.3033 44.2838C30.9327 44.295 31.5534 44.4327 32.1284 44.6889C32.7034 44.9451 33.2209 45.3145 33.65 45.775L46.7375 58.8563L68.4438 31.2C68.4825 31.1516 68.5242 31.1057 68.5688 31.0625H68.5625Z"
                fill="#56B280"
                fill-opacity="0.6"
              />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="100" height="100" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <h1>Payment Confirmed</h1>
          <h3>ORDER #2039</h3>
          <p>
            Thank you Joe for buying Candleaf. The nature is grateful to you.
            Now that your order is confirmed it will be ready to ship in 2 days.
            Please check your inbox in the future for your order updates.
          </p>
          <Button name="Back to shopping"></Button>
          <br></br>
          <Link to="/">Save payment receipt</Link>
        </div>
      )}
    </>
  );
};

export default PaymentForm;
