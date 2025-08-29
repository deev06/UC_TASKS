import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import {useFonts, Bungee_400Regular } from "@expo-google-fonts/bungee";
import {Lobster_400Regular} from "@expo-google-fonts/lobster"
import SecondScreen from "./SecondScreen";

const HomeScreen = ({ navigation }) => {
  const [fontsLoaded] = useFonts({

    Bungee_400Regular,
    Lobster_400Regular
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Loading...</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text style={styles.screenText}>Welcome!</Text>
      
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Second")}
      >
        <Text style={styles.buttonText}>Let's Start</Text>
      </TouchableOpacity>
     
    </View>
  );
};

export default HomeScreen;

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
    fontSize: 30,
    color: "cyan",
    fontFamily: "Lobster_400Regular",
  },
  buttonText: {
    color: "white",
    fontFamily: "Bungee_400Regular",
  },
});
