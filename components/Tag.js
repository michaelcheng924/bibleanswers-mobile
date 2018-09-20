import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { StyleSheet, Text, View } from "react-native";

export const TAG_MAPPING = {
  // baptism: {
  //   color: "#1976D2",
  //   Icon: FaTint
  // },
  bible: {
    color: "#795548",
    icon: "book"
  },
  // evangelism: {
  //   color: "#EF6C00",
  //   icon: FaBullhorn
  // },
  gospel: {
    color: "#039BE5",
    icon: "plus"
  },
  // salvation: {
  //   color: "#43A047",
  //   icon: FaCloud
  // },
  worldview: {
    color: "#26A69A",
    icon: "globe"
  }
};

export default class Tag extends React.Component {
  render() {
    const { color, icon } = TAG_MAPPING[this.props.tag];

    return (
      <View
        style={{
          alignItems: "center",
          display: "flex",
          flexDirection: "row"
        }}
      >
        <Icon name={icon} size={16} color={color} />
        <Text
          style={{
            color,
            marginLeft: 4
          }}
        >
          {this.props.tag}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
