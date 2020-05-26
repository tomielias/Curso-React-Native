import React from "react";
import { StyleSheet, Text } from "react-native";
import { Container, Content, View, Header, Footer } from "native-base";
import { Link } from "react-router-native";

const About = () => {
  return (
    <Container style={styles.container}>
      <Header style={styles.header}>
        <Text>HEADER</Text>
      </Header>
      <Content contentContainerStyle={styles.content}>
        <Text style={styles.contentText}>PAGE 2</Text>
        <Link to="/">
          <Text style={styles.contentText}>Go Home</Text>
        </Link>
      </Content>
      <Footer style={styles.footer}>
        <Text>FOOTER</Text>
      </Footer>
    </Container>
  );
};

export { About };

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
    color: "gray",
    fontSize: 40,
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
