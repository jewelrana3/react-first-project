import React, { useContext, useState } from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';
import './SignUp.css'
import { AuthContext } from '../Providers/AuthProvider';

const SignUp = () => {
    const [error,setError] = useState('')
    const {createUser} = useContext(AuthContext)
    const handleSignUp=(event)=>{



        event.preventDefault();
      

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email,password,confirm);

       

        setError('')
        if(password !== confirm){
            setError('Dnot macth password');
            return;
        }

        else if(password.length<6){
            setError('pls at lest 6 character length')
            return;
        }
        
        createUser(email,password)
        .then(result=>{
            const log = result.user;
            console.log(log)
        }).catch(error=>{
            setError(error.message)
        })
    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Sign Up</h2>
            <form onSubmit={handleSignUp}>
                <div className='form-control'>
                    <label htmlFor="">Email</label>
                    <input type="email" name="email"  required/>
                </div>
                <div className='form-control'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password"  required/>
                </div>
                <div className='form-control'>
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name="confirm"  required/>
                </div>
             <input className='submit-btn' type="submit" value="SignUp" />
            </form>
            <p className='p-tag'>Already have an account? <span className='spanvai'><Link  to='/login'>Login</Link></span></p>
            <p className='text'>{error}</p>
        </div>
    );
};

export default SignUp;