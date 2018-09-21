import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import { some } from "lodash";

import NavLogo from "./NavLogo";
import Search from "./Search";
import Posts from "./Posts";

export default class ScreenHome extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: <NavLogo navigation={navigation} />
  });

  state = {
    posts: [],
    search: "",
    tags: []
  };

  componentWillMount() {
    fetch("https://bibleanswers-backend.herokuapp.com/api/posts")
      .then(r => r.json())
      .then(json => {
        this.setState({
          posts: json.posts
        });
      });
  }

  getFilteredPosts() {
    const { posts, search, tags } = this.state;

    let answers = tags.length
      ? posts.filter(answer => {
          return intersection(answer.tags, tags).length;
        })
      : posts;

    answers = posts.filter(answer => {
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
      answer.key = answer.uid;
    });

    return answers.sort((a, b) => {
      return new Date(b.updated || b.added) - new Date(a.updated || a.added);
    });
  }

  onChangeText = text => {
    this.setState({ search: text });
  };

  navigateToPost = post => {
    this.props.navigation.navigate("Post", post);
  };

  clearSearch = () => {
    this.setState({
      search: "",
      tags: []
    });
  };

  render() {
    const { posts, search, tags } = this.state;
    const { navigation } = this.props;

    const filteredPosts = this.getFilteredPosts();

    return (
      <View style={styles.home}>
        <StatusBar barStyle="dark-content" />
        <Search
          filteredPosts={filteredPosts}
          navigation={navigation}
          onChangeText={this.onChangeText}
          posts={posts}
          search={search}
          tags={tags}
        />
        <Posts
          clearSearch={this.clearSearch}
          filteredPosts={filteredPosts}
          navigateToPost={this.navigateToPost}
          posts={posts}
          search={search}
          tags={tags}
        />
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
