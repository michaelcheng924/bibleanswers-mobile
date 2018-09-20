import React from "react";
import HTML from "react-native-render-html";

import { Dimensions, Text } from "react-native";

export default class HTMLComponent extends React.Component {
  render() {
    const { html } = this.props;

    return (
      <HTML
        html={html}
        imagesMaxWidth={Dimensions.get("window").width - 40}
        tagsStyles={htmlStyles}
        listsPrefixesRenderers={prefixStyles}
        classesStyles={classStyles}
      />
    );
  }
}

const htmlStyles = {
  h3: {
    fontSize: 30,
    fontWeight: "600",
    lineHeight: 30 * 1.15,
    marginTop: 28
  },
  h4: {
    color: "rgba(0, 0, 0, 0.84)",
    fontSize: 26,
    lineHeight: 26 * 1.22,
    margin: 0,
    marginTop: 30
  },
  p: {
    fontSize: 18,
    lineHeight: 18 * 1.54,
    marginTop: 21,
    margin: 0
  },
  blockquote: {
    fontSize: 18,
    fontStyle: "italic",
    lineHeight: 18 * 1.54,
    marginLeft: 20,
    marginTop: 21,
    margin: 0
  },
  ol: {
    fontSize: 18,
    lineHeight: 18 * 1.54,
    marginTop: 21
  },
  img: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 21
  },
  a: {
    color: "#689F38"
  }
};

const prefixStyles = {
  ol(_, __, ___, passProps) {
    return (
      <Text
        style={{
          fontSize: 18,
          lineHeight: 18 * 1.54,
          marginRight: 6,
          textAlign: "right",
          width: 28
        }}
      >
        {passProps.index + 1})
      </Text>
    );
  }
};

const classStyles = {
  "after-list": {
    marginTop: 7
  }
};
