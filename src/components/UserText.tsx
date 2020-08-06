import {Text, StyleSheet} from "react-native";
import React from "react";

interface Props {
  text: string;
}

export default ({text}: Props) => {
  return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20
  }
});
