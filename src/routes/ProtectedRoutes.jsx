import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

function ProtectedRoutes({ allowedRoles, children }) {
  const userData = useSelector((state) => state.auth.userData);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Prevent navigating back to login or home if logged in
    window.history.pushState(null, "", window.location.href);
    window.onpopstate = () => {
      window.history.pushState(null, "", window.location.href);
    };
  }, []);

  // If user is not logged in, redirect to login
  if (!userData) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // If user's role is not in the allowedRoles, redirect accordingly
  if (!allowedRoles == userData.role) {
    if (userData.role === "admin") {
      return <Navigate to="/admin-dashboard" replace />;
    } else {
      return <Navigate to="/" replace />;
    }
  }

  return children;
}

export default ProtectedRoutes;
