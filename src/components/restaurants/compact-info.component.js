import React from "react";
import styled from "styled-components";
import { Text, Image } from "react-native";
import { Platform } from "react-native";
import WebView from "react-native-webview";
const RestaurantCalloutText = styled(Text)`
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: bold;
  margin: auto;
`;
const RestaurantCalloutImage = styled(Image)`
  width: 75px;
  height: 75px;
  margin: auto;
  border-radius: 5px;
`;

export const CompactInfo = ({ restaurant }) => {
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
