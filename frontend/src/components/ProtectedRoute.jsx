// components/ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ user, requiredRole, children }) {
  if (!user) {
    // Not logged in, redirect to login
    return <Navigate to="/login" replace />;
  }
  if (requiredRole && user.role !== requiredRole) {
    // Logged in but wrong role, redirect somewhere else
    return <Navigate to="/" replace />;
  }
  return children;
}
