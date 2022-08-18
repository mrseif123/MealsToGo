import React from "react";
import { StatusBar, View } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";
import { RestaurantInfo } from "./restaurantInfoCard.component";

const SafeArea = styled(View)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight};
`;

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.ui.quaternary};
`;

const RestaurantCardList = styled(View)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.ui.quaternary};
  flex: 1;
`;

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => {
    setSearchQuery(query);
  };
  return (
    <>
      <SafeArea>
        <SearchContainer>
          <Searchbar
            placeholder="Search"
            onChange={onChangeSearch}
            value={searchQuery}
          />
        </SearchContainer>
        <RestaurantCardList>
          <RestaurantInfo />
        </RestaurantCardList>
      </SafeArea>
    </>
  );
};

export default RestaurantsScreen;
