import React from "react";
import * as firebase from "firebase";

const loginRequest = async (email, password) => {
  const response = await firebase
    .auth()
    .signInWithEmailAndPassword(email, password);
  return response;
};
