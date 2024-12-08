import React, { useState } from 'react';

const Clients = () => {
  const [clients, setClients] = useState([
    { id: 1, name: 'FirstBank Facilities', details: 'Deep cleaning of all office windows' },
    { id: 2, name: 'Chicken-Republic Facilities', details: 'Disinfecting the facilities' },
    { id: 3, name: 'LAMATA', details: 'Painting worn areas of the office' },
  ]);

  const handleAddClient = () => {
    // Add functionality to add a new client
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Clients</h1>
      <button className="bg-green-600 text-white px-4 py-2 rounded mb-4" onClick={handleAddClient}>
        Add New Client
      </button>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">Client Name</th>
            <th className="border border-gray-300 p-2">Details</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr key={client.id}>
              <td className="border border-gray-300 p-2">{client.name}</td>
              <td className="border border-gray-300 p-2">{client.details}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Clients;
