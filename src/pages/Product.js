import React, { useEffect } from "react";
import Form from "../components/Form";

function Product({ product, quantity, onSubmit }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Form></Form>
    </>
  );
}

export default Product;
