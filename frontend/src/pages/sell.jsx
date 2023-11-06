import React, { useState } from 'react';
import { storage } from '../index.js';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 } from 'uuid';
import './sell.css';

const Sell = () => {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);
  const [productName, setProductName] = useState('');
  const [smallDescription, setSmallDescription] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [longDescription, setLongDescription] = useState('');
  const [condition, setCondition] = useState('New');
  const [quantity, setQuantity] = useState('');
  const [priceType, setPriceType] = useState('Fixed');
  const [sellerName, setSellerName] = useState('');
  const [productAddress, setProductAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('Cash');
  const [returnPolicy, setReturnPolicy] = useState('');

  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
        uploadMultiFile();
      });
    });
  };

  const metadata = {
    contentType: ['image/jpg'],
  };

  const uploadMultiFile = () => {
    if (imageUrls.length === 0) return;
  
    imageUrls.forEach((file) => {
      const multimg = ref(storage, `images/${file.name + v4()}`);
      uploadBytes(multimg, file, metadata).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  };
  

  return (
    <div className="sell-container">
      <h2>Sell Your Items</h2>
      <p>Describe your item and upload images to start selling.</p>
      <div className="sell-form">
      <input
          type="text"
          placeholder="Product Name"
          value={productName}
          onChange={(event) => setProductName(event.target.value)}
        />
        <input
          type="file"
          onChange={(event) => {
            setImageUpload(event.target.files[0]);
          }}
        />
        
        <input
          type="text"
          placeholder="Small Description"
          value={smallDescription}
          onChange={(event) => setSmallDescription(event.target.value)}
        />
        <select value={category} onChange={(event) => setCategory(event.target.value)}>
          <option value="">Select Category</option>
          <option value="Category 1">Furniture</option>
          <option value="Category 2">Books & Study Materials</option>
          <option value="Category 3">Electronics</option>
          <option value="Category 4">Home & Lifestyle</option>
          <option value="Category 5">Clothing & Fashion</option>
          <option value="Category 6">Sports & Outdoor</option>
          <option value="Category 7">Entertainment</option>
          <option value="Category 8">Health & Beauty</option>
          <option value="Category 9">Miscellaneous</option>
        </select>
        <select value={condition} onChange={(event) => setCondition(event.target.value)}>
          <option value="">Condition</option>
          <option value="Category_1">New</option>
          <option value="Category_2">Refurbished </option>
          <option value="Category_3">Pre-owned </option>
        </select>
        <select value={priceType} onChange={(event) => setPriceType(event.target.value)}>
          <option value="">Price type</option>
          <option value="Category-1">Fixed</option>
          <option value="Category-2">Negotiable</option>
        </select>

        <input
          type="file"
          multiple
          onChange={(event) => {
            setImageUrls(Array.from(event.target.files));
            
          }}
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />
        <textarea
          placeholder="Long Description"
          value={longDescription}
          onChange={(event) => setLongDescription(event.target.value)}
        />
        
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(event) => setQuantity(event.target.value)}
        />

<input
          type="text"
          placeholder="Seller Full Name"
          value={sellerName}
          onChange={(event) => setSellerName(event.target.value)}
        />
        <input
          type="text"
          placeholder="Product Address"
          value={productAddress}
          onChange={(event) => setProductAddress(event.target.value)}
        />
        <select value={paymentMethod} onChange={(event) => setPaymentMethod(event.target.value)}>
          <option value="Accept Online Payments">Accept Online Payments</option>
          <option value="Cash">Only Cash</option>
        </select>
        <textarea
          placeholder="Return Policy"
          value={returnPolicy}
          onChange={(event) => setReturnPolicy(event.target.value)}
        />
      </div>
      

        <button onClick={uploadFile}>Sell Now</button>


        </div>
  );
        };

export default Sell;
