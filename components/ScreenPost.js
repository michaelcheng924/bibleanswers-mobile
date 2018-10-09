import React from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View
} from "react-native";
import { find } from "lodash";

import HTML from "./HTML";
import NavLogo from "./NavLogo";

export default class ScreenPost extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: <NavLogo navigation={navigation} />
  });

  onNavigateToPost = url => {
    const { navigation } = this.props;
    const { posts } = navigation.state.params;

    const post = find(posts, postData => postData.url === url);

    if (post) {
      this.scrollView.scrollTo({ y: 0 });

      navigation.navigate("Post", {
        post,
        posts
      });
    }
  };

  render() {
    const { post } = this.props.navigation.state.params;

    const { title, subtitle, imageUrl, content } = post;

    return (
      <ScrollView
        ref={scrollView => (this.scrollView = scrollView)}
        style={styles.post}
      >
        <StatusBar barStyle="dark-content" />
        <View style={styles.padding}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <View style={styles.padding}>
          <HTML html={content} onNavigateToPost={this.onNavigateToPost} />
          <View style={{ height: 50 }} />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  post: {
    backgroundColor: "#fff",
    flex: 1
  },
  padding: {
    padding: 20,
    paddingBottom: 0
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
    position: "relative"
  }
});
