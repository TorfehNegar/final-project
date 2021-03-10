import React from 'react';
import "./NavBar.scss";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <nav className="navbar__nav">
        <ul>
          <li>
            <NavLink exact to='/' activeStyle={{color:'green'}}> Home </NavLink>
          </li>
          <li>
            <NavLink to='/favorites' activeStyle={{color:'green'}}> Favorites </NavLink>
          </li>
          <li>
            <a> page </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;