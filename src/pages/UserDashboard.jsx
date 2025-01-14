import React from 'react';
import { useTransactions } from '../components/TransactionContext';
import { NavLink } from 'react-router-dom';
import { FaBox, FaCoins } from 'react-icons/fa'; // Icons for design

const UserDashboard = () => {
  const { transactions, getTotalCreditsSpent } = useTransactions();

  // Total credits spent (we use getTotalCreditsSpent method)
  const totalCreditsSpent = getTotalCreditsSpent();

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Welcome Card */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h2 className="text-3xl font-semibold text-gray-800">Welcome to Your Dashboard</h2>
          <p className="text-gray-600 mt-1">Here is a quick overview of your account activity.</p>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {/* Redeemed Products Card */}
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Redeemed Products</h3>
              <p className="text-gray-600 text-lg">{transactions.length} items</p> {/* Number of transactions */}
            </div>
            <div className="bg-indigo-500 p-4 rounded-full text-white">
              <FaBox size={30} />
            </div>
          </div>

          {/* Total Credits Spent Card */}
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Total Credits Spent</h3>
              <p className="text-gray-600 text-lg">${totalCreditsSpent.toFixed(2)}</p>
            </div>
            <div className="bg-green-500 p-4 rounded-full text-white">
              <FaCoins size={30} />
            </div>
          </div>
        </div>

        {/* Detailed Overview (Recent Transactions) */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-gray-800">Recent Transactions</h3>
          <div className="mt-4">
            {transactions.slice(0, 3).map((transaction, index) => (
              <div key={index} className="flex justify-between items-center py-3 border-b border-gray-200">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-md flex justify-center items-center">
                    <img src={transaction.productImg} alt={transaction.productName} className="w-8 h-8 rounded-md" />
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold text-gray-800">{transaction.productName}</p>
                    <p className="text-gray-500 text-sm">Quantity: {transaction.count}</p>
                  </div>
                </div>
                <div className="text-gray-800">${transaction.totalSpent}</div>
              </div>
            ))}
          </div>
          <NavLink to="transactions" className="text-indigo-600 hover:text-indigo-800 mt-4 inline-block">View All Transactions</NavLink>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
