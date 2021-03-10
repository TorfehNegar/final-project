/* eslint-disable */
import React, { useState } from 'react';
import "./header.scss";
import TorfehNegarLogo from './Logo/index';
import NavBar from './NavBar/index';
import Favorite from './Favorite/index';
import Name from './Name/index';
import HamburgerMenu from './hamburger/index';
import SideNav from './sideNav';

const Header = () => {
    const [getShow, setShow] = useState(false);
    const handleShow = () => {
        setShow(!getShow);
    };
    let sideNav = null ;
    if (getShow) {
        sideNav = <SideNav toggleShow={handleShow}/>
    }
    return (
        <div>
            <div className="Header__container">
                {sideNav}
                <TorfehNegarLogo/>
                <HamburgerMenu handleShow={handleShow}/>
                <NavBar/>
                <Favorite/>
                <Name/>
            </div>
        </div>
    )
}

export default Header;
