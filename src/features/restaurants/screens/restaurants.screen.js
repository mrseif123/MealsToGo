import React, { useContext } from "react";
import { View, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";
import { RestaurantInfo } from "../components/restaurantInfoCard.component";
import { SafeArea } from "../../../components/utility/safeArea.component.js";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { Spacer } from "../../../components/spacer/spacer.component";

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.ui.tertiary};
`;

const RestaurantCardList = styled(FlatList).attrs({ padding: 16 })``;

export const RestaurantsScreen = () => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);
  return (
    <>
      <SafeArea>
        <SearchContainer>
          <Searchbar />
        </SearchContainer>
        <RestaurantCardList
          data={restaurants}
          renderItem={({ item }) => {
            return (
              <Spacer position="bottom" size="large">
                <RestaurantInfo restaurant={item} />
              </Spacer>
            );
          }}
          keyExtractor={(item) => item.name}
        />
      </SafeArea>
    </>
  );
};

export default RestaurantsScreen;
