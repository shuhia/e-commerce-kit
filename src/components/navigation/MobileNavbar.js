import React from "react";
import NavItem from "./NavItem";
import logo from "../assets/logo/logo.svg";
import menu from "../assets/icons/menu.svg";
import closeMenu from "../assets/icons/clear-menu.svg";
import { useState, useEffect } from "react";
import styles from "./navbar.module.css";

export default function MobileNavbar({
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
          <img
            src={menu}
            onMouseEnter={(e) => setOpen(true)}
            alt="Hamburger menu"
          ></img>
        ) : (
          <img src={closeMenu} onClick={(e) => setOpen(false)} alt="X"></img>
        )}
        <img className="logo" src={logo} alt="logo"></img>
        {cart}
      </div>

      {open && <ul className={styles.mobileItems}>{navItems}</ul>}
    </nav>
  );
}
