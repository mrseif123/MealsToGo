import { Platform } from "react-native";

const liveHost = "https://us-central1-mealstogo-mrs.cloudfunctions.net"
const localHost = "http://localhost:5001/mealstogo-mrs/us-central1";
const isAndroid = Platform.OS === "android";
export const isMock = true;
export const isDevelopment = process.env.NODE_ENV === "development";
export const host = !isDevelopment || isAndroid ? localHost : liveHost;
