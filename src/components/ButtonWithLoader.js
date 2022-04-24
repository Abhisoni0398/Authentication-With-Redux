/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import React from "react";

const ButtonWithLoader = ({ isLoading, text, onPress }) => {
  return (
    <View>
      <TouchableOpacity style={styles.buttonStyle} onPress={onPress}>
        {!!isLoading ? (
          <ActivityIndicator size="large" color="red" />
        ) : (
          <Text style={styles.buttonText}>{text}</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default ButtonWithLoader;

const styles = StyleSheet.create({
  buttonStyle: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "blue",
    height: 48,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
