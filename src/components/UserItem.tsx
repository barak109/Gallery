import React from "react";
import {Text, StyleSheet, TouchableOpacity, Image} from "react-native";
import {longString3Dots} from "../utils/conversions";
import {User} from "../types/user";
import {NavigationProp} from "@react-navigation/core";

interface Props {
  item: User;
  navigation: NavigationProp<any, any>;
}

export default ({item, navigation}: Props) => {
  const handlePress = () => {
    navigation.navigate("User", {item});
  };
  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Image style={styles.image} source={{uri: item.image}}></Image>
      <Text style={styles.name}>{longString3Dots(item.name, 17)}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 180,
    height: 200,
    marginBottom: 40,
    alignItems: "center",
    backgroundColor: "#C0C0C0",
    justifyContent: "space-around"
  },
  image: {height: 150, width: 150},
  name: {
    fontSize: 20,
    fontWeight: "500"
  }
});
