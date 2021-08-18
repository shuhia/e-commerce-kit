/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import NavItem from "./NavItem";
import logo from "../assets/logo/logo.svg";
import menu from "../assets/icons/menu.svg";
import closeMenu from "../assets/icons/clear-menu.svg";
import { useState, useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import CartItem from "../business/CartItem";
import styles from "./navbar.module.css";
import { ReactComponent as ProfileSvg } from "../assets/icons/profile.svg";
import { ReactComponent as CartSvg } from "../assets/icons/cart.svg";

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
      <NavItem name="test" href="/test"></NavItem>
    </>
  ),
}) {
  return (
    <nav className={styles.container}>
      <div className={styles.left}>
        <img src={logo}></img>
      </div>
      <div className={styles.center}>
        <ul className={styles.desktopItems}>
          <NavItem name="Discover" href="/discover"></NavItem>
          <NavItem name="About" href="/about"></NavItem>
          <NavItem name="Contact" href="/contact"></NavItem>
        </ul>
      </div>
      <div className={styles.right}>
        <div className={styles.profile}>
          <ProfileSvg></ProfileSvg>
        </div>
        <div className={styles.cart}>
          <CartSvg></CartSvg>
        </div>
      </div>
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
