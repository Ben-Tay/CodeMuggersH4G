import { useState } from 'react'
import { RouterProvider } from "react-router-dom";
import { CreditProvider } from './components/CreditContext';
import { TransactionProvider } from './components/TransactionContext';
import { createBrowserRouter } from "react-router-dom";
import MainLayout from './layout/MainLayout'
import HomePage from './pages/HomePage';
import UserLayout from './pages/UserLayout';
import UserDashboard from './pages/UserDashboard'
import AdminDashboard from './pages/AdminDashboard';
import Products from './pages/Products';
import Transactions from './pages/Transactions';
import Login from "./pages/Login";
import AboutUs from "./pages/AboutUs";
import Profile from "./pages/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
      {
        index: true, // Index Route
        element: <HomePage/>
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/aboutus',
        element: <AboutUs/>
      },
      {
        path: '/users',
        element: <UserLayout/>,  // Use UserLayout for both /users and /users/products
        children: [
          {
            index: true,
            element: <UserDashboard/>,
          },
          {
            path: 'profile', 
            element: <Profile />, 
          },
          {
            path: 'products', 
            element: <Products/>, 
          },
          {
            path: 'transactions', 
            element: <Transactions/>, 
          }
        ]
      },
      {
        path: '/admin',
        element: <AdminDashboard/>
      }
    ]
  }
]);

const App = () => {

  return (
    <CreditProvider>
        <TransactionProvider>
          <RouterProvider router={router}/>
        </TransactionProvider>
    </CreditProvider>
  )
}

export default App
