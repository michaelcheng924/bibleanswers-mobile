import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { some } from "lodash";

import ListItem from "./ListItem";

export default class App extends React.Component {
  state = {
    posts: null,
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

  getAnswersList() {
    const { posts, search, tags } = this.state;

    let answers = tags.length
      ? posts.filter(answer => {
          return intersection(answer.tags, tags).length;
        })
      : posts;

    answers = answers.filter(answer => {
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

  renderItem = data => {
    return <ListItem {...data.item} onSelect={this.props.navigateToPost} />;
  };

  render() {
    if (!this.state.posts) {
      return <Text style={styles.loading}>Loading...</Text>;
    }

    return (
      <View>
        <FlatList data={this.getAnswersList()} renderItem={this.renderItem} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loading: {
    color: "rgba(0,0,0,.54)",
    fontSize: 24,
    marginTop: 40,
    textAlign: "center"
  }
});
