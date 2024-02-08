import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

// enables the use of this auth context
export const useAuth = () => useContext(AuthContext);
