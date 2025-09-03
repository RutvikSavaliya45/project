import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// 🔹 Pages
import Login from "./pages/Login";
import Register from "./pages/Register";
import FarmerDashboard from "./pages/farmer/FarmerDashboard";
import AdminDashboard from "./pages/Admin/AdminDashboard";



function App() {
  return (
    <Router>
      <Routes>
        {/* 🔹 Auth Pages */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/farmer/dashboard" element={<FarmerDashboard />} />
        
        {/* 🔹 Admin Pages */}
        <Route path="admin/dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
