import React, { useState } from 'react';
import { useProducts } from '../components/ProductContext';

const DeleteProduct = () => {
  const { products, deleteProduct } = useProducts();  // Access products and deleteProduct from context

  const [currentPage, setCurrentPage] = useState(1); // State for current page
  const itemsPerPage = 5; // Number of items to show per page

  // Calculate the index range for the products to be displayed on the current page
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const handleDelete = (id) => {
    deleteProduct(id);
    alert('Product deleted successfully');
  };

  // Calculate total pages
  const totalPages = Math.ceil(products.length / itemsPerPage);

  // Handle page navigation
  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="max-w-full mt-8 overflow-x-auto">
      <h2 className="text-xl font-semibold mb-4">Existing Products</h2>
      <ul>
        {currentProducts.map((product) => (
          <li key={product.id} className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <img
                src={product.image}
                alt={product.title}
                className="w-16 h-16 object-cover rounded-lg mr-4"
              />
              <div>
                <p className="font-semibold">{product.title}</p>
                <p className="text-sm text-gray-600">${product.price}</p>
              </div>
            </div>
            <button
              onClick={() => handleDelete(product.id)}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      {/* Pagination Controls */}
      <div className="flex items-center justify-center space-x-3 mt-6">
        {/* Previous Button */}
        <button
          onClick={prevPage}
          className={`${
            currentPage === 1 ? 'bg-gray-300 text-gray-500' : 'bg-blue-500 text-white hover:bg-blue-600'
          } px-4 py-2 rounded-md transition duration-200`}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        {/* Page Number */}
        <span className="text-lg text-gray-700">
          Page {currentPage} of {totalPages}
        </span>

        {/* Next Button */}
        <button
          onClick={nextPage}
          className={`${
            currentPage === totalPages
              ? 'bg-gray-300 text-gray-500'
              : 'bg-blue-500 text-white hover:bg-blue-600'
          } px-4 py-2 rounded-md transition duration-200`}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default DeleteProduct;
