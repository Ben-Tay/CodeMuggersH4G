import React, { createContext, useState, useContext } from 'react';

// Create the CreditContext
const CreditContext = createContext();

export const CreditProvider = ({ children }) => {
  const [credits, setCredits] = useState(500); // Default credits

  // Function to subtract credits
  const subtractCredits = (amount) => {
    setCredits((prevCredits) => {
        const updatedCredits = Math.max(0, prevCredits - amount);
        return parseFloat(updatedCredits.toFixed(2)); // Ensures only two decimal places
      });
  };

  return (
    <CreditContext.Provider value={{ credits, setCredits, subtractCredits }}>
      {children}
    </CreditContext.Provider>
  );
};

// Custom hook to use the CreditContext
export const useCredits = () => useContext(CreditContext);
