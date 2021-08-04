import { BrowserRouter } from "react-router-dom";
import Form from "../components/forms/Form";
import { randomProduct } from "../utils/utils";

export default {
  component: Form,
  title: "Components/Form",
};

export const Primary = () => (
  <BrowserRouter>
    <Form products={randomProduct()}></Form>
  </BrowserRouter>
);
