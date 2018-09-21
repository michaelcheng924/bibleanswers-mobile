import React from "react";
import { StyleSheet, Text, TouchableOpacity, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default class Search extends React.Component {
  render() {
    const { filteredPosts, posts } = this.props.navigation.state.params;

    return (
      <ScrollView style={styles.filterModal}>
        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
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
    fontSize: 20,
    fontWeight: "600",
    marginTop: 10
  },
  resultsCount: {
    color: "rgba(0,0,0,.54)",
    fontSize: 14,
    marginTop: 10
  }
});
