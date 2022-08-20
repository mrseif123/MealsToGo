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
    if (!searchTerm.length) {
      return;
    }

    locationRequest(searchTerm.toLowerCase())
      .then(locationTransform)
      .then((result) => {
        setLocation(result);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    onSearch(keyword);
  }, [keyword]);

  return (
    <LocationContext.Provider
      value={{ isLoading, error, keyword, search: onSearch, location }}
    >
      <>{children}</>
    </LocationContext.Provider>
  );
};
