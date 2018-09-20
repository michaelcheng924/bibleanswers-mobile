import React from "react";
import { StyleSheet, View } from "react-native";

import NavLogo from "./NavLogo";
import HeaderRight from "./HeaderRight";
import Posts from "./Posts";

export default class ScreenHome extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: <NavLogo navigation={navigation} />,
    headerRight: <HeaderRight />
  });

  navigateToPost = post => {
    this.props.navigation.navigate("Post", post);
  };

  render() {
    return (
      <View style={styles.home}>
        <Posts navigateToPost={this.navigateToPost} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    backgroundColor: "#fff",
    flex: 1
  }
});
