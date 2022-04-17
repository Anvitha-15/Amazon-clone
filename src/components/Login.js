import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import "../css/Login.css";
import {auth} from '../firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e =>{
        e.preventDefault();
        // firebase code
        auth.signInWithEmailAndPassword(email, password)
        .then((auth) => {
            if(auth){
                toast.success('Your In!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });

            }
            history.push('/');
            
        })
        .catch(err => alert(err.message));

    }

    const register = e =>{
        e.preventDefault();
        // firebase code
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // when user is successfully created
                console.log(auth);
                if(auth){
                    history.push('/');
                    toast.success('Successfully Registerd!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        });
                }
                
            })
            .catch(err => alert(err.message));
        
    }
  return (
    <div className='login'>
        <Link to='/'>
            <img className='login__logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'/>
        </Link>

        <div className='login__container'>
            <h1>Sign-in</h1>

            <form>
                <h5>E-Mail</h5>
                <input value={email} onChange={e => setEmail(e.target.value)} type="text"/>

                <h5>Password</h5>
                <input value={password} onChange={e => setPassword(e.target.value)} type="password"/>

                <button type='submit' onClick={signIn} className='login__signInButton'>Sign in</button>
            </form>
            <p>By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice</p>

            <button onClick={register} className='login__registerButton'>Create an Account</button>
            <ToastContainer theme='colored'/>
        </div>

    </div>
  )
}

export default Login