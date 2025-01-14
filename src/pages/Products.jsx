// Products.jsx
import React, { useState, useEffect } from 'react';
import { useCredits } from '../components/CreditContext';  
import { useTransactions } from '../components/TransactionContext';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(4);  // Number of products per page
  const { credits, subtractCredits } = useCredits();
  const { addTransaction } = useTransactions(); 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data); // Set the product data in state
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts(); // Fetch products when the component mounts
  }, []);

  if (loading) return <p>Loading products...</p>;

  // Calculate which products to show based on current page
  const lastProductIndex = currentPage * productsPerPage;
  const firstProductIndex = lastProductIndex - productsPerPage;
  const currentProducts = products.slice(firstProductIndex, lastProductIndex);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Calculate total pages required, use ceil to round up
  const totalPages = Math.ceil(products.length / productsPerPage);

  const handleRedeem = async(e, product) => {
      e.preventDefault(); // prevent the default action of a button
      
      if (credits >= product.price) {
        subtractCredits(product.price);
        addTransaction(product.id, product.title, product.price, product.image); // Add transaction to redeemed products
        alert(`You have successfully redeemed ${product.title.split(" ").slice(0,1)} !`)
      } else {
        alert('Not enough credits to redeem this product!');
      }
  }

  return (
    <div>
      {/* Create a grid layout for the products */}
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
              onClick={(e) => handleRedeem(e , product)}>
              Redeem
            </button>
          </li>
        ))}
      </ul>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-40">
        <button
          className="px-4 py-2 bg-gray-300 rounded-l-lg"
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1} // cannot go previous if on first page
        >
          Previous
        </button>
        {/* Display page numbers */}
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
