import React from 'react';
import logo from './resources/esg-logo.PNG';
import './navigationbar.css'
function NavBar(){
    return(
        <div className="navigationBar">
            <img src={logo} className="logo" alt="logo" />
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Our Work</li>
                <li>Contact</li>
            </ul>
        </div>
    );
}

export default NavBar;