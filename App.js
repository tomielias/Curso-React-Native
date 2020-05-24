import React, { Component } from "react";
import { StyleSheet } from "react-native";

import { Container, Header, Content, Footer, Text } from "native-base";

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header style={styles.header}>
          <Text>HEADER</Text>
        </Header>
        <Content contentContainerStyle={styles.content}>
          <Text style={styles.contentText}>This is </Text>
          <Text>Content Section</Text>
        </Content>
        <Footer style={styles.footer}>
          <Text>FOOTER</Text>
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
    flexDirection: "row",
    backgroundColor: "skyblue",
    alignItems: "center",
    justifyContent: "center",
  },
  contentText: {
    color: "white",
  },
  header: {
    backgroundColor: "powderblue",
  },
  footer: {
    flexDirection: "row",
    backgroundColor: "steelblue",
    alignItems: "center",
  },
});
