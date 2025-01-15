import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUsers } from '../components/UserContext'; // Import useUsers from context

const Login = () => {
  const { users, loginUser } = useUsers(); // Access users and loginUser from context
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userRole, setUserRole] = useState('Resident');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Find user by email and password
      const user = users.find(
        (u) => u.email === email && u.password === password
      );

      console.log(`User is ${user}`);

      if (user) {
        loginUser(user); // Log in the user

        // Navigate based on user role
        if (userRole === "Resident") {
          navigate('/users/profile'); // Redirect to the user dashboard
        } else if (userRole === "Admin") {
          navigate('/admin/profile'); // Redirect to the admin dashboard
        }
      } else {
        console.log(error);
        setError('Invalid email or password');
      }
    } catch (error) {
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="container mx-auto px-4">
      <div className="flex items-start justify-between pt-16">
        {/* Main Content */}
        <main className="flex-1 bg-white p-8 rounded-lg shadow-lg mr-8">
          <h1 className="text-3xl font-bold text-center mb-6">Main Content</h1>
          <p className="text-center text-gray-600 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error,
            doloremque odio? Cupiditate eius dolores laborum libero aperiam enim
            dolore, recusandae similique tenetur aliquam dignissimos velit
            tempore voluptas. Adipisci, consectetur deleniti?
          </p>
        </main>
        <aside className="w-96 bg-indigo-50 p-8 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Display error if invalid credentials */}
            {error && (
              <div className="text-red-500 text-center mb-4">
                <p>{error}</p>
              </div>
            )}
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="userSelect"
              >
                Choose a user role:
              </label>
              <select
                id="userSelect"
                name="userSelect"
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                value={userRole}
                onChange={(e) => setUserRole(e.target.value)}
              >
                <option value="Resident">Resident</option>
                <option value="Admin">Admin</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Enter your email:
              </label>
              <input
                type="email"
                placeholder="example@gmail.com"
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Enter password:
              </label>
              <input
                type="password"
                placeholder="********"
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full py-3 px-4 bg-indigo-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
              >
                Log In
              </button>
            </div>
          </form>
        </aside>
      </div>
    </div>
  );
};

export default Login;
