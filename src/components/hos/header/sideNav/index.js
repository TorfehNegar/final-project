import React from 'react';
import "./sideNav.scss";
import { NavLink } from "react-router-dom";

function SideNav() {
  return (
    <div className="header__nav">
      <label className="switch">
        <input type="checkbox" />
        <span className="slider round"> </span>
      </label>
      <nav className="navbar__side">
        <ul>
          <li>
            <NavLink exact to='/' className="link"> Home </NavLink>
          </li>
          <li>
            <NavLink to='/favorites' className="link"> Favorites </NavLink>
          </li>
          <li>
            <a href="#" className="link"> page </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SideNav;