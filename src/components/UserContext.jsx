import React, { createContext, useContext, useState, useEffect } from 'react';

// Create a User Context
const UserContext = createContext();

// Provider component that wraps your app and makes the context available to all child components
export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]); // State to store users
  const [loggedInUser, setLoggedInUser] = useState(null); // State to store logged-in user

  const fetchUsers = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/users");
      const userData = await response.json();
      setUsers(userData);  // Set fetched users
    } catch (error) {
      console.error("Failed to fetch users:", error);
    }
  };

  // Add a new user
  const addUser = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };

  // Delete a user
  const deleteUser = (userId) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
  };

  // Log in a user
  const loginUser = (user) => {
    setLoggedInUser(user); // Store the logged-in user
  };

  // Log out the current user
  const logoutUser = () => {
    setLoggedInUser(null); // Remove the logged-in user
  };

  useEffect(() => {
    fetchUsers(); // Fetch users when the provider is mounted
  }, []);

  return (
    <UserContext.Provider value={{ 
      users, 
      loggedInUser, 
      fetchUsers, 
      addUser, 
      deleteUser, 
      loginUser, 
      logoutUser 
    }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use User Context
export const useUsers = () => {
  return useContext(UserContext);
};