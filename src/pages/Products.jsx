import React, { useState, useEffect } from 'react';
import { useProducts } from '../components/ProductContext';  // Import ProductContext
import { useCredits } from '../components/CreditContext';  
import { useTransactions } from '../components/TransactionContext';

const Products = () => {
  const { products } = useProducts();  // Access products from the context
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(4);  // Number of products per page
  const { credits, subtractCredits } = useCredits();
  const { addTransaction } = useTransactions();

  // Pagination Logic
  const lastProductIndex = currentPage * productsPerPage;
  const firstProductIndex = lastProductIndex - productsPerPage;
  const currentProducts = products.slice(firstProductIndex, lastProductIndex);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const totalPages = Math.ceil(products.length / productsPerPage);

  // Handle redeeming the product
  const handleRedeem = async (e, product) => {
    e.preventDefault();

    if (credits >= product.price) {
      subtractCredits(product.price);
      addTransaction(product.id, product.title, product.price, product.image);  // Add transaction to redeemed products
      alert(`You have successfully redeemed ${product.title.split(" ").slice(0, 1)}!`);
    } else {
      alert('Not enough credits to redeem this product!');
    }
  };

  return (
    <div>
      {/* Product Grid */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {currentProducts.map((product) => (
          <li
            key={product.id}
            className="flex flex-col justify-between items-center border p-4 rounded-lg h-full"
          >
            <img
              src={product.image}
              alt={product.title}
              className="mb-4 h-32 w-auto object-cover"
              width={150}
            />
            <div className="flex flex-col items-center">
              <h3 className="text-center">{product.title}</h3>
              <p className="text-center">Credits: ${product.price}</p>
            </div>
            <button
              className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-green-600 h-12 flex items-center justify-center"
              onClick={(e) => handleRedeem(e , product)}
            >
              Redeem
            </button>
          </li>
        ))}
      </ul>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-6">
        <button
          className="px-4 py-2 bg-gray-300 rounded-l-lg"
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={`px-4 py-2 ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'} rounded-sm`}
            onClick={() => paginate(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className="px-4 py-2 bg-gray-300 rounded-r-lg"
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Products;
