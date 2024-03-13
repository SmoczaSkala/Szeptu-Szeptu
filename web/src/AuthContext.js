import { createContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const token = sessionStorage.getItem("token");

  return (
    <AuthContext.Provider value={{ token }}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  const token = sessionStorage.getItem("token");
  if (!token) {
    throw new Error("No token found in sessionStorage");
  }
  return token;
};
