import React from "react";
import { Text } from "react-native";
import { CounterStyles } from "./CounterStyles";

const Counter = (props) => {
  return <Text style={CounterStyles.text}>{props.count}</Text>;
};

export { Counter };
