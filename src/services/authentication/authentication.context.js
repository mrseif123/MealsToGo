import React, { useState, createContext } from "react";
import * as firebase from "firebase";
import { loginRequest } from "./authentication.service";
export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const onLogin = async (email, password) => {
    loginRequest(email, password)
      .then((u) => {
        setUser(u);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };

  return (
    <AuthenticationContext.Provider
      value={{ user, loading, error, onLogin, isAuthenticated }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
