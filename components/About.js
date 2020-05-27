import React from "react";
import { StyleSheet, Text } from "react-native";
import { Container, Content, View, Header, Footer } from "native-base";
import Button from "./Button";

const About = ({ location, history }) => {
  return (
    <Container style={styles.container}>
      <Header style={styles.header}>
        <Text style={styles.headerText}>HolApp</Text>
      </Header>
      <Content contentContainerStyle={styles.content}>
        <Text style={styles.contentText}>Hola {location.state.name}</Text>
        <Button
          name="Go Home"
          onPress={() => {
            history.push({
              pathname: "/",
            });
          }}
        />
      </Content>
      <Footer style={styles.footer}>
        <Text style={styles.footerText}>Curso React Native</Text>
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
