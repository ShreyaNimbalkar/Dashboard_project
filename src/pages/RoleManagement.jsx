import React, { useState } from 'react';

// Mock Data for Roles
const initialRoles = [
  { id: 1, name: 'Admin', permissions: ['Read', 'Write', 'Delete'] },
  { id: 2, name: 'Manager', permissions: ['Read', 'Write'] },
];

const RoleManagement = () => {
  const [roles, setRoles] = useState(initialRoles);
  const [newRoleName, setNewRoleName] = useState('');
  const [newRolePermissions, setNewRolePermissions] = useState([]);

  const handleAddRole = () => {
    const newRole = {
      id: roles.length + 1,
      name: newRoleName,
      permissions: newRolePermissions,
    };
    setRoles([...roles, newRole]);
    setNewRoleName('');
    setNewRolePermissions([]);
  };

  const handleTogglePermission = (permission) => {
    setNewRolePermissions((prevPermissions) =>
      prevPermissions.includes(permission)
        ? prevPermissions.filter((p) => p !== permission)
        : [...prevPermissions, permission]
    );
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Role Management</h1>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter Role Name"
          className="px-4 py-2 border border-gray-300 rounded mr-2"
          value={newRoleName}
          onChange={(e) => setNewRoleName(e.target.value)}
        />
        <div className="mb-4">
          <label className="block mb-2">Permissions</label>
          {['Read', 'Write', 'Delete'].map((permission) => (
            <div key={permission} className="mb-2">
              <input
                type="checkbox"
                checked={newRolePermissions.includes(permission)}
                onChange={() => handleTogglePermission(permission)}
              />
              <span className="ml-2">{permission}</span>
            </div>
          ))}
        </div>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={handleAddRole}
        >
          Add Role
        </button>
      </div>

      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">Role</th>
            <th className="border border-gray-300 p-2">Permissions</th>
            <th className="border border-gray-300 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr key={role.id}>
              <td className="border border-gray-300 p-2">{role.name}</td>
              <td className="border border-gray-300 p-2">
                {role.permissions.join(', ')}
              </td>
              <td className="border border-gray-300 p-2">
                <button className="text-yellow-600">Edit</button>
                <button className="text-red-600 ml-2">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RoleManagement;
