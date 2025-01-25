import React from 'react';
import { FaBox } from 'react-icons/fa';
import { CiUser } from "react-icons/ci";
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useProducts } from '../components/ProductContext';
import { useUsers } from '../components/UserContext';
import useProductStats from '../components/ProductStats';

// Register necessary components in Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const AdminDashboard = () => {
  const productStats = useProductStats(); // Use the custom hook to get product stats
  const { products } = useProducts();
  const { users } = useUsers();

  // Filter out products with zero redeemed quantity and sort
  const topProducts = productStats
    .filter(product => product.totalQuantity > 0) // Only include products with non-zero redeemed quantity
    .sort((a, b) => b.totalQuantity - a.totalQuantity)
    .slice(0, 3);

  // Pie chart data
  const pieChartData = {
    labels: topProducts.length > 0 ? topProducts.map((product) => product.title) : [],
    datasets: [
      {
        data: topProducts.length > 0 ? topProducts.map((product) => product.totalQuantity) : [],
        backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(153, 102, 255, 0.6)', 'rgba(255, 159, 64, 0.6)'],
        borderColor: ['rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
        borderWidth: 1,
      },
    ],
  };

  // Pie chart options to move legend to the side
  const pieChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
        align: 'side',
        labels: {
          boxWidth: 12,
          padding: 10,
        },
        title: {
          display: true,
          text: 'Products'
        }
      }
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Welcome Card */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h2 className="text-3xl font-semibold text-gray-800">Admin Dashboard</h2>
          <p className="text-gray-600 mt-1">Manage products redeemed by users and their details</p>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Total Redeemed Products Card */}
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Total Redeemed Products</h3>
              <p className="text-gray-600 text-lg">{productStats.reduce((acc, product) => acc + product.totalQuantity, 0) || 0} items</p>
            </div>
            <div className="bg-green-500 p-4 rounded-full text-white">
              <FaBox size={30} />
            </div>
          </div>

          {/* Total Products Available */}
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Products Available</h3>
              <p className="text-gray-600 text-lg">{products.length} products</p>
            </div>
            <div className="bg-indigo-500 p-4 rounded-full text-white">
              <FaBox size={30} />
            </div>
          </div>

          {/* Total Users Card */}
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">Total Users</h3>
              <p className="text-gray-600 text-lg">{users.length} users</p>
            </div>
            <div className="bg-yellow-500 p-4 rounded-full text-white">
              <CiUser size={30} />
            </div>
          </div>
        </div>

        {/* Top Redeemed Products (Pie Chart) */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-gray-800 text-center">Most Redeemed Products (up to top 3)</h3>
          <div className="mt-4 flex justify-center items-center overflow-x-auto">
            {/* Only show the Pie chart if we have data */}
            {topProducts.length === 0 ? (
              <p className="text-gray-500">No products have been redeemed yet.</p>
            ) : (
              <div className="relative w-64 h-64">
                <Pie data={pieChartData} options={pieChartOptions} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
