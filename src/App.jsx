import { RouterProvider } from "react-router-dom";
import { CreditProvider } from './components/CreditContext';
import { TransactionProvider } from './components/TransactionContext';
import { ProductProvider } from './components/ProductContext';
import { UserProvider } from "./components/UserContext";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from './layout/MainLayout'
import HomePage from './pages/HomePage';
import Login from "./pages/Login";
import AboutUs from "./pages/AboutUs";
import UserLayout from './pages/UserLayout';
import UserDashboard from './pages/UserDashboard'
import Products from './pages/Products';
import Transactions from './pages/Transactions';
import AdminDashboard from './pages/AdminDashboard';
import AdminLayout from './pages/AdminLayout';
import ManageProducts from './pages/ManageProducts';
import ManageUsers from './pages/ManageUsers';
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
        element: <AdminLayout/>,
        children: [
          {
            index: true,
            element: <AdminDashboard/>
          },
          {
            path: 'profile',
            element: <Profile/>
          },
          {
            path: 'manageusers',
            element: <ManageUsers/>
          },
          {
            path: 'manageproducts',
            element: <ManageProducts/>
          }
        ]
      }
    ]
  }
]);

const App = () => {

  return (
    <UserProvider>
       <ProductProvider>
          <CreditProvider>
            <TransactionProvider>
              <RouterProvider router={router}/>
            </TransactionProvider>
          </CreditProvider>
      </ProductProvider>
    </UserProvider>
  )
}

export default App
