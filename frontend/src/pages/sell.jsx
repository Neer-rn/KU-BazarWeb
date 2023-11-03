import React, { useState } from 'react';

const Sell = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null); // For file upload

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform image upload to Firebase Storage if needed
    // Then get the image URL from Firebase Storage

    // Create an item object with the collected data
    const newItem = {
      title,
      description,
      imageUrl: 'URL_TO_UPLOADED_IMAGE', // Replace with the actual URL
    };

    // Send the data to your Spring Boot backend for storage
    // You can use Axios or the Fetch API to make a POST request

    // Example using Axios:
    // axios.post('/api/add-item', newItem)
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={handleTitleChange}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={handleDescriptionChange}
      />
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />
      <button type="submit">Add Item</button>
    </form>
  );
};

export default Sell;
