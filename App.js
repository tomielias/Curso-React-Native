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
      <SafeAreaView style={styles.container}>
        <View style={{ flex: 1, backgroundColor: "powderblue" }} />
        <View style={{ flex: 2, backgroundColor: "skyblue" }} />
        <View style={{ flex: 3, backgroundColor: "steelblue" }} />
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
