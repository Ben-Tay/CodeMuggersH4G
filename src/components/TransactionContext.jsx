import React, { createContext, useContext, useState } from 'react';

// Create Transaction Context
const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);

  // Function to add or update a transaction
  const addTransaction = (productId, productName, productPrice, productImg) => {
    setTransactions((prevTransactions) => {
      const existingTransaction = prevTransactions.find((t) => t.productId === productId);

      if (existingTransaction) {
        // Update count and totalSpent if the product already exists
        return prevTransactions.map((t) =>
          t.productId === productId
            ? {
                ...t,
                count: t.count + 1,
                totalSpent: (t.totalSpent || 0) + productPrice, // Ensure totalSpent is added
              }
            : t
        );
      } else {
        // Add a new transaction if the product doesn't exist
        return [
          ...prevTransactions,
          { productId, productName, productImg, count: 1, totalSpent: productPrice },
        ];
      }
    });
  };

  // Function to calculate total credits spent across all transactions
  const getTotalCreditsSpent = () => {
    return transactions.reduce((sum, transaction) => sum + (transaction.totalSpent || 0), 0);
  };

  return (
    <TransactionContext.Provider value={{ transactions, addTransaction, getTotalCreditsSpent }}>
      {children}
    </TransactionContext.Provider>
  );
};

export const useTransactions = () => {
  return useContext(TransactionContext);
};
