import React from 'react';
import './main.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Slider from 'react-slick';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';

const categories = ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5', 'Category 6', 'Category 7', 'Category 8', 'Category 9'];

const Home = () => {
  // Configuration for the image slider (react-slick)
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div>
      <header>
        <div className="website-name">KU-Bazar</div>
        </header>
        <div className='noHeader'>
        <nav>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/logout">Logout</Link></li>
          </ul>
        </nav>
        <div className="search-bar">
          <input type="text" placeholder="What are you looking for?" />
        </div>
        <div className="icons">
          <FaHeart className="favorite-icon" />
          <FaShoppingCart className="cart-icon" />
        </div>
        </div>
      
      <main>
        <div className="category-options">
        <ul className='category-item'>
                    <li>Category 1</li>
                    <li>Category 2</li>
                    <li>Category 3</li>
                    <li>Category 4</li>
                    <li>Category 5</li>
                    <li>Category 6</li>
                    <li>Category 7</li>
                    <li>Category 8</li>
                    <li>Category 9</li>
                </ul>
        </div>
        <div className="image-slider">
          <Slider {...sliderSettings}>
            <div>
              <img src="image1.jpg" alt="Image 1" />
            </div>
            <div>
              <img src="image2.jpg" alt="Image 2" />
            </div>
            {/* Add more image slides here */}
          </Slider>
        </div>
      </main>
    </div>
  );
}

export default Home;





















/*import React from 'react';

function Main() {
    return (
        <div>
            
            <header>
                <div className="website-name">KU-Bazar</div>
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Logout</a></li>
                    </ul>
                </nav>
                <div className="search-bar">
                    <input type="text" placeholder="Search" />
                    <button type="submit"><i className="fa fa-search"></i></button>
                </div>
                <div className="favorite-icon">
                    <i className="fa fa-heart"></i>
                </div>
                <div className="cart-icon">
                    <i className="fa fa-shopping-cart"></i>
                </div>
            </header>

            
            <div className="category-section">
                <ul>
                    <li>Category 1</li>
                    <li>Category 2</li>
                    <li>Category 3</li>
                    <li>Category 4</li>
                    <li>Category 5</li>
                    <li>Category 6</li>
                    <li>Category 7</li>
                    <li>Category 8</li>
                    <li>Category 9</li>
                </ul>
            </div>

            
            <div className="image-slider">
                <img src="image1.jpg" alt="Image 1" />
                <img src="image2.jpg" alt="Image 2" />
                <img src="image3.jpg" alt="Image 3" />
                <img src="image4.jpg" alt="Image 4" />
                <img src="image5.jpg" alt="Image 5" />
            </div>
        </div>
    );
}

export default Main;
*/