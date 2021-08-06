/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import NavItem from "./NavItem";
import logo from "../../images/logo.svg";
import menu from "../../images/menu.svg";
import closeMenu from "../../images/clear-menu.svg";
import { useState, useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import CartItem from "../business/CartItem";

import styles from "./navbar.module.css";

function Navbar({ navItems, cart = <CartItem></CartItem> }) {
  const onMobile = useMediaQuery({ query: "(max-width:800px)" });
  // Reset toggle

  return (
    <>
      {onMobile ? (
        <NavbarMobile navItems={navItems} cart={cart}></NavbarMobile>
      ) : (
        <NavbarDesktop navItems={navItems}></NavbarDesktop>
      )}
    </>
  );
}

export default Navbar;

function NavbarDesktop({
  navItems = (
    <>
      <NavItem name="Discover" href="/discover"></NavItem>
      <NavItem name="About" href="/about"></NavItem>
      <NavItem name="Contact" href="/contact"></NavItem>
      <NavItem name="Components" href="/components"></NavItem>
    </>
  ),
}) {
  return (
    <nav className={styles.container}>
      <ul className={styles.desktopItems}>
        <NavItem>
          <img className="logo" src={logo}></img>
        </NavItem>
        {navItems}
      </ul>
    </nav>
  );
}

function NavbarMobile({
  navItems = (
    <>
      <NavItem name="Discover" href="/discover"></NavItem>
      <NavItem name="About" href="/about"></NavItem>
      <NavItem name="Contact" href="/contact"></NavItem>
      <NavItem name="Components" href="/components"></NavItem>
    </>
  ),
  cart,
}) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(false);
  useEffect(() => {
    console.log("useeffect");
    if (open) {
      window.addEventListener("click", handleClick);

      return () => {
        window.removeEventListener("click", handleClick);
      };
    }
  }, [active]);

  function handleClick() {
    console.log(active);
    if (!active) {
      setOpen(false);
    }
  }

  return (
    <nav
      className={styles.container}
      onMouseEnter={(e) => {
        setActive(true);
      }}
      onMouseLeave={(e) => {
        setActive(false);
      }}
    >
      <div className={styles.mobileMenu}>
        {!open ? (
          <img src={menu} onMouseEnter={(e) => setOpen(true)}></img>
        ) : (
          <img src={closeMenu} onClick={(e) => setOpen(false)}></img>
        )}
        <img className="logo" src={logo}></img>
        {cart}
      </div>

      {open && <ul className={styles.mobileItems}>{navItems}</ul>}
    </nav>
  );
}

export { NavbarDesktop, NavbarMobile };
