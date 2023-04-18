import React, { useContext, useState } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';



const Login = () => {
    const [show,setShow ] = useState(false)
    const {signIn} = useContext(AuthContext)
    const Navigate = useNavigate()
    const location = useLocation()
    console.log(location)

    const from = location.state?.from.pathname || '/';
    console.log(from)

    const handleLogin=event=>{
        event.preventDefault();
      

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);

        signIn(email,password)
        .then(result=>{
            const log = result.user;
            console.log(log)
            form.reset()
            Navigate(from,{ replace:true })
        }).catch(error=>{
            console.log(error.message)
        })
    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleLogin}>
                <div className='form-control'>
                    <label htmlFor="">Email</label>
                    <input type="email" name="email" id="f" required/>
                </div>
                <div className='form-control'>
                    <label htmlFor="password">Password</label>
                    <input type={show ? 'text':'password'} name="password" id="d" required/>
                </div>
                <p onClick={()=>setShow(!show)}>
                    {
                        show ? ' Hidden Password':'Show Password '
                    }
                </p>
            <input className='submit-btn' type="submit" value="Login" />
            </form>
            <p className='p-tag'>New to Ema-john? <span className='spanvai'><Link  to='/signup'>Create New Account</Link></span></p>
        </div>
    );
};

export default Login;