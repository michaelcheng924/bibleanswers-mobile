import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  View
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { partial, some } from "lodash";

import Tag, { TAG_MAPPING } from "./Tag";

export default class Search extends React.Component {
  onPress = (tag, onPress) => {
    onPress(tag);
    this.props.navigation.goBack();
  };

  renderTags(tags, onPress, remove) {
    return tags.map(tag => {
      return (
        <TouchableOpacity
          key={tag}
          onPress={partial(this.onPress, tag, onPress)}
        >
          <View style={styles.tag}>
            <Tag remove={remove} tag={tag} />
          </View>
        </TouchableOpacity>
      );
    });
  }

  render() {
    const { navigation } = this.props;
    const {
      filteredPosts,
      onAdd,
      onRemove,
      posts,
      tags
    } = navigation.state.params;

    const allTags = Object.keys(TAG_MAPPING).filter(tag => {
      return !some(tags, selectedTag => selectedTag === tag);
    });

    return (
      <ScrollView style={styles.filterModal}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon
            name="chevron-down"
            size={20}
            color="rgba(0,0,0,.54)"
            style={{ marginLeft: "auto", marginRight: "auto" }}
          />
        </TouchableOpacity>
        <Text style={styles.heading}>Filter results:</Text>
        <Text style={styles.resultsCount}>
          {`${filteredPosts.length}/${posts.length} results`}
        </Text>
        <Text style={styles.label}>Selected filters:</Text>
        <View style={styles.tags}>
          {tags.length ? (
            this.renderTags(tags, onRemove, true)
          ) : (
            <Text style={styles.empty}>No tags selected</Text>
          )}
        </View>
        <Text style={styles.label}>Filter by:</Text>
        <View style={styles.tags}>
          {allTags.length ? (
            this.renderTags(allTags, onAdd)
          ) : (
            <Text style={styles.empty}>All tags selected</Text>
          )}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  filterModal: {
    backgroundColor: "#fff",
    flex: 1,
    paddingTop: 26,
    paddingLeft: 20,
    paddingRight: 20
  },
  heading: {
    color: "rgba(0,0,0,.84)",
    fontSize: 20,
    fontWeight: "600",
    marginTop: 10
  },
  resultsCount: {
    color: "rgba(0,0,0,.54)",
    fontSize: 14,
    marginTop: 3
  },
  label: {
    color: "rgba(0,0,0,.84)",
    fontSize: 16,
    fontWeight: "600",
    marginTop: 15
  },
  tags: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap"
  },
  tag: {
    marginRight: 10,
    marginTop: 10
  },
  empty: {
    color: "rgba(0,0,0,.54)",
    fontSize: 16,
    marginTop: 10
  }
});
