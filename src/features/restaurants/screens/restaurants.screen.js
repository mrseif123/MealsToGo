import React, { useContext, useState } from "react";
import { FlatList } from "react-native";
import { Colors, ActivityIndicator } from "react-native-paper";

import styled from "styled-components";
import { RestaurantInfo } from "../components/restaurantInfoCard.component";
import { SafeArea } from "../../../components/utility/safeArea.component.js";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { Spacer } from "../../../components/spacer/spacer.component";
import { FavouritesBar } from "../../../components/favourites/favouritesBar.component";
import { Search } from "../components/search.component";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FadeInView } from "../../../components/animations/fade.animations";

export const RestaurantCardList = styled(FlatList).attrs({ padding: 16 })``;

const Loading = styled(ActivityIndicator)`
  margin-top: 40%;
`;

export const RestaurantsScreen = ({ navigation }) => {
  const { restaurants, isLoading } = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);

  return (
    <>
      <SafeArea>
        <Search
          isFavourtiesToggled={isToggled}
          onFavouritesToggle={() => setIsToggled(!isToggled)}
        />
        {isLoading && (
          <Loading size={50} animating={true} color={Colors.red800} />
        )}
        {isToggled && (
          <FavouritesBar
            favourties={favourites}
            onNavigate={navigation.navigate}
          />
        )}
        <RestaurantCardList
          data={restaurants}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("RestaurantsDetails", {
                    restaurant: item,
                  })
                }
              >
                <Spacer position="bottom" size="large">
                  <FadeInView duration={1000}>
                    <RestaurantInfo restaurant={item} />
                  </FadeInView>
                </Spacer>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => item.name}
        />
      </SafeArea>
    </>
  );
};

export default RestaurantsScreen;
