import { BrowserRouter } from "react-router-dom";
import FormShipping from "./FormShipping";

export default {
  component: FormShipping,
  title: "Components/Form/shipping",
};

export const Primary = () => (
  <BrowserRouter>
    <FormShipping></FormShipping>
  </BrowserRouter>
);
