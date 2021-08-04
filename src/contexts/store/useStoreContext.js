import React from "react";
import { useContext } from "react";
import StoreContext from "./StoreContext";

function useStoreContext() {
  return useContext(StoreContext);
}

export default useStoreContext;
