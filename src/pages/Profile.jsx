import React, { useEffect, useState } from 'react';

const Profile = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Retrieve the logged-in user's email from localStorage
        const storedUser = localStorage.getItem('user');

        if (storedUser) {
            // Parse and set the user data from localStorage
            setUser(JSON.parse(storedUser));
        } else {
            // If no user data is found, redirect to the login page (or handle accordingly)
            window.location.href = '/login';
        }
    }, []);

    // Loading state in case the user data is not yet loaded
    if (!user) return <div>Loading...</div>;

    return (
        <div className="container mx-auto px-4 py-16">
            <div className="flex justify-center items-center">
                {/* Profile Card */}
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
                    <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6">My Profile</h1>
                    <div className="space-y-6">
                        {/* Name */}
                        <div className="flex justify-between items-center">
                            <span className="text-lg font-semibold text-gray-700">Full Name:</span>
                            <span className="text-lg text-gray-600">{`${user.name.firstname} ${user.name.lastname}`}</span>
                        </div>

                        {/* Email */}
                        <div className="flex justify-between items-center">
                            <span className="text-lg font-semibold text-gray-700">Email:</span>
                            <span className="text-lg text-gray-600">{user.email}</span>
                        </div>

                        {/* Username */}
                        <div className="flex justify-between items-center">
                            <span className="text-lg font-semibold text-gray-700">Username:</span>
                            <span className="text-lg text-gray-600">{user.username}</span>
                        </div>

                        {/* Phone */}
                        <div className="flex justify-between items-center">
                            <span className="text-lg font-semibold text-gray-700">Phone:</span>
                            <span className="text-lg text-gray-600">{user.phone}</span>
                        </div>

                        {/* Address */}
                        <div className="flex justify-between items-center">
                            <span className="text-lg font-semibold text-gray-700">Address:</span>
                            <span className="text-lg text-gray-600">
                                {user.address ? `${user.address.street}, ${user.address.city}, ${user.address.zipcode}` : 'Not Available'}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
