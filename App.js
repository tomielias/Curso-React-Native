import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from "./components/Button"

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      counter: 0
    };
  }
  
  changeCounter(val){
    this.setState(prevState => (
      {
        counter:prevState.counter + val
      }
    ));
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.counter}</Text>
        <Button title="+" onPress={()=>this.changeCounter(1)} />
        <Button title="-" onPress={()=>this.changeCounter(-1)} />
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
