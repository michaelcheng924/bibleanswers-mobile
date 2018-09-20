import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { StyleSheet, TextInput, View } from "react-native";

export default class Tag extends React.Component {
  render() {
    return (
      <View>
        <TextInput placeholder="Search" underlineColorAndroid="transparent" />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
