import React, { useState, createContext } from "react";
import * as firebase from "firebase";
import { loginRequest } from "./authentication.service";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setUser(user);
      setLoading(false);
      // setIsAuthenticated(true);
    } else {
      setLoading(false);
    }
  });

  const onLogin = async (email, password) => {
    setLoading(true);

    loginRequest(email, password)
      .then((u) => {
        setUser(u);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(error.toString());
      });
  };

  const onRegister = async (email, password, repeatedPassword) => {
    setLoading(true);
    if (password !== repeatedPassword) {
      setError("Passwords do not match");
      return;
    }
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((u) => {
        setUser(u);
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        setError(e.toString());
      });
  };

  const onLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(null);
        setError(null);
      });
  };

  return (
    <AuthenticationContext.Provider
      value={{
        user,
        loading,
        error,
        onLogin,
        onRegister,
        onLogout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
