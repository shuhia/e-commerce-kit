/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import NavItem from "./NavItem";
import logo from "../../images/logo.svg";
import menu from "../../images/menu.svg";
import clearMenu from "../../images/clear-menu.svg";
import { useState, useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import CartItem from "../business/CartItem";
import "./navigation.css";

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
        {!showMenu ? <img src={menu}></img> : <img src={clearMenu}></img>}
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
