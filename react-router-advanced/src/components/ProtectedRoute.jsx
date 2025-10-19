import { Navigate } from "react-router-dom";

// Simulated Auth
const isAuthenticated = false; // Change to true to allow access

const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default ProtectedRoute;
