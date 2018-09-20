import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default class Nav extends React.Component {
  render() {
    return (
      <View style={styles.nav}>
        <View style={styles.leftContainer}>
          <Image source={require("../images/logo.png")} style={styles.logo} />
          <Text style={styles.appName}>Bible Answers</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  nav: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10
  },
  leftContainer: {
    display: "flex",
    flexDirection: "row"
  },
  logo: {
    height: 22,
    marginRight: 10,
    width: 32
  },
  appName: {
    color: "#039BE5",
    fontSize: 20,
    fontWeight: "bold"
  }
});
