import { useState, useEffect } from 'react';
import { useTransactions } from '../components/TransactionContext';
import { useProducts } from '../components/ProductContext';

const useProductStats = () => {
  const { transactions } = useTransactions();
  const { products } = useProducts();
  const [productStats, setProductStats] = useState([]);

  useEffect(() => {
    // Calculate product stats based on redeemed transactions
    const calculateProductStats = () => {
      const stats = products.map((product) => {
        const redeemed = transactions.filter((transaction) => transaction.productId === product.id);
        const totalQuantity = redeemed.reduce((total, transaction) => total + transaction.count, 0);
        const totalSpent = redeemed.reduce((total, transaction) => total + transaction.totalSpent, 0);

        return {
          ...product,
          totalQuantity,
          totalSpent
        };
      });
      setProductStats(stats);
    };

    calculateProductStats();
  }, [transactions, products]);

  return productStats;
};

export default useProductStats;
