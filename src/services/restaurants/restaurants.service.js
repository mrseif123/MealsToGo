import camelize from "camelize";
import {host, isDevelopment} from "../../utils/env"
import { mocks, mockImages } from "./mocks";

export const restaurantsRequest = (location) => {
  if (isDevelopment) {
      return new Promise((resolve, reject) => {
        const mock = mocks[location];
        if (!mock) {
          reject("not found");
        }
        resolve(mock);
      });
  }
  return fetch(
    `${host}/placesNearby?location=${location}`
  ).then((res) => {
    return res.json();
  });
};

export const restaurantsTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    if (isDevelopment) {
      restaurant.photos = restaurant.photos.map((p) => {
        return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
      });
          return {
            ...restaurant,
            isOpenNow:
              restaurant.opening_hours && restaurant.opening_hours.open_now,
            isClosedTemporarily:
              restaurant.business_status === "CLOSED_TEMPORARILY",
            address: restaurant.vicinity,
          };
    }
    return {
      ...restaurant,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
      address: restaurant.vicinity,
    };
  });

  return camelize(mappedResults);
};
