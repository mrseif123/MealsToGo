import React from "react";
import { Card } from "react-native-paper";
import styled from "styled-components";

const RestaurantCard = styled(Card)``;

const RestaurantCardCover = styled(Card.Cover)`
  background-color: ${(props) => props.theme.colors.ui.tertiary};
`;

const Title = styled.Text`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.ui.tertiary};
`;

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "restaurant name",
    icon = "https://via.placeholder.com/150",
    photos = ["https://picsum.photos/700", "https://via.placeholder.com/150"],
    address = "restaurant address",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = false,
  } = restaurant;
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </RestaurantCard>
  );
};

export default RestaurantInfo;
