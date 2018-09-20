import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { TouchableOpacity } from "react-native";

const HeaderRight = () => {
  return (
    <TouchableOpacity>
      <Icon
        name="search"
        size={22}
        color="rgba(0,0,0,.54)"
        style={{ marginRight: 10 }}
      />
    </TouchableOpacity>
  );
};

export default HeaderRight;
