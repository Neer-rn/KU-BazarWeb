import React from 'react';
import './main.css';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import GRILLS from '../resources/img/grills.png';
import SPORTS from '../resources/img/sports.png';
import FASHION from '../resources/img/fashion.png';
import FURNITURE from '../resources/img/furniture.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const categories = [
  "Furniture",
  "Books & Study Materials",
  "Electronics",
  "Home & Lifestyle",
  "Clothing & Fashion",
  "Sports & Outdoor",
  "Entertainment",
  "Health & Beauty",
  "Miscellaneous",
];

const Home = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
};
  const recentlyAddedItems = [
    { id: 1, name: 'Product 1', image: 'product1.jpg' },
    { id: 2, name: 'Product 2', image: 'product2.jpg' },
    { id: 3, name: 'Product 3', image: 'product3.jpg' },
    { id: 4, name: 'Product 4', image: 'product4.jpg' },
    // Add more items as needed
  ];
  
  const RecentlyAddedItems = () => {
    const sliderSettings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4, // Show 4 items at a time
      slidesToScroll: 1,
    };
  

  const images = [
    { name: 'Grills', src: GRILLS },
    { name: 'Furniture', src: FURNITURE },
    { name: 'Sports', src: SPORTS },
    { name: 'Fashion', src: FASHION },
  ];

  return (
    <div>
      <header>
        <div className="website-name">KU-Bazar</div>
      </header>
      <div className="noHeader">
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
            {categories.map((category, index) => (
              <li key={index}>{category}</li>
            ))}
          </ul>
        </div>
        <div className="image-slider">
          <Slider {...sliderSettings} className='first'>
            {images.map((image, index) => (
              <div key={index} className="image-slide">
                <img src={image.src} alt={image.name} />
              </div>
            ))}
          </Slider>
        </div>
      </main>

      <div className="recently-added-items">
      <h2>Recently Added Items</h2>
      <Slider {...sliderSettings} className='second'>
        {recentlyAddedItems.map((item) => (
          <div key={item.id} className="item">
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </Slider>
    </div>


    </div>
  );
}

export default Home;















