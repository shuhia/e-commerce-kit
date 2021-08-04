import React from "react";
import Navbar from "../navigation/Navbar";
import Footer from "../sections/Footer";
import NavItem from "../navigation/NavItem";
import Profile from "../Profile";
import CartItem from "../business/CartItem";

function Layout(props) {
  const navItems = (
    <>
      <NavItem name="Products" href="/discover"></NavItem>
      <NavItem name="About" href="/about"></NavItem>
      <NavItem name="Contact" href="/contact"></NavItem>
      <NavItem href="/profile">
        <Profile width={50} height={50}></Profile>
      </NavItem>

      <NavItem href="/cart">
        <CartItem></CartItem>
      </NavItem>
      <NavItem name="Components" href="/components"></NavItem>
    </>
  );

  const lists = [
    {
      name: "discover",

      links: ["New season", "Most searched", "Most selled"],
    },
    {
      name: "about",

      links: ["Help", "Shipping", "Affilliate"],
    },
    {
      name: "info",

      links: ["Contact us", "Privacy Policies", "Terms & Conditions"],
    },
  ];

  return (
    <div>
      <Navbar navItems={navItems} cart={<CartItem></CartItem>}></Navbar>
      {props.children}
      <Footer footerLinks={lists}></Footer>
    </div>
  );
}

export default Layout;
