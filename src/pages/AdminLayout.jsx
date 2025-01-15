import React from 'react'
import {Link, Outlet} from 'react-router-dom';
import { FaHome, FaBox} from 'react-icons/fa';
import { HiOutlineUsers } from "react-icons/hi";
import { TbLogout2} from "react-icons/tb";

const AdminLayout = () => {
    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div className="bg-gray-800 text-white w-64 p-4">
                <nav>
                <ul>
                    <li className="mb-4">
                        <Link to="/admin" className="flex items-center text-gray-300 hover:text-white transition-colors">
                            <FaHome className="mr-3 text-xl" /> 
                            My Admin Dashboard
                        </Link>
                        </li>
                    <li className="mb-4">
                        <Link to="/admin/manageusers" className="flex items-center text-gray-300 hover:text-white transitprodon-colors">
                            <HiOutlineUsers className="mr-3 text-xl" /> 
                            Manage Users
                        </Link>
                    </li>
                    <li className="mb-4">
                        <Link to="/admin/manageproducts" className="flex items-center text-gray-300 hover:text-white transition-colors">
                            <FaBox className="mr-3 text-xl" />
                            Manage Products
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

export default AdminLayout