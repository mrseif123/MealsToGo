import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/infrastructure/theme";
import * as firebase from "firebase";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

import { Navigation } from "./src/infrastructure/navigation";

const firebaseConfig = {
  apiKey: "AIzaSyDAlZr9Dp4lFxxoRd-dV0tLZNO1UKrCw_I",
  authDomain: "mealstogo-mrs.firebaseapp.com",
  projectId: "mealstogo-mrs",
  storageBucket: "mealstogo-mrs.appspot.com",
  messagingSenderId: "570911697341",
  appId: "1:570911697341:web:c468811185001ca6fd0ad4",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
