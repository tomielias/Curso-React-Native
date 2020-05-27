import React from "react";
import { SafeAreaView, View, FlatList, StyleSheet, Text } from "react-native";
import { DATA } from "./src/data/data";

function Item({ title }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: "#444444",
    padding: 20,
    marginVertical: 5,
    marginHorizontal: 5,
  },
  title: {
    fontSize: 32,
    color: "#DDDDDD",
  },
});
