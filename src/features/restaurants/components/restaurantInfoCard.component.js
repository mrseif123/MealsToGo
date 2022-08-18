import React from "react";
import { Card } from "react-native-paper";
import styled from "styled-components";
import { Image, View, Text } from "react-native";
import { Spacer } from "../../../components/spacer.component";

const RestaurantCard = styled(Card)`
  height: 300px;
`;

const RestaurantCardCover = styled(Card.Cover)`
  background-color: ${(props) => props.theme.colors.ui.tertiary};
`;

const Title = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.title};
`;

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const Address = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[1]};
  padding-bottom: ${(props) => props.theme.space[1]};
`;

const RatingAndOpenNowView = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const RestaurantInfoIcon = styled(Image)`
  width: 20px;
  height: 20px;
`;

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "restaurant name",
    icon = "https://picsum.photos/700",
    photos = ["https://picsum.photos/700", "https://via.placeholder.com/150"],
    address = "restaurant address",
    isOpenNow = true,
    rating = 5,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <RatingAndOpenNowView>
          <Rating>
            {ratingArray.map((key) => (
              <RestaurantInfoIcon
                key={key}
                source={require("../../../../assets/rating.jpg")}
              />
            ))}
          </Rating>
          {isClosedTemporarily && (
            <Text style={{ color: "red" }}>Closed temporarily</Text>
          )}
          {isOpenNow && (
            <RestaurantInfoIcon
              source={require("../../../../assets/open.jpg")}
            />
          )}
          <RestaurantInfoIcon source={require("../../../../assets/bed.png")} />
        </RatingAndOpenNowView>

        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};

export default RestaurantInfo;
