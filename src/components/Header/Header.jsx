import React, { useContext } from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const Header = () => {

    const {user,logOut} = useContext(AuthContext);
    const handleLogout=()=>{
        logOut()
        .then(()=>{})
        .catch(error =>console.error(error))
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">shop</Link>
                <Link to="/Order">Order</Link>
                <Link to="/Inventory">Inventory</Link>
                <Link to="/Login">Login</Link>
                <Link to="/signup">Sign Up</Link>
                {user && <span className='white'>{user.email}<button onClick={handleLogout}>Sign Out</button></span> }
            </div>
        </nav>
    );
};

export default Header;