import React, { useContext, useEffect } from "react";
import { Searchbar } from "react-native-paper";
import { View } from "react-native";
import styled from "styled-components";
import { LocationContext } from "../../../services/location/location.context";

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
  position: absolute;
  z-index: 2;
  top: 50px;
  width: 100%;
  justify-content: center;
`;

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = React.useState(keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <SearchContainer>
      <Searchbar
        placeholder={"Search for a location"}
        icon="map"
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
