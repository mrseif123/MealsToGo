import camelize from "camelize";

import { locations } from "./location.mock";

export const locationRequest = (searchTerm) => {};

export const locationTransform = (results) => {
  const formattedResults = camelize(results);
  const { geometry = {} } = formattedResults.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng, viewport: geometry.viewport };
};
