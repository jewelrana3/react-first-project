import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form>
                <div className='form-control'>
                    <label htmlFor="">Email</label>
                    <input type="email" name="email" id="" required/>
                </div>
                <div className='form-control'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" required/>
                </div>
            <input className='submit-btn' type="submit" value="Login" />
            </form>
            <p className='p-tag'>New to Ema-john? <span className='spanvai'><Link  to='/signup'>Create New Account</Link></span></p>
        </div>
    );
};

export default Login;