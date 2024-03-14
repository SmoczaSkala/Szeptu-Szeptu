import React, { createContext, useState } from "react";

// Tworzymy kontekst autoryzacji
export const AuthContext = createContext();

// Komponent AuthProvider, który będzie zawierał stan autoryzacji i udostępniał go do innych komponentów
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null); // Stan przechowujący token

  // Funkcja do ustawiania nowego tokena
  const setAuthToken = (newToken) => {
    setToken(newToken);
  };

  return (
    <AuthContext.Provider value={{ token, setAuthToken }}>
      {children}
    </AuthContext.Provider>
  );
};
