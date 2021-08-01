/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import NavItem from "./NavItem";
import logo from "../../images/logo.svg";
import menu from "../../images/menu.svg";
import closeMenu from "../../images/clear-menu.svg";
import { useState, useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import CartItem from "../business/CartItem";
import "./navigation.css";
import styles from "./navbar.module.css";

// Create two navs. One for mobile and one for desktop

function Navbar({ navItems }) {
  const [showMenu, setShowMenu] = useState(false);
  const onMobile = useMediaQuery({ query: "(max-width:800px)" });
  const isFocusNavbar = useRef();
  // Reset toggle
  useEffect(() => {
    if (!onMobile) {
      setShowMenu(false);
    }
  }, [onMobile]);

  const navMobile = (
    <span
      style={{
        display: "grid",
        gridTemplateColumns: "auto auto auto",
        alignItems: "center",
      }}
    >
      <span
        onClick={() => {
          setShowMenu((prev) => !prev);
        }}
      >
        {!showMenu ? <img src={menu}></img> : <img src={closeMenu}></img>}
      </span>
      <img style={{ margin: "auto" }} className="logo" src={logo}></img>
    </span>
  );

  const navDesktop = (
    <>
      <NavItem>
        <img className="logo" src={logo}></img>
      </NavItem>
      {navItems}
    </>
  );

  return (
    <nav className="main-nav" ref={isFocusNavbar}>
      {onMobile && navMobile}
      <ul className="main-nav-ul">
        {onMobile && showMenu && <>{navItems}</>}
        {!onMobile && navDesktop}
      </ul>
    </nav>
  );
}

export default Navbar;

function NavbarDesktop({
  items = (
    <>
      <NavItem>
        <img className="logo" src={logo}></img>
      </NavItem>
      <NavItem name="Discover" href="/discover"></NavItem>
      <NavItem name="About" href="/about"></NavItem>
      <NavItem name="Contact" href="/contact"></NavItem>
      <NavItem name="Components" href="/components"></NavItem>
    </>
  ),
}) {
  return (
    <nav className={styles.container}>
      NavbarDesktop
      <ul className={styles.desktopItems}>{items}</ul>
    </nav>
  );
}

function NavbarMobile({
  items = (
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

      {open && <ul className={styles.mobileItems}>{items}</ul>}
    </nav>
  );
}

export { NavbarDesktop, NavbarMobile };
