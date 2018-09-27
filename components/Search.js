import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default class Search extends React.Component {
  state = {
    isFocused: false
  };

  render() {
    const { isFocused } = this.state;
    const { filteredPosts, posts, search, tags } = this.props;

    return (
      <View>
        <View style={styles.searchContainer}>
          <Icon
            name="search"
            size={18}
            color={isFocused ? "#039BE5" : "rgba(0,0,0,.54)"}
            style={{ marginRight: 6 }}
          />
          <TextInput
            onBlur={() => this.setState({ isFocused: false })}
            onChangeText={this.props.onChangeText}
            onFocus={() => this.setState({ isFocused: true })}
            placeholder="Search"
            underlineColorAndroid="transparent"
            style={
              isFocused ? [styles.search, styles.searchFocused] : styles.search
            }
            value={search}
          />
        </View>
        <Text style={styles.resultsCount}>
          {`Showing ${filteredPosts.length}/${posts.length} results`}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  searchContainer: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 5,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 10,
    width: 300
  },
  search: {
    borderBottomWidth: 1,
    borderColor: "rgba(0,0,0,.54)",
    fontSize: 16,
    position: "relative",
    textAlign: "center",
    top: -5,
    width: 250
  },
  searchFocused: {
    borderColor: "#039BE5"
  },
  resultsCount: {
    color: "rgba(0,0,0,.54)",
    fontSize: 14,
    textAlign: "center"
  },
  tags: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center"
  },
  tag: {
    marginBottom: 6,
    marginRight: 10
  }
});
