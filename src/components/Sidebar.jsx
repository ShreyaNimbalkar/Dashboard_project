import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink

const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-green-50 shadow-lg fixed">
      <div className="p-6">
        <h2 className="text-lg font-bold mb-6">Company Name</h2>
        <nav className="space-y-4">
          <NavLink
            to="/"
            className="block text-gray-800 hover:bg-green-100 hover:text-green-900 px-4 py-2 rounded transition duration-200 shadow-md hover:shadow-lg"
            activeClassName="bg-green-200 text-green-900 shadow-xl"
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/clients"
            className="block text-gray-800 hover:bg-green-100 hover:text-green-900 px-4 py-2 rounded transition duration-200 shadow-md hover:shadow-lg"
            activeClassName="bg-green-200 text-green-900 shadow-xl"
          >
            Clients
          </NavLink>
          <NavLink
            to="/role-management"
            className="block text-gray-800 hover:bg-green-100 hover:text-green-900 px-4 py-2 rounded transition duration-200 shadow-md hover:shadow-lg"
            activeClassName="bg-green-200 text-green-900 shadow-xl"
          >
            Role Management
          </NavLink>
          <NavLink
            to="#"
            className="block text-gray-800 hover:bg-green-100 hover:text-green-900 px-4 py-2 rounded transition duration-200 shadow-md hover:shadow-lg"
            activeClassName="bg-green-200 text-green-900 shadow-xl"
          >
            Notification
          </NavLink>
          <NavLink
            to="#"
            className="block text-gray-800 hover:bg-green-100 hover:text-green-900 px-4 py-2 rounded transition duration-200 shadow-md hover:shadow-lg"
            activeClassName="bg-green-200 text-green-900 shadow-xl"
          >
            Reports
          </NavLink>
          <NavLink
            to="#"
            className="block text-gray-800 hover:bg-green-100 hover:text-green-900 px-4 py-2 rounded transition duration-200 shadow-md hover:shadow-lg"
            activeClassName="bg-green-200 text-green-900 shadow-xl"
          >
            Settings
          </NavLink>
          <NavLink
            to="#"
            className="block text-gray-800 hover:bg-green-100 hover:text-green-900 px-4 py-2 rounded transition duration-200 shadow-md hover:shadow-lg"
            activeClassName="bg-green-200 text-green-900 shadow-xl"
          >
            Support
          </NavLink>
          <NavLink
            to="#"
            className="block text-gray-800 hover:bg-green-100 hover:text-green-900 px-4 py-2 rounded transition duration-200 shadow-md hover:shadow-lg"
            activeClassName="bg-green-200 text-green-900 shadow-xl"
          >
            Updates
          </NavLink>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
