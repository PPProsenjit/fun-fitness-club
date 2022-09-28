import React from 'react';
import logo from '../images/logo.png';
import './Header.css';
const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <h2>Fun Fitness club</h2>
        </nav>
    );
};

export default Header;