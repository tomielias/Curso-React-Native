import React, { Component } from "react";
import { StyleSheet, Text, TextInput } from "react-native";
import { Container, Content, View, Header, Footer } from "native-base";
import Button from "./Button";

export default class Home extends Component {
  constructor(props) {
    super();
    this.state = {
      name: "",
    };
  }
  render() {
    const { history } = this.props;
    return (
      <Container style={styles.container}>
        <Header style={styles.header}>
          <Text style={styles.headerText}>HolApp</Text>
        </Header>
        <Content contentContainerStyle={styles.content}>
          <Text style={styles.contentText}>Ingresa tu nombre</Text>
          <TextInput
            style={{
              height: 40,
              width: 200,
              borderColor: "#AAAAAA",
              borderWidth: 2,
              marginTop: 30,
            }}
            onChangeText={(text) => this.setState({ name: text })}
            value={this.state.value}
          />
          <Button
            name="Saludar"
            onPress={() => {
              history.push({
                pathname: "/about",
                state: { name: this.state.name },
              });
            }}
          />
        </Content>
        <Footer style={styles.footer}>
          <Text style={styles.footerText}>Curso React Native</Text>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  content: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "skyblue",
    alignItems: "center",
    justifyContent: "center",
  },
  contentText: {
    color: "#444444",
    fontSize: 30,
  },
  header: {
    backgroundColor: "powderblue",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontSize: 30,
    color: "#333333",
  },
  footer: {
    flexDirection: "row",
    backgroundColor: "steelblue",
    alignItems: "center",
  },
  footerText: {
    color: "#EEEEEE",
    fontSize: 30,
  },
});
