import React, {useState} from 'react';
import { useTransactions } from '../components/TransactionContext';

const Transactions = () => {
  const { transactions, getTotalCreditsSpent } = useTransactions();

  if (transactions.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <p>No transactions yet!</p>
        </div>
      </div>
    );
  }

 
  // Render the transaction list
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">My Transactions</h1>
      <ul className="border rounded-lg divide-y">
        {transactions.map(({ productId, productName, productImg, count, totalSpent }) => (
          <li
            key={productId}
            className="flex items-center justify-between py-4 px-4"
          >
            {/* Product Image */}
            <img
              src={productImg}
              alt={productName}
              className="w-16 h-16 object-cover rounded-md"
            />

            {/* Product Details */}
            <div className="flex flex-col flex-grow px-4">
              <span className="text-lg font-semibold">{productName}</span>
              <span className="text-sm text-gray-500">
                Redeemed {count} time{count > 1 ? 's' : ''}
              </span>
            </div>

            {/* Total Spent */}
            <span className="text-lg font-medium text-green-600">
              Credits Spent: ${totalSpent?.toFixed(2) || '0.00'}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Transactions;
