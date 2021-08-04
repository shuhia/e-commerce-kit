import { BrowserRouter } from "react-router-dom";
import ProductForm from "../components/forms/ProductForm";
import { randomProduct } from "../utils/utils";

export default {
  component: ProductForm,
  title: "Components/Form",
};

export const Primary = () => (
  <BrowserRouter>
    <ProductForm products={randomProduct()}></ProductForm>
  </BrowserRouter>
);
