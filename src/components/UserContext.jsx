// UserContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the UserContext
const UserContext = createContext();

// Custom hook to access the UserContext
export const useUsers = () => {
  return useContext(UserContext);
};

// UserProvider component to provide context to children
export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);

  const fetchUsers = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/users");
      const userData = await response.json();
      setUsers(userData);
    } catch (error) {
      console.error("Failed to fetch users:", error);
    }
  };

  const addUser = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };

  const deleteUser = (userId) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
  };

  const loginUser = (user) => {
      console.log("Logging in user:", user); // Log user being logged in

    setLoggedInUser(user);
    localStorage.setItem("loggedInUser", JSON.stringify(user));
  };

  const logoutUser = () => {
    setLoggedInUser(null);
    localStorage.removeItem("loggedInUser");
  };

  useEffect(() => {
    fetchUsers();
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      setLoggedInUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <UserContext.Provider value={{ users, loggedInUser, fetchUsers, addUser, deleteUser, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};
