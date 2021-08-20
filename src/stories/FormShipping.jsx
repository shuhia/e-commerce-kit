import React, { useEffect } from "react";

function FormShipping() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <section className="contact">
        <div>
          <h1>Contact</h1>
          <span className="login">
            Do you have an account?<a href="#">Login</a>
          </span>
        </div>
        <input
          id="login"
          placeholder="Email or mobile phone number"
          type="text"
          name="login"
        ></input>
        <br></br>
        <input id="newsletter" type="checkbox" name="newsletter"></input>
        <label for="newsletter">
          Add me to Candleaf newsletter for a 10% discount
        </label>
      </section>
      <section className="shipping">
        <h1>Shipping</h1>
        <br></br>
        <input
          id="firstname"
          name="firstname"
          type="text"
          placeholder="Name"
        ></input>
        <input
          id="lastname"
          name="lastname"
          type="text"
          placeholder="Second Name"
        ></input>
        <br></br>
        <input
          id="adress"
          name="adress"
          type="text"
          placeholder="Adress and number"
        ></input>
        <br></br>
        <input
          id="note"
          name="note"
          type="text"
          placeholder="Shipping note (optional)"
        ></input>
        <br></br>
        <input id="city" type="text" name="city" placeholder="City"></input>
        <input
          id="postal"
          type="text"
          name="postal"
          placeholder="Postal Code"
        ></input>

        <input
          list="provinces"
          id="province"
          name="province"
          placeholder="Province"
        />

        <datalist id="provinces">
          <option value="Chocolate" />
          <option value="Coconut" />
          <option value="Mint" />
          <option value="Strawberry" />
          <option value="Vanilla" />
        </datalist>

        <br></br>
        <input
          id="country"
          name="country"
          list="countries"
          placeholder="Country/Region"
          value="Italy"
        ></input>
        <datalist id="countries">
          <option value="Chocolate" />
          <option value="Coconut" />
          <option value="Mint" />
          <option value="Strawberry" />
          <option value="Vanilla" />
        </datalist>
        <br></br>
        <input id="save" type="checkbox" name="save"></input>
        <label for="save">
          Save this informations for a future fast checkout
        </label>
        <br></br>
        <a href="#">Back to cart</a>
        <input type="submit" value="Go to shipping"></input>
      </section>
    </form>
  );
}

export default FormShipping;
