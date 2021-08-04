import { useContext } from "react";
import CustomerContext from "./CustomerContext";

function useCustomerContext() {
  return useContext(CustomerContext);
}

export default useCustomerContext;
