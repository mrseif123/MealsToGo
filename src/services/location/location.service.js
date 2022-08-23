import camelize from "camelize";

// import { locations } from "./location.mock";

export const locationRequest = (searchTerm) => {
  return fetch(
    `http://localhost:5001/mealstogo-mrs/us-central1/geocode?city=${searchTerm}`
  ).then((res) => {
    return res.json();
  });
};

export const locationTransform = (results) => {
  console.log(results);
  const formattedResults = camelize(results);
  const { geometry = {} } = formattedResults.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng, viewport: geometry.viewport };
};
