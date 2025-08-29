import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const SecondScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.screenText}>Navigated To Second Screen</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Return To Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SecondScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "orange",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    padding: 7,
    borderWidth: 2,
    borderRadius: 15,
    borderColor: "cyan",
    top: 10,
  },
  screenText: {
    fontSize: 25,
    color: "cyan",
    fontFamily: "Lobster_400Regular",
  },
  buttonText: {
    color: "white",
    fontFamily: "Bungee_400Regular",
  },
});
