// AddProduct.jsx
import React, { useState } from 'react';
import { useProducts } from '../components/ProductContext';

const AddProduct = () => {
  const { addProduct } = useProducts();  // Access addProduct from context
  const [productDetails, setProductDetails] = useState({
    title: '',
    price: '',
    image: '',
    imageFile: null,  // New state to store the file itself
  });
  const [imagePreview, setImagePreview] = useState('');  // State for image preview

  const handleChange = (e) => {
    setProductDetails({
      ...productDetails,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setProductDetails({
      ...productDetails,
      imageFile: file
    });

    // Generate a preview URL for the selected image
    if (file) {
      const fileURL = URL.createObjectURL(file);
      setImagePreview(fileURL);  // Store the preview URL to display the image
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, price, imageFile } = productDetails;

    if (title && price && imageFile) {
      // Create an object for the new product
      const newProduct = {
        id: Date.now(),  // Use current timestamp for unique ID
        title,
        price: parseFloat(price),
        image: imagePreview,  // Use the preview URL as image source
      };

      // Add the new product to the products state
      addProduct(newProduct);

      // Clear the form
      setProductDetails({ title: '', price: '', image: '', imageFile: null });
      setImagePreview('');  // Clear the preview

      alert('Product added successfully');
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div className="max-w-full mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold text-center mb-6">Add New Product</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-gray-700 font-medium">Product Title</label>
          <input
            id="title"
            type="text"
            name="title"
            value={productDetails.title}
            onChange={handleChange}
            placeholder="Enter product title"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
  
        <div>
          <label htmlFor="price" className="block text-gray-700 font-medium">Product Credit ($)</label>
          <input
            id="price"
            type="number"
            name="price"
            value={productDetails.price}
            onChange={handleChange}
            placeholder="Enter product credits"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
  
        <div>
          <label htmlFor="image" className="block text-gray-700 font-medium">Product Image</label>
          <input
            id="image"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg file:border-0 file:bg-blue-100 file:px-4 file:py-2 file:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
  
        {/* Image Preview */}
        {imagePreview && (
          <div className="mt-4 text-center">
            <h3 className="text-gray-700 font-medium mb-2">Image Preview</h3>
            <img src={imagePreview} alt="Preview" className="w-48 h-48 object-cover rounded-lg mx-auto" />
          </div>
        )}

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
