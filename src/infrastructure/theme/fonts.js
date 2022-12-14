import { Platform } from "react-native";
export const fonts = {
  body: Platform.OS === "ios" ? "Copperplate" : "Roboto",
  heading: Platform.OS === "ios" ? "Copperplate" : "Roboto",
  monospace: Platform.OS === "ios" ? "Copperplate" : "Roboto",
};

export const fontWeights = {
  regular: 400,
  medium: 500,
  bold: 700,
};

export const fontSizes = {
  small: "9px",
  caption: "12px",
  button: "14px",
  body: "16px",
  title: "20px",
  h5: "24px",
  h4: "34px",
  h3: "45px",
  h2: "56px",
  h1: "112px",
};
