import React, { useContext } from "react";
import { View, FlatList, ActivityIndicator } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";
import { RestaurantInfo } from "../components/restaurantInfoCard.component";
import { SafeArea } from "../../../components/utility/safeArea.component.js";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { Spacer } from "../../../components/spacer/spacer.component";
import { colors } from "../../../infrastructure/theme/colors";
import { Search } from "../components/search.component";

const RestaurantCardList = styled(FlatList).attrs({ padding: 16 })``;

const Loading = styled(ActivityIndicator)`
  margin-top: 24px;
`;

const LoadingContainer = styled.View`
  ${"" /* postion: absolute; */}
  top: 50%;
`;

export const RestaurantsScreen = () => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);

  return (
    <>
      <SafeArea>
        {isLoading && (
          <LoadingContainer>
            <Loading size={50} animating={true} color={colors.red800} />
          </LoadingContainer>
        )}
        <Search />
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
