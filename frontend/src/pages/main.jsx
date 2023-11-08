import React, { useState, useEffect } from 'react';
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
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../index.js';




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

const Main = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  /*const recentlyAddedItems = [
    { id: 1, name: 'Product 1', image: 'product1.jpg' },
    { id: 2, name: 'Product 2', image: 'product2.jpg' },
    { id: 3, name: 'Product 3', image: 'product3.jpg' },
    { id: 4, name: 'Product 4', image: 'product4.jpg' },
    // Add more items as needed
  ];
  */

  /*async function getFormDataFromFirestore() {
    const querySnapshot = await getDocs(collection(db, 'products'));
    const formData = [];
    querySnapshot.forEach((doc) => {
      formData.push(doc.data());
    });
    return formData;
  }*/
  

  const [formData, setFormData] = useState([]);

useEffect(() => {
  // Create a reference to the 'products' collection
  const productsRef = collection(db, 'products');

  // Create a real-time listener for the 'products' collection
  const unsubscribe = onSnapshot(productsRef, (querySnapshot) => {
    const data = [];
    querySnapshot.forEach((doc) => {
      data.push(doc.data());
    });
    setFormData(data);
  });

  // Clean up the listener when the component unmounts
  return () => {
    unsubscribe();
  };
}, []); // Empty dependency array for initial load only

  

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
            <li><Link to="/about-us">About Us</Link></li>
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
fvc 
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

      <div>
    {/* Your existing code for header and categories */}
    <main>
      {/* Display the form data */}
      {formData.map((data, index) => (
        <div key={index}>
          <h3>{data.productName}</h3>
          <p>{data.smallDescription}</p>
          {/* Display other form data fields as needed */}
        </div>
      ))}

    </main>
  </div>

    </div>
  );
        };

export default Main;


