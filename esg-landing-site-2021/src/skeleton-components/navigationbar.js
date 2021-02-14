import React from 'react';
import logo from './resources/esg-logo.PNG';
import './navigationbar.css'
function NavBar(){
    return(   
        <div className="navBar">
            <img className="nbLogo" src={logo} alt="esg-labs" width="64" height="64" />
            <ul className="menuanks">
                <a className="menuItem">Home</a>
                <a className="menuItem">About</a>
                <a className="menuItem">Our Work</a>
                <a className="menuItem">Contact</a>
            </ul> 
        </div>                    
    );
}

export default NavBar;