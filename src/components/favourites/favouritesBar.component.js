import React from "react";
import { View, Text } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Spacer } from "../spacer/spacer.component";
import { CompactInfo } from "../restaurants/compact-info.component";
import { Card } from "react-native-paper";

const FavouritesView = styled(Card)`
  padding: ${(props) => props.theme.space[3]};
  z-index: 1;
  border-radius: 15px;
`;

export const FavouritesBar = ({ favourties, onNavigate }) => {
  if (favourties.length === 0) {
    return null;
  }
  return (
    <FavouritesView elevation={5}>
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
