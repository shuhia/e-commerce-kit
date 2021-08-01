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

function Navbar({ navItems }) {
  const onMobile = useMediaQuery({ query: "(max-width:800px)" });
  // Reset toggle

  return (
    <>
      {onMobile ? (
        <NavbarMobile navItems={navItems}></NavbarMobile>
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
}) {
  const [open, setOpen] = useState(false);
  return (
    <nav className={styles.container} onMouseLeave={() => setOpen(false)}>
      <div className={styles.mobileMenu}>
        {!open ? (
          <img src={menu} onClick={(e) => setOpen(true)}></img>
        ) : (
          <img src={closeMenu} onClick={(e) => setOpen(false)}></img>
        )}
        <img className="logo" src={logo}></img>
      </div>

      {open && <ul className={styles.mobileItems}>{navItems}</ul>}
    </nav>
  );
}

export { NavbarDesktop, NavbarMobile };
