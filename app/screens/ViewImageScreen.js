import React from "react";
import { View, Image, StyleSheet } from "react-native";

import colours from "../config/colours";

function ViewImageScreen(props) {
  return (
    <View styles={styles.container}>
      <View styles={styles.closeIcon}></View>
      <View styles={styles.deleteIcon}></View>
      <Image
        resizeMode="contain"
        styles={styles.image}
        source={require("../assets/chair.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: colours.primary,
    position: "absolute",
    top: 40,
    left: 30,
  },
  container: {
    backgroundColor: colours.black,
    flex: 1,
  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: colours.secondary,
    position: "absolute",
    top: 40,
    right: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ViewImageScreen;
