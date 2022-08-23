import React, {
  useState,
  createContext,
  useEffect,
  useMemo,
  useContext,
} from "react";

import {
  restaurantsRequest,
  restaurantsTransform,
} from "./restaurants.service";

import { LocationContext } from "../location/location.context";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const locationContext = useContext(LocationContext);
  const { location } = useContext(LocationContext);

  useEffect(() => {
    if (location) {
      const locationString = `${location.lat},${location.lng}`;
      retriveRestaurants(locationString);
    }
  }, [location]);

  const retriveRestaurants = (location) => {
    setIsLoading(true);
    setRestaurants([]);
      restaurantsRequest(location)
        .then(restaurantsTransform)
        .then((data) => {
          setError(null);
          setRestaurants(data);
          setIsLoading(false);
        })
        .catch((err) => {
          setError(err);
          setIsLoading(false);
        });
  };

  useEffect(() => {
    retriveRestaurants();
  }, []);

  return (
    <RestaurantsContext.Provider
      value={{
        restaurants,
        isLoading,
        error,
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};
