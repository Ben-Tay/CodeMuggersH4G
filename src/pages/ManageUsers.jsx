import React, { useEffect } from 'react';
import { useUsers } from '../components/UserContext'; 
import { CiUser } from "react-icons/ci";

const ManageUsers = () => {
  const { users, fetchUsers, deleteUser } = useUsers(); // Get users, fetchUsers, and deleteUser from context

  // Fetch users when the component is mounted
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <div className="container mx-auto p-8">

      {/* User List */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Manage Users</h2>
        {users.length === 0 ? (
          <p className="text-gray-500">No users available</p>
        ) : (
          <ul>
            {users.map((user) => (
              <li key={user.id} className="flex justify-between items-center mb-4">
                <div className="flex items-center space-x-2"> {/* Use flex and space between the icon and text */}
                {/* Displaying user full name from firstname and lastname */}
                  <CiUser className="text-gray-600" /> {/* Icon styling */}
                  <p className="font-semibold">
                    {user.name?.firstname && user.name?.lastname
                      ? `${user.name.firstname} ${user.name.lastname}`
                      : 'No name available'}
                  </p>
                  <p className="text-sm text-gray-600">
                    {user.email || 'No email available'}
                  </p>
                </div>
                <button
                  onClick={() => deleteUser(user.id)} // Delete user
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ManageUsers;
