import React from "react";
import { View, Text } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Spacer } from "../spacer/spacer.component";
import { CompactInfo } from "../restaurants/compact-info.component";
import WebView from "react-native-webview";

const FavouritesView = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

export const FavouritesBar = ({ favourties, onNavigate }) => {
  if (favourties.length === 0) {
    return null;
  }
  return (
    <FavouritesView>
      <Spacer variant="left.large">
        <Text variant="caption">Favourites</Text>
      </Spacer>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourties.map((restaurant) => {
          const key = restaurant.name;
          return (
            <Spacer key={key} position="left" size="medium">
              <TouchableOpacity
                onPress={() =>
                  onNavigate("RestaurantsDetails", {
                    restaurant: restaurant,
                  })
                }
              >
                <CompactInfo restaurant={restaurant} />
              </TouchableOpacity>
            </Spacer>
          );
        })}
      </ScrollView>
    </FavouritesView>
  );
};
