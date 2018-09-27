import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { partial } from "lodash";

export default class ListItem extends React.Component {
  renderText(text) {
    const { search = "" } = this.props;

    const lowerSearch = search.toLowerCase();
    const lowerText = text.toLowerCase();

    const startIndex = lowerText.indexOf(lowerSearch);

    if (startIndex === -1) {
      return text;
    }

    const first = text.slice(0, startIndex);
    const highlight = text.slice(startIndex, startIndex + search.length);
    const last = text.slice(startIndex + search.length);

    return (
      <Text>
        <Text>{first}</Text>
        <Text style={{ color: "#039BE5", fontWeight: "bold" }}>
          {highlight}
        </Text>
        <Text>{last}</Text>
      </Text>
    );
  }

  render() {
    const { title, subtitle, imageUrl, added, updated, onSelect } = this.props;

    return (
      <TouchableOpacity onPress={partial(onSelect, this.props)}>
        <View style={styles.listItem}>
          <View style={styles.listInfoContainer}>
            <View style={styles.listInfo}>
              <Text style={styles.title}>{this.renderText(title)}</Text>
              <Text style={styles.subtitle}>{this.renderText(subtitle)}</Text>
            </View>
            <Text style={styles.date}>
              {updated
                ? `Updated: ${updated}`
                : added
                  ? `Added: ${added}`
                  : null}
            </Text>
          </View>
          <Image
            source={{ uri: `http://bibleanswers.io${imageUrl}` }}
            style={styles.listImage}
          />
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
