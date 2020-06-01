import React from "react";
import { connect } from "react-redux";
import { View, Text } from "react-native";
import Button from "./Button";
import { buyIceCream } from "../redux";

const IceCreamContainer = (props) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Number of IceCreams {props.numOfIceCreams}</Text>
      <Button name="BUY ICE CREAM" onPress={props.buyIceCream} />
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfIceCreams: state.iceCream.numOfIceCreams,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
