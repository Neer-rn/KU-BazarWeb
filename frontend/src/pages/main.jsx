import React, { useState, useEffect } from 'react';
import './main.css';
import './sell.jsx';
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
import { ref, getDownloadURL, listAll } from 'firebase/storage';
import { storage } from '../index.js';




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


  const [formData, setFormData] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {

    const formCollection = collection(db, 'products');


    const unsubscribeForm = onSnapshot(formCollection, (querySnapshot) => {
      const formDataArray = [];
      querySnapshot.forEach((doc) => {

        formDataArray.push(doc.data());
      });
      setFormData(formDataArray);
    });


    return () => {
      unsubscribeForm();
    };
  }, []); 


const downloadAndDisplayImages = async () => {

  const imageRef = ref(storage, 'single'); 

  try {
    const imageList = await listAll(imageRef);
    const urls = await Promise.all(imageList.items.map(async (image) => {
      return getDownloadURL(image);
    }));
    setImageUrls(urls);
  } catch (error) {
    console.error('Error downloading images: ', error);
  }
};


  useEffect(() => {
    downloadAndDisplayImages();
  }, []);

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
          <h2 className='recent'>Recently Added Items</h2>
        <main>
          

          <div className="recent-items-container">
            {formData.map((data, index) => (
              <div key={index} className="item-box">
                <img src={imageUrls[index]} alt={`Item ${index}`} />

                <div className="item-details">
                  <h3>{data.productName}</h3>
                  <p>{data.smallDescription}</p>
                  {/* Display other form data fields as needed */}
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
 
    </div>
  );
        };

export default Main;




/*<div>
      <h2 className='recent'>Recently Added Items</h2>
      

      <div className="recent-items-container">

      <div className='both'>
      <div className='formData'>
        {formData.map((data, index) => (
          <div key={index} className="item-box">
          <h3>{data.productName}</h3>
          <p>{data.smallDescription}</p>
          
          </div>
        ))}
      </div>

      
      <div>
        {imageUrls.map((imageUrl, index) => (
          <img key={index} className="item-box" src={imageUrl} alt={`images ${index}`} />
        ))}
      </div>
    </div>
    </div>
    </div> */
