import React, {useRef} from "react";
import {View, Image, StyleSheet} from "react-native";
import {longString3Dots} from "../utils/conversions";
import UserText from "../components/UserText";

interface Props {
  route: any;
}

export default ({route}: Props) => {
  const {item} = route.params;
  const textArr = useRef([item.name, item.email, longString3Dots(item.address, 40)]);

  const renderTexts = () => {
    return textArr.current.map((text, index) => <UserText key={index} text={text} />);
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: item.image}}></Image>
      <View style={styles.bottom}>{renderTexts()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-evenly",
    height: 500
  },
  image: {height: 200, width: 200},
  bottom: {
    alignItems: "center",
    height: 120,
    justifyContent: "space-around"
  }
});
