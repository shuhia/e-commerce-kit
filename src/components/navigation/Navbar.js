/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import NavItem from "./NavItem";
import logo from "../../images/logo.svg";
import menu from "../../images/menu.svg";
import clearMenu from "../../images/clear-menu.svg";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

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

  return (
    <nav className="main-nav">
      {onMobile && (
        <span style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
          <span
            onClick={() => {
              setShowMenu((prev) => !prev);
            }}
          >
            {!showMenu ? <img src={menu}></img> : <img src={clearMenu}></img>}
          </span>
          <img style={{ margin: "auto" }} className="logo" src={logo}></img>
        </span>
      )}
      <ul className="main-nav-ul">
        {onMobile && showMenu && <>{navItems}</>}
        {!onMobile && (
          <>
            <img className="logo" src={logo}></img>
            {navItems}
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
