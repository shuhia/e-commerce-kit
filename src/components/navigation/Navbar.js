/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import NavItem from "./NavItem";
import logo from "../../images/logo.svg";
import menu from "../../images/menu.svg";
import clearMenu from "../../images/clear-menu.svg";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { auto } from "@popperjs/core";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const onMobile = useMediaQuery({ query: "(max-width:800px)" });
  const navItems = (
    <>
      <NavItem name="Testing ground" href="/test"></NavItem>
      <NavItem name="Discover"></NavItem>
      <NavItem name="About"></NavItem>
      <NavItem name="Contact us"></NavItem>
      <NavItem>
        <img className="profile" src="./profile.svg"></img>
      </NavItem>
      <NavItem>
        <img className="cart" src="./cart.svg"></img>
      </NavItem>
    </>
  );
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
        gridTemplateColumns: "1fr 1fr 1fr",
      }}
    >
      <span
        style={{ margin: "auto 0" }}
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
      <img className="logo" src={logo}></img>
      {navItems}
    </>
  );

  return (
    <nav className="main-nav">
      {onMobile && { navMobile }}
      <ul className="main-nav-ul">
        {onMobile && showMenu && <>{navItems}</>}
        {!onMobile && { navDesktop }}
      </ul>
    </nav>
  );
}

export default Navbar;
