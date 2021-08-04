import React from "react";

import { createContext } from "react";

const CustomerContext = createContext();
CustomerContext.displayName = "Customer";

export default CustomerContext;
