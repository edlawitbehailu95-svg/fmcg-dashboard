// src/App.js
import React from "react";
import {BrowserRouter as Router,Routes,Route,NavLink,Navigate} from "react-router-dom";
import DashboardHome from "./DashboardHome";
import CustomerList from "./CustomerList";
import ReorderQueue from "./ReorderQueue";
import RevenueTrends from "./RevenueTrends";
import DeliveryPlan from "./DeliveryPlan";
import Login from "./Login";
import { AuthProvider } from "./AuthContext";
import ProtectedRoute from "./ProtectedRoute";
import LogoutButton from "./LogoutButton";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container-fluid">
        <span className="navbar-brand fw-bold text-primary">📊 FMCG Dashboard</span>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink to="/home" className="nav-link">🏠 Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/customers" className="nav-link">📋 Customers</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/reorder" className="nav-link">📦 Reorder Queue</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/trends" className="nav-link">💹 Revenue Trends</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/delivery" className="nav-link">🚚 Delivery Plan</NavLink>
            </li>
            <li className="nav-item">
              <LogoutButton />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<Login />} />
             {/* Dashboard pages */}
        <Route path="/home" element={<ProtectedRoute><DashboardHome /></ProtectedRoute>} />
<Route path="/customers" element={<ProtectedRoute><CustomerList /></ProtectedRoute>} />
<Route path="/reorder" element={<ProtectedRoute><ReorderQueue /></ProtectedRoute>} />
<Route path="/trends" element={<ProtectedRoute><RevenueTrends /></ProtectedRoute>} />
<Route path="/delivery" element={<ProtectedRoute><DeliveryPlan /></ProtectedRoute>} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;