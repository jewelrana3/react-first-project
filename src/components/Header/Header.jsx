import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <div className='header'>
           <img src={logo} alt="" />
            <a href="shop">shop</a>
            <a href="/Order">Order</a>
            <a href="/Inventory">Inventory</a>
            <a href="/Login">Login</a>
        </div>
    );
};

export default Header;