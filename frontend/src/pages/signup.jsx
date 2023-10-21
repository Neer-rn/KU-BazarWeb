import React from "react";
import "./signup.css";

const Signup = () => {
    return (
        <div className="Signup">
            <div className="Up_bar">

            <div className="home_list">
                <li>Help</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Sign in</li>
            </div>
                <img src="../resources/img/home.svg" alt="home"></img>
            </div>
            <div className="middleParagraph">
                
                <h1 className="subTitle">GET STARTED!!</h1>
                <div className="hook">
                <h2 className="hook_1">Already have an account, </h2>
                <h2 className="hook_2">Sign in</h2>
                </div>
                    <img className="logo" src="../resources/img/logo.png" alt="logo"></img>
            </div>   
           
            

        </div>
    );
}

export default Signup;