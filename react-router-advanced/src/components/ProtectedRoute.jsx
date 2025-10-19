// src/components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth"; // ✅ Ensure this path is correct

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth(); // ✅ useAuth now included

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
