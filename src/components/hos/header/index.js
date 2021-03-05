/* eslint-disable */
import React from 'react'
import "./header.scss"
import TorfehNegarLogo from './Logo/index'
import NavBar from './NavBar/index'
import Favorite from './Favorite/index'

const Header = () => {
    return (
        <div>
            <div className="Header__container">
                <TorfehNegarLogo/>
                <NavBar/>
                <Favorite/>
            </div>
        </div>
    )
}

export default Header;
