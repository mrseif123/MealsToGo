import camelize from "camelize";

import { locations } from "./location.mock";

export const locationRequest = (searchTerm) => {
  return new Promise((resolve, reject) => {
    const locationMock = locations[searchTerm];
    if (locationMock) {
      resolve(locationMock);
    }
    reject(new Error("Location not found"));
  });
};

export const locationTransform = (results) => {
  const formattedResults = camelize(results);
  const { geometry = {} } = formattedResults.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng, viewport: geometry.viewport };
};
