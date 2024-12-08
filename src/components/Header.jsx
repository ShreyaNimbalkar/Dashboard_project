import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();  // useNavigate hook for navigation

  const handleSignOut = () => {
    // Clear any authentication tokens or data here if necessary
    // Navigate to the login page
    navigate('/login');
  };

  return (
    <header className="w-full bg-green-50 shadow p-4 flex justify-between items-center">
      <div>
        <input
          type="text"
          placeholder="Search..."
          className="border p-2 rounded"
        />
      </div>
      <div className="space-x-4">
        {/* Change this link to point to the /user-management page */}
        <Link to="/user-management">
          <button className="bg-green-600 text-white px-4 py-2 rounded">
            Add New Client
          </button>
        </Link>
        {/* Add the Sign-out functionality */}
        <button onClick={handleSignOut} className="bg-green-600 text-white px-4 py-2 rounded">
          Sign out
        </button>
      </div>
    </header>
  );
};

export default Header;
