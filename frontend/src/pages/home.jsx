import React from "react";
import "./home.css";
import '../resources/img/logo.png';

const Home = () => {
    return (
        <div className="Home">
            <div className="Up_bar">

            <div className="home_name">
                <h1 className="title">KU-Bazar</h1>

            </div>
            <div className="home_list">
                <li>Shop</li>
                <li>About us</li>
                <li>Contact us</li>
            </div>
                <button className="button_signup">Sign up</button> 
            </div>
            <div className="middleParagraph">
                
                <h1 className="subTitle">Ku-Bazar</h1>
                <div className="hook">
                <h2 className="hook_1">Your One-Stop </h2>
                <h2 className="hook_2"> , E-Store</h2>
                </div>
                    
                    <p className="description"> Discover KU-Bazar: Your Hub for Smart Shopping<br></br>
                                                in the KU Community. Buy, Sell, and Connect<br></br>
                                                Seamlessly. Embrace Open-Source Convenience,<br></br>
                                                No Fees Attached.Join Today!!<br></br>
                    </p>

                    <img className="xlogo" src="../resources/img/xlogo.svg" alt="xlogo"></img>
            </div>   
           
            

        </div>
    );
}

export default Home;
