// ManageProducts.jsx
import React from 'react';
import AddProduct from '../components/AddProduct';
import DeleteProduct from '../components/DeleteProduct';

const ManageProducts = () => {
  return (
    <div className="max-w-full overflow-auto px-4">
      <AddProduct />  {/* Component for adding new product */}
      <DeleteProduct />  {/* Component for displaying and deleting products */}
    </div>
  );
};

export default ManageProducts;
