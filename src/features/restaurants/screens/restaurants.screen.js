import React from "react";
import { StatusBar, View, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";
import { RestaurantInfo } from "../components/restaurantInfoCard.component";

const SafeArea = styled(View)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight};
`;

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.ui.quaternary};
`;

const RestaurantCardList = styled(FlatList).attrs({ padding: 16 })``;

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
        <RestaurantCardList
          data={[{ name: 1 }, { name: 2 }, { name: 3 }, { name: 4 }]}
          renderItem={({ item }) => <RestaurantInfo restaurant={item} />}
          keyExtractor={(item) => item.name}
        />
      </SafeArea>
    </>
  );
};

export default RestaurantsScreen;
