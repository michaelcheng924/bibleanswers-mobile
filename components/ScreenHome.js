import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { some } from "lodash";

import NavLogo from "./NavLogo";
import Search from "./Search";
import Posts from "./Posts";

export default class ScreenHome extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: <NavLogo navigation={navigation} />
  });

  state = {
    loaded: false,
    posts: [],
    search: ""
  };

  componentDidMount() {
    fetch("http://ma-admin.herokuapp.com/api/posts")
      .then(r => r.json())
      .then(json => {
        this.setState({ loaded: true, posts: json.posts });
      });
  }

  getFilteredPosts() {
    const { posts, search } = this.state;

    let answers = posts.filter(answer => {
      const lowerSearch = search.toLowerCase();
      const lowerTitle = answer.title.toLowerCase();
      const lowerSubtitle = answer.subtitle.toLowerCase();

      const matchesTitle = lowerTitle.indexOf(lowerSearch) !== -1;
      const matchesSubtitle = lowerSubtitle.indexOf(lowerSearch) !== -1;
      const matchesTags = some(answer.tags, tag => {
        const lowerTag = tag.toLowerCase();
        return lowerTag.indexOf(lowerSearch) !== -1;
      });

      return matchesTitle || matchesSubtitle || matchesTags;
    });

    answers.forEach(answer => {
      answer.key = answer.url;
    });

    return answers.sort((a, b) => {
      return new Date(b.updated || b.added) - new Date(a.updated || a.added);
    });
  }

  onChangeText = text => {
    this.setState({ search: text });
  };

  navigateToPost = post => {
    this.props.navigation.navigate("Post", {
      post: post,
      posts: this.state.posts
    });
  };

  clearSearch = () => {
    this.setState({
      search: "",
      tags: []
    });
  };

  render() {
    const { loaded, posts, search } = this.state;

    const filteredPosts = this.getFilteredPosts();

    return loaded ? (
      <View style={styles.home}>
        <StatusBar barStyle="dark-content" />
        <Posts
          clearSearch={this.clearSearch}
          filteredPosts={filteredPosts}
          navigateToPost={this.navigateToPost}
          onChangeText={this.onChangeText}
          posts={posts}
          search={search}
        />
      </View>
    ) : (
      <View style={styles.home}>
        <Text style={styles.loading}>Loading...</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loading: {
    color: "rgba(0,0,0,.54)",
    fontSize: 18,
    marginTop: 30,
    textAlign: "center"
  },
  home: {
    backgroundColor: "#fff",
    flex: 1
  }
});
