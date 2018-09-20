import React from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View
} from "react-native";

import HTML from "./HTML";
import NavLogo from "./NavLogo";

export default class ScreenPost extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: <NavLogo navigation={navigation} />
  });

  render() {
    const {
      title,
      subtitle,
      imageUrl,
      content
    } = this.props.navigation.state.params;

    return (
      <ScrollView style={styles.post}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <HTML html={content} />
        <View style={{ height: 50 }} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  post: {
    backgroundColor: "#fff",
    flex: 1,
    padding: 20
  },
  title: {
    fontSize: 36,
    fontWeight: "500",
    lineHeight: 40,
    marginBottom: 8
  },
  subtitle: {
    color: "rgba(0,0,0, .54)",
    fontSize: 20,
    lineHeight: 24,
    marginBottom: 10
  },
  image: {
    width: Dimensions.get("window").width,
    height: 200,
    marginTop: 10,
    position: "relative",
    left: -20
  }
});