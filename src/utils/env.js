const liveHost = "https://us-central1-mealstogo-mrs.cloudfunctions.net"
const localHost = "https://localhost:5001/mealstogo-mrs/us-central1";
export const isDevelopment = process.env.NODE_ENV === "development";
// export const host = isDevelopment ? localHost : liveHost;
export const host =  liveHost;
