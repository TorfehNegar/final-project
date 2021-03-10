/* eslint-disable */
import React from 'react';
import "./header.scss";
import TorfehNegarLogo from './Logo/index';
import NavBar from './NavBar/index';
import Favorite from './Favorite/index';
import Name from './Name/index';
import HamburgerMenu from './hamburger/index';
import SideNav from './sideNav/index';

const Header = () => {
    return (
        <div>
            <div className="Header__container">
                <SideNav />
                <TorfehNegarLogo/>
                <HamburgerMenu />
                <NavBar/>
                <Favorite/>
                <Name/>
            </div>
        </div>
    )
}

export default Header;
