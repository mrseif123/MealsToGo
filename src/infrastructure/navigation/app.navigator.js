import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";
import { SafeArea } from "../../components/utility/safeArea.component";
import { Ionicons } from "@expo/vector-icons";
import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

const Settings = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
);

const Map = () => (
  <SafeArea>
    <Text>Map</Text>
  </SafeArea>
);

export const AppNavigator = () => {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={createScreenOptions}
          tabBarOptions={{
            activeTintColor: "tomato",
            inactiveTintColor: "gray",
          }}
        >
          <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
          <Tab.Screen name="Map" component={Map} />
          <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};