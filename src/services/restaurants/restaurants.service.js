import { mocks } from "./mock/index.js";
import camelize from "camelize";
export const restaurantRequest = (location = "37.7749295,-122.4194155") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject(new Error("No mock data for this location"));
    }
    resolve(mock);
  });
};

const restaurantsTransform = (results = []) => {
  const mappedResults = results.map((restaurant) => {
    return {
      ...restaurant,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
    };
  });
  const newResult = camelize(mappedResults);
  return newResult;
};

restaurantRequest()
  .then(restaurantsTransform)
  .then((transformedResponse) => {
    console.log(camelize(transformedResponse));
  })
  .catch((error) => {
    console.log(error);
  });
