import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Searchbar } from "react-native-paper";
import { Provider as PaperProvider } from "react-native-paper";

export default function App() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <>
      <PaperProvider>
        <View style={styles.container}>
          <View style={styles.searchContainer}>
            <Searchbar
              placeholder="Search"
              onChange={onChangeSearch}
              value={searchQuery}
            />
          </View>
          <View style={styles.listContainer}>
            <Text style={styles.list}>list</Text>
          </View>
        </View>
        <ExpoStatusBar style="auto" />
      </PaperProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },

  searchContainer: {
    backgroundColor: "white",
    flex: 0.05,
    width: "100%",
    padding: 10,
    justifyContent: "center",
    alignContent: "flex-start",
  },
  searchText: {},

  listContainer: {
    backgroundColor: "yellow",
    padding: 10,
    flex: 1,
    width: "100%",
    height: "100%",
  },
});
