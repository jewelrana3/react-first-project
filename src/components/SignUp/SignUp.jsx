import React from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';

const SignUp = () => {

    const handleSignUp=(event)=>{



        event.preventDefault();
      console.log("test")

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email,password,confirm)
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
        </div>
    );
};

export default SignUp;