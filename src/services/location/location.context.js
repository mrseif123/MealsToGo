import { locationRequest, locationTransform } from "./location.service";

import React, { useState, useEffect } from "react";

export const LocationContext = React.createContext();

export const LocationContextProvider = ({ children }) => {
  const [keyword, setKeyword] = useState("san francisco");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [location, setLocation] = useState(null);

  const onSearch = (searchTerm) => {
    setIsLoading(true);
    setKeyword(searchTerm);
  };

  useEffect(() => {
    if (!keyword.length) {
      return;
    }

    locationRequest(keyword.toLowerCase())
      .then(locationTransform)
      .then((result) => {
        setLocation(result);
        setIsLoading(false);
        setError(null);
      })
      .catch((error) => {
        console.log(error);  
        setError(error);
        setIsLoading(false);
      });
  }, [keyword]);

  return (
    <LocationContext.Provider
      value={{ isLoading, error, keyword, search: onSearch, location }}
    >
      <>{children}</>
    </LocationContext.Provider>
  );
};
