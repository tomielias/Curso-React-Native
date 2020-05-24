import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View
          style={{
            flex: 1,
            backgroundColor: "powderblue",
            flexDirection: "row-reverse",
          }}
        >
          <View style={{ flex: 1, backgroundColor: "powderblue" }} />
          <View style={{ flex: 2, backgroundColor: "skyblue" }} />
          <View
            style={[
              {
                flex: 3,
                backgroundColor: "steelblue",
              },
              styles.center,
            ]}
          >
            <Text style={styles.text}>REACT</Text>
          </View>
        </View>
        <View style={{ flex: 2, backgroundColor: "skyblue" }}>
          <View style={{ flex: 1, backgroundColor: "powderblue" }} />
          <View style={{ flex: 1, backgroundColor: "skyblue" }} />
          <View style={{ flex: 1, backgroundColor: "steelblue" }} />
        </View>
        <View
          style={{
            flex: 3,
            backgroundColor: "steelblue",
            flexDirection: "row",
          }}
        >
          <View style={{ flex: 1, backgroundColor: "powderblue" }}>
            <View style={{ flex: 1, backgroundColor: "powderblue" }} />
            <View style={{ flex: 2, backgroundColor: "skyblue" }} />
            <View style={{ flex: 3, backgroundColor: "steelblue" }} />
          </View>
          <View style={{ flex: 2, backgroundColor: "skyblue" }} />
          <View style={{ flex: 3, backgroundColor: "steelblue" }}>
            <View style={{ flex: 1, backgroundColor: "powderblue" }} />
            <View style={{ flex: 2, backgroundColor: "skyblue" }} />
            <View
              style={[{ flex: 3, backgroundColor: "steelblue" }, styles.center]}
            >
              <Text style={styles.text}>NATIVE</Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  text: {
    color: "white",
    fontSize: 20,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
});
