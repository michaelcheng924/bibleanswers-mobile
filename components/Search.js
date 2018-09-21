import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";

export default class Search extends React.Component {
  state = {
    isFocused: false
  };

  render() {
    const { isFocused } = this.state;
    const { filteredPosts, posts, search, tags } = this.props;

    return (
      <View style={styles.searchContainer}>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate("FilterModal", {
              filteredPosts,
              posts,
              tags
            })
          }
        >
          <Icon
            name="filter"
            size={18}
            color="rgba(0,0,0,.54)"
            style={{ marginRight: 6 }}
          />
        </TouchableOpacity>
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
    );
  }
}

const styles = StyleSheet.create({
  searchContainer: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: "auto",
    width: 300
  },
  search: {
    borderBottomWidth: 1,
    borderColor: "rgba(0,0,0,.54)",
    fontSize: 16,
    marginTop: 20,
    position: "relative",
    textAlign: "center",
    top: -5,
    width: 250
  },
  searchFocused: {
    borderColor: "#039BE5"
  }
});
