// AuthProvider.jsx
import React, { createContext, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const token =
    sessionStorage.getItem("token") || localStorage.getItem("token");

  return (
    <AuthContext.Provider value={{ token }}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
