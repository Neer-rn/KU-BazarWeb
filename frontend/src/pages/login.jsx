import React from "react";
import "./login.css";

const Login = () => {
    return (
        <div className="Login">
            <div className="Up_bar">

            <div className="home_list">
                <li>Help</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Sign up</li>
            </div>
                <img src="../resources/img/home.svg" alt="home"></img>
            </div>
            <div className="middleParagraph">
                
                <h1 className="subTitle">WELCOME BACK</h1>
                <div className="hook">
                <h2 className="hook_1">Don't have an account, </h2>
                <h2 className="hook_2">Sign up</h2>
                </div>
                    <img className="logo" src="../resources/img/logo.png" alt="logo"></img>
            </div>   
           
            

        </div>
    );
}

export default Login;