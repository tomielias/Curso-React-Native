import React from "react";
import { connect } from "react-redux";
import { View, Text } from "react-native";
import Button from "./Button";
import { buyCake } from "../redux";

const CakeContainer = (props) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Number of Cakes {props.numOfCakes}</Text>
      <Button name="BUY CAKE" onPress={props.buyCake} />
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
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
