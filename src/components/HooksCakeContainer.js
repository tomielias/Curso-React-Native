import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, Text } from "react-native";
import Button from "./Button";
import { buyCake } from "../redux";

const HooksCakeContainer = () => {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Number of Cakes {numOfCakes}</Text>
      <Button name="BUY CAKE" onPress={() => dispatch(buyCake())} />
    </View>
  );
};

export default HooksCakeContainer;
