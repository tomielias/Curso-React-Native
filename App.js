import React from "react";
import { NativeRouter, Route, Switch } from "react-router-native";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import { About } from "./src/components/About";
import Home from "./src/components/Home";
import CakeContainer from "./src/components/CakeContainer";
import HooksCakeContainer from "./src/components/HooksCakeContainer";
import IceCreamContainer from "./src/components/IceCreamContainer";
import NewCakeContainer from "./src/components/NewCakeContainer";

const App = () => {
  return (
    <Provider store={store}>
      <CakeContainer />
      <HooksCakeContainer />
      <IceCreamContainer />
      <NewCakeContainer />
    </Provider>
  );
};

export default App;
