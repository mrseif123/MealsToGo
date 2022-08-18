import React from "react";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/text.component";
import {
  RestaurantCard,
  Info,
  RatingAndInfoView,
  Rating,
  RestaurantCardCover,
  IconsView,
  RestaurantInfoIcon,
} from "./restaurnatInfoCard.styles";

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "The Alfonzo Shfonzo",
    icon = "https://picsum.photos/700",
    photos = ["https://picsum.photos/700", "https://via.placeholder.com/150"],
    address = "212 S. Wacker Dr, Chicago, IL 60606",
    isOpenNow = true,
    rating = 5,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <RatingAndInfoView>
          <Rating>
            {ratingArray.map((key) => (
              <RestaurantInfoIcon
                key={key}
                source={require("../../../../assets/rating.jpg")}
              />
            ))}
          </Rating>
          <IconsView>
            {isClosedTemporarily && (
              <Text variant="error">Closed temporarily</Text>
            )}
            {isOpenNow && (
              <Spacer position="left" size="large">
                <RestaurantInfoIcon
                  source={require("../../../../assets/open.jpg")}
                />
              </Spacer>
            )}
            <Spacer position="left" size="large">
              <RestaurantInfoIcon
                source={require("../../../../assets/bed.png")}
              />
            </Spacer>
          </IconsView>
        </RatingAndInfoView>

        <Text variant="caption">{address}</Text>
      </Info>
    </RestaurantCard>
  );
};

export default RestaurantInfo;
