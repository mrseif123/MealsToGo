import React from "react";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Favourite } from "../../../components/favourites/favourite.component";
import { View } from "react-native";
import { Text } from "../../../components/typography/text.component";
import {
  RestaurantCard,
  Info,
  RatingAndInfoView,
  Rating,
  RestaurantCardCover,
  IconsView,
  Icon,
} from "./restaurnatInfoCard.styles";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
    placeID,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={2}>
      <View>
        <Favourite restaurant={restaurant} />
        <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      </View>
      <Info>
        <Text variant="label">{name}</Text>
        <RatingAndInfoView>
          <Rating>
            {ratingArray.map((_, i) => (
              <SvgXml
                key={`start-${placeID}-${i}`}
                xml={star}
                width={20}
                height={20}
              />
            ))}
          </Rating>
          <IconsView>
            {isClosedTemporarily && (
              <Text variant="error">Closed temporarily</Text>
            )}
            {isOpenNow && (
              <Spacer position="left" size="large">
                {/* <RestaurantInfoIcon
                  source={require("../../../../assets/open.jpg")}
                /> */}
                {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
              </Spacer>
            )}
            <Spacer position="left" size="large">
              <Icon source={{ uri: icon }} />

              {/* <RestaurantInfoIcon
                source={require("../../../../assets/bed.png")}
              /> */}
            </Spacer>
          </IconsView>
        </RatingAndInfoView>

        <Text variant="caption">{address}</Text>
      </Info>
    </RestaurantCard>
  );
};

export default RestaurantInfo;
