import React from 'react'
import {Link, Outlet} from 'react-router-dom';
import { FaHome, FaBox, FaDollarSign } from 'react-icons/fa';
import { TbLogout2} from "react-icons/tb";

const UserLayout = () => {
  return (
    <div className="flex h-screen">
        {/* Sidebar */}
        <div className="bg-gray-800 text-white w-64 p-4">
            <nav>
            <ul>
                <li className="mb-4">
                    <Link to="/users" className="flex items-center text-gray-300 hover:text-white transition-colors">
                        <FaHome className="mr-3 text-xl" /> 
                        My Dashboard
                    </Link>
                    </li>
                <li className="mb-4">
                    <Link to="products" className="flex items-center text-gray-300 hover:text-white transition-colors">
                        <FaBox className="mr-3 text-xl" /> 
                        Products
                    </Link>
                </li>
                <li className="mb-4">
                    <Link to="transactions" className="flex items-center text-gray-300 hover:text-white transition-colors">
                        <FaDollarSign className="mr-3 text-xl" />
                        My Transactions
                    </Link>
                </li>
                <li className="mb-4">
                    <Link to="/" className="flex items-center text-gray-300 hover:text-white transition-colors">
                        <TbLogout2 className="mr-3 text-xl" />
                        Log Out
                    </Link>
                </li>
            </ul>
            </nav>
        </div>

        <div className="flex-1 p-8 bg-gray-100">
            <Outlet/>
        </div>
    </div>
  )
}

export default UserLayout