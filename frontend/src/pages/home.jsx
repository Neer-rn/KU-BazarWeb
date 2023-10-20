import React from "react";
import "./home.css";

const Home = () => {
    return (
        <div className="Home">
            <div className="home_name">
                <h1>KU-Bazar</h1>

            </div>
            <div className="home_list">
                <li>Shop</li>
                <li>About us</li>
                <li>Contact us</li>
            </div>
                <button className="button_signup">Sign up</button>    
        </div>
    );
}

export default Home;
