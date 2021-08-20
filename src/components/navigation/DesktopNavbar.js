import NavItem from "./NavItem";
import styles from "./desktopNavbar.module.css";
import React from "react";

import logo from "../assets/logo/logo.svg";

import { ReactComponent as ProfileSvg } from "../assets/icons/profile.svg";
import { ReactComponent as CartSvg } from "../assets/icons/cart.svg";

export default function DesktopNavbar(props) {
  const {
    navItems = (
      <>
        <NavItem name="Discover" href="/discover"></NavItem>
        <NavItem name="About" href="/about"></NavItem>
        <NavItem name="Contact" href="/contact"></NavItem>
        <NavItem name="test" href="/test"></NavItem>
      </>
    ),
  } = props.navItems;

  return (
    <nav className={styles.container}>
      <div className={styles.left}>
        <img src={logo} alt="logo"></img>
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
