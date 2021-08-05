import { BrowserRouter } from "react-router-dom";
import PaymentForm from "../components/forms/PaymentForm";
import Layout from "../components/layout/Layout";

export default {
  component: PaymentForm,
  title: "Components/PaymentForm",
};

export const Payment = () => (
  <BrowserRouter>
    <section>
      <PaymentForm></PaymentForm>
    </section>
  </BrowserRouter>
);
