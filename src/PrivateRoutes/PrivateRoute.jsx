import React, { useContext } from "react";
import { AuthContext } from "../components/Porviders/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <div>
        <div className="flex items-center justify-center h-screen bg-white">
          <div className="animate-spin rounded-full h-32 w-32 border-t-8 border-b-8 border-gray-900"></div>
        </div>
      </div>
    );
  }
  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
