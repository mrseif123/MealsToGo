import React, { useContext, useEffect } from "react";
import { Searchbar } from "react-native-paper";
import { View } from "react-native";
import styled from "styled-components";
import { LocationContext } from "../../../services/location/location.context";

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.ui.tertiary};
`;

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = React.useState(keyword);

  useEffect(() => {
    search(searchKeyword);
  }, []);
  return (
    <SearchContainer>
      <Searchbar
        placeholder={"Search for a location"}
        value={searchKeyword}
        onChangeText={(text) => {
          if (!text.length) {
          }
          setSearchKeyword(text);
        }}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
      />
    </SearchContainer>
  );
};
