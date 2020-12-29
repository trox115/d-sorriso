import React, { useRef,useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import {useHistory } from 'react-router-dom';
import './login.scss';

export default function Login() {
    const { login } = useAuth();
    const emailRef = useRef();
    const passwordRef = useRef();
    const [error, seterror] = useState()
    const history = useHistory();

     async function handleSubmit(e) {
        e.preventDefault();
        console.log('hi')
        try{
       await login(emailRef.current.value, passwordRef.current.value)
       history.push('/');
        }
        catch(e){
            seterror(e.message)
        }
    }
    return (
        <>
        <div className="login">
        <div className="login__image" style ={ { backgroundImage: "url('/1.jpg')" } }></div>
       
        <div className="login__form">
            <div className='login__logo' style ={ { backgroundImage: "url('/logo.png')" } }></div>
            {error && <div> {error} </div>}
            <h2 className='login__title'>Login</h2>
            <input type="email" ref={emailRef} placeholder='Email' className='login__email'/>
            <input ref={passwordRef} type="password" name="password" placeholder="Password" className='login__password'/>
            <input onClick = {handleSubmit} type="submit" value="Login" className='login__button'/>
        </div>
        </div>
        </>
    )
}
