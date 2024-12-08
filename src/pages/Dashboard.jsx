import React, { useState } from 'react';
import OverviewCard from '../components/OverviewCard';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"; 


const Dashboard = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Office Cleaning', assignedTo: 'Alex', deadline: '2024-11-26', status: 'In Progress' },
  ]);

  const [editingTask, setEditingTask] = useState(null);

  const handleEdit = (task) => {
    setEditingTask({ ...task });
  };

  const handleSave = () => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === editingTask.id ? { ...editingTask } : task
      )
    );
    setEditingTask(null);
  };

  const handleDelete = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const handleStatusChange = (e, task) => {
    const newStatus = e.target.value;
    setEditingTask((prev) => ({ ...prev, status: newStatus }));
  };

  const handleDateChange = (date) => {
    setEditingTask((prev) => ({ ...prev, deadline: date }));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Streamline Your Cleaning</h1>
      <div className="grid grid-cols-3 gap-4">
        <OverviewCard title="Active Tasks" count={tasks.filter((task) => task.status === 'In Progress').length} />
        <OverviewCard title="Pending Approvals" count={tasks.filter((task) => task.status === 'Pending').length} />
        <OverviewCard title="Total Clients" count={tasks.length} />
      </div>
      <div className="mt-6">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2">Task</th>
              <th className="border border-gray-300 p-2">Assigned To</th>
              <th className="border border-gray-300 p-2">Deadline</th>
              <th className="border border-gray-300 p-2">Status</th>
              <th className="border border-gray-300 p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id}>
                <td className="border border-gray-300 p-2">
                  {editingTask?.id === task.id ? (
                    <input
                      type="text"
                      value={editingTask.name}
                      onChange={(e) =>
                        setEditingTask((prev) => ({ ...prev, name: e.target.value }))
                      }
                      className="border px-2 py-1"
                    />
                  ) : (
                    task.name
                  )}
                </td>
                <td className="border border-gray-300 p-2">
                  {editingTask?.id === task.id ? (
                    <input
                      type="text"
                      value={editingTask.assignedTo}
                      onChange={(e) =>
                        setEditingTask((prev) => ({ ...prev, assignedTo: e.target.value }))
                      }
                      className="border px-2 py-1"
                    />
                  ) : (
                    task.assignedTo
                  )}
                </td>
                <td className="border border-gray-300 p-2">
                  {editingTask?.id === task.id ? (
                    <DatePicker
                      selected={editingTask.deadline ? new Date(editingTask.deadline) : null}
                      onChange={handleDateChange}
                      className="border px-2 py-1"
                      dateFormat="yyyy-MM-dd"
                      placeholderText="Select date"
                    />
                  ) : (
                    task.deadline
                  )}
                </td>
                <td className="border border-gray-300 p-2">
                  {editingTask?.id === task.id ? (
                    <select
                      value={editingTask.status}
                      onChange={(e) => handleStatusChange(e, task)}
                      className="border px-2 py-1"
                    >
                      <option value="In Progress">In Progress</option>
                      <option value="Pending">Pending</option>
                      <option value="Completed">Completed</option>
                      <option value="Discard">Discard</option>
                    </select>
                  ) : (
                    task.status
                  )}
                </td>
                <td className="border border-gray-300 p-2">
                  {editingTask?.id === task.id ? (
                    <>
                      <button onClick={handleSave} className="text-green-500">
                        Save
                      </button>
                      <button
                        onClick={() => setEditingTask(null)}
                        className="text-red-500 ml-2"
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button onClick={() => handleEdit(task)} className="text-blue-500">
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(task.id)}
                        className="text-red-500 ml-2"
                      >
                        Delete
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
