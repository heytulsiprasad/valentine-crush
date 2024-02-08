import { useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { auth } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth) {
      // Navigate to login page if user is not authenticated
      navigate("/login");
    }
  });

  return <div>{children}</div>;
};

export default ProtectedRoute;
