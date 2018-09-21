import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

import ListItem from "./ListItem";

export default class App extends React.Component {
  renderItem = data => {
    return (
      <ListItem
        {...data.item}
        onSelect={this.props.navigateToPost}
        search={this.props.search}
      />
    );
  };

  render() {
    const { clearSearch, filteredPosts, posts } = this.props;

    if (!posts) {
      return <Text style={styles.loading}>Loading...</Text>;
    }

    return (
      <View>
        {filteredPosts.length ? (
          <FlatList data={filteredPosts} renderItem={this.renderItem} />
        ) : (
          <View>
            <Text style={styles.emptyText}>No results found</Text>
            <TouchableOpacity onPress={clearSearch}>
              <Text style={styles.emptyClear}>Clear search</Text>
            </TouchableOpacity>
          </View>
        )}
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
  },
  emptyText: {
    color: "rgba(0,0,0,.54)",
    fontSize: 20,
    marginTop: 30,
    textAlign: "center"
  },
  emptyClear: {
    color: "#689F38",
    fontSize: 16,
    marginTop: 6,
    textAlign: "center"
  }
});
