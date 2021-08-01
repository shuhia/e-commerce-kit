import React from "react";
import BigButton from "../components/buttons/BigButton";

function Details() {
  return (
    <div>
      <BigButton
        name="Go to shipping"
        href={"/checkout" + "/shipping"}
      ></BigButton>
    </div>
  );
}

export default Details;
