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
    this.state = {
      value: "",
      count: 0,
    };
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {this.state.value ? (
          <Text style={styles.welcome}>{this.state.value}</Text>
        ) : (
          <Text style={styles.welcome}>Welcome to React Native!</Text>
        )}
        <Image
          source={require("./assets/ReactNative.png")}
          style={styles.image}
        />
        <TextInput
          style={{
            height: 40,
            width: 200,
            borderColor: "#AAAAAA",
            borderWidth: 2,
          }}
          onChangeText={(text) => this.setState({ value: text })}
          value={this.state.value}
        />
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.setState({ count: this.state.count + 1 })}
          >
            <Text> Sumar </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.setState({ count: this.state.count - 1 })}
          >
            <Text> Restar </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.countContainer}>
          <Text style={styles.countText}>{this.state.count}</Text>
        </View>
        <ScrollView
          style={{
            marginTop: 30,
            width: 200,
          }}
        >
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </Text>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 15,
    borderRadius: 10,
    margin: 20,
    marginTop: 50,
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
