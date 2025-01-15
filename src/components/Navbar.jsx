import logo from "../assets/images/logo.png";
import { useCredits } from './CreditContext';  // Relative import to CreditContext.js
import { NavLink } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { FaUser, FaCoins } from 'react-icons/fa';

const Navbar = ({ isUser, isAdmin }) => {
  const { credits } = useCredits();
  const [dropDownOpen, setDropDownOpen] = useState(false);

  // Log initial state when component mounts
  useEffect(() => {
    console.log('Initial dropdown state:', dropDownOpen);  // Logs initial state on mount
  }, []);  // Empty dependency array to run only on mount

  const toggleDropDown = () => {
    console.log('Dropdown clicked, toggling state');
    setDropDownOpen((prev) => !prev);  // Toggle dropdown state on click
  };

  const linkClass = ({ isActive }) =>
    isActive
      ? 'bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
      : 'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2';

  const handleClickOutside = (e) => {
    // Close dropdown if click is outside of it
    if (dropDownOpen && !e.target.closest('.dropdown')) {
      setDropDownOpen(false);
    }
  };

  useEffect(() => {
    // Add event listener for outside clicks to close dropdown
    document.addEventListener('click', handleClickOutside);
    
    // Clean up listener on component unmount
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [dropDownOpen]);

  return (
    <nav className='bg-black border-b border-indigo-500'>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
        <div className='flex h-20 items-center justify-between'>
          <div className='flex flex-1 items-center justify-center md:items-stretch md:justify-start'>
            <NavLink className='flex flex-shrink-0 items-center mr-900' to='/'>
              <img className='h-10 w-auto' src={logo} alt='Muhammadiyah Welfare Home' />
              <span className='hidden md:block text-white text-2xl font-bold ml-2'>
                Home of the children
              </span>
            </NavLink>

            <div className='md:ml-auto'>
              <div className='flex space-x-2'>
                {!isUser && !isAdmin && (
                  <div className='mt-2'>
                    <NavLink to='/' className={linkClass}>
                      Home
                    </NavLink>
                    <NavLink to='/aboutus' className={linkClass}>
                      About Us
                    </NavLink>
                    <NavLink to='/login' className={linkClass}>
                      Login
                    </NavLink>
                  </div>
                )}
                {(isUser || isAdmin) && (
                  <div className='relative flex items-center mt-3'>
                    {isUser && (
                      <>
                        <FaCoins className='text-white text-1xl' />
                        <span className='ml-2 text-white text-xl mr-5'>{credits}</span>
                      </>
                    )}
                    {/* User Profile Icon */}
                    <FaUser className='text-white text-1xl cursor-pointer dropdown' onClick={toggleDropDown} />

                    {dropDownOpen && (
                      <div className='absolute right-0 top-10 w-48 bg-white text-black shadow-lg rounded-md'>
                        <ul>
                          {isUser && 
                            <li>
                              <NavLink to='/users/profile' className='block px-4 py-2 text-sm hover:bg-indigo-100'>
                                Profile
                              </NavLink>
                            </li>
                          }
                          {isAdmin && 
                            <li>
                              <NavLink to='/admin/profile' className='block px-4 py-2 text-sm hover:bg-indigo-100'>
                                Profile
                              </NavLink>
                            </li>
                          }
                          <li>
                            <NavLink to='/' className='block px-4 py-2 text-sm hover:bg-indigo-100'>
                              Logout
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
