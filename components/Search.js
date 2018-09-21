import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { partial } from "lodash";

import Tag from "./Tag";

export default class Search extends React.Component {
  state = {
    isFocused: false
  };

  renderTags(tags, onPress, remove) {
    return tags.map(tag => {
      return (
        <TouchableOpacity key={tag} onPress={partial(onPress, tag)}>
          <View style={styles.tag}>
            <Tag remove={remove} tag={tag} />
          </View>
        </TouchableOpacity>
      );
    });
  }

  render() {
    const { isFocused } = this.state;
    const { filteredPosts, onAdd, onRemove, posts, search, tags } = this.props;

    return (
      <View>
        <View style={styles.searchContainer}>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate("FilterModal", {
                filteredPosts,
                onAdd,
                onRemove,
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
        <View style={styles.tags}>{this.renderTags(tags, onRemove, true)}</View>
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
