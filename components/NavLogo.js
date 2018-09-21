import React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

const NavLogo = ({ navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Home")}>
      <View style={styles.logoContainer}>
        <Image source={require("../images/logo.png")} style={styles.logo} />
        <Text style={styles.logoText}>Bible Answers</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: "#039BE5",
    height: 24
  },
  logoContainer: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    marginLeft: Platform.OS === "android" ? 10 : 0
  },
  logo: {
    height: 22,
    marginRight: 6,
    width: 32
  },
  logoText: {
    color: "#039BE5",
    fontSize: 23,
    fontWeight: "bold"
  }
});

export default NavLogo;
