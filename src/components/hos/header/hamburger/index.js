import React from 'react';
import "./hamburger.scss";
// import {ReactComponent as Hamburger} from "../../../../assets/svg/hamburgerMenu.svg";

const HamburgerMenu = () => {
  return (
    <div className="header__hamburger">
      <div className="hamburger__icon" />
      <div className="hamburger__icon" />
      <div className="hamburger__icon" />
    </div>
  );
};

export default HamburgerMenu;