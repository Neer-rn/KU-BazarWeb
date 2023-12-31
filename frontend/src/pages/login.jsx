import React, { useState } from "react";
import "./login.css";
import KULogo from "../resources/img/logo.png";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Footer from "./footer";
//import axios from 'axios';
//import { useEffect } from 'react';
//import {onAuthStateChanged } from 'firebase/auth';




const Login = () => {

        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');

        const navigate = useNavigate();

        const handleLogin = (event) => {
          event.preventDefault();

          const auth = getAuth();
      
          signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              
              
              navigate('/main'); 
            })
            .catch((error) => {
              // Handle login errors, e.g., incorrect password or non-registered email.
              console.log("Error:", error);

             // setErrorMessage('Login failed. Please check your email and password.'); 
            });
        }
   
        

   
   
   
   
        return (
        <div className="Login">
        <div className="content">
            <div className="Up_bar">

            <div className="homeList">
                <li>Help</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Sign Up</li>
            </div>
            <div className="home_logo">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    xmlnsSvgjs="http://svgjs.com/svgjs"
    width="15"
    height="15"
    x="0"
    y="0"
    viewBox="0 0 511 511.999"
    style={{ enableBackground: "new 0 0 512 512" }}
    xmlSpace="preserve"
    className=""
  >
    <g>
      <path
        d="M498.7 222.695c-.016-.011-.028-.027-.04-.039L289.805 13.81C280.902 4.902 269.066 0 256.477 0c-12.59 0-24.426 4.902-33.332 13.809L14.398 222.55c-.07.07-.144.144-.21.215-18.282 18.386-18.25 48.218.09 66.558 8.378 8.383 19.44 13.235 31.273 13.746.484.047.969.07 1.457.07h8.32v153.696c0 30.418 24.75 55.164 55.168 55.164h81.711c8.285 0 15-6.719 15-15V376.5c0-13.879 11.293-25.168 25.172-25.168h48.195c13.88 0 25.168 11.29 25.168 25.168V497c0 8.281 6.715 15 15 15h81.711c30.422 0 55.168-24.746 55.168-55.164V303.14h7.719c12.586 0 24.422-4.903 33.332-13.813 18.36-18.367 18.367-48.254.027-66.633zm-21.243 45.422a17.03 17.03 0 0 1-12.117 5.024H442.62c-8.285 0-15 6.714-15 15v168.695c0 13.875-11.289 25.164-25.168 25.164h-66.71V376.5c0-30.418-24.747-55.168-55.169-55.168H232.38c-30.422 0-55.172 24.75-55.172 55.168V482h-66.71c-13.876 0-25.169-11.29-25.169-25.164V288.14c0-8.286-6.715-15-15-15H48a13.9 13.9 0 0 0-.703-.032c-4.469-.078-8.66-1.851-11.8-4.996-6.68-6.68-6.68-17.55 0-24.234.003 0 .003-.004.007-.008l.012-.012L244.363 35.02A17.003 17.003 0 0 1 256.477 30c4.574 0 8.875 1.781 12.113 5.02l208.8 208.796.098.094c6.645 6.692 6.633 17.54-.031 24.207zm0 0"
        fill="#000000"
        data-original="#000000"
      />
    </g>
  </svg>
</div>

            </div>
              <div className="middle_Paragraph">
                
                <h1 className="sub_Title">WELCOME BACK!!      </h1>
                <div className="hook">
                <h4 className="newHook_1">Don't have an account, </h4>
                <h4 className="newHook_2">Sign up</h4>
                </div>
              </div> 
              <div className="KU_Logo">
                    <img className="logo" style={{ width: 350, height: 350 }} src={KULogo} alt="logo"></img>
                </div>
              
<div className="input">
      <form onSubmit={handleLogin}>
        <label className='email'>
          Email
          <input className='email_box' placeholder="Email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        <br />
        <label className='password'>
          Password
          <input className='password_box' placeholder="Password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </label>
        <br />
        <div className='radio'>
        <label className="rememberMe">
          <input type="radio" />
              Remember Me
        </label>
        <p className='forget'>Forget Password?</p>
        </div>
    <br/>

        <button className='btn_signin' type="submit">Sign In</button>
      </form>
</div>
</div>
           <div className="Footer">
           <Footer/> 
           </div>
        </div>
        
    );
}



export default Login;


