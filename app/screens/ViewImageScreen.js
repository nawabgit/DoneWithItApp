import React from "react";
import { Image, StyleSheet } from "react-native";

function ViewImageScreen(props) {
  return (
    <View styles={styles.container}>
      <Image
        resizeMode="contain"
        styles={styles.image}
        source={require("../assets/chair.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ViewImageScreen;
