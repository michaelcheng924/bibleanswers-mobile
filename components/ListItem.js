import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { partial } from "lodash";

import Tag from "./Tag";

export default class ListItem extends React.Component {
  render() {
    const {
      title,
      subtitle,
      imageUrl,
      tags,
      added,
      updated,
      onSelect
    } = this.props;

    return (
      <TouchableOpacity onPress={partial(onSelect, this.props)}>
        <View style={styles.listItem}>
          <View style={styles.listInfoContainer}>
            <View style={styles.listInfo}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.subtitle}>{subtitle}</Text>
            </View>
            <View style={styles.tags}>
              {tags.map(tag => {
                return <Tag key={tag} tag={tag} />;
              })}
            </View>
            <Text style={styles.date}>
              {updated
                ? `Updated: ${updated}`
                : added
                  ? `Added: ${added}`
                  : null}
            </Text>
          </View>
          <Image source={{ uri: imageUrl }} style={styles.listImage} />
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  listItem: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20
  },
  listInfoContainer: {
    flexShrink: 1
  },
  // listInfo: {
  //   height: 68,
  //   overflow: "hidden"
  // },
  title: {
    color: "rgba(0,0,0,.84)",
    fontSize: 18,
    fontWeight: "bold"
  },
  subtitle: {
    color: "rgba(0,0,0,.54)",
    fontSize: 16,
    marginTop: 6
  },
  tags: {
    marginTop: 10
  },
  date: {
    color: "rgba(0,0,0,.54)",
    fontSize: 12,
    marginTop: 6
  },
  listImage: {
    height: 80,
    marginLeft: 20,
    width: 80
  }
});
