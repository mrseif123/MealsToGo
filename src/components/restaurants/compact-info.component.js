import React from "react";
import styled from "styled-components";
import { Text, Image } from "react-native";
import { Platform } from "react-native";
import WebView from "react-native-webview";

const RestaurantCalloutText = styled(Text)`
  font-size: 10px;
  font-weight: bold;
  margin: auto;
`;
const RestaurantCalloutImage = styled(Image)`
  width: 120px;
  height: 120px;
  margin: auto;
  border-radius: 5px;
`;

export const CompactInfo = ({ restaurant, isMap }) => {
  if (Platform.OS === "android" && isMap) {
    return (
      <>
        <WebView source={{ uri: restaurant.photos[0] }} />
        <RestaurantCalloutText>{restaurant.name}</RestaurantCalloutText>
      </>
    );
  } else if (Platform.OS === "android" && !isMap) {
    return (
      <>
        <RestaurantCalloutImage source={{ uri: restaurant.photos[0] }} />
        <RestaurantCalloutText>{restaurant.name}</RestaurantCalloutText>
      </>
    );
  }
  return (
    <>
      {Platform.OS === "ios" ? (
        <RestaurantCalloutImage source={{ uri: restaurant.photos[0] }} />
      ) : (
        <WebView source={{ uri: restaurant.photos[0] }} />
      )}
      <RestaurantCalloutText>{restaurant.name}</RestaurantCalloutText>
    </>
  );
};
