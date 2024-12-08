import React, { useState } from 'react';

// Mock Data for Users
const initialUsers = [
  { id: 1, name: 'John Doe', role: 'Admin', status: 'Active' },
  { id: 2, name: 'Jane Smith', role: 'Manager', status: 'Inactive' },
];

const UserManagement = () => {
  const [users, setUsers] = useState(initialUsers);
  const [newUserName, setNewUserName] = useState('');
  const [newUserRole, setNewUserRole] = useState('');
  const [newUserStatus, setNewUserStatus] = useState('Active');

  // Handle Add User
  const handleAddUser = () => {
    const newUser = {
      id: users.length + 1,
      name: newUserName,
      role: newUserRole,
      status: newUserStatus,
    };
    setUsers([...users, newUser]);
    setNewUserName('');
    setNewUserRole('');
  };

  // Handle Edit User
  const handleEditUser = (id) => {
    const updatedUsers = users.map((user) =>
      user.id === id ? { ...user, status: user.status === 'Active' ? 'Inactive' : 'Active' } : user
    );
    setUsers(updatedUsers);
  };

  // Handle Delete User
  const handleDeleteUser = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">User Management</h1>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter User Name"
          className="px-4 py-2 border border-gray-300 rounded mr-2"
          value={newUserName}
          onChange={(e) => setNewUserName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter User Role"
          className="px-4 py-2 border border-gray-300 rounded mr-2"
          value={newUserRole}
          onChange={(e) => setNewUserRole(e.target.value)}
        />
        <select
          className="px-4 py-2 border border-gray-300 rounded"
          value={newUserStatus}
          onChange={(e) => setNewUserStatus(e.target.value)}
        >
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded ml-4"
          onClick={handleAddUser}
        >
          Add User
        </button>
      </div>

      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">Name</th>
            <th className="border border-gray-300 p-2">Role</th>
            <th className="border border-gray-300 p-2">Status</th>
            <th className="border border-gray-300 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="border border-gray-300 p-2">{user.name}</td>
              <td className="border border-gray-300 p-2">{user.role}</td>
              <td className="border border-gray-300 p-2">{user.status}</td>
              <td className="border border-gray-300 p-2">
                <button
                  className="text-yellow-600"
                  onClick={() => handleEditUser(user.id)}
                >
                  {user.status === 'Active' ? 'Deactivate' : 'Activate'}
                </button>
                <button
                  className="text-red-600 ml-2"
                  onClick={() => handleDeleteUser(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
