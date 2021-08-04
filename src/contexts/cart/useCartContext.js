import { useContext } from "react";
import CartContext from "./CartContext";

export default function useCartContext() {
  return useContext(CartContext);
}
