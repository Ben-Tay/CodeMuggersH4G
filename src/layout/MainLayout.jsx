import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";

const MainLayout = () => {
  const location = useLocation(); // Get current path location

  // Debugging the location.pathname
  console.log('Current Path:', location.pathname);
  
  const isUser = location.pathname.startsWith('/users');
  const isAdmin = location.pathname.startsWith('/admin');
  
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar isUser={isUser} isAdmin={isAdmin} />
        <div className="flex-grow">
          <Outlet />
        </div>
        {/* Show Footer only if not in the user or admin routes */}
        {!(isUser || isAdmin) && <Footer />}
      </div>
    </>
  );
};

export default MainLayout;
