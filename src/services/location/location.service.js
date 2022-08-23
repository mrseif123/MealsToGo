import camelize from "camelize";
import { host, isDevelopment, isMock } from "../../utils/env";
import { locations } from "./location.mock";

export const locationRequest = (searchTerm) => {
  if (isDevelopment) {
    return new Promise((resolve, reject) => {
      const locationMock = locations[searchTerm];
      if (!locationMock) {
        reject("not found");
      }
      resolve(locationMock);
    });
  }
  return fetch(`${host}/geocode?=city${searchTerm}&mock=${isMock}`).then((res) => {
    return res.json();
  });
};

export const locationTransform = (results) => {
  const formattedResults = camelize(results);
  const { geometry = {} } = formattedResults.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng, viewport: geometry.viewport };
};
