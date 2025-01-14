import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";

const MainLayout = () => {

  const location = useLocation(); // Get current path location
 
  // Check if the current path is '/' or '/login' to show the footer
  const isHomePage = location.pathname === '/' || location.pathname === '/login' || location.pathname === '/aboutus';

  const isUser = location.pathname.startsWith('/users'); // show user nav bar if logged into user dashboard
  
  return (
    <>
        <Navbar isUser={isUser}/>
        <Outlet/>
        {isHomePage && 
            <Footer/>
        }
    </>
  )
}

export default MainLayout