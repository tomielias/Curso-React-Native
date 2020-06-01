import React, { useState } from "react";
import { connect } from "react-redux";
import { View, Text } from "react-native";
import { Input } from "native-base";
import Button from "./Button";
import { buyCake } from "../redux";

const NewCakeContainer = (props) => {
  const [number, setNumber] = useState("");
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Number of Cakes {props.numOfCakes}</Text>
      <Button name="BUY CAKE" onPress={() => props.buyCake()} />
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (number) => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
