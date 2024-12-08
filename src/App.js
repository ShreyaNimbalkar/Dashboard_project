import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Clients from './pages/Clients';
import UserManagement from './pages/UserManagement'; // Make sure this import is present
import RoleManagement from './pages/RoleManagement'; // Ensure this import is correct
import "react-datepicker/dist/react-datepicker.css";
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';


function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 ml-64">
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/user-management" element={<UserManagement />} />
            <Route path="/role-management" element={<RoleManagement />} /> {/* Add this route */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
