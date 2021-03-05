/* eslint-disable */
import React from 'react'
import "./header.scss"
import TorfehNegarLogo from './Logo/index'
import NavBar from './NavBar/index'
import Favorite from './Favorite/index'
import Name from './Name/index'

const Header = () => {
    return (
        <div>
            <div className="Header__container">
                <TorfehNegarLogo/>
                <NavBar/>
                <Favorite/>
                <Name/>
            </div>
        </div>
    )
}

export default Header;
