import React from 'react';
import './login.scss';

export default function login() {
    return (
        <>
        <div className="login">
        <div className="login__image" style ={ { backgroundImage: "url('/1.jpg')" } }></div>
        <div className="login__form">
            <div className='login__logo' style ={ { backgroundImage: "url('/logo.png')" } }></div>
            <h2 className='login__title'>Login</h2>
            <input type="text" placeholder='Email' className='login__email'/>
            <input type="password" name="password" placeholder="Password" className='login__password'/>
            <input type="submit" value="Login" className='login__button'/>
        </div>
        </div>
        </>
    )
}
