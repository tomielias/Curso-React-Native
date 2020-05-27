import React from "react";
import { NativeRouter, Route, Switch } from "react-router-native";

import { About } from "./components/About";
import Home from "./components/Home";

const App = () => {
  return (
    <NativeRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </NativeRouter>
  );
};

export default App;
