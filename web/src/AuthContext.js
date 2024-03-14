import { createContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const token = sessionStorage.getItem("token");

  return (
    <AuthContext.Provider value={{ token }}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () =>
  sessionStorage.getItem("token") || localStorage.getItem("token");

export default AuthContext;
