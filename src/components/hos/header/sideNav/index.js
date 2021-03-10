/* eslint-disable */
import React from 'react';
import "./sideNav.scss";
import { NavLink } from "react-router-dom";

function SideNav({getShow ,toggleShow}) { 
  return (
    <div className="header__nav"  style={getShow ? {width : 0} : {width:" 30%"}}>
      <div className="switch" onClick={()=>toggleShow(!getShow)}>
        X
      </div>
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