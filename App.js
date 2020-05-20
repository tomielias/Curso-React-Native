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
import Button from "./components/Button";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
      count: 0,
    };
  }

  sumar = () => {
    this.setState({ count: this.state.count + 1 });
  };

  restar = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <View
            style={{ width: 100, height: 100, backgroundColor: "powderblue" }}
          />
          <View
            style={{ width: 250, height: 250, backgroundColor: "skyblue" }}
          />
          <View
            style={{ width: 350, height: 350, backgroundColor: "steelblue" }}
          />
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
  welcome: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 50,
  },
  image: {
    width: "80%",
    maxWidth: 280,
  },
  countContainer: {
    alignItems: "center",
    padding: 10,
  },
  countText: {
    color: "#333333",
    fontSize: 30,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
});
