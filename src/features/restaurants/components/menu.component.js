import * as React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { List } from "react-native-paper";

export const Menu = () => {
  const [expanded, setExpanded] = React.useState(true);
  const [breakfastExpanded, setBreakfastExpanded] = React.useState(true);
  const [lunchExpanded, setLunchExpanded] = React.useState(true);
  const [dinnerExpanded, setDinnerExpanded] = React.useState(true);
  const [drinksExpanded, setDrinksExpanded] = React.useState(true);

  return (
    <ScrollView>
      <List.Section title="Menu">
        <List.Accordion
          title="Breakfast"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          expanded={breakfastExpanded}
          onPress={() => setBreakfastExpanded(!breakfastExpanded)}
        >
          <List.Item title="Eggs Benedict" />
          <List.Item title="Classic Breakfast" />
        </List.Accordion>

        <List.Accordion
          title="Lunch"
          left={(props) => <List.Icon {...props} icon="food" />}
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}
        >
          <List.Item title="Burger w/ fries" />
          <List.Item title="Steak Sandwich" />
          <List.Item title="Mushroom Soup" />
        </List.Accordion>

        <List.Accordion
          title="Dinner"
          left={(props) => <List.Icon {...props} icon="food-steak" />}
          expanded={dinnerExpanded}
          onPress={() => setDinnerExpanded(!dinnerExpanded)}
        >
          <List.Item title="Spaghetti Bolognese" />
          <List.Item title="Veal Cutlet with Checkin Mushroom Rotini" />
          <List.Item title="Steak Frites" />
        </List.Accordion>

        <List.Accordion
          title="Drinks"
          left={(props) => <List.Icon {...props} icon="glass-cocktail" />}
          expanded={drinksExpanded}
          onPress={() => setDrinksExpanded(!drinksExpanded)}
        >
          <List.Item title="Pepsi" />
          <List.Item title="Coca-cola" />
        </List.Accordion>
      </List.Section>
    </ScrollView>
  );
};

export default Menu;
