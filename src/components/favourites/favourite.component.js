import React, { useContext } from "react";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { FavouritesContext } from "../../services/favourites/favourites.context";

const FavouriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 9;
`;

export const Favourite = ({ restaurant }) => {
  const { favourites, addToFavourites, removeFromFavourites } =
    useContext(FavouritesContext);

  const isFavourtie = favourites.find((r) => r.placeID === restaurant.placeID);

  return (
    <FavouriteButton
      onPress={() =>
        !isFavourtie
          ? addToFavourites(restaurant)
          : removeFromFavourites(restaurant)
      }
    >
      <AntDesign
        name={isFavourtie ? "heart" : "hearto"}
        size={24}
        color={isFavourtie ? "red" : "white"}
      />
    </FavouriteButton>
  );
};

export default Favourite;
