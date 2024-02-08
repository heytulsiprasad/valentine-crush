import { createContext, useState } from "react";

const initialValue = {
  auth: false,
  setAuth: () => {},
  currentUser: null,
  setCurrentUser: () => {},
};

export const AuthContext = createContext(initialValue);

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(initialValue.auth);
  const [currentUser, setCurrentUser] = useState(initialValue.currentUser);

  const value = {
    auth,
    setAuth,
    currentUser,
    setCurrentUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
