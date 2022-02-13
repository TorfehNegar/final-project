/* eslint-disable */
import React, { useState } from 'react';
import "./header.scss";
import TorfehNegarLogo from './Logo';
import NavBar from './NavBar';
import Favorite from './Favorite';
import GroupName from './groupName';
import HamburgerMenu from './hamburger';
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
                <GroupName/>
            </div>
        </div>
    )
}

export default Header;
