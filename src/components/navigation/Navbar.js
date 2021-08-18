/* eslint-disable jsx-a11y/alt-text */
import React from "react";

import { useMediaQuery } from "react-responsive";
import CartItem from "../business/CartItem";
import MobileNavbar from "./MobileNavbar";

import DesktopNavbar from "./DesktopNavbar";

function Navbar({ navItems, cart = <CartItem></CartItem> }) {
  const onMobile = useMediaQuery({ query: "(max-width:800px)" });
  // Reset toggle

  return (
    <>
      {onMobile ? (
        <MobileNavbar navItems={navItems} cart={cart}></MobileNavbar>
      ) : (
        <DesktopNavbar navItems={navItems}></DesktopNavbar>
      )}
    </>
  );
}

export default Navbar;
