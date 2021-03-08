import React from 'react';
import "./NavBar.scss";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <nav className="navbar__nav">
        <ul>
          <li>
            <Link to='/favorites'> favorites </Link>
          </li>
          <li>
            <a> home </a>
          </li>
          <li>
            <a> home </a>
          </li>
          <li>
            <a> home </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
