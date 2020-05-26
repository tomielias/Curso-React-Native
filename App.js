import React from "react";
import { NativeRouter, Route, Link } from "react-router-native";

import { About } from "./components/About";
import { Home } from "./components/Home";

const App = () => {
  return (
    <NativeRouter>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </NativeRouter>
  );
};

export default App;
