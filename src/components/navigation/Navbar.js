/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import NavItem from "./NavItem";
import logo from "../../images/logo.svg";

function Navbar() {
  return (
    <nav className="main-nav">
      <span>
        <img className="logo" src={logo}></img>
      </span>
      <ul className="main-nav-items">
        <NavItem name="Testing ground" href="/test"></NavItem>
        <NavItem name="Discover"></NavItem>
        <NavItem name="About"></NavItem>
        <NavItem name="Contact us"></NavItem>
      </ul>
      <span className="right-menu">
        <img className="profile" src="./profile.svg"></img>
        <img className="cart" src="./cart.svg"></img>
      </span>
    </nav>
  );
}

export default Navbar;
