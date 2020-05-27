import React from "react";
import {
  SafeAreaView,
  View,
  SectionList,
  StyleSheet,
  Text,
} from "react-native";
import { DATA } from "./src/data/data";

import Constants from "expo-constants";

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Item title={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: "#444444",
    padding: 20,
    marginVertical: 5,
  },
  title: {
    fontSize: 25,
    color: "#DDDDDD",
  },
  header: {
    fontSize: 32,
    color: "#444444",
    backgroundColor: "#fff",
    padding: 10,
  },
});
